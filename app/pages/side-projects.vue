<template>

  <div class="pt-14 px-8 mt-20 mx-auto max-w-7xl pb-20">
    <h1 class="text-5xl font-semibold tracking-tight text-pretty text-heading sm:text-7xl text-center lg:text-left">
      Side Projects
    </h1>

    <section class="mx-auto max-w-7xl px-6">
      <div
          v-for="(c,i) in projects"
          :key="c.i"
          class="mt-20 grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16 md:gap-y-0"
      >

        <aside class="min-w-0 self-start md:sticky md:top-16 md:col-span-4">
          <div class="flex flex-col min-w-0 items-center md:items-start text-center md:text-left gap-y-5">

            <div class="flex flex-col items-center gap-y-3 md:flex-row md:items-start md:gap-x-5 w-full">
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

        <article class="min-w-0 hidden md:block md:col-span-8 ">
          <div class="text-text text-pretty prose" v-html="c.description">

          </div>
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
useSeoMeta({ title: "Punto Damar | Side Projects" })
const appConfig = useAppConfig()
const drawerContent = reactive({open: false, company: null})
provide('drawer', drawerContent)


const openDrawer = (index) => {

  drawerContent.open = !drawerContent.open

  if(drawerContent.open === true) {
    drawerContent.company = projects[index]
    console.log(drawerContent.company)
  }
}
definePageMeta({
  accentFillColor: 'fill-bg',
})


