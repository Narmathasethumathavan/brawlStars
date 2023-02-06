import { React, useState } from 'react';
import './App.scss';
import BrawlStars from './components/BrawlStars';
import Display from './components/Display';
import Sort from './components/Sort';
import sortingFunction from './services/sortingFunction';

const getCharacter = (context) => ({
	characters: sortingFunction.getBrawlStars(context),
	sortVal: 1,
	sortMode: 'Least Trophies',
});

const App = (context) => {
	const [state, setState] = useState(getCharacter(context));
	const extendedContext = { ...context, state, setState };

	return <div className="App">
		<Display { ...extendedContext }/>
		<BrawlStars { ...extendedContext }/>
		<Sort { ...extendedContext }/>
	</div>;
};

export default App;
