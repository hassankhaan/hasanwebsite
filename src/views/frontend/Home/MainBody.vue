<template>
    <div class="bg-white container mx-auto max-w-7xl p-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
            <div class="order-2 md:order-1 lg:order-1 mt-4">
                <h1 class="text-5xl font-black text-blue-600 drop-shadow-xl text-shadow-home-txt">Hello</h1>
                <h1 class="text-6xl lg:text-7xl font-black text-blue-600 text-shadow-home-txt mb-2">I AM HASAN</h1>
                <p class="text-black-600 text-lg my-8">A skilled and experienced web developer with a strong understanding of the latest web development technologies and trends.</p>
                <button class="btn btn-outline text-xl text-bold text-blue-600 hover:bg-blue-600 hover:border-blue-600">Hire ME</button>
            </div>
            <div class="order-1 md:order-2 lg:order-2">
                <img src="/photo/hasan.jpg" alt="Hasan Khan Photo">
            </div>
        </div>
        <div class="grid grid-cols-1 items-center mt-12">
            <h1 class="text-6xl lg:text-7xl font-black text-blue-600 text-shadow-home-txt text-center">About Me</h1>
            <p class="text-black-600 text-lg mb-2 text-center mt-1">Skills and Experience</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center">
                <div class="lg:">
                    <img src="/photo/about_me_section.png" alt="image">
                </div>
                <div class="mt-8 lg:mt-0 md:mt-0">
                    <h1 class="text-5xl font-black text-blue-600 drop-shadow-xl text-shadow-home-txt-2">PHP Developer And Laravel Expert</h1>
                    <p class="text-black-600 text-lg my-8">Hi, I'm Hasan Khan, a web developer with expertise in Laravel, WordPress, PHP, Java, Vue.js, React.js, and MySQL. I am passionate about building and maintaining high-performing, user-friendly web applications and websites. I have a proven track record of success in developing responsive and trendy e-commerce websites. I am skilled in using the latest web development technologies and trends to create websites that are both visually appealing and functional. Hope You Will Enjoy Working with me.</p>
                    <button class="btn btn-outline text-xl text-bold text-blue-600 hover:bg-blue-600 hover:border-blue-600">Download CV</button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 mt-12">
            <h1 class="text-2xl lg:text-5xl font-black text-blue-600 text-center">We Use Technologies</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-12 text-center">
                <div
                v-for="(image, index) in images"
                :key="index"
                class="rounded-full shadow-xl bg-white w-full h-full p-2 overflow-hidden border-2 border-blue-600 hover:scale-105 hover:shadow-2xl hover:bg-blue-200 transform transition-transform duration-300"
                >
                <img class="w-full h-full p-4" :src="image.src" :alt="image.alt">
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 mt-12">
            <h1 class="text-2xl lg:text-5xl font-black text-blue-600 text-center">Service</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mt-12 text-center">
                
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
  data() {
    return {
      images: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/images')
      .then(response => {
        this.images = response.data;
      })
      .catch(error => {
        console.error(error);
      });
  }
};
</script>
