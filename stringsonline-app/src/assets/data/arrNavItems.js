
export const arrNavItems = [
    {
		title: 'Guitarer',
		path: '/Guitarer',
		display: true,
		public: true,
        children: [
            {
                title: 'Akustiske',
                path: 'Akustiske',
                display: true
            },
            {
                title: 'Elektriske',
                path: 'Elektriske',
                display: true
            }
        ]
	},
    {
        title: 'Basser',
        path: 'Basser',
        display: true,
        public: true
    },
    {
        title: 'Handmade',
        path: 'Handmade',
        display: true,
        public: true
    },
    {
        title: 'Keyboards',
        path: 'Keyboards',
        display: true,
        public: true
    },
    {
        title: 'Trommer',
        path: 'Trommer',
        display: true,
        public: true
    },
    {
        title: 'Percussion',
        path: 'Percussion',
        display: true,
        public: true
    },
    {
        title: 'Stryg & Blæs',
        path: 'Stryg',
        display: true,
        public: true
    },
    {
        title: 'Brands',
        path: 'Brands',
        display: true,
        public: true,
        class: 'brands',
        children: [
            {
                title: 'Fender',
                path: 'Fender',
                display: true
            },
            {
                title: 'Gibson',
                path: 'Gibson',
                display: true
            },
            {
                title: 'Marin',
                path: 'Martin',
                display: true
            },
            {
                title: 'Taylor',
                path: 'Taylor',
                display: true
            }
        ]
    }
]