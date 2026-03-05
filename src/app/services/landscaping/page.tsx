import { Metadata } from 'next';
import LandscapingClient from './LandscapingClient';

export const metadata: Metadata = {
    title: 'تنسيق حدائق جدة | Landscaping Jeddah | ديار جدة',
    description: 'شركة تنسيق وتصميم حدائق في جدة. Best Landscaping, artificial grass, waterfalls, and garden design in Jeddah.',
    openGraph: {
        title: 'تنسيق وتصميم حدائق جدة | Landscaping in Jeddah',
        description: 'تنسيق حدائق بأحدث التصاميم. Professional landscaping and garden design services in Jeddah.',
    }
};

export default function LandscapingPage() {
    return <LandscapingClient />;
}
