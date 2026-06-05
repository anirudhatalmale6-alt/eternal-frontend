import Accordion from '@/components/Accordion';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Term & Conditions | Eternal',
  description: 'Eternal Organizer Terms and Conditions',
};

const TERMS_ITEMS = [
  {
    title: 'GENERAL TERMS',
    content: 'By accessing and using the Eternal platform (eternalorganizer.com), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services. Eternal reserves the right to modify these terms at any time without prior notice.',
  },
  {
    title: 'ACCOUNT REGISTRATION',
    content: 'To access certain features of Eternal, you must register for an account. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.',
  },
  {
    title: 'MEMBERSHIP & SUBSCRIPTION',
    content: 'Eternal offers various membership tiers (Basic, Premium, Silver, Gold, Eternal) with different benefits and pricing. Membership fees are non-refundable unless otherwise stated. Eternal reserves the right to modify membership benefits and pricing at any time.',
  },
  {
    title: 'ETERNAL VIRTUAL CURRENCY',
    content: 'Eternal Gold, Eternal Ruby, and Eternal Emerald are virtual currencies within the Eternal platform. These virtual currencies have no real-world monetary value outside of the Eternal ecosystem. Virtual currencies cannot be exchanged for cash or transferred to external accounts. Eternal reserves the right to modify the value and availability of virtual currencies.',
  },
  {
    title: 'CONTENT & INTELLECTUAL PROPERTY',
    content: 'All content on the Eternal platform, including but not limited to text, graphics, logos, images, and software, is the property of PT. Eternal Indonesia Kreatif and is protected by Indonesian and international copyright laws. Users may not reproduce, distribute, or create derivative works without express permission.',
  },
  {
    title: 'USER CONDUCT',
    content: 'Users agree not to: (a) violate any applicable laws or regulations; (b) infringe upon the rights of others; (c) upload malicious content or software; (d) attempt to gain unauthorized access to other accounts or systems; (e) engage in any activity that disrupts or interferes with the platform.',
  },
  {
    title: 'PARTNER & REFERRAL PROGRAM',
    content: 'The Eternal Partner Program allows users to earn commissions through referrals. Commission rates vary by membership tier. Eternal reserves the right to modify commission structures and program terms. Fraudulent referral activity will result in account termination.',
  },
  {
    title: 'STORE & PURCHASES',
    content: 'Products and services available in the Eternal Store are subject to availability. Prices are displayed in Indonesian Rupiah (IDR) unless otherwise stated. All purchases are final unless covered by our Return & Refund Policy. Digital products are non-refundable after delivery.',
  },
  {
    title: 'LIMITATION OF LIABILITY',
    content: 'Eternal shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the platform. Our total liability shall not exceed the amount you paid to Eternal in the 12 months preceding the claim.',
  },
  {
    title: 'GOVERNING LAW',
    content: 'These Terms and Conditions are governed by the laws of the Republic of Indonesia. Any disputes arising from these terms shall be resolved through the courts of Bandung, West Java, Indonesia.',
  },
  {
    title: 'CONTACT',
    content: 'For questions about these Terms and Conditions, contact us at:<br/><br/>PT. Eternal Indonesia Kreatif<br/>Jl.Batununggal Indah 2 No 45<br/>Bandung 40267, Jawa Barat, Indonesia<br/>Email: yonathan_aditya@eternalorganizer.com',
  },
];

export default function TermConditionsPage() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-white mb-2 border-b border-[#570000] pb-3">Term &amp; Conditions</h1>
      <h2 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Terms of Service</h2>
      <Accordion items={TERMS_ITEMS} />
    </PageLayout>
  );
}
