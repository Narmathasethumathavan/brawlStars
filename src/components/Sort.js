import { React } from 'react';
import sortingFunction from '../services/sortingFunction';

const types = {
	LeastTrophies: (context) => sortingFunction.getLeastTrophies(context),
	MostTrophies: (context) => sortingFunction.getMostTrophies(context),
	PowerLevel: (context) => sortingFunction.getPowerLevel(context),
// 	ByRarity:()=>
// 	ByRarityDescending:()=>
// 	ClosestNextRank:()=>
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
