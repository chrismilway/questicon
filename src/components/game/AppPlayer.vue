<template>
	<div class="app-player">
		<strong>{{ player.name }}</strong>
		<ul class="unlist">
			<li v-for="([stat, value]) in Object.entries(player.stats)" :key="stat">
				<span class="smallcaps">{{ stat }}</span> {{ value }}
			</li>
		</ul>
		<button @click="toggle">Hide/show</button>
	</div>
</template>

<script>
export default {
	name: 'app-player',
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
}
</style>
