<template>
	<footer class="footer">
		<div class="footer__container">
			<ul class="footer__list">
				<li class="footer__item">
					<a href="#">Contacts</a>
				</li>
				<li class="footer__item">
					<a href="#">social Links</a>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script setup></script>

<style scoped>
.footer {
	margin-top: 50px;
	padding: clamp(1.563rem, 0.723rem + 1.748vw, 2.188rem) 0;
	background-color: #d9d9d9;
}
.footer__container {
	max-width: 1254px;
}
.footer__list {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 10px;
	align-items: center;
}
.footer__item {
	font-weight: 700;
	font-size: clamp(1rem, 0.664rem + 0.699vw, 1.25rem);
	line-height: 1.25;
}
</style>
