import React, {
	Component
} from 'react';
import analysis from '../A_common/analysis.js'
import './NavBar.css';

class NavBar extends Component {
	render() {
		analysis.call(this)
		return(
			<div className="nav flex-item">
							<div className="nav-title">
								<h1>{this.props.title}</h1>
								<p>{this.props.stitle}</p>
							</div>
							{this.child}
						</div>
		)
	}
}

export default NavBar;