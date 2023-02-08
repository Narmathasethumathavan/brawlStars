import { React } from 'react';

const CharacterRow = ({ data: { character: { name, power }}}) =>
	<div
		style={ {
			display: 'flex',
			justifyContent: 'space-between',
		} }
	>
		<span className="name">{name}</span>
		<span className="name" style={ { paddingLeft: '75px' } }>power</span>
		<span>
			<img
				className="powerup"
				src="/images/powerup.jpeg"
				alt="fs"
				width="30px"
				height="20px"
			/>
		</span>
		<span className="power">{power}</span>
	</div>;

export default CharacterRow;
