<template>
	<div
		:style="{background: data.theme.color}"
		:class="['app-header', `app-header--${data.theme.dark ? 'dark' : 'light'}`]"
	>
		{{data.name}}
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'app-header',
	computed: {
		...mapGetters({
			data: 'questMeta',
		}),
	},
};
</script>

<style lang="scss">
.app-header {
	height: 3rem;
	padding: 1rem;
	display: flex;
	color: $white;
	flex-grow: 0;
	box-shadow: 0 0 .5rem rgba(0, 0, 0, .75);

	&--light {
		color: $black;
	}
}
</style>
