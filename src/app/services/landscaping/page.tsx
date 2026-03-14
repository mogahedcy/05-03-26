import { Metadata } from 'next';
import LandscapingClient from './LandscapingClient';

export const metadata: Metadata = {
    title: 'تنسيق حدائق جدة | Landscaping Jeddah | ديار جدة',
    description: 'شركة تنسيق وتصميم حدائق في جدة. Best Landscaping, artificial grass, waterfalls, and garden design in Jeddah.',
    keywords: ['تنسيق حدائق', 'لاندسكيب', 'تصميم حدائق', 'عشب صناعي', 'شلالات حدائق', 'Landscaping Jeddah'],
    openGraph: {
        title: 'تنسيق وتصميم حدائق جدة | Landscaping in Jeddah',
        description: 'تنسيق حدائق بأحدث التصاميم. Professional landscaping and garden design services in Jeddah.',
        url: 'https://deyarsu.com/services/landscaping',
        images: [
            {
                url: '/images/landscaping/garden.webp',
                width: 1200,
                height: 630,
                alt: 'تنسيق حدائق جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function LandscapingPage() {
    return <LandscapingClient />;
}
