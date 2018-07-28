import React, {
	Component
} from 'react';
import './User.css';
import emitter from '../A_common/emitter.js'

class User extends Component {
	state={}
	
	componentWillMount() {
		this.props.handleLoad.call(this);
	}
	
	handleLeave(event){
		this.props.handleLeave();
	}
	
	handleUser(event){
		emitter.emit("TOINDEX")
		let state = this.props.handleUser();
		if(state){
			this.setState(state)
		}
	}

	render() {
		return(
			<div className={this.props.collapsed==="on"?"user fold":"user"}>
							<div className="flex user-name">
								<i className="bfonts bf-wode wicon" onClick={this.handleUser.bind(this)}></i>
								<div className="f20 w300 page-elipis">
									<h1>{this.state.title}</h1>
								</div>
								<a className="wicon flex-item">
									<i className="bfonts bf-exit" onClick={this.handleLeave.bind(this)}></i>
								</a>
								<div className="w200 text-right setting-box flex">
									{
										this.props.setting.map(function(item){
											return 	<a 	key={item.icon} className="flex-item setting-item" 
														onClick={item.handleClick.bind(this)}>
														<i className={"bfonts " + item.icon}></i>
													</a>
										})
									}
								</div>
							</div>
						</div>

		)
	}
}

export default User;