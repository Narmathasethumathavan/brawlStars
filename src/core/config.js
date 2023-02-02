const config = {
	headers: [
		'name',
		'power',
		'powerCoins',
		'brawlCoins',
		'trophies',
		'rank',
		'rarity',
	],
	characters: {
		top: 300,
		left: 150,
		height: 200,
		width: 250,
	},
	sorting: [
		'LeastTrophies',
		'MostTrophies',
		'PowerLevel',
		'ByRarity',
		'ByRarityDescending',
		'ClosestNextRank',
	],
};

export default config;