const projects = [
  {
    name: "Jogja Smash Sports",
    href: "#",
    description: "          <div class=\"text-text text-pretty\">\n" +
        "            <h5 class=\"font-bold text-heading\">Overview</h5>\n" +
        "            <p>Inspired by my struggle to play badminton regularly, I'm acting as if I am a business owner targeting busy professionals who optimize every minute to play sports. No detours, no delays.\n" +
        "              <br/>An integrated badminton center where you can book courts, buy pro equipments, and order food in a single, time-saving experience.</p>\n" +
        "\n" +
        "            <br/>\n" +
        "            <p>Why it matters: time is the true luxury.</p>\n" +
        "            <br/>\n" +
        "\n" +
        "            <h5 class=\"font-bold text-heading\">Features</h5>\n" +
        "            <ul class=\"list-disc list-inside\">\n" +
        "              <li>Book courts online with live availability & instant confirmation</li>\n" +
        "              <li>Browse, compare, and buy rackets, shoes, strings</li>\n" +
        "              <li>Order food timed to your session</li>\n" +
        "            </ul>\n" +
        "          </div>",
    techStacks: [
      { text: "Laravel", logo: appConfig.site.logo.laravel },
      {text: "Tailwind", logo: appConfig.site.logo.tailwind},
      {text: "Vue.js", logo: appConfig.site.logo.vue},
      {text: "Inertia.js", logo: appConfig.site.logo.inertia},
    ]
  },
  {
    name: "Indonesia Indie Game Festival",
    href: "#",
    description: "            <h5 class=\"font-bold text-heading\">Overview</h5>\n" +
        "            <p>IN.GAME Fest (Indonesia Indie Game Festival) was announced as a platform to strengthen the country’s gaming ecosystem.\n" +
        "              Organized to unite developers, publishers, investors, and gamers, IN.GAME aimed to showcase the creativity and innovation of local indie game developers while fostering collaboration within the industry.\n" +
        "              The festival featured exhibitions, competitions, and networking sessions, giving developers exposure to media and investors, as well as opportunities to overcome challenges related to funding, marketing, and distribution.\n" +
        "              IN.GAME sought to further boost Indonesia’s growing game development community and encourage the production of high-quality local games.\n" +
        "            </p>\n" +
        "\n" +
        "            <h5 class=\"font-bold text-heading mt-10\">My Roles</h5>\n" +
        "            <ul class=\"list-disc list-inside\">\n" +
        "              <li>Developed the landing and online submission site (the page is now dead tho)</li>\n" +
        "              <li class='mt-5 md:mt-0'>Act as the <a href=\"https://www.dicoding.com/events/85\" target=\"_blank\">workshop mentor</a>  to introduce game development for beginners</li>\n" +
        "              <li class='mt-5 md:mt-0'>Participate in game jam, where  I built a <a href=\"https://gamejolt.com/games/final-block-fantasy/86382\" target=\"_blank\">2D hack n slash game</a> in 48 hours with total strangers</li>\n" +
        "            </ul>\n" +
        "\n" +
        "            <h5 class=\"font-bold text-heading mt-10\">Publications</h5>\n" +
        "            <ul class=\"list-disc list-inside\">\n" +
        "              <li>Tech In Asia: <a href=\"https://id.techinasia.com/ingame-indonesian-indie-game-festival\" target=\"_blank\">IN.GAME Indonesia Indie Game Festival – Bukti Nyata Industri Game yang Tengah Berkembang</a></li>\n" +
        "              <li class='mt-5 md:mt-0'>IDN Times: <a href=\"https://duniaku.idntimes.com/geek/culture/in-game-festival-2016-pesta-game-indie-indonesia-00-hjc4x-ch6zp3\" target=\"_blank\">IN.GAME Festival 2016, Serunya Pesta Game Indie Terbesar di Indonesia!</a></li>\n" +
        "              <li class='mt-5 md:mt-0'>IDN TImes: <a href=\"https://duniaku.idntimes.com/geek/culture/in-game-festival-2016-2-00-hjc4x-qkzcyd\">IN.GAME Festival 2016 Siap Digelar, Ajang Kumpul Lebih dari 50 Studio Game Indonesia!</a></li>\n" +
        "            </ul>",
    techStacks: [
      {text: "Laravel", logo: appConfig.site.logo.laravel},
      {text: "Bootstrap", logo: appConfig.site.logo.bootstrap},
      {text: "jQuery", logo: appConfig.site.logo.jquery},
      {text: "Construct 2", logo: appConfig.site.logo.construct},
    ]
  },
  {
    name: "Menjadi Game Developer Expert",
    href: "https://www.dicoding.com/academies/47",
    description: "            <p>\n" +
        "              In partnership with <a href=\"https://www.dicoding.com/\" target=\"_blank\">Dicoding Indonesia</a>, I was invited to be the co-creator for their upcoming game development academy\n" +
        "              <a href=\"https://www.dicoding.com/academies/65\" target=\"_blank\">Belajar Membuat Game dengan Construct 2</a>, as part of bigger academy section\n" +
        "              <a href=\"https://www.dicoding.com/academies/47\" target=\"_blank\">Menjadi Game Developer Expert</a>. We sucessfully help around 7800 people begin their game development journey.\n" +
        "            </p>",
    techStacks: [
      {text: "Construct 2", logo: appConfig.site.logo.construct},
    ]
  },
  {
    name: "Book Publishing: \"Bikin Game Tanpa Coding dengan Construct 2\"",
    href: "https://www.gramedia.com/products/bikin-game-tanpa-coding-dengan-construct-2-cd?srsltid=AfmBOooPn3hEymKL0m6boIDiidpCNx1EagoqFtVuvpicu9wfpYqLR_ZA",
    description: "            <p>\n" +
        "              In 2016, I published the book with <a href=\"https://www.linkedin.com/company/andi-offset\" target=\"_blank\">Andi Offset</a> as the publisher.\n" +
        "              We printed around 2000 copies and it became a massive hit since the book was often referenced in undergraduate thesis to create education based games.\n" +
        "              If you type <a href=\"https://www.google.com/search?q=punto+damar+construct+2&oq=punto+damar+construct+2\" target=\"_blank\">\"punto damar construct 2\"</a> on google search query, you can find a lot of e-catalog libraries mentioning that the book exists in their repository, reflecting my deep expertise in the subject.\n" +
        "            </p>",
    techStacks: [
      {text: "Construct 2", logo: appConfig.site.logo.construct},
    ]
  },
  {
    name: "Book Publishing: \"Panduan Lengkap Pemrograman C# untuk Menguasai Unity\"",
    href: "https://shopee.co.id/Buku-Panduan-Lengkap-Pemrograman-C-Untuk-Menguasai-Unity-Segala-Sesuatu-Yang-dibutuhkan-Untuk-Menguasai-Game-Engine-Unity-cd-Punto-Damar-i.889333257.42215087814",
    description: "<p>I also made books on Unity, focusing at C# scripting.</p>",
    techStacks: [
      {text: "Unity 3D", logo: appConfig.site.logo.unity},
      {text: "C#", logo: appConfig.site.logo.csharp},
    ]
  },

]
</script>



