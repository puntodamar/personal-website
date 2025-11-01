<template>

  <div class="pt-14 px-8 mt-20 mx-auto max-w-7xl pb-20">
    <h1 class="text-5xl font-semibold tracking-tight text-pretty text-heading sm:text-7xl text-center lg:text-left">
      Experience
    </h1>

    <section class="mx-auto max-w-7xl px-6">
      <div
          v-for="(c,i) in companies"
          :key="c.i"
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

          <div class="flex flex-row items-center justify-center mt-10 md:hidden">
            <button class="btn-primary text-xs" @click="openDrawer(i)">Details</button>
          </div>

        </aside>

        <article class="min-w-0 hidden md:block md:col-span-8 prose" v-html="c.description">
        </article>

      </div>
    </section>

    <drawer/>
    <scroll-to-top/>

  </div>
</template>
<script setup>
import {ArrowTopRightOnSquareIcon} from "@heroicons/vue/24/outline";
import ScrollToTop from "~/components/ScrollToTop.vue";
useSeoMeta({ title: "Punto Damar | Experience" })
const appConfig = useAppConfig()
const drawerContent = reactive({open: false, company: null})
provide('drawer', drawerContent)


const openDrawer = (index) => {

  drawerContent.open = !drawerContent.open

  if(drawerContent.open === true) {
    drawerContent.company = companies[index]
    console.log(drawerContent.company)
  }
}
definePageMeta({
  accentFillColor: 'fill-bg',
})


