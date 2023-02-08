import { React } from 'react';
import PowerUpImg from './PowerUp';

const CharacterRow = ({ data: { character: { name, power }}}) =>
	<div
		style={ {
			display: 'flex',
			justifyContent: 'space-between',
		} }
	>
		<span className="name">{name}</span>
		<span className="name" style={ { paddingLeft: '75px' } }>power</span>
		<span><PowerUpImg/></span>
		<span className="power">{power}</span>
	</div>;

export default CharacterRow;
