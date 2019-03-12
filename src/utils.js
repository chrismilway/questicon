import clone from 'clone';

export function nextGameId(games) {
	const ids = Object.keys(games);
	return (ids.length) ? Math.max(...ids.map(k => +k)) + 1 : 1;
}

export function initGame(data, qid) {
	const game = clone(data);
	game.qid = qid;
	game.node = 0;
	game.status = 'active';
	return game;
}