const companies = [
  {
    name: "MadeIndonesia",
    logo:appConfig.site.logo.madeindonesia,
    yearsOfEmployment:"Oct 2025 (present)",
    href: "https://madeindonesia.com/",
    role: "Front End Developer",
    description: "" +
        "          <h5 class=\"text-heading font-bold\">Overview</h5>\n" +
        "          <p>\n" +
        "           MadeIndonesia is an english-speaking software house focusing in European markets. We provide all kinds of IT services, ranging from web development, outsourcing, data-entry, design, game, video editing, etc.\n" +
        "            I work as a Laravel front-end development handling Netherlands market (mostly).\n" +
        "          </p>",
    techStacks: [
      { text: "Laravel", logo: appConfig.site.logo.laravel },
      { text: "Tailwind", logo: appConfig.site.logo.tailwind},
      { text: "Alpine.js", logo: appConfig.site.logo.alpine},
      { text: "Livewire", logo: appConfig.site.logo.livewire},
      { text: "Swiper.js", logo: appConfig.site.logo.swiper},
      { text: "Figma", logo: appConfig.site.logo.figma},
    ]
  },
  {
    name: "Privy Identitas Digital",
    logo: appConfig.site.logo.privy,
    href: "https://privy.id/",
    yearsOfEmployment: "Mar 2018 - Jun 2025",
    role: "Backend Engineer",
    description: "          <h5 class=\"text-heading font-bold\">Overview</h5>\n" +
        "          <div class=\"text-text text-pretty\">\n" +
        "            <p>\n" +
        "              Privy is Indonesia's pioneer in digital signature and identity solutions. <br/>In my early years, I was working on standalone projects for clients who wanted to integrate Privy's digital signature solutions but do not have the manpower to do it.\n" +
        "              As a backend, I built the APIs for both front end and mobile app. Most of our works was for credit card applications such as Mandiri, CIMB, and BNI.\n" +
        "              My responsibilites are often related to dashboard, user registration, and document signing. The general flow is: a customer will select their preffered card and fill in their personal info.\n" +
        "              Then, I use our internal registration API and generate a PDF containing the paperwork -- where the user will automatically sign it once they are registered.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>\n" +
        "              We also created an event ticketing system for <a href=\"https://www.cimbniaga.co.id/id/personal/kartu-kredit/promo/cathay-pacific-travel-fair\"target=\"_blank\">CIMB Cathay Pacific Travel Fair</a>\n" +
        "              where customers can book discounted plane tickets with their credit card. Depending on the card, they can either use temporary limit increase, travel points, payment cashback, or receive coupons.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>\n" +
        "              After around 2 years, the company feel that it's ineffective to have dedicated manpower to handle each and every client applications.\n" +
        "              So, we formed a team aiming to  reduce both the manpower needed and the development time from at least 2-3 months in no time at all. \n" +
        "              The team and I made a templating application. A customizable, premade application that will cater every clients' user registration and document signing requirements.\n" +
        "              Thanks to the effort of the whole team, now it's just a matter of business decisions and paperworks before the app is live on production. I believe it grew to become one of the company's biggest revenue generating application.\n" +
        "              It managed to handle hundreds of clients with throughput as high as <span class=\"underline\">1000 RPM</span> per client.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>I think that's enough about what I did without leaking further company secrets (NDA and everything), hehe.</p>\n" +
        "          </div>\n" +
        "\n" +
        "\n" +
        "          <h5 class=\"font-bold text-heading mt-10\">Responsibilites/Achievements</h5>\n" +
        "          <ul class=\"list-disc list-inside gap-3 text-text \">\n" +
        "            <li>Created a modular user-registration module, enabling customization of signup flows and data requirements to unique needs</li>\n" +
        "            <li class=\"mt-5\">Developed a flexible document-signing, stamping, and meterai (tax-stamp) system that supports multiple user roles and customizable approval workflows</li>\n" +
        "            <li class=\"mt-5\">Conducted mentoring, code reviews, and pair programming to speed up onboarding for junior and new engineers</li>\n" +
        "            <li class=\"mt-5\">Performed massive query refactors to reduce response time from above 100ms to 30-40ms, complying with company’s SLA</li>\n" +
        "            <li class=\"mt-5\">Resolved a critical race condition under high concurrency by migrating shared state into request-scoped storage</li>\n" +
        "            <li class=\"mt-5\">Designed a Ruby gem for approval workflows and email notifications, enabling its use across multiple projects and reducing development time</li>\n" +
        "            <li class=\"mt-5\">Implemented basic callback and notification system with Kafka</li>\n" +
        "            <li class=\"mt-5\">Wrote various automated tests using RSpec</li>\n" +
        "            <li class=\"mt-5\">Maintained a centralized logging service leveraging Firebase Database and MongoDB, improving log visibility and speeding up debugging under high-throughput conditions</li>\n" +
        "            <li class=\"mt-5\">Built a high-throughput Redis-backed worker queue that processes thousands of jobs per second with sub-second latency</li>\n" +
        "            <li class=\"mt-5\">Participated on a CSR initiative to develop a ride-hailing–style safety app connecting users to vetted volunteers and police, enhancing emergency response coordination and delivering a trusted support channel</li>\n" +
        "            <li class=\"mt-5\">Fixing issues and perform integration with monitoring tools such as Datadog, SonarQube, Sentry, Rollbar</li>\n" +
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
      {text: "Jenkins", logo: appConfig.site.logo.jenkins},
      {text: "Websocket",logo: appConfig.site.logo.jenkins}
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
        "            I worked here for 3 and half day a week. I decided to leave because I need to focus on my <a href=\"https://repository.ukdw.ac.id/373/\" target=\"_blank\">undergraduate thesis</a>.\n" +
        "          </p>\n" +
        "          <h5 class=\"font-bold text-heading mt-10\">What I Built</h5>\n" +
        "          <ul class=\"list-disc list-inside text-text\">\n" +
        "            <li><a href=\"https://apkpure.com/id/borobudur-buku-pintar/com.borobudur.mobile\" target=\"_blank\">Borobudur Buku Pintar</a>, a customized pocket book app for Borobudur Park staff—providing offline access to SOPs, schedules, and announcements to improve on-site coordination</li>\n" +
        "            <li class=\"mt-5\"><a href=\"https://apkpure.net/texter-sms/com.technopartner.textersms\" target=\"_blank\">Texter SMS</a>, a flexible SMS blast tool that supports dynamic audience segmentation and templating</li>\n" +
        "            <li class=\"mt-5\">Partnered in building a hospital invoicing platform that syncs with patient records to automate claims processing and accelerate revenue cycles</li>\n" +
        "            <li class=\"mt-5\">Initiated one of the core products of <a href=\"https://slidemoment.id/\"  >SlideMoment.id</a>, an app that scrapes Instagram posts by hashtag in real time, aggregates user-generated photos, and renders them in a live slideshow—enhancing guest engagement at weddings, birthdays and corporate events</li>\n" +
        "          </ul>",
    techStacks: [
      {text: "Laravel", logo: appConfig.site.logo.laravel},
      {text: "jQuery", logo: appConfig.site.logo.jquery},
      {text: "MySQL", logo: appConfig.site.logo.mysql},
      {text: "Bootstrap", logo: appConfig.site.logo.bootstrap},
    ]
  },
  {
    name: "BikinGame.com",
    logo: appConfig.site.logo.bikingame,
    href: "https://www.facebook.com/bikingame",
    yearsOfEmployment: "2015 - 2020",
    role: "Owner",
    description: "          <div class=\"text-pretty text-text\"><h5 class=\"font-bold text-heading\">Overview</h5>\n" +
        "            <p>\n" +
        "              BikinGame.com is a website containing free game programming tutorials using <a href=\"https://unity.com/\" target=\"_blank\">Unity 3D</a> and <a href=\"https://www.construct.net/en\" target=\"_blank\">Construct 2</a>.\n" +
        "              This paved the road for me to be quite known in the community (at that time) and made me invited to be <a\n" +
        "                href=\"https://www.facebook.com/punto.d.p/posts/10202619932737616\" target=\"_blank\">seminar speaker</a> and workshop mentor in <a href=\"https://drive.google.com/file/d/1Cx6y5cdR9CB7o1JMZ2uoqEuRzA7uN6H8/view?usp=sharing\" target=\"_blank\">company</a>, <a href=\"https://www.facebook.com/bikingame/photos/pb.100064652861369.-2207520000/2670956369596552/?type=3\" target=\"_blank\">government</a>, and even\n" +
        "              <a href=\"https://www.facebook.com/ngoquangducc/photos/pb.100068499472580.-2207520000/1263075787090388/?type=3\" target=\"_blank\">national-wide</a> setting held by BEKRAF Indonesian Creative Economy Agency <span class=\"italic\">(the page is now hacked tho)</span>.\n" +
        "              Sadly, most of the media has been lost to time and I dont have the backup :((. But hey! There are some left in\n" +
        "              <a href=\"https://www.construct.net/en/users/60645/puntodamar/tutorials\" target=\"_blank\">Construct 2's official page</a> and my personal <a href=\"https://www.facebook.com/puntodamar/\" target=\"_blank\">facebook page</a>.\n" +
        "            </p>\n" +
        "            <br/>\n" +
        "            <p>During this time, I published 2 books on game programming. One about <a href=\"https://www.gramedia.com/products/bikin-game-tanpa-coding-dengan-construct-2-cd\" target=\"_blank\">Construct 2</a> and the other one on\n" +
        "              <a href=\"https://shopee.co.id/Buku-Panduan-Lengkap-Pemrograman-C-Untuk-Menguasai-Unity-Segala-Sesuatu-Yang-dibutuhkan-Untuk-Menguasai-Game-Engine-Unity-cd-Punto-Damar-i.889333257.42215087814\" target=\"_blank\">Unity 3D scripting</a>.\n" +
        "              The books took massive hits, especially the Construct 2 one because it's often referenced in college undergraduate thesis to make education based game.\n" +
        "              If you type <a href=\"https://www.google.com/search?q=punto+damar+construct+2&oq=punto+damar+construct+2\" class='italic' target=\"_blank\">\"punto damar construct 2\"</a> on google search query, you can find a lot of e-catalog libraries mentioning that the book exists in their repository, reflecting my deep expertise in the subject.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>My online presence can also be found in Construct 2 <a href=\"https://www.facebook.com/groups/constructindo\" target=\"_blank\">facebook group</a>.\n" +
        "              I served as one of the active admin and contributor. In 2020, Dicoding Indonesia offered us to be their mentor in game development\n" +
        "              academy titled <a href=\"https://www.dicoding.com/academies/47\" target=\"blank\">\"Menjadi Game Developer Expert\"</a> and <a href=\"https://www.dicoding.com/academies/65\" target=\"_blank\">\"Belajar Membuat Game dengan Construct 2\"</a>.\n" +
        "             With approximately 70 hours of content, a number of 7800-ish people took the class before it was closed due to the engine is marked as obsolete by the developer.\n" +
        "            </p>\n" +
        "          </div>",
    techStacks: [
      {text: "Unity", logo: appConfig.site.logo.unity},
      {text: "Construct 2", logo: appConfig.site.logo.construct},
      {text: "C#", logo: appConfig.site.logo.csharp},
    ],
  },
  {
    name: "GameLan",
    logo: appConfig.site.logo.gamelan,
    href: "https://www.instagram.com/gamelan.yk/?hl=en",
    yearsOfEmployment: "2013 - 2018",
    role: "Community Member",
    description: "          <h5 class=\"font-bold text-heading\">Overview</h5>\n" +
        "          <div class=\"text-text text-pretty\">\n" +
        "            <p>\n" +
        "              Gamelan is a game development community in Yogyakarta. I like to play video games so becoming a game developer is what I was aspired to be.\n" +
        "              During our weekly meetup at Jogja Digital Valley (now IndigoHub Jogja), we share about our devlogs, tips n tricks, <span class=\"italic\">post mortem</span>, marketing, and basically anything related to game development.\n" +
        "              I also participated to be one of the speaker, talking about <a href=\"https://www.slideshare.net/slideshow/usability-testing-54551522/54551522\" target=\"_blank\"  >usability testing</a>.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>\n" +
        "              Every year, I also actively participated <a href=\"https://globalgamejam.org/\" target=\"_blank\"  > Global Game Jam</a>. An event where we build a game in 48 hours with total strangers.\n" +
        "              I participated for 4 times. The games I made during the jam can be viewed on their<a href=\"https://v3.globalgamejam.org/users/punto-damar-p\" target=\"_blank\"  > page</a>.\n" +
        "              We sometimes held our own jams too. For example to <a href=\"https://youtu.be/FiT2tM3Glac?t=410\" target=\"_blank\"  >celebrate Indonesia's independence day</a>.\n" +
        "            </p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>\n" +
        "              We also succesfully initiated and held <a href=\"https://id.techinasia.com/ingame-indonesian-indie-game-festival\" target=\"_blank\"  >Indonesia Indie Game Festival (IN.GAME)</a>, a gamedev metup and showcase for every indie game studio in Indonesia.\n" +
        "              Here, I was responsible for building the <a href=\"http://ingamefest.com/\" target=\"_blank\"  >landing and registration site</a>,\n" +
        "              and <a href=\"https://www.dicoding.com/events/85\" target=\"_blank\"  > mentored a game programming workshop for beginner</a>. Of course, I participated in the <a href=\"https://gamejolt.com/games/final-block-fantasy/86382\">game jam session</a> too.\n" +
        "            </p>\n" +
        "            <h5 class=\"font-bold text-heading mt-10\">Publications</h5>\n" +
        "            <ul class=\"list-disc list-inside\">\n" +
        "              <li>Tech In Asia: <a href=\"https://id.techinasia.com/ingame-indonesian-indie-game-festival\" target=\"_blank\">IN.GAME Indonesia Indie Game Festival – Bukti Nyata Industri Game yang Tengah Berkembang</a></li>\n" +
        "              <li class='mt-5 md:mt-0'>IDN Times: <a href=\"https://duniaku.idntimes.com/geek/culture/in-game-festival-2016-pesta-game-indie-indonesia-00-hjc4x-ch6zp3\" target=\"_blank\">IN.GAME Festival 2016, Serunya Pesta Game Indie Terbesar di Indonesia!</a></li>\n" +
        "              <li class='mt-5 md:mt-0'>IDN Times: <a href=\"https://duniaku.idntimes.com/geek/culture/in-game-festival-2016-2-00-hjc4x-qkzcyd\">IN.GAME Festival 2016 Siap Digelar, Ajang Kumpul Lebih dari 50 Studio Game Indonesia!</a></li>\n" +
        "            </ul> "+
        "          </div>"
  }
]
</script>



