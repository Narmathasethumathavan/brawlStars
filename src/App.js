import { React, useState } from 'react';
import './App.scss';
import BrawlersTable from './components/BrawlersTable';
import Sort from './components/Sort';
import brawlers from './data/brawlersData';
import sortingFunction from './services/sortingFunction';

const getCharacter = (context) => ({
	currentState: sortingFunction.getBrawlStars(context),
	characters: brawlers,
	sortVal: 1,
	sortMode: 'Least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(getCharacter(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<BrawlersTable { ...extendedContext }/>
		<Sort { ...extendedContext }/>
	</div>;
};

export default App;
