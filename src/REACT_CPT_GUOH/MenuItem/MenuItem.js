import React, {
	Component
} from 'react';
import './MenuItem.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'
import Menu from '../Menu/Menu.js'

class MenuItem extends Component {
	handleClick() {
		let para = {
			icon: this.props.icon,
			title: this.props.title
		}
		emitter.emit("TAB", para);
		emitter.emit("tab", para);
		emitter.emit("HIDENEW", para);
		emitter.emit("TOINDEX", para);
	}

	render() {
		analysis.call(this)
		return(
			<li className={this.props.active === "true"?"flex menu-item active":"flex menu-item"} onClick={this.handleClick.bind(this)}>
				<i className={this.props.icon + " bfonts"}></i>
				<span className="flex-item">{this.props.title}</span>
				<i className="bfonts bf-right"></i>
			</li>
		)
	}
}

export default MenuItem;