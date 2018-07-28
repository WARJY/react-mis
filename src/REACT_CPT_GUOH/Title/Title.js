import React, {
	Component
} from 'react';
import './Title.css';
import analysis from '../A_common/analysis.js'

class Title extends Component {
	render() {
		analysis.call(this)
		return(
			<div className="flex title">
	            <h1 className="f30 flex-item">{this.props.title}</h1>
	            {this.child}
            </div>
		)
	}
}

Title.defaultProps = {
	title:"",
	Search:null,
	BtnNew:null,
	BtnMore:null
}

export default Title;