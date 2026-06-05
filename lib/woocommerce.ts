const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://www.eternalorganizer.com/wp-json';

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
  image: { src: string; alt: string } | null;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  type: string;
  status: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  images: Array<{ src: string; alt: string }>;
  categories: Array<{ id: number; name: string; slug: string }>;
  permalink: string;
}

export async function getProductCategories(): Promise<ProductCategory[]> {
  const res = await fetch(`${WP_API_URL}/wc/v3/products/categories?per_page=50&hide_empty=false`, {
    next: { revalidate: 300 },
    headers: { 'Accept': 'application/json' },
  });

  if (!res.ok) {
    return getHardcodedCategories();
  }
  return res.json();
}

export async function getProducts(categorySlug?: string, page = 1, perPage = 12): Promise<Product[]> {
  let url = `${WP_API_URL}/wc/v3/products?per_page=${perPage}&page=${page}&status=publish`;
  if (categorySlug) url += `&category=${categorySlug}`;

  const res = await fetch(url, {
    next: { revalidate: 300 },
    headers: { 'Accept': 'application/json' },
  });

  if (!res.ok) return [];
  return res.json();
}

function getHardcodedCategories(): ProductCategory[] {
  return [
    { id: 1, name: 'Eternal Creative', slug: 'eternal-creative', description: '', count: 2, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2020/04/ecreative.jpg', alt: 'Eternal Creative' } },
    { id: 2, name: 'Eternal Esports', slug: 'eternal-esports', description: '', count: 3, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2020/05/eternalesports.png', alt: 'Eternal Esports' } },
    { id: 3, name: 'Eternal Gears', slug: 'eternal-gears', description: '', count: 3, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2019/08/eternalgearsnew.jpg', alt: 'Eternal Gears' } },
    { id: 4, name: 'Eternal Platform', slug: 'eternal-platform', description: '', count: 10, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2019/03/eternal250.png', alt: 'Eternal Platform' } },
    { id: 5, name: 'EternalDEX', slug: 'eternal-dex', description: '', count: 3, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2017/07/eternaldex.jpg', alt: 'EternalDEX' } },
    { id: 6, name: 'Redeem Rewards', slug: 'eternal-points', description: '', count: 6, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2021/12/redeem-1.jpg', alt: 'Redeem Rewards' } },
    { id: 7, name: 'Eternal Online Fest', slug: 'eternal-online-fest', description: '', count: 0, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2020/08/partnerz.jpg', alt: 'Eternal Online Fest' } },
    { id: 8, name: 'All Products', slug: 'all-products', description: '', count: 10, image: { src: 'https://bunny.eternalorganizer.com/wp-content/uploads/2020/04/allproducts.jpg', alt: 'All Products' } },
  ];
}
