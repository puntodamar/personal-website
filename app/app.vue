<template>
    <Analytics/>
    <NuxtLayout>
        <NuxtPage/>
    </NuxtLayout>
</template>

<script setup>
import {Analytics} from '@vercel/analytics/nuxt';

useHead({
    htmlAttrs: {lang: 'en'},
    bodyAttrs: {class: 'antialiased'},
    titleTemplate: (title) =>
        title
            ? `${title}`
            : 'Punto Damar',

    link: [
        {
            rel: 'icon',
            href: '/favicon.ico'
        }
    ]
})

const config = useRuntimeConfig();

useSeoMeta({
    applicationName: 'Punto Damar P.',
    author: 'Punto Damar P.',
    creator: 'Punto Damar P.',
    publisher: 'Punto Damar P.',
    robots: 'index,follow',
    ogImage: `${config.public.siteUrl}/images/og-image.jpg`,
    twitterImage: `${config.public.siteUrl}/images/og-image.jpg`,
    twitterCard: 'summary_large_image',
    themeColor: '#101828',
    colorScheme: 'dark'
})
</script>