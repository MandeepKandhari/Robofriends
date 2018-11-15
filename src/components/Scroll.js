import React from 'react';

const Scroll = (props)=>{
	return(
		<div className='w-90 center overflow-y-scroll ba bw1 b--black' style={{height:'600px'}}>
			{props.children}
		</div>

	);
}
export default Scroll;

