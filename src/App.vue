<script setup>
import SideMenu from "./components/SideMenu.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Skills from "./components/Skills.vue";
import Works from "./components/Works.vue"; // ←追加
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="flex h-screen bg-background text-gray-800">
        <SideMenu />
        <main class="flex-1 overflow-y-auto p-6 space-y-20">
            <Hero />
            <About />
            <Skills />
            <Works />
            <Footer />
        </main>
    </div>
</template>
