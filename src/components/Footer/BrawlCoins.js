import { React } from 'react';

const BrawlCoins = ({ data: { brawlCoins }}) =>
	<span>
		<img
			src="/images/brawlCoins.jpeg"
			alt="fs"
			width="30px"
			height="25px"
		/>
		{brawlCoins}
	</span>;

export default BrawlCoins;
