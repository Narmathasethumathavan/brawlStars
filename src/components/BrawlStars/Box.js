/* eslint-disable no-magic-numbers */
import { React } from 'react';
import CharacterRow from './CharacterRow/CharacterRow';
import FooterBox from './Footer/FooterBox';
import HeaderBox from './Header/HeaderBox';
import Picture from './Picture';
import Rank from './Rank';

const Box = (context) => {
	const { data: { character: { style: { leftMargin, topMargin }}}} = context;

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
