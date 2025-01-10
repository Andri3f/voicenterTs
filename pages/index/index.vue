<template>
	<div>
		<MainSection :contentData="mainSectionData" />
		<ArticlesSection :articles="data.testTaskSecondDescriptiveBlockItems" />
		<SlideSection :swiperListData="data.testTaskSlidesBlockSlides" />
	</div>
</template>

<script setup>
import MainSection from "@/components/home/MainSection.vue"
import SlideSection from "@/components/home/SlideSection.vue"
import ArticlesSection from "@/components/home/articles/ArticlesSection.vue"
import { useHomeStoreStore } from "@/store/modules/mainPage.js"

const homeStoreStore = useHomeStoreStore()
const { data } = storeToRefs(homeStoreStore)
const { fetchData } = homeStoreStore
let mainSectionData = ref({})

onMounted(async () => {
	await fetchData()
	const { testTaskHeaderImage, testTaskHeaderImageAltText, testTaskHeaderTitle, testTaskHeaderSubtitle, testTaskHeaderText } = data.value
	mainSectionData.value = {
		imgSrc: testTaskHeaderImage,
		imgAltText: testTaskHeaderImageAltText,
		title: testTaskHeaderTitle,
		subtitle: testTaskHeaderSubtitle,
		text: testTaskHeaderText,
	}
})
</script>

<style scoped></style>
