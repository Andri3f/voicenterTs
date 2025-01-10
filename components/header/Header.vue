<template>
	<header ref="header" :class="{ 'menu-open': isMenuOpen }" class="header">
		<div class="header__container">
			<NuxtLink to="/" class="header__logo">LOGO</NuxtLink>
			<nav class="header__nav">
				<ul class="header__list">
					<li class="header__item"><button @click="scrollToBlock('block1')">Nav1</button></li>
					<li class="header__item"><button @click="scrollToBlock('block2')">Nav2</button></li>
					<li class="header__item"><button @click="scrollToBlock('block3')">Nav3</button></li>
				</ul>
			</nav>
			<button type="button" @click="toggleMenu" class="icon-menu"><span></span></button>
		</div>
	</header>
</template>

<script setup>
import { useUiStore } from "@/store/modules/ui.js"

const uiStore = useUiStore()
const { isMenuOpen } = storeToRefs(uiStore)
const { toggleMenu } = uiStore
const header = ref()
const scrollToBlock = (blockId) => {
	const target = document.getElementById(blockId)
	if (target) {
		const headerHeight = header.value.offsetHeight
		window.scrollTo({
			top: target.offsetTop - headerHeight,
			behavior: "smooth",
		})
	}
}
</script>
<style scoped>
.header {
	position: fixed;
	z-index: 90;
	top: 0;
	left: 0;
	width: 100%;
	min-height: clamp(4.688rem, 4.178rem + 2.549vw, 6.313rem);
	background-color: #d9d9d9;
	opacity: 0.9;
	padding: 15px 0;
	display: grid;
}
.header__container {
	max-width: 1254px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
}

.header__logo {
	position: relative;
	z-index: 5;
	font-size: clamp(1.25rem, 0.83rem + 0.874vw, 1.563rem);
	white-space: nowrap;
	font-weight: 500;
}
.mobile .header__nav {
	position: fixed;
	transition: left 0.3s ease 0s;
	width: 100%;
	height: 100%;
	flex-direction: column;
	text-align: center;
	top: 0;
	left: -100%;
	padding: 150px 50px;
	background-color: #a4a4a4e8;
	overflow: auto;
}
.mobile .header__nav::before {
	content: "";
	position: fixed;
	transition: left 0.3s ease 0s;
	z-index: 5;
	top: 0;
	left: -100%;
	width: 100%;
	height: clamp(4.688rem, 4.178rem + 2.549vw, 6.313rem);
	background-color: #707070f1;
}
.mobile .menu-open .header__nav,
.mobile .menu-open .header__nav::before {
	left: 0;
}

.header__list {
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	column-gap: 62px;
	row-gap: 5px;
}
.mobile .header__list {
	flex-direction: column;
	row-gap: 50px;
	font-size: 30px;
}
.header__item {
	font-weight: 700;
	transition: color 0.3s ease 0s;
	line-height: 1.25;
}

@media (any-hover: hover) {
	.header__item:hover {
		color: #ff0000;
	}
}

/* menu-burger */
.icon-menu {
	display: none;
}

.mobile .icon-menu {
	display: block;
	position: relative;
	width: 30px;
	height: 18px;
	z-index: 5;
}

.mobile .icon-menu span,
.mobile .icon-menu::before,
.mobile .icon-menu::after {
	content: "";
	transition: all 0.3s ease;
	right: 0;
	position: absolute;
	width: 100%;
	height: 2px;
	background-color: #000;
}

.mobile .icon-menu::before {
	top: 0;
}

.mobile .icon-menu::after {
	bottom: 0;
}

.mobile .icon-menu span {
	top: 50%;
	transform: translateY(-50%);
}

.mobile .menu-open .icon-menu span {
	width: 0;
}

.mobile .menu-open .icon-menu::before {
	top: 50%;
	transform: rotate(-45deg) translateY(-50%);
}

.mobile .menu-open .icon-menu::after {
	bottom: 50%;
	transform: rotate(45deg) translateY(50%);
}

@media (any-hover: none) {
	.mobile .icon-menu {
		cursor: default;
	}
}
</style>
