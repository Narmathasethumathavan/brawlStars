/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import CharacterRow from './CharacterRow';
import FooterBoxes from './Footer/FooterBoxes';
import HeaderBox from './Header/HeaderBox';
import Rank from './Rank';

const Box = (context) => {
	const { data: { character, key }} = context;
	const { image } = character;

	const leftMargin = (key % 3) * 350 + 300;
	const topMargin = Math.floor(key / 3) * 350 + 100 ;

	return (
		<div
			key={ key }
			className="box"
			style={ { left: `${ leftMargin }px`,
				top: `${ topMargin }px`,
				height: '200px',
				width: '250px' } }
		>
			<Rank { ...context }/>
			<HeaderBox { ...context }/>
			<img
				src={ image }
				alt="fs"
				width="200px"
				height="150px"
			/>
			<CharacterRow { ...context }/>
			<FooterBoxes { ...context }/>
		</div>

	);
};

export default Box;
