export interface BlogPostMetadata {
  title: string;
  publishedAt: string;
  summary?: string;
  category?: string;
  image?: string;
  series?: string;
  seriesOrder?: number;
}

export interface BlogPost {
  slug: string;
  metadata: BlogPostMetadata;
  source: string;
}