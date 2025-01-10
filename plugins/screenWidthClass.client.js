export default defineNuxtPlugin((nuxtApp) => {
	const updateScreenClass = () => {
		if (window.innerWidth < 768) {
			document.documentElement.classList.add("mobile")
			document.documentElement.classList.remove("pc")
		} else {
			document.documentElement.classList.add("pc")
			document.documentElement.classList.remove("mobile")
			document.documentElement.classList.remove("lock")
		}
	}

	nuxtApp.hook("app:mounted", () => {
		updateScreenClass()
		window.addEventListener("resize", updateScreenClass)
	})

	nuxtApp.hook("app:unmounted", () => {
		window.removeEventListener("resize", updateScreenClass)
	})
})
