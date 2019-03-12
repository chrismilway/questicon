import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { nextGameId, initGame } from '../utils';

Vue.use(Vuex);

const Store = new Vuex.Store({
	state: {
		quests: {
			foo: {
				name: 'Foo quest',
				original: {
					nodes: [],
					player: {
						name: '',
						stats: {
							skill: [null, 6],
							stamina: [null, null, 12],
							luck: [null, 6],
						},
						items: [],
						created: false,
					},
				},
				games: {},
				theme: {
					color: '#F44336',
					dark: true,
				},
			},
			bar: {
				name: 'Bar adventure',
				original: {
					nodes: [],
				},
				games: {},
				theme: {
					color: '#9C27B0',
					dark: true,
				},
			},
		},
		quest: null,
	},
	getters: {
		quests: state => Object.entries(state.quests).map(([id, { name, games, theme }]) => {
			return { id, name, theme, games: Object.entries(games).map(([id, { player }]) => ({ id, player })) };
		}),
		quest: state => state.quest,
		questMeta: (state, getters) => {
			const qid = getters.quest.qid;
			const { original, games, ...meta } = state.quests[qid];
			return meta;
		},
		player: state => state.quest.player,
		node: state => state.quest.nodes.find(n => n.id === state.quest.node || 0),
	},
	mutations: {
		move: (state, nid) => {
			state.quest.node = nid;
		},
		updateNode: (state, update) => {
			Object.assign(Store.getters.node, update);
		},
		createPlayer: (state, player) => {
			player.created = true;
			Store.getters.quest.player = player;
		},
		updatePlayer: (state, update) => {
			Object.assign(Store.getters.player, update);
		},
		newQuest: (state, { qid, gid }) => {
			const { games, original } = state.quests[qid];
			const game = initGame(original, qid);
			games[gid] = game;
		},
		loadQuest: (state, { qid, gid }) => {
			state.quest = state.quests[qid].games[gid];
		},
	},
	actions: {
		newQuest: ({ commit, state }, qid) => {
			const { games } = state.quests[qid];
			const gid = nextGameId(games);
			commit('newQuest', { qid, gid });
			commit('loadQuest', { qid, gid });
		},
		loadQuest: ({ commit }, payload) => {
			commit('loadQuest', payload);
		},
	},
	plugins: [
		createPersistedState({
			key: 'questicon',
			paths: ['quests'],
		}),
	],
});

export default Store;