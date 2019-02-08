<template>
	<ul class="app-menu">
		<li
			:class="['app-menu__quest', `app-menu__quest--${quest.theme.dark} ? 'dark' : 'light'`]"
			v-for="quest in quests"
			:key="quest.id"
			:style="{background: quest.theme.color}"
		>
			<button class="app-menu__button" type="button" @click="selectQuest(quest.id)">{{quest.name}}</button>
			<app-expander>
				<ul class="app-menu__games-list" v-if="quest.id === qid">
					<li class="app-menu__game" v-for="game in quest.games" :key="game.id">
						<button class="app-menu__button" type="button" @click="selectGame(game.id)">{{game.player.name || 'Unstarted'}}</button>
					</li>
					<li class="app-menu__game app-menu__game--new">
						<button class="app-menu__button" type="button" @click="newGame">New game</button>
					</li>
				</ul>
			</app-expander>
		</li>
	</ul>
</template>

<script>
import AppExpander from './AppExpander';
import { mapGetters } from 'vuex';

export default {
	name: 'app-menu',
	components: {
		AppExpander,
	},
	data() {
		return {
			qid: null,
		};
	},
	computed: {
		...mapGetters(['quests']),
	},
	methods: {
		selectQuest(id) {
			const qid = (this.qid === id) ? null : id;
			this.qid = qid;
		},
		selectGame(gid) {
			const { qid } = this;
			this.$store.dispatch('loadQuest', { qid, gid });
		},
		newGame() {
			const { qid } = this;
			this.$store.dispatch('newQuest', qid);
		},
	},
};
</script>

<style lang="scss">
.app-menu {
	@extend .unlist;
	min-height: 100%;
	display: flex;
	flex-flow: column nowrap;

	&__quest {
		flex: 0;

		&:last-child {
			flex: 1;
		}

		&--dark * {
			color: $white;
		}

		&--light * {
			color: $black;
		}
	}

	&__button {
		display: flex;
		width: 100%;
		align-items: center;
		height: 3rem;
		font-size: 1rem;
		font-weight: $regular;
		padding: 1rem;
		border: 0;
		color: $white;
		background: transparent;

		.app-menu__quest--light & {
			color: $black;
		}

		&:focus {
			outline: none;
			-webkit-appearance: none;
			border: .2rem dotted $black;
			padding: .8rem;
		}
	}

	&__games-list {
		@extend .unlist;
	}
}
</style>
