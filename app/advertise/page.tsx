import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Advertise | Eternal',
  description: 'Advertise on Eternal - Growth Community Platform',
};

export default function AdvertisePage() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-white mb-2 border-b border-[#570000] pb-3">Advertise</h1>

      <div className="mt-8 text-center py-12">
        <div className="max-w-md mx-auto">
          <h2 className="font-dodger text-lg text-white mb-4 tracking-wider">Interested in Advertising on Eternal?</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            If you have any queries or are looking for detailed information about advertising opportunities on our platform, don&apos;t hesitate to contact us.
          </p>
          <div className="bg-[#111] border border-gray-800 rounded-lg p-6">
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Contact Us</p>
            <a
              href="mailto:yonathan_aditya@eternalorganizer.com"
              className="text-red-500 hover:text-red-400 text-sm break-all"
            >
              yonathan_aditya@eternalorganizer.com
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
