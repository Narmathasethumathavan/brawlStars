/* eslint-disable max-len */

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
};

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
		(closestRank[a.rank] - a.trophies) - (closestRank[b.rank] - b.trophies));

const sortingFunction = {
	sortByLeastTrophies,
	sortByMostTrophies,
	sortByPowerLevel,
	sortByRarity,
	sortByRarityDescending,
	sortByClosestNextRank,
};

export default sortingFunction;
