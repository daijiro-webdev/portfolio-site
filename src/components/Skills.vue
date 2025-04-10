<template>
    <section class="bg-gray-50 py-20">
        <div class="max-w-5xl mx-auto px-6 text-center">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
                Skills
            </h2>
            <div
                class="grid grid-cols-2 md:grid-cols-3 gap-12 items-center justify-items-center"
            >
                <div class="flex flex-col items-center">
                    <img :src="HtmlIcon" alt="HTML" class="w-20 h-20 mb-3" />
                    <p class="text-gray-700 font-semibold">HTML5</p>
                </div>
                <div class="flex flex-col items-center">
                    <img
                        :src="JsIcon"
                        alt="JavaScript"
                        class="w-20 h-20 mb-3"
                    />
                    <p class="text-gray-700 font-semibold">JavaScript</p>
                </div>
                <div class="flex flex-col items-center">
                    <img :src="VueIcon" alt="Vue" class="w-20 h-20 mb-3" />
                    <p class="text-gray-700 font-semibold">Vue.js</p>
                </div>
                <div class="flex flex-col items-center">
                    <img :src="ReactIcon" alt="React" class="w-20 h-20 mb-3" />
                    <p class="text-gray-700 font-semibold">React</p>
                </div>
                <div class="flex flex-col items-center">
                    <img
                        :src="GithubIcon"
                        alt="GitHub"
                        class="w-20 h-20 mb-3"
                    />
                    <p class="text-gray-700 font-semibold">GitHub</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import HtmlIcon from "@/assets/icons/html5-original.svg";
import JsIcon from "@/assets/icons/html5-original.svg";
import VueIcon from "@/assets/icons/html5-original.svg";
import ReactIcon from "@/assets/icons/html5-original.svg";
import GithubIcon from "@/assets/icons/html5-original.svg";
</script>
