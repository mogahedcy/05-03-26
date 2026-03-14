import { Metadata } from 'next';
import SawatrClient from './SawatrClient';

export const metadata: Metadata = {
    title: 'تركيب سواتر جدة | Privacy Screens & Fences Jeddah | ديار جدة',
    description: 'تركيب جميع أنواع السواتر في جدة للخصوصية. Expert in installing privacy screens and fences (Sawatr) in Jeddah for villas and schools.',
    keywords: ['سواتر', 'تركيب سواتر', 'سواتر قماش', 'سواتر حديد', 'سواتر بلاستيك', 'Sawatr Jeddah'],
    openGraph: {
        title: 'تركيب سواتر بجدة | Privacy Screens in Jeddah',
        description: 'سواتر لتوفير الخصوصية والأمان. High-quality privacy screens and fences installation with competitive prices.',
        url: 'https://deyarsu.com/services/sawatr',
        images: [
            {
                url: '/images/swater/%D8%AA%D8%B1%D9%83%D9%8A%D8%A8%20%D8%B3%D8%A7%D8%AA%D8%B1%20%D9%82%D9%85%D8%A7%D8%B4%20%D8%B3%D8%A7%D8%AA%D8%B1%20%D9%85%D8%AC%D8%AF%D9%88%D9%84%20%D8%AC%D8%AF%D8%A9%20%20(1).jpg',
                width: 1200,
                height: 630,
                alt: 'تركيب سواتر جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function SawatrPage() {
    return <SawatrClient />;
}
