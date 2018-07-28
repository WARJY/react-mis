import React, {Component} from 'react';	
import './Foot.css';

class Foot extends Component{
				render(){
					return (
						<div className="foot">
				            <p>{this.props.copyRight} </p>
				        </div>
					)
				}
			}

export default Foot;