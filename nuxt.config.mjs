import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineNuxtConfig({
    css: ["~/assets/css/main.css"],
    vite: {plugins: [tailwindcss()]},
    
    app: {
        pageTransition: {name: 'page', mode: 'out-in'},
        colorMode: {
            classSuffix: '',
            preference: 'system',      //  fallback
            fallback: 'light',         // SSR fallback
            storageKey: 'color-theme'        // keep it in sync with localStorage/cookie
        },
        head: {
            bodyAttrs: {
                class: 'bg-app',
            },
            link: [
                {rel: "preconnect", href: "https://fonts.googleapis.com"},
                {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: ""},
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
                }
            ],
            meta: [
                {
                    name: "color-scheme",
                    content: "light dark"
                },
                {
                    name: 'description',
                    content: 'A fullstack engineer who always strive for the best and hungry for new knowledge'
                },
                {
                    property: 'og:description',
                    content: 'A fullstack engineer who always strive for the best and hungry for new knowledge'
                },
                {
                    property: 'og:title',
                    content: 'Punto Damar P.'
                },
                {
                    name: 'google-site-verification',
                    content: 'dvl_kmQDFqUYeGLo6rWTxp0u0wZCcmoUQoilqtFzBHw',
                },
            ],
            script: [
                {
                    innerHTML: `
                        try {
                        const ls = localStorage.getItem('color-mode');
                         const wantDark = ls ? ls === 'dark' : false; // cookie handles SSR, LS handles first paint
                         document.documentElement.classList.toggle('dark', wantDark);
                        } catch (e) {}
                      `,
                    tagPosition: 'head'
                }
            ],
            __dangerouslyDisableSanitizersByTagID: {},
        }
    },
    
    modules: ["@nuxtjs/color-mode", '@nuxtjs/seo'],
    
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
        }
    },
    site: {
        url: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        name: 'Punto Damar',
        description: 'A fullstack engineer who always strive for the best and hungry for new knowledge.',
        defaultLocale: 'en'
    },
    
    robots: {
        allow: '/',
        sitemap: '/sitemap.xml'
    },
    
    sitemap: {
        autoLastmod: true,
        discoverImages: true
    }
});