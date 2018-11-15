import React from 'react';

const Card= (props)=>{
	return(
		<div className='tc bg-light-green pa3 br3 ma3 dib grow bw2 shadow-5'>
			<div>
				<img src={`https://www.robohash.org/${props.id}?200x200`} alt='Robots'/>
			</div>
			<div>
				<h2>{props.name} </h2>
				<p>{props.email } </p>
			</div>
		</div>

	);
}
export default Card;

