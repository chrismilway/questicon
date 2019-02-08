<template>
	<app-header />
</template>

<script>
import { mapGetters } from 'vuex';
import AppHeader from './game/AppHeader';

export default {
	name: 'app-game',
	components: {
		AppHeader,
	},
	computed: {
		...mapGetters(['quest']),
	},
};
</script>

<style>

</style>
