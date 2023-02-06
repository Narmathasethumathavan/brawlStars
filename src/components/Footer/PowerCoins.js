import { React } from 'react';

const PowerCoins = ({ data: { powerCoins }}) =>
	<span>
		<img
			src="/images/powerCoins.jpeg"
			alt="fs"
			width="30px"
			height="25px"
		/>
		{powerCoins}
	</span>;

export default PowerCoins;
