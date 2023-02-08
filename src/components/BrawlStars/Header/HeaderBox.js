import { React } from 'react';
import Trophies from './Trophies';

const HeaderBox = (context) =>
	<div className="headerBox">
		<Trophies { ...context }/>
	</div>;

export default HeaderBox;
