<template>

  <div class="pt-14 px-8 mt-20 mx-auto max-w-7xl pb-20">
    <h1 class="text-5xl font-semibold tracking-tight text-pretty text-heading sm:text-7xl text-center lg:text-left">
      Experience
    </h1>

    <section class="mx-auto max-w-7xl px-6">
      <div
          v-for="c in companies"
          :key="c.name"
          class="mt-20 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16 md:gap-y-0"
      >

        <aside class="min-w-0 self-start md:sticky md:top-16 md:col-span-4">
          <div class="flex flex-col min-w-0 items-center md:items-start text-center md:text-left gap-y-5">
            <!-- logos -->
            <img :src="c.logo" class="size-8 lg:hidden" />
            <div class="flex flex-col items-center gap-y-3 md:flex-row md:items-start md:gap-x-5 w-full">
              <img :src="c.logo" class="size-20 hidden lg:block" />
              <div class="w-full md:w-auto">
                <h2 class="font-bold text-xl text-accent">
                  <a :href="c.href" target="_blank">
                    {{ c.name }} <ArrowTopRightOnSquareIcon class="size-4 inline" />
                  </a>
                </h2>
                <h4 class="text-app text-sm">{{ c.yearsOfEmployment }}</h4>
                <h4 class="text-app text-sm">{{ c.role }}</h4>
              </div>
            </div>
            <!-- tech stack -->
            <div v-if="c.techStacks?.length" class="mt-8 md:mt-0 flex flex-wrap gap-5 justify-center md:justify-start max-w-full">
              <image-hover
                  v-for="(tech, i) in c.techStacks"
                  :key="i"
                  :src="tech.logo"
                  :text="tech.text"
              />
            </div>
          </div>
        </aside>

        <article class="min-w-0 md:col-span-8" v-html="c.description">

        </article>
      </div>
    </section>

    <drawer></drawer>



  </div>
</template>
<script setup>
import {ArrowTopRightOnSquareIcon} from "@heroicons/vue/24/outline";
useSeoMeta({ title: "Punto Damar | Experience" })
const appConfig = useAppConfig()
const drawerOpen = ref(false)
provide('drawerOpen', drawerOpen)

const openDrawer = () => drawerOpen.value = !drawerOpen.value
definePageMeta({
  accentFillColor: 'fill-bg',
})


