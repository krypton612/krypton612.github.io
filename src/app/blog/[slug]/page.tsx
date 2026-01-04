import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Función helper para obtener posts de la misma serie
async function getSeriesPosts(series: string, currentOrder: number) {
  const posts = await getBlogPosts();
  const seriesPosts = posts
    .filter((p) => p.metadata.series === series)
    .sort((a, b) => (a.metadata.seriesOrder || 0) - (b.metadata.seriesOrder || 0));

  const currentIndex = seriesPosts.findIndex((p) => p.metadata.seriesOrder === currentOrder);
  
  return {
    previous: currentIndex > 0 ? seriesPosts[currentIndex - 1] : null,
    next: currentIndex < seriesPosts.length - 1 ? seriesPosts[currentIndex + 1] : null,
    all: seriesPosts,
  };
}

export default async function Blog({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  // Obtener posts relacionados de la serie si existe
  const seriesInfo = post.metadata.series && post.metadata.seriesOrder
    ? await getSeriesPosts(post.metadata.series, post.metadata.seriesOrder)
    : null;

  return (
    <section id="blog">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />

      {/* Información de la serie */}
      
      {seriesInfo && (
        <div className="mb-6 p-4 border rounded-lg bg-secondary/50">
          <p className="text-sm font-medium mb-2">
            Serie: {post.metadata.series} (Parte {post.metadata.seriesOrder} de {seriesInfo.all.length})
          </p>
          <div className="flex flex-wrap gap-2">
            <Link
                href={`/blog`}
                className={`text-xs px-2 py-1 rounded`}
              >
                Blog
            </Link>
            {seriesInfo.all.map((seriesPost) => (
              <Link
                key={seriesPost.slug}
                href={`/blog/${seriesPost.slug}`}
                className={`text-xs px-2 py-1 rounded ${
                  seriesPost.slug === post.slug
                    ? "bg-primary text-primary-foreground"
                    : "bg-background hover:bg-muted"
                }`}
              >
                Parte {seriesPost.metadata.seriesOrder}
              </Link>
            ))}
          </div>
        </div>
      )}

      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <div className="flex gap-3 items-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
            {post.metadata.category && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                {post.metadata.category}
              </span>
            )}
          </div>
        </Suspense>
      </div>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>

      {/* Navegación de la serie */}
      {seriesInfo && (seriesInfo.previous || seriesInfo.next) && (
        <div className="mt-12 pt-6 border-t">
          <div className="flex justify-between items-center gap-4">
            {seriesInfo.previous ? (
              <Link
                href={`/blog/${seriesInfo.previous.slug}`}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <p className="text-xs text-muted-foreground">Anterior</p>
                  <p className="font-medium">{seriesInfo.previous.metadata.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {seriesInfo.next ? (
              <Link
                href={`/blog/${seriesInfo.next.slug}`}
                className="flex items-center gap-2 text-sm hover:text-primary transition-colors group text-right"
              >
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Siguiente</p>
                  <p className="font-medium">{seriesInfo.next.metadata.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      )}
    </section>
  );
}