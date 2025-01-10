// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@pinia/nuxt"],
	plugins: ["@/plugins/screenWidthClass.client.js", "@/plugins/fontAwesome.js"],

	css: ["@/assets/styles/reset/index.css", "@/assets/styles/common/commonStyle.css"],
})