const companies = [
  {
    name: "Privy Identitas Digital",
    logo: appConfig.site.logo.privy,
    href: "https://privy.id/",
    yearsOfEmployment: "Mar 2018 - Jun 2025",
    role: "Backend Engineer",
    description: "          <h5 class=\"text-heading font-bold\">Overview</h5>\n" +
        "          <div class=\"text-text text-pretty\">\n" +
        "            <p>\n" +
        "              In my early years, I was working on standalone projects for clients who wanted to integrate Privy's digital signature solutions but do not have the manpower to do it.\n" +
        "              As a backend, I built the APIs for both front end or mobile app. Most of our works was for credit card applications such as Mandiri, CIMB, and BNI.\n" +
        "              My responsibilites are often related to dashboard and user registration. The general flow is: a customer will select their preffered card and fill in their personal info.\n" +
        "              Then, I use our internal registration API and generate a PDF containing the paperwork -- where the user will automatically sign it.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>\n" +
        "              We also created an event ticketing system for <a href=\"https://www.cimbniaga.co.id/id/personal/kartu-kredit/promo/cathay-pacific-travel-fair\" class=\"text-accent\" target=\"_blank\">CIMB Cathay Pacific Travel Fair</a>\n" +
        "              where customers can book discounted plane tickets with their credit card. Depending on the card, they can either use temporary limit increase, travel points, payment cashback, or receive coupons.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>\n" +
        "              After around 2 years, the company feel that it's ineffective to have dedicated manpower to handle each and every client applications.\n" +
        "              So, we formed a team aiming to  reduce both the manpower needed and the development time from at least 2-3 months in no time at all.\n" +
        "              The team and I made a templating application. A customizable, premade application that will cater every clients' user registration and document signing requirements.\n" +
        "              Thanks to the effort of the middleware team, I believe it grew to become one of the company's biggest revenue generating application.\n" +
        "              It managed to handle hundreds of clients with throughput as high as <span class=\"underline\">1000 RPM</span> per client.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>I think that's enough about what I did without leaking further company secrets (NDA and everything), hehe.</p>\n" +
        "          </div>\n" +
        "\n" +
        "\n" +
        "          <h5 class=\"font-bold text-heading mt-10\">Responsibilites/Achievements</h5>\n" +
        "          <ul class=\"list-disc gap-3 text-text\">\n" +
        "            <li>Created a modular user-registration module, enabling customization of signup flows and data requirements to unique needs</li>\n" +
        "            <li>Developed a flexible document-signing, stamping, and meterai (tax-stamp) system that supports multiple user roles and customizable approval workflows</li>\n" +
        "            <li>Conducted mentoring, code reviews, and pair programming to speed up onboarding for junior and new engineers</li>\n" +
        "            <li>Performed massive query refactors to reduce response time from above 100ms to 30-40ms, complying with company’s SLA</li>\n" +
        "            <li>Resolved a critical race condition under high concurrency by migrating shared state into request-scoped storage</li>\n" +
        "            <li>Designed a Ruby gem for approval workflows and email notifications, enabling its use across multiple projects and reducing development time</li>\n" +
        "            <li>Implemented basic callback and notification system with Kafka</li>\n" +
        "            <li>Wrote various automated tests using RSpec</li>\n" +
        "            <li>Maintained a centralized logging service leveraging Firebase Database and MongoDB, improving log visibility and speeding up debugging under high-throughput conditions</li>\n" +
        "            <li>Built a high-throughput Redis-backed worker queue that processes thousands of jobs per second with sub-second latency</li>\n" +
        "            <li>Participated on a CSR initiative to develop a ride-hailing–style safety app connecting users to vetted volunteers and police, enhancing emergency response coordination and delivering a trusted support channel</li>\n" +
        "            <li>Fixing issues and perform integration with monitoring tools such as Datadog, SonarQube, Sentry, Rollbar</li>\n" +
        "          </ul>",
    techStacks: [
      { text: "Golang", logo: appConfig.site.logo.golang },
      { text: "Ruby on Rails", logo: appConfig.site.logo.rails },
      {text: "Sidekiq Scheduler", logo: appConfig.site.logo.sidekiq },
      {text: "Delayed Job Active Record", logo: appConfig.site.logo.ruby},
      {text: "MongoDB", logo: appConfig.site.logo.mongodb },
      {text: "PostgreSQL", logo: appConfig.site.logo.postgresql },
      {text: "Firebase", logo: appConfig.site.logo.firebase },
      {text: "Minio", logo: appConfig.site.logo.minio},
      {text: "AWS S3", logo: appConfig.site.logo.awss3},
      {text: "Google Cloud Storage", logo: appConfig.site.logo.googleStorage },
      {text: "Rufus Scheduler", logo: appConfig.site.logo.ruby},
      {text: "Apache Kafka", logo: appConfig.site.logo.kafka},
      {text: "Docker", logo: appConfig.site.logo.docker},
      {text: "Jenkins", logo: appConfig.site.logo.jenkins}
    ]
  },
  {
    name: "Technopartner Indonesia",
    logo: appConfig.site.logo.technopartner,
    href: "https://technopartner.id/",
    yearsOfEmployment: "Jun 2016 - Jul 2017",
    role: "Fullstack Engineer",
    description: "          <h5 class=\"font-bold text-heading font\">Overview</h5>\n" +
        "          <p class=\"text-text\">\n" +
        "            Technopartner Indonesia is a software house owned by my upperclassmen in college.\n" +
        "            I started working here as an intern for 3 months. The owner acknowledged my qualities and what I can offer to the team, so he offered me a part-time job.\n" +
        "            I worked here for 3 and half day a week. I decided to leave because I need to focus on my <a href=\"https://repository.ukdw.ac.id/373/\" class=\"text-accent\" target=\"_blank\">undergraduate thesis</a>.\n" +
        "          </p>\n" +
        "          <h5 class=\"font-bold text-heading mt-10\">What I Built</h5>\n" +
        "          <ul class=\"list-disc text-text\">\n" +
        "            <li>A customized pocket book app for Borobudur Park staff—providing offline access to SOPs, schedules, and announcements to improve on-site coordination</li>\n" +
        "            <li>A flexible SMS blast tool that supports dynamic audience segmentation and templating</li>\n" +
        "            <li>Partnered in building a hospital invoicing platform that syncs with patient records to automate claims processing and accelerate revenue cycles</li>\n" +
        "            <li>Initiated one of the core products of <a href=\"https://slidemoment.id/\" class=\"text-accent\">SlideMoment.id</a>, an app that scrapes Instagram posts by hashtag in real time, aggregates user-generated photos, and renders them in a live slideshow—enhancing guest engagement at weddings, birthdays and corporate events</li>\n" +
        "          </ul>",
    techStacks: [
      {text: "Laravel", logo: appConfig.site.logo.laravel},
      {text: "jQuery", logo: appConfig.site.logo.jquery},
      {text: "MySQL", logo: appConfig.site.logo.mysql},
      {text: "Bootstrap", logo: appConfig.site.logo.bootstrap},
    ]
  }
]
</script>



