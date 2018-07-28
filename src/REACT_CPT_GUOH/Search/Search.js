import React, {Component} from 'react';
import './Search.css';
import emitter from '../A_common/emitter.js'

class Search extends Component{
	componentWillMount(){
		this.setState({})
	}
	
	handleSearch(){
		emitter.emit("search",this.state.value);
		emitter.emit("TOLIST",this.state.value);
	}
	
	handleChange(event){
		this.setState({
			value:event.target.value
		})
	}
	
	render(){
		return(
			<div className="text-right w300">
                <div className="search">
                	<input type="text" placeholder="输入内容查询" onChange={this.handleChange.bind(this)}></input>
                    <a className="search-btn" onClick={this.handleSearch.bind(this)}>搜索</a>
                </div>
            </div>
		)
	}
}

export default Search;