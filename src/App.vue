<template>
	<div class="app">
		<app-menu v-if="!quest" />
		<app-game v-if="quest" />
	</div>
</template>

<script>
import AppMenu from './components/AppMenu';
import AppGame from './components/AppGame';
import { mapGetters } from 'vuex';

export default {
	name: 'app',
	components: {
		AppMenu,
		AppGame,
	},
	computed: {
		...mapGetters([
			'quest',
		]),
	},
};
</script>

<style lang="scss">
:root {
	font-size: 18px;
}

body {
	@extend .unmargin;
	@extend .unpad;

	box-sizing: border-box;
	font-family: $font;
	line-height: 1;

	& * {
		box-sizing: inherit;
		font-family: $font;
		text-rendering: optimizeLegibility;
	}

	.app {
		height: 100vh;
		width: 100vw;
		overflow: auto;
	}
}
</style>
