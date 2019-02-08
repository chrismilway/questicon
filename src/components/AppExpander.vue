<template>
	<transition
		name="expand"
		@enter="enter"
		@after-enter="afterEnter"
		@leave="leave"
	>
		<slot />
	</transition>
</template>

<script>
// Can take no credit for this
// Kudos goes to Markus Oberlehner
// https://markus.oberlehner.net/blog/transition-to-height-auto-with-vue/

export default {
	name: 'app-expander',
	methods: {
		enter(element) {
			const width = getComputedStyle(element).width;
			element.style.width = width;
			element.style.position = 'absolute';
			element.style.visibility = 'hidden';
			element.style.height = 'auto';
			const height = getComputedStyle(element).height;
			element.style.width = null;
			element.style.position = null;
			element.style.visibility = null;
			element.style.height = 0;
			getComputedStyle(element).height;
			setTimeout(() => {
				element.style.height = height;
			});
		},
		afterEnter(element) {
			element.style.height = 'auto';
		},
		leave(element) {
			const height = getComputedStyle(element).height;
			element.style.height = height;
			getComputedStyle(element).height;
			setTimeout(() => {
				element.style.height = 0;
			});
		},
	},
};
</script>

<style scoped>
* {
	will-change: height;
}
.expand-enter-active,
.expand-leave-active {
	transition: height .5s ease;
	overflow: hidden;
}
.expand-enter,
.expand-leave-to {
	height: 0;
}
</style>
