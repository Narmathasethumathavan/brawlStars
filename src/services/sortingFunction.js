/* eslint-disable no-magic-numbers */
import { rndBetween } from '@laufire/utils/lib';

const Rarity = {
	epic: 4,
	superrare: 3,
	rare: 2,
	common: 1,
};
const closestRank = {
	1: 10,
	2: 20,
	3: 30,
	4: 40,
	5: 50,
	6: 60,
	7: 70,
	8: 80,
	9: 90,
};
const getStyleCharacters = ({ state: { characters }}) =>
	characters.map((character, key) => {
		const style = {
			leftMargin: (key % 3) * 350 + 300,
			topMargin: Math.floor(key / 3) * 350 + 100,
		};

		return {
			...character,
			style,
		};
	});

const getPowerUp = ({ setState }) =>
	setInterval(() => setState((prevState) => ({
		...prevState,
		powerup: !prevState.powerup,
	})), 1000);

const getBrawlStars = ({ config: { brawlStars }}) =>
	brawlStars.map((brawlStar) => ({
		...brawlStar,
		power: rndBetween(1, 10),
		powerCoins: rndBetween(1, 1000),
		brawlCoins: rndBetween(1, 1000),
	}));

const sortByLeastTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => a.trophies - b.trophies);

const sortByMostTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => b.trophies - a.trophies);

const sortByPowerLevel = ({ state: { characters }}) =>
	characters.sort((a, b) => a.power - b.power);

const sortByRarity = ({ state: { characters }}) =>
	characters.sort((a, b) => Rarity[a.rarity] - Rarity[b.rarity]);

const sortByRarityDescending = ({ state: { characters }}) =>
	characters.sort((a, b) => Rarity[b.rarity] - Rarity[a.rarity]);

const sortByClosestNextRank = ({ state: { characters }}) =>
	characters.sort((a, b) =>
		(closestRank[a.rank] - a.trophies)
		- (closestRank[b.rank] - b.trophies));

const sortingFunction = {
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByPowerLevel,
	sortByRarity,
	sortByRarityDescending,
	sortByClosestNextRank,
	getBrawlStars,
	getPowerUp,
	getStyleCharacters,
};

export default sortingFunction;
