<template>
	<div class="app-content">
		<app-profile-builder v-if="!player.created" />
		<app-node v-if="player.created" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppProfileBuilder from './AppProfileBuilder';
import AppNode from './AppNode';

export default {
	name: 'app-content',
	components: {
		AppProfileBuilder,
		AppNode,
	},
	computed: {
		...mapGetters(['player']),
	},
};
</script>

<style>
.app-content {
	flex: 1;
}
</style>
