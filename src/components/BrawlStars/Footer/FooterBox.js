import { React } from 'react';
import BrawlCoins from './BrawlCoins';
import PowerCoins from './PowerCoins';

const FooterBox = (context) =>
	<div
		className="innerBox"
		style={
			{
				display: 'flex',
				justifyContent: 'space-around',
			}
		}
	>
		<PowerCoins { ...context }/>
		<label>+</label>
		<BrawlCoins { ...context }/>
	</div>;

export default FooterBox;
