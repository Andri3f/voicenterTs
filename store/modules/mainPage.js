import { defineStore } from "pinia"
import { ref } from "vue"

export const useHomeStoreStore = defineStore("home", () => {
	const data = ref([])
	const error = ref(null)

	const fetchData = async () => {
		error.value = null
		try {
			const response = await fetch("https://voicenter-test-api.voicenter-ltd.workers.dev/api/site-data")
			if (!response.ok) {
				throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
			}
			const fetchedData = await response.json()
			data.value = fetchedData?.data?.siteData?.testTaskTemplate_30_15673
		} catch (err) {
			error.value = `Some error try again ${err.message}`
			console.error(error.value)
		}
	}

	return {
		data,
		error,
		fetchData,
	}
})
