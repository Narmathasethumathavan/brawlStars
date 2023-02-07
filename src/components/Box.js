/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import CharacterRow from './CharacterRow';
import FooterBoxes from './Footer/FooterBoxes';
import HeaderBox from './Header/HeaderBox';

const Box = (context) => {
	const { data: { character }} = context;
	const { name, power, trophies, rank, powerCoins,
		brawlCoins, image } = character;

	return (
		<div className="box">
			<HeaderBox { ...{ ...context, data: { trophies, rank }} }/>
			<img
				src={ image }
				alt="fs"
				width="200px"
				height="150px"
			/>
			<CharacterRow { ...{ ...context, data: { name, power }} }/>
			<FooterBoxes { ...{ ...context,
				data: { powerCoins, brawlCoins }} }
			/>
		</div>
	);
};

export default Box;
