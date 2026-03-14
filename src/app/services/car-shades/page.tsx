import { Metadata } from 'next';
import CarShadesClient from './CarShadesClient';

export const metadata: Metadata = {
    title: 'تركيب مظلات سيارات جدة | Car Shades Jeddah | ديار جدة',
    description: 'متخصصون في تركيب مظلات السيارات في جدة. Expert in installing Car Shades and Parking Canopies in Jeddah with modern designs and 10-year warranty.',
    keywords: ['مظلات سيارات', 'مظلات جدة', 'مواقف سيارات', 'غطاء سيارة', 'Car Shades Jeddah'],
    openGraph: {
        title: 'تركيب مظلات سيارات جدة | Car Shades Jeddah',
        description: 'أفضل شركة لتركيب مظلات السيارات في جدة. Best Car Shades installation in Jeddah with Top-quality materials.',
        url: 'https://deyarsu.com/services/car-shades',
        images: [
            {
                url: '/images/car-shades/%D9%85%D8%B8%D9%84%D8%A7%D8%AA%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AC%D8%AF%D8%A9%20.jpg',
                width: 1200,
                height: 630,
                alt: 'مظلات سيارات جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function CarShadesPage() {
    return <CarShadesClient />;
}
