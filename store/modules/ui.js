import { defineStore } from "pinia"
import { ref } from "vue"

export const useUiStore = defineStore("ui", () => {
	const isMenuOpen = ref(false)

	const toggleMenu = () => {
		isMenuOpen.value = !isMenuOpen.value
		if (isMenuOpen.value) document.documentElement.classList.add("lock")
		else document.documentElement.classList.remove("lock")
	}

	const closeMenu = () => {
		isMenuOpen.value = false
		document.documentElement.classList.remove("lock")
	}

	const openMenu = () => {
		isMenuOpen.value = true
		document.documentElement.classList.add("lock")
	}

	return {
		isMenuOpen,
		toggleMenu,
		closeMenu,
		openMenu,
	}
})
