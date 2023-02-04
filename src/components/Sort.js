import { React } from 'react';
import sortingFunction from '../services/sortingFunction';

const types = {
	'Least Trophies': (context) => sortingFunction.sortByLeastTrophies(context),
	'Most Trophies': (context) => sortingFunction.sortByMostTrophies(context),
	'POWER LEVEL': (context) => sortingFunction.sortByPowerLevel(context),
	'By Rarity': (context) => sortingFunction.sortByRarity(context),
	'By Rarity Descending': (context) =>
		sortingFunction.sortByRarityDescending(context),
	'Closest To Next Rank': (context) =>
		sortingFunction.sortByClosestNextRank(context),
};

const Sort = (context) => {
	const { config: { sorting }, state, setState } = context;
	const { sortVal, sortMode } = state;

	return (
		<button
			onClick={ () => setState({
				...state,
				sortVal: sortVal + 1,
				sortMode: sorting[sortVal % sorting.length],
				characters: types[sortMode](context),
			}) }
		>
			{sortMode}</button>
	);
};

export default Sort;
