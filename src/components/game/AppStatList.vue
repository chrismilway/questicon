<template>
	<ul class="app-stat-list">
		<li class="app-stat" v-for="[stat, value] in Object.entries(stats)" :key="stat">
			<span class="smallcaps">{{ stat }}</span>&ensp;{{ value }}
		</li>
	</ul>
</template>

<script>
export default {
	name: 'app-stat-list',
	props: {
		stats: Object,
	}
}
</script>

<style lang="scss">
	.app-stat-list {
		@extend .unlist;
		display: flex;
		margin: 0 .75rem;
	}
	.app-stat {
		margin: 0 .75rem;
	}
</style>
