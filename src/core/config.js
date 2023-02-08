const config = {
	size: 1,
	brawlStars: [
		{
			name: 'Shelly',
			rarity: 'rare',
			trophies: 83,
			rank: 8,
			image: '/images/shelly.png',
		},
		{
			name: 'Barley',
			rarity: 'superrare',
			trophies: 69,
			rank: 6,
			image: '/images/barley.png',
		},
		{
			name: 'Bo',
			rarity: 'common',
			trophies: 18,
			rank: 1,
			image: '/images/bo.png',
		},
		{
			name: 'Tara',
			rarity: 'epic',
			trophies: 56,
			rank: 5,
			image: '/images/tara.png',
		},
		{
			name: 'Colt',
			rarity: 'epic',
			trophies: 72,
			rank: 7,
			image: '/images/colt.png',
		},
	],
	headers: [
		'name',
		'image',
		'power',
		'powerCoins',
		'brawlCoins',
		'trophies',
		'rank',
		'rarity',
	],

	sorting: [
		'Least Trophies',
		'Most Trophies',
		'POWER LEVEL',
		'By Rarity',
		'By Rarity Descending',
		'Closest To Next Rank',
	],
};

export default config;
