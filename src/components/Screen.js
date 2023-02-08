import { React } from 'react';
import BrawlStars from './BrawlStars';
import Display from './Display';
import Sort from './Sort';

const Screen = (context) =>
	<div className="container" style={ { backgroundImage: `url(${ `${ process.env.PUBLIC_URL }/images/bcimage.jpeg` })` } }>
		<Display { ...context }/>
		<BrawlStars { ...context }/>
		<Sort { ...context }/>
	</div>;

export default Screen;
