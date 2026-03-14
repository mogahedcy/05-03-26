import { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'مظلات وسواتر ديار جدة العالمية | تركيب برجولات وهناجر',
  description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة. جودة عالية، تصاميم عصرية، وضمان يمتد لـ 10 سنوات.',
};

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'أعمال مؤسسة ديار جدة العالمية للمظلات والسواتر',
    description: 'مقطع فيديو يستعرض جودة أعمالنا وتصاميمنا المميزة في مجال تركيب المظلات، السواتر، البرجولات، وبيوت الشعر في جدة.',
    thumbnailUrl: [
      'https://deyarsu.com/images/car-shades/%D9%85%D8%B8%D9%84%D8%A7%D8%AA%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AC%D8%AF%D8%A9%20.jpg'
    ],
    uploadDate: '2025-01-01T08:00:00+03:00',
    duration: 'PT0M8S',
    contentUrl: 'https://deyarsu.com/hero-video.mp4',
    embedUrl: 'https://deyarsu.com',
    publisher: {
      '@type': 'Organization',
      name: 'ديار جدة العالمية',
      logo: {
        '@type': 'ImageObject',
        url: 'https://deyarsu.com/favicon.svg'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
