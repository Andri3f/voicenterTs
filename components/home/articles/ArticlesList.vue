<template>
	<div class="articles-list">
		<div class="articles-list__item item-article" v-for="articleData in articles" :key="articleData.key">
			<div class="item-article__content">
				<h4 class="item-article__title">{{ articleData.title }}</h4>
				<div class="item-article__subtitle">{{ articleData.subtitle }}</div>
				<div class="item-article__text">
					<p v-html="getClearText(articleData.text)"></p>
				</div>
				<a class="item-article__button button" :href="articleData.buttonLink">{{ articleData.buttonText }}</a>
			</div>
			<div class="item-article__image">
				<img :src="articleData.image" :alt="articleData.imageAltAtr" />
			</div>
		</div>
	</div>
</template>

<script setup>
import DOMPurify from "dompurify"
const props = defineProps({
	articles: {
		type: Array,
		default: () => [],
	},
})
function getClearText(text) {
	return DOMPurify.sanitize(text)
}
</script>

<style scoped>
.item-article {
	display: flex;
	gap: 30px;
	margin-bottom: clamp(3.75rem, 2.279rem + 7.353vw, 8.438rem);
}
.item-article:last-child {
	margin-bottom: 0;
}
@media (min-width: 768px) {
	.item-article:nth-of-type(odd) {
		flex-direction: row-reverse;
	}
}
@media (max-width: 767.98px) {
	.item-article {
		flex-direction: column;
		align-items: center;
	}
}
.item-article__title {
	font-weight: 700;
	line-height: 1.2;
	margin-bottom: 10px;
}
.item-article__title:last-child {
	margin-bottom: 0;
}
.item-article__subtitle {
	line-height: 1.2;
	font-weight: 500;
	margin-bottom: 12px;
}
.item-article__subtitle:last-child {
	margin-bottom: 0;
}
.item-article__text {
	margin-bottom: clamp(1.563rem, 1.072rem + 2.451vw, 3.125rem);
}
.item-article__text p {
	line-height: 1.2;
	margin-bottom: 5px;
}
.item-article__text p:last-child {
	margin-bottom: 0;
}
.item-article__button {
	display: inline-block;
}
.item-article__image {
	flex: 0 0 43.5%;
	width: 100%;
	position: relative;
}
@media (max-width: 767.98px) {
	.item-article__image {
		padding-bottom: 50%;
	}
}
.item-article__image img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}
</style>
