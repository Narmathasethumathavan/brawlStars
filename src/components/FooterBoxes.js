import { React } from 'react';

const FooterBoxes = ({ data: { powerCoins, brawlCoins }}) =>
	<div
		className="innerBox"
		style={
			{
				display: 'flex',
				justifyContent: 'space-around',
				height: 35,
				width: 245,
			}
		}
	>
		<span>{powerCoins}</span>
		<span>{brawlCoins}</span>
	</div>;

export default FooterBoxes;
