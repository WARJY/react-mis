import React, {
	Component
} from 'react';
import './Calendar.css';

class Calendar extends Component {
	state = {
		year:new Date().getFullYear(),
		month:new Date().getMonth()+1,
		day:new Date().getDate()
	}
	
	handleLeft(){
		if(this.state.day-1>0){
			this.setState({
				day:this.state.day-1
			})
		}else if(this.state.month===1){
			this.setState({
				year:this.state.year-1,
				month:12,
				day:31
			})
		}else{
			this.setState({
				month:this.state.month-1,
				day:new Date(this.state.year,this.state.month-1,0).getDate()
			})
		}
	}
	
	handleToday(){
		let day = new Date();
		this.setState({
			year:day.getFullYear(),
			month:day.getMonth()+1,
			day:day.getDate()
		})
	}
	
	handleRight(){
		if(this.state.day+1<new Date(this.state.year,this.state.month-1,0).getDate()){
			this.setState({
				day:this.state.day+1
			})
		}else if(this.state.month===12){
			this.setState({
				year:this.state.year+1,
				month:1,
				day:1
			})
		}else{
			this.setState({
				month:this.state.month+1,
				day:1
			})
		}
	}
	
	render() {
		this.state.data = this.props.handleLoad(this.state.year,this.state.month,this.state.day);
		return(
			<div className="calendar">
                    <div className="flex p10">
                        <div className="flex-item">
                            <div className="rili">
                                <div className="rili-hd flex">
                                    <div className="rili-hd-fl">
                                        <a className="label-rounder" onClick={this.handleToday.bind(this)}>今天</a>
                                        <div className="label-rounder-group">
                                            <a className="label-rounder" onClick={this.handleLeft.bind(this)}><i className="bfonts bf-back"></i></a>
                                            <a className="label-rounder" onClick={this.handleRight.bind(this)}><i className="bfonts bf-right"></i></a>
                                        </div>
                                        <span className="rili-title">{this.state.year}年{this.state.month}月{this.state.day}日</span>
                                    </div>
                                    <div className="flex-item"></div>
                                    <div className="rili-hd-fr" style={{display:"none"}}>
                                        <a className="flex-item active">月</a>
                                    </div>
                                </div>
                                <div className="rili-bd"></div>
                            </div>
                        </div>
                    </div>
                    <div className="flex rili-hd-title">
                        <div className="flex-item text-center ">
                            <span className="fw-bold">周日</span>
                        </div>
                        <div className="flex-item text-center">
                            <span className="fw-bold">周一</span>
                        </div>
                        <div className="flex-item text-center">
                            <span className="fw-bold">周二</span>
                        </div>
                        <div className="flex-item text-center">
                            <span className="fw-bold">周三</span>
                        </div>
                        <div className="flex-item text-center">
                            <span className="fw-bold">周四</span>
                        </div>
                        <div className="flex-item text-center">
                            <span className="fw-bold">周五</span>
                        </div>
                        <div className="flex-item text-center">
                            <span className="fw-bold">周六</span>
                        </div>
                    </div>
                    <div className="flex">
                        <ul className="rili-box">
                        </ul>
                    </div>
                    <div>
                        <div className="mt20">
                            <div className="timeline-title">
                                <h1>待办事项</h1>
                            </div>
                            <div className="timeline-con  clearfix">
                            {
                            	this.state.data.map(function(item){
                            		return 	<div key={item} className="timeline">
			                                    <div className="timeline-item-header">
			                                        {item.time}
			                                    </div>
			                                    <div className="timeline-item">
			                                        <div className="timeline-item-label bg-info text-light">{item.goal}</div>
			                                        <div className="timeline-item-inner">
			                                            <div className="timeline-hd page-flex">
			                                                <div className="media-title flex-item">
			                                                    <i className="bfonts bf-wode"></i>用户:{item.user};
			                                                </div>
			                                            </div>
			                                        </div>
			                                    </div>
			                                </div>
                            	})
                            }
                        </div>
                    </div>

                </div>
            </div>
		)
	}
}

export default Calendar;