<template>
	<div class="app-profile-builder" v-if="player">
		<div>
			<input type="text" v-model="player.name" placeholder="e.g. Grimbald the brave"/>
		</div>
		<div v-for="stat in stats" :key="stat.stat">
			<p>{{stat.stat}}</p>
			<span v-for="(v, idx) in stat.value" :key="idx">
				<app-die :value="v" @cast="(value) => updateStat(stat.stat, idx, value)" />
				<span v-if="(idx + 1) < stat.value.length"> + </span> 
			</span>
			= {{ stat.total }}
		</div>
		<button type="button" @click="save">Save</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppDie from './AppDie';

const clone = (obj) => JSON.parse(JSON.stringify(obj));

export default {
	name: 'app-profile-builder',
	components: {
		AppDie,
	},
	data() {
		return {
			player: null,
		};
	},
	computed: {
		...mapGetters({playerBlank: 'player'}),
		stats() {
			return (this.player)
				? Object.entries(this.player.stats).map(([stat, value]) => ({
					stat,
					value,
					total: (value.some(v => !v)) 
						? '?' : value.reduce((t, v) => t + v, 0),
				}))
				: [];
		}
	},
	methods: {
		updateStat(stat, idx, value) {
			const player = clone(this.player);
			player.stats[stat][idx] = value;
			this.player = player;
		},
		save() {
			const player = clone(this.player);
			player.stats = Object.entries(player.stats).reduce((stats, [stat, values]) => {
				stats[stat] = values.reduce((total, v) => total + v);
				return stats;
			}, {});
			this.$store.commit('createPlayer', player);
		}
	},
	mounted() {
		this.player = clone(this.playerBlank);
	},
};
</script>

<style>

</style>
