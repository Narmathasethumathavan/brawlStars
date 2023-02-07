import { React } from 'react';

const CharacterRow = ({ data: { character: { name, power }}}) =>
	<div
		style={ {
			display: 'flex',
			justifyContent: 'space-between',
		} }
	>
		<span className="name">{name}</span>
		<span className="name">power</span>
		<span className="power">{power}</span>
	</div>;

export default CharacterRow;
