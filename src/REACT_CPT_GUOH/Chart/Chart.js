import React, {
	Component
} from 'react';
import './Chart.css';
import './antd.css';
import ReactEcharts from 'echarts-for-react'
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'
import {DatePicker} from 'antd'
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class Chart extends Component {
	state = {
		from:"",
		to:"",
		option:{}
	}
	
	componentWillMount(){
		let today = new Date();
		let year = today.getFullYear();
		let month = today.getMonth()+1;
		let day = today.getDate();
		let from = year + "-" + month + "-" + "1"
		let to = year + "-" + month + "-" + day
		this.setState({
			from:from,
			to:to
		})
        this.props.handleLoad.call(this,from,to)
	}
	
	handleChange(para,value){
		this.setState({
			[para]:value.format("YYYY-MM-DD")
		})
		this.props.handleLoad.call(this,this.state.from,this.state.to)
	}
	
	render() {
		return(
			<div className="chart">
				<div className="date-picker-box flex">
					<DatePicker placeholder="从"
								className='date-picker'
								format="YYYY-MM-DD"
								onChange={this.handleChange.bind(this,"from")}>
					</DatePicker>
					<DatePicker placeholder="至"
								className='date-picker'
								format="YYYY-MM-DD"
								onChange={this.handleChange.bind(this,"to")}>
					</DatePicker>
				</div>
				<ReactEcharts 	className='react_for_echarts'
								option={this.state.option}>
				</ReactEcharts>
			</div>
		)
	}
}

export default Chart;