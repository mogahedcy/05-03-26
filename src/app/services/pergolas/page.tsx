import { Metadata } from 'next';
import PergolasClient from './PergolasClient';

export const metadata: Metadata = {
    title: 'تركيب برجولات جدة | Pergolas & Gazebos Jeddah | ديار جدة',
    description: 'تصميم وتركيب البرجولات الخشبية والحديدية للحدائق في جدة. Add beauty to your garden with wooden & iron pergolas and outdoor seating in Jeddah.',
    keywords: ['برجولات', 'جلسات خارجية', 'برجولات خشبية', 'برجولات حدائق', 'تصميم حدائق', 'Pergolas Jeddah'],
    openGraph: {
        title: 'برجولات وجلسات خارجية جدة | Outdoor Pergolas Jeddah',
        description: 'أفضل البرجولات بجدة لجلسات راقية. Premium designs for pergolas and outdoor relaxation areas with excellent shading.',
        url: 'https://deyarsu.com/services/pergolas',
        images: [
            {
                url: '/images/pergolas/%D8%A8%D8%B1%D8%AC%D9%88%D9%84%D8%A7%D8%AA%20%D9%88%D8%AC%D9%84%D8%B3%D8%A7%D8%AA%20%D8%AE%D8%A7%D8%B1%D8%AC%D9%8A%D8%A9%20%20(2).jpg',
                width: 1200,
                height: 630,
                alt: 'برجولات خشبية وحديدية في جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function PergolasPage() {
    return <PergolasClient />;
}
