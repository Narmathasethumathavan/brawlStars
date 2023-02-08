import { React, useState } from 'react';
import './App.scss';
import Screen from './components/Screen';
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
		<Screen { ...extendedContext }/>
	</div>;
};

export default App;
