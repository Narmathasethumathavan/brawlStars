import { React } from 'react';

const PowerUpImg = ({ state: { powerup }}) =>
	<img
		className={ !powerup ? 'powerup' : 'movepowerup' }
		src="/images/powerup.jpeg"
		alt="fs"
		width="30px"
		height="20px"
	/>;

export default PowerUpImg;
