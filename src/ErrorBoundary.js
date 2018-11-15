import React, { Component } from 'react';



class ErrorBoundary extends Component {
	constructor(props){
		super(props);
		this.state={
			hasError: false
		}
	}
componentDidcatch(error, info){
	this.setState({ hasError: true})
}

render(){
	return(
		<div>
			{
				this.state.hasError
				?<h1>Oops! something went wrong </h1>
				:(<div>
					{this.props.children}
				</div>
				)	
			}
		</div>
	);
}
}

export default ErrorBoundary;