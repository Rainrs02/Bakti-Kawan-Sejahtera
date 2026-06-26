// types/blog.ts

export interface BlogAuthor {
  name: string;
  avatar: string;
  role: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readingTime: number;
  metaTitle: string;
  metaDescription: string;
}
