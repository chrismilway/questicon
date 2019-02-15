<template>
	<div class="app-player-profile">
		<div class="app-player-profile__pad">
			<dl class="app-player-profile__list">
				<dt>Money</dt>
				<dd>{{ player.money }}</dd>
				<dt>Items</dt>
				<dd>
					<ul class="unlist">
						<li v-for="item in player.items" :key="item.id">
							{{ item.name }}
						</li>
						<li v-if="!player.items.length"><em>You have no items</em></li>
					</ul>
				</dd>
			</dl>
		</div>
	</div>
</template>

<script>
export default {
	name: 'app-player-profile',
	props: {
		player: Object,
	},
};
</script>

<style lang="scss">
.app-player-profile {
	max-height: calc(100vh - 6rem);
	overflow: auto;

	&__pad {
		padding: 0 1rem 1rem;
	}

	&__list {
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: min-content 1fr;
	}

	dt {
		@extend .smallcaps;
	}

	dd {
		margin: 0;
	}
}
</style>
