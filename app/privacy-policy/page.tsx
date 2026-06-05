import Accordion from '@/components/Accordion';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Privacy Policy | Eternal',
  description: 'Eternal Organizer Privacy Policy',
};

const PRIVACY_ITEMS = [
  {
    title: 'INCOME DISCLOSURE STATEMENT',
    content: 'Eternal makes no guarantee of financial success. Success with Eternal results only from successful sales efforts, which require hard work, diligence, skill, persistence, competence, networking and leadership.<br/>Your success will depend upon how well you develop on these qualities.',
  },
  {
    title: 'DATA PRIVACY',
    content: 'Eternal Organizer takes the protection of personal data very seriously. The protection of your personal data is important to us, Throughout this passage you will find information on our privacy policy and on how we make sure keep secured for your personal data.',
  },
  {
    title: 'USAGE OF THE DATA',
    content: 'Personal data will be used only for purposes related processing of orders and notification of deliveries. A further use, for example for promotional purposes, without your express consent is impossible.',
  },
  {
    title: 'SSL ENCRYPTION - SECURITY',
    content: 'We use trusted Certificate RAPID SSL verified by DigiCert Inc<br/><br/>To protect you as a customer / subscriber, we make use of approved encryption techniques, such as the SSL (Secure Socket Layer), to encrypt your personal data (for others not visible). This technique assures that your personal data, such as name and address will not be transferred to any other server than ours.',
  },
  {
    title: 'WHAT IS SSL ENCRYPTION?',
    content: 'Once you are connected to our SSL-secured site, your browser will check our server certificate on Verified by "Let\'s Encrypt" Based on the transferred information the browser can detect, if you are connected to the server you specified. If the test is completed successfully, your personal data will be transmitted by using secure encryption with a 256-bit encryption.',
  },
  {
    title: 'HOW CAN A SSL ENCRYPTION BE RECOGNIZED?',
    content: 'For all sensitive data as input during the ordering process, login, etc. we use a SSL encryption. There will appear an icon in the toolbar of your internet browser showing a padlock. In addition, your URL will change from "http" to "https". Using this information, you can be sure, that your personal data will not be accessible to any third party.',
  },
  {
    title: 'COOKIES',
    content: 'On our Homepage we make use of the so called cookies. Cookies are short entries in a special directory on your computer and are used to exchange and archive information. These cookies are used primarily to keep the functionality between the user account and others website element for the next visit of our website.',
  },
  {
    title: 'RETURN & REFUND POLICY',
    content: 'Return and Refund Policy please click <a href="/return-refund-policy" class="text-red-500 hover:text-red-400">here</a>',
  },
  {
    title: 'DELIVERY POLICY',
    content: 'Delivery Policy please click <a href="/delivery-policy" class="text-red-500 hover:text-red-400">here</a>',
  },
  {
    title: 'CONTACT US',
    content: 'If you have any questions kindly contact us on yonathan_aditya@eternalorganizer.com<br/><br/>Our Location:<br/>Jl.Batununggal Indah 2 No 45 Bandung 40267 Jawa Barat Indonesia',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-white mb-2 border-b border-[#570000] pb-3">Privacy Policy</h1>
      <h2 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Privacy Policy</h2>
      <Accordion items={PRIVACY_ITEMS} />
    </PageLayout>
  );
}
