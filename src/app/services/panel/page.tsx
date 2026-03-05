import { Metadata } from 'next';
import PanelClient from './PanelClient';

export const metadata: Metadata = {
    title: 'هناجر وساندوتش بانل جدة | Sandwich Panel Folders Jeddah | ديار جدة',
    description: 'متخصصون في توريد وتركيب ساندوتش بانل وهناجر في جدة. Experts in supplying and installing Sandwich Panels, hangars, and warehouses in Jeddah.',
    openGraph: {
        title: 'غرف ساندوتش بانل وهناجر | Sandwich Panels & Hangars',
        description: 'عزل حراري ومائي فائق للساندوتش بانل. Excellent thermal and water insulation for hangars and panel rooms at competitive prices.',
    }
};

export default function PanelPage() {
    return <PanelClient />;
}
