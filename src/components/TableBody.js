import { React } from 'react';

const BrawlerData = (context) => {
	const { config: { headers }, data: character } = context;

	return headers.map((header, index) =>
		<td key={ index } className="columnStyle">
			{character[header]}</td>);
};

const TableBody = (context) => {
	const { state: { characters }} = context;

	return <tbody>{
		characters.map((character, key) =>
			<tr key={ key } className="columnStyle">
				<BrawlerData { ...{ ...context, data: character } }/></tr>)
	}
	</tbody>;
};

export default TableBody;
