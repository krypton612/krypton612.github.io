import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

// Importa los tipos desde el archivo de tipos
import type { BlogPost, BlogPostMetadata } from "@/types/blog";

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string): Promise<BlogPost> {
  const filePath = path.join("content", `${slug}.mdx`);
  let source = fs.readFileSync(filePath, "utf-8");
  const { content: rawContent, data } = matter(source);
  const content = await markdownToHTML(rawContent);
  
  // Aseguramos que el metadata tenga la estructura correcta
  const metadata: BlogPostMetadata = {
    title: data.title || "Sin título",
    publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
    summary: data.summary,
    category: data.category,
    image: data.image,
    series: data.series,
    seriesOrder: data.seriesOrder,
  };

  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string): Promise<BlogPost[]> {
  let mdxFiles = getMDXFiles(dir);
  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      return await getPost(slug);
    }),
  );
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return getAllPosts(path.join(process.cwd(), "content"));
}