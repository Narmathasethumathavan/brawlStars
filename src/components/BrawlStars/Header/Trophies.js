import { React } from 'react';
import TrophyImg from './TrophyImg';

const Trophies = ({ data: { character: { trophies }}}) =>
	<div
		className="bar"
		style={ { display: 'flex',
			width: `${ trophies }px` } }
	>
		<span className="trophiesno">{trophies}</span>
		<TrophyImg/>
	</div>;

export default Trophies;
