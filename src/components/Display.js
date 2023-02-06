import { React } from 'react';

const Display = ({ state: { characters }}) =>
	<div style={ { fontWeight: 'bold', fontSize: 30 } }>
		<label>Brawlers  </label>
		{characters.length}
	</div>;

export default Display;
