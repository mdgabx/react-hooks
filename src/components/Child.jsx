import React from 'react';

const Child = ({ childCount }) => {
	console.log('Child is rendered')
	return <>
		<p>

			<h1>Child count is { childCount }</h1>
		</p>
	</>
}

export default React.memo(Child);