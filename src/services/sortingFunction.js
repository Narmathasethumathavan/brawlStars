const getLeastTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => a.trophies - b.trophies);

const getMostTrophies = ({ state: { characters }}) =>
	characters.sort((a, b) => b.trophies - a.trophies);

const getPowerLevel = ({ state: { characters }}) =>
	characters.sort((a, b) => a.power - b.power);

const sortingFunction = {
	getLeastTrophies,
	getMostTrophies,
	getPowerLevel,
};

export default sortingFunction;
