import { React, useState } from 'react';
import './App.scss';
import Screen from './components/Screen';
import sortingFunction from './services/sortingFunction';

const getCharacter = (context) => ({
	characters: sortingFunction.getBrawlStars(context),
	sortVal: 1,
	sortMode: 'Least Trophies',
	powerup: null,
});

const App = (context) => {
	const { once } = context;
	const [state, setState] = useState(getCharacter(context));
	const extendedContext = { ...context, state, setState };

	once(() => sortingFunction.getPowerUp(extendedContext));
	return <div className="App">
		<Screen { ...extendedContext }/>
	</div>;
};

export default App;
