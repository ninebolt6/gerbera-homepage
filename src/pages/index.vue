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
      <p class="text-3xl">
        We are making a film on the theme of change.<br>
        Film Production Organization "Gerbera"
      </p>
    </section>
    <section>
      <div class="h-[462px] bg-parallax" />
    </section>
    <section id="services" class="text-center text-base bg-dark-red py-32">
      <h2 class="mb-16">
        What We Do
      </h2>
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
    <section id="team" class="text-center bg-dark-red py-32">
      <h2 class="py-8">
        Meet the Team
      </h2>
      <div class="flex justify-center text-left">
        <div class="mx-8">
          <img src="/taiyo_mizoguchi_profile.png">
          <p class="text-3xl font-semibold">
            溝口 太陽
          </p>
          <p class="text-3xl font-semibold">
            Taiyo Mizoguchi
          </p>
          <p class="text-xl my-2">
            Director,Actor
          </p>
        </div>
        <div class="mx-8">
          <img src="/fuka_sekiguchi_profile.png">
          <p class="text-3xl font-semibold">
            関口 風花
          </p>
          <p class="text-3xl font-semibold">
            Fuka Sekiguchi
          </p>
          <p class="text-xl my-2">
            Writer,Director
          </p>
        </div>
      </div>
    </section>
    <section id="contact" class="text-center py-48 bg-dark-red">
      <div class="bg-[#470f0f] mx-32 py-4 rounded">
        <h2 class="mb-4">
          Contact Us
        </h2>
        <p class="text-xl my-2">
          お名前 Your Name
        </p>
        <input v-model="username" :class="{ 'border-red-500': isEmpty(username), 'border-green-600': !isEmpty(username) }" type="text">
        <p class="text-xl my-2">
          メールアドレス Email address
        </p>
        <input v-model="email" :class="{ 'border-red-500': isEmpty(email) || !isValidEmail, 'border-green-600': !isEmpty(email) && isValidEmail }" type="text" @focusout="validateEmail">
        <p class="text-xl my-2">
          メッセージ Message
        </p>
        <textarea v-model="message" :class="{ 'border-red-500': isEmpty(message), 'border-green-600': !isEmpty(message) }" class="text-black" placeholder="Add a message" /><br>
        <button class="text-lg my-4 px-4 py-2 border-4 shadow-lg hover:bg-white/50" @click="submit">
          送信 Submit
        </button>
        <p v-if="submitStatus" class="text-xl">
          {{ submitStatus }}
        </p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  setup () {
    const username = ref("")
    const email = ref("")
    const message = ref("")

    const isValidEmail = ref(true)
    const submitStatus = ref("")

    const isEmpty = (string: string) => {
      return !string
    }
    const validateEmail = () => {
      isValidEmail.value = checkEmailValidation(email.value)
    }

    const submit = () => {
      validateEmail()
      if (email.value && email.value && message.value) {
        sendMail()
        email.value = ""
        username.value = ""
        message.value = ""
        submitStatus.value = "送信に成功しました。 Your message has been submitted."
      } else if (!isValidEmail.value) {
        submitStatus.value = "有効なメールアドレスを入力してください。 Email address is invalid."
      } else {
        submitStatus.value = "空白の欄を埋めてください。 Fill in the blanks above."
      }
    }

    const { checkEmailValidation, sendMail } = useMailer()

    return {
      isEmpty,
      validateEmail,
      submit,
      username,
      email,
      message,
      isValidEmail,
      submitStatus
    }
  }
})

</script>

<style scoped>
h2 {
  font-size: 46px;
}
.bg-image1 {
  background-image: url("/home1.png");
}

.bg-parallax {
  background-image: url("/home2.png");
  background-size: cover;
  background-attachment: fixed;
}

#contact input {
  color: black;
  width: 40%;
  min-width: 20rem;
  max-width: 512px;
  height: 32px;
  @apply border-b-2;
}

#contact textarea {
  color: black;
  width: 40%;
  min-width: 20rem;
  max-width: 512px;
  height: 10rem;
  @apply border-b-2;
}
</style>
