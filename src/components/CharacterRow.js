import { React } from 'react';

const CharacterRow = ({ data: { name, power }}) =>
	<div
		style={ {
			display: 'flex',
			justifyContent: 'space-between',
		} }
	>
		<span>{name}</span>
		<span>power  {power}</span>
	</div>;

export default CharacterRow;
