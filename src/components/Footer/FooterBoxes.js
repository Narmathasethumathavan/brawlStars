/* eslint-disable max-lines-per-function */
import { React } from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const FooterBoxes = (context) => {
	const { data: { powerCoins, brawlCoins }} = context;

	return (
		<div
			className="innerBox"
			style={
				{
					display: 'flex',
					justifyContent: 'space-evenly',
					height: 35,
					width: 245,
				}
			}
		>
			<PowerCoins { ...{ ...context, data: { powerCoins }} }/>
			<label>+</label>
			<BrawlCoins { ...{ ...context, data: { brawlCoins }} }/>
		</div>);
};

export default FooterBoxes;
