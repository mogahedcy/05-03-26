import { Metadata } from 'next';
import RestorationClient from './RestorationClient';

export const metadata: Metadata = {
    title: 'مقاول ترميم وتشطيب جدة | Building Restoration Jeddah | ديار جدة',
    description: 'خدمات ترميم وصيانة المباني بجدة. Expert building restoration, interior/exterior finishing, and cracking repair services in Jeddah.',
    keywords: ['ترميم', 'تشطيب', 'مقاول ترميم', 'صيانة مباني', 'ترميم فلل', 'Restoration Jeddah'],
    openGraph: {
        title: 'ترميم وتشطيب وصيانة جدة | Building Restoration in Jeddah',
        description: 'مقاول معتمد للترميم والتشطيب. Certified contractor for building maintenance and restoration with premium quality.',
        url: 'https://deyarsu.com/services/restoration',
        images: [
            {
                url: '/images/trmim/restoration-hero.webp',
                width: 1200,
                height: 630,
                alt: 'ترميم مباني جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function RestorationPage() {
    return <RestorationClient />;
}
