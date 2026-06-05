const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://www.eternalorganizer.com/wp-json';

export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string; protected: boolean };
  excerpt: { rendered: string };
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  author: number;
  _embedded?: {
    author?: Array<{ name: string; avatar_urls: Record<string, string> }>;
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
}

export interface WPCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  parent: number;
}

export interface WPPage {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  featured_media: number;
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
  };
}

async function wpFetch<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${WP_API_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
    headers: { 'Accept': 'application/json' },
  });

  if (!res.ok) {
    throw new Error(`WP API error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export interface PostsResult {
  posts: WPPost[];
  totalPages: number;
  total: number;
}

export async function getPosts(page = 1, perPage = 10, categoryId?: number): Promise<PostsResult> {
  const params: Record<string, string> = {
    page: String(page),
    per_page: String(perPage),
    _embed: 'true',
  };
  if (categoryId) params.categories = String(categoryId);

  const url = new URL(`${WP_API_URL}/wp/v2/posts`);
  Object.entries(params).forEach(([key, value]) => url.searchParams.set(key, value));

  const res = await fetch(url.toString(), {
    next: { revalidate: 300 },
    headers: { 'Accept': 'application/json' },
  });

  if (!res.ok) throw new Error(`WP API error: ${res.status}`);

  const posts: WPPost[] = await res.json();
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1', 10);
  const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);

  return { posts, totalPages, total };
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await wpFetch<WPPost[]>('/wp/v2/posts', { slug, _embed: 'true' });
  return posts[0] || null;
}

export async function getCategories(): Promise<WPCategory[]> {
  return wpFetch<WPCategory[]>('/wp/v2/categories', { per_page: '100', hide_empty: 'true' });
}

export async function getCategoryBySlug(slug: string): Promise<WPCategory | null> {
  const cats = await wpFetch<WPCategory[]>('/wp/v2/categories', { slug });
  return cats[0] || null;
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await wpFetch<WPPage[]>('/wp/v2/pages', { slug, _embed: 'true' });
  return pages[0] || null;
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function getFeaturedImage(post: WPPost): string | null {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
}

export function getAuthorName(post: WPPost): string {
  return post._embedded?.author?.[0]?.name || 'Admin';
}

export function getPostCategories(post: WPPost): Array<{ name: string; slug: string }> {
  const terms = post._embedded?.['wp:term']?.[0];
  if (!terms) return [];
  return terms.map(t => ({ name: t.name, slug: t.slug }));
}
