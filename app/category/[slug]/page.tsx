import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPosts } from '@/lib/wordpress';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import Sidebar from '@/components/Sidebar';

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);
  if (!category) return { title: 'Category Not Found | Eternal' };
  return {
    title: `${category.name} | Eternal`,
    description: category.description || `Browse ${category.name} articles on Eternal`,
  };
}

export default async function CategoryPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const sp = await searchParams;
  const currentPage = parseInt(sp.page || '1', 10);
  const category = await getCategoryBySlug(slug);
  if (!category) notFound();

  const { posts, totalPages } = await getPosts(currentPage, 10, category.id);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <div className="max-w-[1200px] mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[75%]">
          <div className="border-b border-[#570000] pb-3 mb-6">
            <h1 className="text-2xl font-bold text-white">{category.name}</h1>
            {category.description && (
              <p className="text-sm text-gray-400 mt-1">{category.description}</p>
            )}
            <p className="text-xs text-gray-500 mt-1">{category.count} article{category.count !== 1 ? 's' : ''}</p>
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-lg">No articles found in this category.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
              <Pagination currentPage={currentPage} totalPages={totalPages} basePath={`/category/${slug}`} />
            </div>
          )}
        </div>

        <aside className="w-full lg:w-[25%]">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
