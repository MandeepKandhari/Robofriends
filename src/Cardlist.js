import React from 'react';
import Card from './Card';

const num = 5

const Cardlist=({robots}) => {
	return(
		robots.map((num, i)=>{
			return <Card id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
		})
	);
}

export default Cardlist;