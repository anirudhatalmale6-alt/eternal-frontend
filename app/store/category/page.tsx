import Image from 'next/image';
import Link from 'next/link';
import { getProductCategories } from '@/lib/woocommerce';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Store Categories | Eternal',
  description: 'Browse Eternal store categories',
};

export default async function StoreCategoryPage() {
  const categories = await getProductCategories();

  return (
    <PageLayout>
          {/* Store Categories Header */}
          <div className="bg-gradient-to-r from-[#4a0000] via-[#8b0000] to-[#4a0000] py-2.5 rounded mb-2 border-b border-red-950/50">
            <h1 className="text-center text-white font-serif tracking-[0.15em] text-sm italic">Store Categories</h1>
          </div>
          <p className="text-center text-gray-400 text-xs mb-6 italic">Choose the Category! Feel free to browse around</p>

          {/* Category Grid */}
          <div className="grid grid-cols-2 gap-4">
            {categories
              .filter(cat => cat.slug !== 'uncategorized')
              .map((cat) => (
                <Link
                  key={cat.id}
                  href={`/store/${cat.slug}`}
                  className="group flex flex-col items-center"
                >
                  <div className="w-full aspect-square bg-[#111] border border-gray-800 rounded overflow-hidden flex items-center justify-center group-hover:border-[#570000] transition-colors">
                    {cat.image?.src ? (
                      <Image
                        src={cat.image.src}
                        alt={cat.name}
                        width={200}
                        height={200}
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <span className="text-gray-600 text-sm">{cat.name}</span>
                    )}
                  </div>
                  <p className="mt-2 text-sm text-center">
                    <span className="text-white font-medium">{cat.name}</span>
                    {' '}
                    <span className="text-red-500">({cat.count})</span>
                  </p>
                </Link>
              ))}
          </div>
    </PageLayout>
  );
}
