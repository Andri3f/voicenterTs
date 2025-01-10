<template>
	<section id="block2" class="articles-section">
		<div class="articles-section__container">
			<h3 class="articles-section__title title">Section Title</h3>
			<div class="articles-section__body">
				<aside class="articles-section__aside aside-articles">
					<nav class="aside-articles__nav">
						<ul class="aside-articles__list">
							<li class="aside-articles__item" v-for="(item, index) in navItems" :key="index" :class="{ active: index === activeIndex }" @click="setActiveArticle(index)">
								{{ item }}
							</li>
						</ul>
					</nav>
				</aside>
				<div class="articles-section__content">
					<ArticlesList :articles="articlesList" />
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, computed } from "vue"
import ArticlesList from "./ArticlesList.vue"
const props = defineProps({
	articles: {
		type: [Array, String],
		default: () => [],
	},
})
const navItems = ["Nav 1", "Nav 2", "Nav 3"]
const activeIndex = ref(0)

const setActiveArticle = (index) => {
	activeIndex.value = index
}
const articlesList = computed(() => {
	let data = props.articles

	if (typeof props.articles === "string") {
		try {
			data = JSON.parse(props.articles)
		} catch (error) {
			console.error("Failed to parse articlesList:", error)
		}
	}

	if (activeIndex.value === 0) {
		return data
	} else if (activeIndex.value === 1) {
		return data.slice(1)
	} else if (activeIndex.value === 2) {
		return data.slice(2)
	}

	return data
})
</script>

<style scoped>
.articles-section {
	margin-bottom: 116px;
}
.articles-section__title {
	text-align: center;
	margin-bottom: 54px;
}
.articles-section__body {
	display: flex;
	gap: clamp(1.125rem, -0.302rem + 2.972vw, 2.188rem);
}

@media (max-width: 580px) {
	.articles-section__body {
		flex-direction: column;
		gap: 40px;
	}
}
@media (min-width: 581px) {
	.articles-section__aside {
		flex: 0 1 171px;
		min-width: 70px;
		max-width: 171px;
	}
}
.aside-articles__list {
	display: flex;
	flex-direction: column;
	gap: 40px;
}
@media (max-width: 580px) {
	.aside-articles__list {
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
}
.aside-articles__item {
	cursor: pointer;
	font-size: 20px;
	font-weight: 700;
	line-height: 1.2;
}
.aside-articles__item.active {
	color: #ff0000;
}
</style>
