import { Metadata } from 'next';
import TentsClient from './TentsClient';

export const metadata: Metadata = {
    title: 'تركيب خيام وبيوت شعر جدة | Tents & Hair Houses Jeddah | ديار جدة',
    description: 'تصميم وتركيب خيام وبيوت شعر ملكية في جدة. Custom design and installation of traditional & modern luxury tents in Jeddah.',
    openGraph: {
        title: 'بيوت شعر وخيام جدة | Traditional Tents Jeddah',
        description: 'تركيب خيام ملكية مقاومة للحرارة. High-quality execution of custom tents and traditional Arabic seating areas.',
    }
};

export default function TentsPage() {
    return <TentsClient />;
}
