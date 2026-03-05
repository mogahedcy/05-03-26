import { Metadata } from 'next';
import QarmidClient from './QarmidClient';

export const metadata: Metadata = {
    title: 'تركيب قرميد بجدة | Brick & Rooftop Tiles Jeddah | ديار جدة',
    description: 'مقاول تركيب قرميد في جدة للأسقف. Specialist in installing roof tiles for roofs and facades in Jeddah with heat & water resistance.',
    openGraph: {
        title: 'تركيب قرميد في جدة | Qarmid installation Jeddah',
        description: 'أفضل خدمات تركيب القرميد والمظلات. Professional and durable roof tile installation services in Jeddah.',
    }
};

export default function QarmidPage() {
    return <QarmidClient />;
}
