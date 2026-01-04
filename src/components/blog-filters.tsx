"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
import { Search, X } from "lucide-react";

interface Post {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary?: string;
    category?: string;
  };
}

interface BlogFiltersProps {
  posts: Post[];
  categories: string[];
  blurDelay: number;
}

export default function BlogFilters({ posts, categories, blurDelay }: BlogFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.metadata.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.metadata.summary?.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === null || post.metadata.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [posts, searchQuery, selectedCategory]);

  return (
    <div className="space-y-6">
      {/* Buscador */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <input
          type="text"
          placeholder="Buscar posts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-10 py-2 border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Filtros de categoría */}
      {categories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selectedCategory === null
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            Todas
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* Resultados */}
      <div>
        {filteredPosts.length === 0 ? (
          <p className="text-muted-foreground text-center py-8">
            No se encontraron posts
          </p>
        ) : (
          filteredPosts.map((post, id) => (
            <BlurFade delay={blurDelay * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4 group"
                href={`/blog/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <div className="flex items-center gap-2">
                    <p className="tracking-tight group-hover:text-primary transition-colors">
                      {post.metadata.title}
                    </p>
                    {post.metadata.category && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary text-secondary-foreground">
                        {post.metadata.category}
                      </span>
                    )}
                  </div>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                  {post.metadata.summary && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
              </Link>
            </BlurFade>
          ))
        )}
      </div>
    </div>
  );
}