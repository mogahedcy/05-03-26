import { Metadata } from 'next';
import CarShadesClient from './CarShadesClient';

export const metadata: Metadata = {
    title: 'تركيب مظلات سيارات جدة | Car Shades Jeddah | ديار جدة',
    description: 'متخصصون في تركيب مظلات السيارات في جدة. Expert in installing Car Shades and Parking Canopies in Jeddah with modern designs and 10-year warranty.',
    openGraph: {
        title: 'تركيب مظلات سيارات جدة | Car Shades Jeddah',
        description: 'أفضل شركة لتركيب مظلات السيارات في جدة. Best Car Shades installation in Jeddah with Top-quality materials.',
    }
};

export default function CarShadesPage() {
    return <CarShadesClient />;
}
