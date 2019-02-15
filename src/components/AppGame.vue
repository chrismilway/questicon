<template>
	<div class="app-game">
		<app-header />
		<app-content />
		<app-footer :player="player" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from './game/AppHeader';
import AppFooter from './game/AppFooter';
import AppContent from './game/AppContent';

export default {
	name: 'app-game',
	components: {
		AppHeader,
		AppFooter,
		AppContent,
	},
	computed: {
		...mapGetters(['player']),
	},
};
</script>

<style lang="scss">
.app-game {
	width: 100%;
	height: 100%;
	display: flex;
	flex-flow: column nowrap;
}
</style>
