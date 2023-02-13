import { React } from 'react';

const Coins = ({ data, children }) =>
	<span>
		<img
			style={ { borderRadius: '50%' } }
			src={ `/images/${ children }.jpeg` }
			alt="fs"
			width="35px"
			height="30px"
		/>
		{data}
	</span>;

export default Coins;
