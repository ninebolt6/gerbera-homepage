<template>
  <div id="home" class="bg-red-300 text-white p-8">
    <header class="flex lg:text-xl md:font-semibold py-8 mb-8 bg-dark-red md:sticky md:top-0 md:z-10">
      <a href="#home" class="ml-8 md:ml-16 lg:text-2xl">Gerbera Productions</a>
      <li class="flex ml-auto mr-8 md:mr-16">
        <ul class="mx-4">
          <a href="#home">Home</a>
        </ul>
        <ul class="mx-4">
          <a href="#about">About</a>
        </ul>
        <ul class="mx-4">
          <a href="#services">Services</a>
        </ul>
        <ul class="mx-4">
          <a href="#team">Team</a>
        </ul>
        <ul class="mx-4">
          <a href="#contact">Contact</a>
        </ul>
      </li>
    </header>
    <section class="bg-image1 py-24">
      <div class="relative mx-32 px-8 py-16">
        <img src="/box.svg">
        <span class="absolute text-9xl top-0 left-12">G</span>
        <h1 class="absolute text-6xl top-24 left-20 font-semibold text-red-300">
          Gerbera<br>
          Productions
        </h1>
      </div>
    </section>
    <section id="about" class="text-center bg-dark-red py-64">
      <p class="text-4xl mb-2">
        「変化」とは何かをテーマに活動する<br>
        映画制作団体「Gerbera」
      </p>
      <p>
        We are making a film on the theme of change.<br>
        Film Production Organization "Gerbera"
      </p>
    </section>
    <section id="services" class="text-center text-base bg-dark-red py-48">
      <h2>What We Do</h2>
      <div class="flex text-left mx-16 text-xl">
        <div class="mx-8">
          <div class="h-1/2">
            <img src="/box_services.svg">
            <h3 class="relative -top-28 left-4 text-3xl">
              俳優育成<br>
              Actor Training
            </h3>
          </div>
          <p>ワークショップ型オーディションを開催。老若男女、経験の有無問わず参加可能。</p>
          <p>A workshop-type audition will be held. Both men and women of all ages, with or without experience, are welcome to participate.</p>
        </div>
        <div class="mx-8">
          <div class="h-1/2">
            <img src="/box_services.svg">
            <h3 class="relative -top-28 left-4 text-3xl">
              映画制作<br>
              Film Production
            </h3>
          </div>
          <p>人間にとって「変わる」とは何かを追求。様々なジャンルや映画形式に挑戦。</p>
          <p>Pursuing what "change" means to human beings. We challenges various genres and film formats.</p>
        </div>
        <div class="mx-8">
          <div class="h-1/2">
            <img src="/box_services.svg">
            <h3 class="relative -top-28 left-4 text-3xl">
              経験の場作り<br>
              Creating a place of experience
            </h3>
          </div>
          <p>一人でも多くの人が芸術に携われるように、経験する場を作り、提供していきます。</p>
          <p>We will create and provide a place to experience so that as many people as possible can be involved in the arts.</p>
        </div>
      </div>
    </section>
    <section id="team" class="text-center bg-dark-red py-48">
      <h2 class="py-8">
        Meet the Team
      </h2>
      <div class="flex justify-center text-left">
        <div class="mx-8">
          <img src="/taiyo_mizoguchi_profile.png">
          <p class="font-semibold">
            溝口 太陽
          </p>
          <p class="font-semibold">
            Taiyo Mizoguchi
          </p>
          <p class="text-xl my-2">
            Director,Actor
          </p>
        </div>
        <div class="mx-8">
          <img src="/fuka_sekiguchi_profile.png">
          <p class="font-semibold">
            関口 風花
          </p>
          <p class="font-semibold">
            Fuka Sekiguchi
          </p>
          <p class="text-xl my-2">
            Writer,Director
          </p>
        </div>
      </div>
    </section>
    <section id="contact" class="text-center py-48 bg-dark-red">
      <h2>Contact Us</h2>
      <span>UNDER CONSTRUCTION</span>
    </section>
  </div>
</template>

<style scoped>
h2 {
  font-size: 46px;
}
.bg-image1 {
  background-image: url("/home1.png");
}

p {
  @apply text-3xl;
}
</style>
