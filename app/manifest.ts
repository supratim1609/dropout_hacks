import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dropout Hacks | Hack into the Multiverse',
        short_name: 'Dropout Hacks',
        description: 'Join the ultimate Spider-Verse themed hackathon in Kolkata. Code, build, and save the multiverse.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a', // var(--color-comic-dark)
        theme_color: '#000000',
        icons: [
            {
                src: '/logo.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
