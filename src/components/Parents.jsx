import React, { useState } from 'react';
import Child from './Child'

const Parent = () => {
	const [parentCount, setParentCount] = useState(0);
	const [childCount, setChildCount] = useState(0);

	const handleParentCount = () => {
		setParentCount(parentCount + 1);
	}

	const handleChildCount = () => {
		setChildCount(childCount + 1);
	}

	return <>
		<p>
			<h1>Parent count is { parentCount }</h1>

			<Child childCount={childCount} />
			<button onClick={handleParentCount}>Increment Parent</button>
			<button onClick={handleChildCount}>Increment Child</button>
		</p>
	</>
}

export default Parent;