import { Metadata } from 'next';
import SawatrClient from './SawatrClient';

export const metadata: Metadata = {
    title: 'تركيب سواتر جدة | Privacy Screens & Fences Jeddah | ديار جدة',
    description: 'تركيب جميع أنواع السواتر في جدة للخصوصية. Expert in installing privacy screens and fences (Sawatr) in Jeddah for villas and schools.',
    openGraph: {
        title: 'تركيب سواتر بجدة | Privacy Screens in Jeddah',
        description: 'سواتر لتوفير الخصوصية والأمان. High-quality privacy screens and fences installation with competitive prices.',
    }
};

export default function SawatrPage() {
    return <SawatrClient />;
}
