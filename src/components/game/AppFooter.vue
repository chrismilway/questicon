<template>
	<div class="app-footer" v-if="player.created">
		<app-player :player="player" :toggle="toggle" />
		<app-expander>
			<app-player-profile :player="player" v-if="expanded" />
		</app-expander>	
	</div>
</template>

<script>
import AppExpander from '../AppExpander';
import AppPlayer from './AppPlayer';
import AppPlayerProfile from './AppPlayerProfile';

export default {
	name: 'app-footer',
	components: {
		AppExpander,
		AppPlayer,
		AppPlayerProfile,
	},
	props: {
		player: Object,
	},
	data() {
		return {
			expanded: false,
		};
	},
	methods: {
		toggle() {
			this.expanded = !this.expanded;
		},
	},
};
</script>

<style lang="scss">
.app-footer {
	flex-grow: 0;
	display: flex;
	flex-flow: column nowrap;
	box-shadow: 0 0 .5rem rgba(0, 0, 0, .25);
}
</style>
