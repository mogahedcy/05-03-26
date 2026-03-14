import { Metadata } from 'next';
import PanelClient from './PanelClient';

export const metadata: Metadata = {
    title: 'هناجر وساندوتش بانل جدة | Sandwich Panel Folders Jeddah | ديار جدة',
    description: 'متخصصون في توريد وتركيب ساندوتش بانل وهناجر في جدة. Experts in supplying and installing Sandwich Panels, hangars, and warehouses in Jeddah.',
    keywords: ['ساندوتش بانل', 'هناجر', 'مستودعات', 'غرف معزولة', 'عزل ساندوتش', 'Sandwich Panel Jeddah'],
    openGraph: {
        title: 'غرف ساندوتش بانل وهناجر | Sandwich Panels & Hangars',
        description: 'عزل حراري ومائي فائق للساندوتش بانل. Excellent thermal and water insulation for hangars and panel rooms at competitive prices.',
        url: 'https://deyarsu.com/services/panel',
        images: [
            {
                url: '/images/sandwich-panel/sandwich-panel-1.jpg',
                width: 1200,
                height: 630,
                alt: 'غرف ساندوتش بانل وهناجر جدة'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
    }
};

export default function PanelPage() {
    return <PanelClient />;
}
