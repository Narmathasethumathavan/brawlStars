import { React } from 'react';
import TrophyImg from './TrophyImg';

const Trophies = ({ data: { character: { trophies }}}) =>
	<div
		className="bar"
		style={ { display: 'flex',
			width: `${ trophies }px` } }
	>
		<span style={ { paddingLeft: '100px',
			color: 'gold' } }
		>{trophies}</span>
		<TrophyImg/>
	</div>;

export default Trophies;
