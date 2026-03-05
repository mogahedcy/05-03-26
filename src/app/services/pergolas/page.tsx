import { Metadata } from 'next';
import PergolasClient from './PergolasClient';

export const metadata: Metadata = {
    title: 'تركيب برجولات جدة | Pergolas & Gazebos Jeddah | ديار جدة',
    description: 'تصميم وتركيب البرجولات الخشبية والحديدية للحدائق في جدة. Add beauty to your garden with wooden & iron pergolas and outdoor seating in Jeddah.',
    openGraph: {
        title: 'برجولات وجلسات خارجية جدة | Outdoor Pergolas Jeddah',
        description: 'أفضل البرجولات بجدة لجلسات راقية. Premium designs for pergolas and outdoor relaxation areas with excellent shading.',
    }
};

export default function PergolasPage() {
    return <PergolasClient />;
}
