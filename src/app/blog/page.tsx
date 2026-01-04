import BlurFade from "@/components/magicui/blur-fade";
import { getBlogPosts } from "@/data/blog";
import BlogFilters from "@/components/blog-filters";

export const metadata = {
  title: "Blog",
  description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();

  // Extraer categorías únicas
  const categories: string[] = Array.from(
    new Set(
      posts
        .map((post) => post.metadata.category)
        .filter((cat): cat is string => cat !== undefined)
    )
  );

  const sortedPosts = posts.sort((a, b) => {
    if (
      new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
    ) {
      return -1;
    }
    return 1;
  });

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">blog</h1>
      </BlurFade>
      
      <BlurFade delay={BLUR_FADE_DELAY * 1.5}>
        <BlogFilters posts={sortedPosts} categories={categories} blurDelay={BLUR_FADE_DELAY} />
      </BlurFade>
    </section>
  );
}