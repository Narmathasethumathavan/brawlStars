/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
import { React } from 'react';
import CharacterRow from './CharacterRow';
import FooterBoxes from './Footer/FooterBoxes';
import HeaderBox from './Header/HeaderBox';
const BoxMultiplier = 300;
const BoxMargin = 200;

const Box = (context) => {
	const { data: { character, key }, config: { size }} = context;
	const { name, power, trophies, rank, powerCoins,
		brawlCoins, image } = character;

	return (
		<div
			className="box"
			style={ {
				left: ((key * BoxMultiplier) + BoxMargin) * size,
				top: 100 * size,
				height: 210 * size,
				width: 250 * size,
			} }
		>
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
