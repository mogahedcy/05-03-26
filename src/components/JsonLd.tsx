export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'ديار جدة العالمية',
        image: [
            'https://deyarsu.com/images/car-shades/%D9%85%D8%B8%D9%84%D8%A7%D8%AA%20%D8%B3%D9%8A%D8%A7%D8%B1%D8%A7%D8%AA%20%D8%AC%D8%AF%D8%A9%20.jpg'
        ],
        '@id': 'https://deyarsu.com',
        url: 'https://deyarsu.com',
        telephone: '+966553719009',
        priceRange: '$$',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'طريق الحرمين',
            addressLocality: 'Jeddah',
            postalCode: '21442',
            addressRegion: 'Makkah Region',
            addressCountry: 'SA'
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 21.543333,
            longitude: 39.172778
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday'
            ],
            opens: '08:00',
            closes: '23:00'
        },
        sameAs: [
            'https://www.instagram.com/aldiyarglobal'
        ],
        description: 'مؤسسة ديار جدة العالمية لتركيب كافة أنواع المظلات، السواتر، البرجولات، الهناجر، وبيوت الشعر في جدة. جودة عالية، تصاميم عصرية، وضمان يمتد لـ 10 سنوات.',
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'خدمات ديار جدة',
            itemListElement: [
                {
                    '@type': 'Service',
                    name: 'مظلات',
                    url: 'https://deyarsu.com/services/car-shades',
                    description: 'تركيب مظلات سيارات ومظلات حدائق بأفضل الخامات.'
                },
                {
                    '@type': 'Service',
                    name: 'برجولات',
                    url: 'https://deyarsu.com/services/pergolas',
                    description: 'برجولات خشبية وحديد للحدائق والأسطح.'
                },
                {
                    '@type': 'Service',
                    name: 'بيوت شعر',
                    url: 'https://deyarsu.com/services/tents',
                    description: 'تفصيل وتركيب بيوت شعر ملكية وخيام.'
                },
                {
                    '@type': 'Service',
                    name: 'سواتر',
                    url: 'https://deyarsu.com/services/sawatr',
                    description: 'سواتر حديد وقماش لزيادة الخصوصية والأمان.'
                },
                {
                    '@type': 'Service',
                    name: 'هناجر',
                    url: 'https://deyarsu.com/services/panel',
                    description: 'إنشاء هناجر ومستودعات وساندوتش بانل.'
                }
            ]
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
