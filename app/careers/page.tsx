import Accordion from '@/components/Accordion';
import PageLayout from '@/components/PageLayout';

export const metadata = {
  title: 'Careers | Eternal',
  description: 'Join the Eternal team - internship and career opportunities',
};

const CAREER_ITEMS = [
  {
    title: 'ABOUT ETERNAL',
    content: 'Eternal is a Growth Community Platform that empowers communities through entertainment, events, lifestyle, media, commerce, education, and technology.',
  },
  {
    title: '3-MONTH INTERNSHIP PROGRAM',
    content: '<strong>Eternal - Growth Community Platform</strong><br/>www.eternalorganizer.com<br/><br/>We are opening multiple internship positions for creative, driven, and high-performing talents who want real project experience inside a digital ecosystem involving Web, Game Development, Branding, and Community Growth.<br/><br/>All interns will work directly with the founder and core team on production-level systems used by real users.',
  },
  {
    title: 'WEB DEVELOPER INTERN',
    content: '<strong>Requirements:</strong><br/>- Strong understanding of HTML, CSS, JavaScript<br/>- Experience with React/Next.js or WordPress<br/>- Familiarity with REST APIs and modern web standards<br/>- Self-motivated and able to work independently<br/><br/><strong>Responsibilities:</strong><br/>- Build and maintain frontend features for the Eternal platform<br/>- Optimize performance and user experience<br/>- Collaborate with the design and backend teams',
  },
  {
    title: 'GAME DEVELOPER INTERN',
    content: '<strong>Requirements:</strong><br/>- Experience with game engines (Unity, Godot, or web-based)<br/>- Understanding of game mechanics and player experience<br/>- Basic knowledge of JavaScript/TypeScript<br/><br/><strong>Responsibilities:</strong><br/>- Develop and maintain Eternal games (Jump, Leap, Fly)<br/>- Implement game features and reward systems<br/>- Test and debug game functionality',
  },
  {
    title: 'GRAPHIC DESIGNER INTERN',
    content: '<strong>Requirements:</strong><br/>- Proficiency in Adobe Photoshop, Illustrator, or Figma<br/>- Strong visual design sense and attention to detail<br/>- Portfolio showcasing creative work<br/><br/><strong>Responsibilities:</strong><br/>- Create visual assets for the platform, games, and marketing<br/>- Design banners, icons, and UI elements<br/>- Maintain brand consistency across all materials',
  },
  {
    title: 'COMMUNITY MANAGER INTERN',
    content: '<strong>Requirements:</strong><br/>- Strong communication skills in Bahasa Indonesia and English<br/>- Experience with social media management<br/>- Passion for gaming and creative communities<br/><br/><strong>Responsibilities:</strong><br/>- Manage Eternal social media channels and community engagement<br/>- Organize events and tournaments<br/>- Create content for community growth',
  },
  {
    title: 'HOW TO APPLY',
    content: 'Send your CV and portfolio to:<br/><strong>yonathan_aditya@eternalorganizer.com</strong><br/><br/>Subject: [Internship Application] - [Position] - [Your Name]<br/><br/>Location: Bandung, West Java, Indonesia (Remote options available)<br/>Duration: 3 months with possible extension',
  },
];

export default function CareersPage() {
  return (
    <PageLayout>
      <h1 className="text-2xl font-bold text-white mb-2 border-b border-[#570000] pb-3">Careers</h1>
      <h2 className="text-sm text-gray-400 mb-6 uppercase tracking-wider">Join Eternal Team</h2>
      <Accordion items={CAREER_ITEMS} />
    </PageLayout>
  );
}
