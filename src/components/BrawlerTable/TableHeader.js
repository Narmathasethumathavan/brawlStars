import { React } from 'react';

const TableHeader = (context) => {
	const { config: { headers }} = context;

	return <thead>
		<tr>{ headers.map((header, key) =>
			<th key={ key }className="thStyle">{header} </th>)}
		</tr>
	</thead>;
};

export default TableHeader;
