import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Login from './Login/Login.js'
import analysis from './A_common/analysis.js'
import emitter from './A_common/emitter.js'
import Invoker from './A_common/invoker.js'
import './container.css'

let initReact = function(_props) {
	class Container extends Component {
	    state={
	       log:false
	    }
	    
		componentWillMount() {
			this.props = _props;
			this.setState({});
			if(this.props.collapsed !== undefined) {
				this.setState({
					collapsed: this.props.collapsed
				})
			}
			console.log(sessionStorage)
			emitter.on("login",(d)=>{
			    this.props.Login.handleLogin.call(this,d)
			})
		}

		handelClick() {
			this.setState({
				collapsed: !this.state.collapsed
			})
		}

		render() {
			analysis.call(this)
			if(!this.state.log){
			    return(<Login props={this.props.Login} />)
			}else{
			    return(
    			    <div className="full">
                        <div className={!this.state.collapsed?"fold-control flex":"fold-control flex hide"}>
                            {this.child}
                            {this.state.collapsed !== undefined?<a className="nav-fold" onClick={this.handelClick.bind(this)}><i className="bfonts bf-list-in"></i></a>:""}
                        </div> 
                    </div>
                )
			}
		}
	}


	ReactDOM.render(
		<Container />,
		document.getElementById("root")
	)
}

export default initReact;