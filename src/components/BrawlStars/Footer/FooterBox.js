import { React } from 'react';
import Coins from './Coins';

const FooterBox = (context) => {
	const { data: { character: { powerCoins, brawlCoins }}} = context;

	return (
		<div
			className="innerBox"
			style={
				{
					display: 'flex',
					justifyContent: 'space-around',
				}
			}
		>
			<Coins { ...{ ...context, data: powerCoins } }>powerCoins</Coins>
			<label>+</label>
			<Coins { ...{ ...context, data: brawlCoins } }>brawlCoins</Coins>
		</div>);
};

export default FooterBox;
