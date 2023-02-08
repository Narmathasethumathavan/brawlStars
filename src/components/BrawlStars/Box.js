/* eslint-disable no-magic-numbers */
import { React } from 'react';
import CharacterRow from './CharacterRow/CharacterRow';
import FooterBox from './Footer/FooterBox';
import HeaderBox from './Header/HeaderBox';
import Picture from './Picture';
import Rank from './Rank';

const Box = (context) => {
	const { data: { key }} = context;

	const leftMargin = (key % 3) * 350 + 300;
	const topMargin = Math.floor(key / 3) * 350 + 100 ;

	return (
		<div
			className="box"
			style={ { left: `${ leftMargin }px`,
				top: `${ topMargin }px`,
				height: '200px',
				width: '250px' } }
		>
			<Rank { ...context }/>
			<HeaderBox { ...context }/>
			<Picture { ...context }/>
			<CharacterRow { ...context }/>
			<FooterBox { ...context }/>
		</div>

	);
};

export default Box;
