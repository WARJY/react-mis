import React, {
	Component
} from 'react';
import './Menu.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class Menu extends Component {
	state = {
		UCRTAB: this.props.tab
	}
	
	componentWillMount() {
		let that = this;
		emitter.on("TAB", function(para) {
			that.setState({
				UCRTAB: para.title
			})
		})
	}

	render() {
		analysis.call(this)
		return(
			<ul className="menu">
				{this.child}
			</ul>
		)
	}
}

export default Menu;