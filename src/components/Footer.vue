<template>
    <footer class="bg-blue-100 text-gray-700 py-8 mt-16">
        <div
            class="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4"
        >
            <div class="text-center md:text-left">
                <h3 class="text-lg font-semibold text-blue-700">
                    Daijiro Portfolio
                </h3>
                <p class="text-sm text-gray-500">
                    © 2025 Daijiro. All rights reserved.
                </p>
            </div>

            <!-- 将来的にSNSやお問い合わせを入れられる場所 -->
            <div class="flex gap-4">
                <button
                    class="transition hover:scale-110 duration-200 text-blue-700 hover:text-blue-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                </button>
                <button
                    class="transition hover:scale-110 duration-200 text-blue-700 hover:text-blue-900"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 4v16h16V4H4z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    </footer>
</template>

<script setup>
// 今のところJSは無しでOK！
</script>
