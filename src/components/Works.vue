<template>
    <section id="works" class="py-16">
        <h2 class="text-3xl font-bold mb-8 text-primary">Works</h2>

        <Carousel
            :itemsToShow="1.2"
            :wrapAround="true"
            class="rounded-xl shadow-md"
        >
            <Slide v-for="(item, index) in works" :key="index">
                <div
                    class="bg-white p-6 rounded-xl shadow-md flex flex-col gap-4"
                >
                    <img
                        :src="item.image"
                        :alt="item.title"
                        class="rounded-lg h-40 object-cover"
                    />
                    <h3 class="text-xl font-bold">{{ item.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ item.description }}</p>
                </div>
            </Slide>
        </Carousel>
    </section>
</template>

<script setup>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const works = [
    {
        title: "コーポレートサイト（本業）",
        description:
            "企業向けのレスポンシブなWebサイト（LP+CMS）を担当しました。",
        image: "https://via.placeholder.com/600x300?text=Corporate+Site",
    },
    {
        title: "社内向けWebアプリ",
        description:
            "業務効率化のためのVueアプリ。UI設計とコンポーネント実装を担当。",
        image: "https://via.placeholder.com/600x300?text=Internal+Tool",
    },
    {
        title: "管理画面UI",
        description: "React + Tailwindでモダンな管理画面を構築しました。",
        image: "https://via.placeholder.com/600x300?text=Admin+Dashboard",
    },
];
</script>
