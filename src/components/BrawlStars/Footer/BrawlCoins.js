import { React } from 'react';

const BrawlCoins = ({ data: { character: { brawlCoins }}}) =>
	<span>
		<img

			style={ { borderRadius: '50%' } }
			src="/images/brawlCoins.jpeg"
			alt="fs"
			width="35px"
			height="30px"
		/>
		{brawlCoins}
	</span>;

export default BrawlCoins;
