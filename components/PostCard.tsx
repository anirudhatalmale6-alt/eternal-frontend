import Image from 'next/image';
import Link from 'next/link';
import { WPPost, formatDate, getAuthorName, getFeaturedImage, getPostCategories, stripHtml } from '@/lib/wordpress';

interface PostCardProps {
  post: WPPost;
}

export default function PostCard({ post }: PostCardProps) {
  const image = getFeaturedImage(post);
  const author = getAuthorName(post);
  const categories = getPostCategories(post);
  const excerpt = stripHtml(post.excerpt.rendered);

  return (
    <article className="bg-[#111] border border-gray-800 rounded-md overflow-hidden hover:border-red-900 transition-colors group">
      {image && (
        <Link href={`/${post.slug}`} className="block relative w-full aspect-[16/9] overflow-hidden">
          <Image
            src={image}
            alt={stripHtml(post.title.rendered)}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
      )}
      <div className="p-4">
        {categories.length > 0 && (
          <div className="text-xs text-gray-500 mb-2">
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
        <Link href={`/${post.slug}`}>
          <h4
            className="text-lg font-bold text-white mb-1 hover:text-red-500 transition-colors"
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
        </Link>
        <p className="text-xs text-gray-400 mb-3">
          {formatDate(post.date)} | Author: {author}
        </p>
        <p className="text-sm text-gray-300 line-clamp-3">{excerpt}</p>
        <Link
          href={`/${post.slug}`}
          className="inline-block mt-3 text-xs text-white border border-gray-600 px-4 py-1.5 hover:border-red-900 hover:text-red-500 transition-colors"
        >
          Read More
        </Link>
      </div>
    </article>
  );
}
