import { Metadata } from 'next';
import TentsClient from './TentsClient';

export const metadata: Metadata = {
    title: 'تركيب خيام وبيوت شعر جدة | Tents & Hair Houses Jeddah | ديار جدة',
    description: 'تصميم وتركيب خيام وبيوت شعر ملكية في جدة. Custom design and installation of traditional & modern luxury tents in Jeddah.',
    keywords: ['خيام', 'بيوت شعر', 'تفصيل خيام', 'خيام ملكية', 'بيوت شعر ملكية', 'Tents Jeddah'],
    openGraph: {
        title: 'بيوت شعر وخيام جدة | Traditional Tents Jeddah',
        description: 'تركيب خيام ملكية مقاومة للحرارة. High-quality execution of custom tents and traditional Arabic seating areas.',
        url: 'https://deyarsu.com/services/tents',
        images: [
            {
                url: '/images/car-shades/%D9%85%D8%B8%D9%84%D8%A7%D8%AA%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AC%D8%AF%D8%A9%20(4).jpg',
                width: 1200,
                height: 630,
                alt: 'بيوت شعر وخيام جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function TentsPage() {
    return <TentsClient />;
}
