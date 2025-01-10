// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: ["@pinia/nuxt"],
	plugins: ["@/plugins/screenWidthClass.client.js", "@/plugins/fontAwesome.js"],
	css: ["@/assets/styles/reset/index.css", "@/assets/styles/common/commonStyle.css"],
	server: {
		port: 3000, // Вказуємо номер порту
		host: "0.0.0.0", // Для доступу додатку через мережу
	},
})
