import { Metadata } from 'next';
import RestorationClient from './RestorationClient';

export const metadata: Metadata = {
    title: 'مقاول ترميم وتشطيب جدة | Building Restoration Jeddah | ديار جدة',
    description: 'خدمات ترميم وصيانة المباني بجدة. Expert building restoration, interior/exterior finishing, and cracking repair services in Jeddah.',
    openGraph: {
        title: 'ترميم وتشطيب وصيانة جدة | Building Restoration in Jeddah',
        description: 'مقاول معتمد للترميم والتشطيب. Certified contractor for building maintenance and restoration with premium quality.',
    }
};

export default function RestorationPage() {
    return <RestorationClient />;
}
