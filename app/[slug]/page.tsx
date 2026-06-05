import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getPostBySlug, getPageBySlug, formatDate, getAuthorName, getFeaturedImage, getPostCategories, stripHtml, rewriteContentUrls } from '@/lib/wordpress';
import PageLayout from '@/components/PageLayout';
import PremiumGate from '@/components/PremiumGate';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (post) {
    return {
      title: `${stripHtml(post.title.rendered)} | Eternal`,
      description: stripHtml(post.excerpt.rendered).slice(0, 160),
    };
  }
  const page = await getPageBySlug(slug);
  if (page) {
    return {
      title: `${stripHtml(page.title.rendered)} | Eternal`,
    };
  }
  return { title: 'Not Found | Eternal' };
}

export default async function SlugPage({ params }: PageProps) {
  const { slug } = await params;

  const post = await getPostBySlug(slug);
  if (post) return <ArticleView post={post} />;

  const page = await getPageBySlug(slug);
  if (page) return <PageView page={page} />;

  notFound();
}

function ArticleView({ post }: { post: Awaited<ReturnType<typeof getPostBySlug>> & {} }) {
  if (!post) return null;

  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const categories = getPostCategories(post);
  const isPremium = categories.some(c => c.slug === 'premium');

  const content = (
    <div
      className="prose prose-invert prose-red max-w-none
        prose-headings:text-white prose-p:text-gray-300
        prose-a:text-red-500 prose-a:no-underline hover:prose-a:text-red-400
        prose-img:rounded-md prose-img:mx-auto
        prose-strong:text-white"
      dangerouslySetInnerHTML={{ __html: rewriteContentUrls(post.content.rendered) }}
    />
  );

  return (
    <PageLayout>
        <article>
          <div className="border-t border-b border-[#570000] py-3 mb-6">
            <div className="flex justify-between items-start">
              <h1
                className="text-2xl font-bold text-white flex-1"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <div className="text-right text-xs text-gray-400 ml-4 flex-shrink-0">
                <div>{formatDate(post.date)}</div>
                <div>Author: {author}</div>
              </div>
            </div>
          </div>

          {categories.length > 0 && (
            <div className="text-xs text-gray-500 mb-4">
              Category |{' '}
              {categories.map((cat, i) => (
                <span key={cat.slug}>
                  <Link href={`/category/${cat.slug}`} className="text-red-500 hover:text-red-400">
                    {cat.name}
                  </Link>
                  {i < categories.length - 1 && ', '}
                </span>
              ))}
            </div>
          )}

          {image && (
            <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded">
              <Image
                src={image}
                alt={stripHtml(post.title.rendered)}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {isPremium ? (
            <PremiumGate postId={post.id} excerpt={post.excerpt.rendered}>
              {content}
            </PremiumGate>
          ) : (
            content
          )}

          <div className="mt-8 pt-4 border-t border-gray-800">
            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-white border border-gray-700 px-4 py-2 inline-block hover:border-red-900 transition-colors"
            >
              &larr; Back to Home
            </Link>
          </div>
        </article>
    </PageLayout>
  );
}

function PageView({ page }: { page: Awaited<ReturnType<typeof getPageBySlug>> & {} }) {
  if (!page) return null;

  const image = page._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <PageLayout>
        <div>
          <h1
            className="text-3xl font-bold text-white mb-6 border-b border-[#570000] pb-3"
            dangerouslySetInnerHTML={{ __html: page.title.rendered }}
          />
          {image && (
            <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded">
              <Image
                src={image}
                alt={stripHtml(page.title.rendered)}
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-cover"
              />
            </div>
          )}
          <div
            className="prose prose-invert prose-red max-w-none
              prose-headings:text-white prose-p:text-gray-300
              prose-a:text-red-500 prose-a:no-underline
              prose-img:rounded-md"
            dangerouslySetInnerHTML={{ __html: rewriteContentUrls(page.content.rendered) }}
          />
        </div>
    </PageLayout>
  );
}
