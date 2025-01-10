<template>
	<section id="block1" class="main-section">
		<div class="main-section__container">
			<div class="main-section__content">
				<h1 class="main-section__title">{{ contentData.title }}</h1>
				<div class="main-section__subtile">{{ contentData.subtitle }}</div>
				<div class="main-section__text">
					<p v-html="cleanedText"></p>
				</div>
				<a href="https://www.google.com/" class="main-section__button button">Read more</a>
			</div>
			<div class="main-section__image">
				<img :src="contentData.imgSrc" :alt="contentData.imgAltText" />
			</div>
		</div>
	</section>
</template>

<script setup>
import DOMPurify from "dompurify"

const props = defineProps({
	contentData: {
		type: Object,
	},
})

const cleanedText = computed(() => {
	return DOMPurify.sanitize(props.contentData.text)
})
</script>

<style scoped>
.main-section {
	padding: 43px 0 clamp(2.5rem, 1.775rem + 3.627vw, 4.813rem) 0;
	background-color: #eeeeee;
	margin-bottom: 24px;
}
.main-section__container {
	display: flex;
	gap: clamp(2.5rem, -0.269rem + 5.769vw, 4.563rem);
	font-weight: 500;
	line-height: 1.2;
}
@media (max-width: 767.98px) {
	.main-section__container {
		flex-direction: column;
		align-items: center;
	}
}

.main-section__title {
	font-size: 25px;
	margin-bottom: 14px;
}
.main-section__title:last-child {
	margin-bottom: 0;
}
.main-section__subtile {
	font-size: 20;
	margin-bottom: 14px;
}
.main-section__subtile:last-child {
	margin-bottom: 0;
}

.main-section__text {
	font-weight: 400;
	left: 1.18;
	margin-bottom: clamp(1.875rem, 1.483rem + 1.961vw, 3.125rem);
}
.main-section__text:last-child {
	margin-bottom: 0;
}
.main-section__text p {
	margin-bottom: 7px;
}
.main-section__text p:last-child {
	margin-bottom: 0;
}
.main-section__image {
	flex: 0 0 45.8%;
	position: relative;
}
@media (max-width: 767.98px) {
	.main-section__image {
		padding-bottom: 50%;
		width: 100%;
	}
}
.main-section__image img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}
</style>
