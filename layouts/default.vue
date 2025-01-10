<template>
	<div class="wrapper">
		<Header />
		<main class="">
			<NuxtPage />
		</main>
		<Footer />
	</div>
</template>

<script setup>
import Header from "@/components/header/Header.vue"
import Footer from "@/components/footer/Footer.vue"
</script>
