<template>
	<div class="app-player">
		<em class="app-player__name">{{ player.name }}</em>
		<app-stat-list :stats="player.stats" />
		<button @click="toggle">Hide/show</button>
	</div>
</template>

<script>
import AppStatList from './AppStatList';

export default {
	name: 'app-player',
	components: {
		AppStatList,
	},
	props: {
		player: Object,
		toggle: Function,
	}
}
</script>

<style lang="scss">
.app-player {
	height: 3rem;
	padding: 1rem;
	flex-grow: 0;
	display: flex;
	flex-flow: row nowrap;

	&__name {
		flex: 1;
	}
}
</style>
