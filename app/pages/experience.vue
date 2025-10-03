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
        <!-- LEFT: sticky on md+; centered on mobile -->
        <aside class="min-w-0 self-start md:sticky md:top-16 md:col-span-4">
          <div class="flex flex-col min-w-0 items-center md:items-start text-center md:text-left gap-y-5">
            <!-- logos -->
            <img :src="c.logo" class="size-8 md:hidden" />
            <div class="flex flex-col items-center gap-y-3 md:flex-row md:items-start md:gap-x-5 w-full">
              <img :src="c.logo" class="size-20 hidden md:block" />
              <div class="w-full md:w-auto">
                <h2 class="font-semibold text-xl text-accent">
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

        <article class="min-w-0 md:col-span-8">
          <p
              v-for="i in 20"
              :key="i"
              class="mt-5 text-text text-center md:text-left text-pretty whitespace-normal break-words [hyphens:auto]"
          >
            {{ c.description }}
          </p>
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



const companies = [
  {
    name: "Privy Identitas Digital",
    logo: appConfig.site.logo.privy,
    href: "https://privy.id/",
    yearsOfEmployment: "Mar 2018 - Jun 2025",
    role: "Backend Engineer",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam illum iste iusto laudantium nam obcaecati quibusdam quo reiciendis, soluta. Cum distinctio exercitationem modi odio odit soluta. Cupiditate, eveniet, laborum.",
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
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam illum iste iusto laudantium nam obcaecati quibusdam quo reiciendis, soluta. Cum distinctio exercitationem modi odio odit soluta. Cupiditate, eveniet, laborum.",
    techStacks: [
      {text: "Laravel", logo: appConfig.site.logo.laravel},
      {text: "jQuery", logo: appConfig.site.logo.jquery},
      {text: "MySQL", logo: appConfig.site.logo.mysql},
    ]
  }
]
</script>



