<template>
	<section id="block3" class="swiper-section">
		<div class="swiper-section__container">
			<h3 class="swiper-section__title title">Slide Section</h3>
			<div class="swiper-section__swiper-body">
				<div class="swiper-button-prev custom-nav">
					<font-awesome-icon :icon="['fas', 'arrow-left']" />
				</div>
				<div class="swiper-section__content">
					<swiper :pagination="pagination" :navigation="navigation" :space-between="60" :speed="700" :auto-height="true" :modules="modules" class="swiper-section__swiper section-slider">
						<swiper-slide class="section-slider__slide" v-for="slideData in listSwiper" :key="slideData.key">
							<div class="section-slider__content">
								<h6 class="section-slider__title title">{{ slideData.title }}</h6>
								<div class="section-slider__subtitle">{{ slideData.subtitle }}</div>
								<div class="section-slider__description">
									<p v-html="getClearText(slideData.description)"></p>
								</div>
								<a class="section-slider__button button" :href="slideData.buttonLink">Read More</a>
							</div>
							<div class="section-slider__image">
								<img :src="slideData.image" :alt="slideData.imageAlt" />
							</div>
						</swiper-slide>
					</swiper>
				</div>
				<div class="swiper-button-next custom-nav">
					<font-awesome-icon :icon="['fas', 'arrow-right']" />
				</div>
			</div>
			<div class="custom-pagination swiper-pagination"></div>
		</div>
	</section>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import DOMPurify from "dompurify"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { Pagination, Navigation } from "swiper/modules"

const props = defineProps({
	swiperListData: {
		type: [Array, String],
		default: () => [],
	},
})

function getClearText(text) {
	return DOMPurify.sanitize(text)
}

const modules = [Pagination, Navigation]
const pagination = {
	el: ".swiper-pagination",
	clickable: true,
}
const navigation = {
	prevEl: ".swiper-button-prev",
	nextEl: ".swiper-button-next",
}

const listSwiper = computed(() => {
	if (typeof props.swiperListData === "string") {
		try {
			return JSON.parse(props.swiperListData)
		} catch (error) {
			console.error("Failed to parse swiperListData:", error)
		}
	}
	return props.swiperListData
})
</script>
<style scoped>
:deep(.swiper-pagination-bullet) {
	width: 12px;
	height: 12px;
	background-color: #ff0000bf;
	margin: 0 6px;
	bottom: 0;
}

.custom-pagination {
	position: relative;
	margin-top: 80px;
	text-align: center;
}

.swiper-section__container {
	padding: 0 80px;
}

.swiper-section__title {
	text-align: center;
	margin-bottom: 87px;
}
.swiper-section__swiper-body {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	position: relative;
}

.swiper-section__content {
	position: relative;
	flex: 1;
	max-width: 100%;
}
.section-slider__slide {
	display: flex;
	justify-content: space-between;
	gap: 38px;
}
.section-slider__title {
	margin-bottom: 24px;
}

.section-slider__subtitle {
	margin-bottom: 24px;
}

.section-slider__description {
	margin-bottom: 24px;
	line-height: 1.2;
	font-size: 20px;
	font-weight: 700;
}

.section-slider__button {
	display: inline-block;
}

.section-slider__image {
	flex: 0 0 43%;
	position: relative;
}

.section-slider__image img {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	object-fit: cover;
}

@media (max-width: 920px) {
	.section-slider__image {
		width: 100%;
		padding-bottom: 50%;
	}
}

.swiper-pagination-bullet {
	width: 12px;
	height: 12px;
	background-color: #ff00005d;
}

.custom-nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	z-index: 10;
	cursor: pointer;
}

.swiper-button-prev {
	left: -65px;
}

.swiper-button-next {
	right: -65px;
}

.custom-nav svg {
	color: #000;
}

.custom-nav::after {
	display: none;
}
@media (max-width: 920px) {
	.section-slider__slide {
		flex-direction: column;
		align-items: center;
	}
	.section-slider__description {
		font-size: 16px;
	}
}
@media (max-width: 767.98px) {
	.section-slider__slide {
		flex-direction: column;
		align-items: center;
	}
	.section-slider__description {
		font-weight: 400;
	}
	.swiper-button-prev {
		left: -40px;
	}

	.swiper-button-next {
		right: -40px;
	}
	.swiper-section__container {
		padding: 0 50px;
	}
}
</style>
