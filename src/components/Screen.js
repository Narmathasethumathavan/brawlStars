import { React } from 'react';
import BrawlStars from './BrawlStars/BrawlStars';
import Header from './Header';
import Sort from './Sort';

const Screen = (context) =>
	<div
		className="container"
		style={ { backgroundImage: `url(${ `${ process.env.PUBLIC_URL }/images/bcimage.jpeg` })` } }
	>
		<Header { ...context }/>
		<BrawlStars { ...context }/>
		<Sort { ...context }/>
	</div>;

export default Screen;
