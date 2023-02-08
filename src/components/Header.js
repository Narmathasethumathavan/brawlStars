import { React } from 'react';

const HomeImg = () =>
	<span style={ { paddingLeft: '500px' } }>
		<img
			src="/images/home.jpeg"
			alt="fs"
			width="40px"
			height="40px"
		/>
	</span>;

const Header = ({ state: { characters }}) =>
	<div
		style={ { fontWeight: 'bold', fontSize: 30 } }
	>
		<label>Brawlers  </label>
		{characters.length}/64
		<HomeImg/>
	</div>;

export default Header;
