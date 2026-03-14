import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://deyarsu.com';

    // مسارات الصور وأسمائها كما هي، مع ربطها بروابط الصفحات التابعة لها.
    const imageGroups = [
        {
            loc: '/services/car-shades',
            images: [
                '/images/car-shades/مظلات سيارات جدة  (1).jpg',
                '/images/car-shades/مظلات سيارات جدة  (2).jpg',
                '/images/car-shades/مظلات سيارات جدة  (4).jpg',
                '/images/car-shades/مظلات سيارات جدة  (5).jpg',
                '/images/car-shades/مظلات سيارات جدة .jpg',
            ]
        },
        {
            loc: '/services/tents',
            images: [
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (10).jpg',
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (11).jpg',
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (6).jpg',
                '/images/khym/خيم ملكي وبيوت شعر ديار جدة  (7).jpg',
                '/images/byootshaar/‏‏966537686646_status_aabfbbc6818a42069ac4d75a4929bfd2 - نسخة.jpg',
                '/images/byootshaar/‏‏966537686646_status_cf5237f9984946a69f3e49039580c01f - نسخة.jpg',
                '/images/byootshaar/‏‏966545216002_status_IMG-20211026-WA0063 - نسخة.jpg',
            ]
        },
        {
            loc: '/services/landscaping',
            images: [
                '/images/landscaping/garden.webp',
                '/images/landscaping/pathway.webp',
                '/images/landscaping/waterfall.webp',
            ]
        },
        {
            loc: '/services/pergolas',
            images: [
                '/images/pergolas/برجولات وجلسات خارجية  (1).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (2).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (3).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (4).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (5).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (6).jpg',
                '/images/pergolas/برجولات وجلسات خارجية  (7).jpg',
            ]
        },
        {
            loc: '/services/qarmid',
            images: [
                '/images/qrmeed/qarmid-1.jpg',
                '/images/qrmeed/qarmid-2.jpg',
                '/images/qrmeed/qarmid-3.jpg',
            ]
        },
        {
            loc: '/services/panel',
            images: [
                '/images/sandwich-panel/hangar-sandwich.webp',
                '/images/sandwich-panel/sandwich-panel-1.jpg',
                '/images/sandwich-panel/sandwich-panel-2.webp',
                '/images/sandwich-panel/sandwich-small.webp',
            ]
        },
        {
            loc: '/services/sawatr',
            images: [
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (1).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (2).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (3).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (4).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (5).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (7).jpg',
                '/images/swater/تركيب ساتر قماش ساتر مجدول جدة  (8).jpg',
            ]
        },
        {
            loc: '/services/restoration',
            images: [
                '/images/trmim/restoration-exterior.webp',
                '/images/trmim/restoration-hero.webp',
                '/images/trmim/restoration-interior.webp',
            ]
        }
    ];

    // Create XML format
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n`;

    imageGroups.forEach((group) => {
        if (group.images.length === 0) return;

        xml += `  <url>\n`;
        xml += `    <loc>${baseUrl}${group.loc}</loc>\n`;

        group.images.forEach((img) => {
            // Encode the URL correctly as it contains Arabic characters and spaces
            let encodedImgUrl = img.split('/').map(segment => encodeURIComponent(segment)).join('/');

            // Extract a title from the file name
            const fileName = img.split('/').pop() || '';
            const title = fileName.replace(/\.[^/.]+$/, "").replace(/[0-9()\-]/g, " ").trim() || "صورة " + group.loc.split('/').pop();

            xml += `    <image:image>\n`;
            xml += `      <image:loc>${baseUrl}${encodedImgUrl}</image:loc>\n`;
            xml += `      <image:title>${title}</image:title>\n`;
            xml += `    </image:image>\n`;
        });

        xml += `  </url>\n`;
    });

    xml += `</urlset>`;

    return new NextResponse(xml, {
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
