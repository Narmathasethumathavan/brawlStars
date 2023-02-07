import { React } from 'react';

const PowerCoins = ({ data: { powerCoins }}) =>
	<span>
		<img
			style={ { borderRadius: '50%' } }
			src="/images/powerCoins.jpeg"
			alt="fs"
			width="30px"
			height="25px"
		/>
		{powerCoins}
	</span>;

export default PowerCoins;
