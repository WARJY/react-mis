import React, {Component} from 'react';
import './Crumbs.css';

class Crumbs extends Component{
	render(){
		return(
			<div className="crumbs flex">
                <div className="flex-item max-w32 f-color-blue">
                    <i className="bfonts bf-shouye1"></i>
                </div>
                <div className="flex-item f16 f-color-blue">
                    <span>{this.props.title}</span>
                </div>
            </div>
		)
	}
}

export default Crumbs;