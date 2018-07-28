import React, {Component} from 'react';
import './Login.css';
import emitter from '../A_common/emitter.js'
import analysis from '../A_common/analysis.js'

class Login extends React.Component{
    state = {
        LoginName:18182608702,
        Password:123456
    }
    
    componentWillMount(){
        this.props = this.props.props
    }
    
    handleLogin(){
            if(this.state.LoginName & this.state.Password){
                let para = {
                    LoginName:this.state.LoginName,
                    Password:this.state.Password
                }
                emitter.emit("login",para)
            }else{
                alert("请录入正确的手机号和登录密码!")
            }
        }
    
    handleChange(event) {
            this.setState({
                [event.target.name]:event.target.value
            })
        }
    
    render(){
        return(
            <div>
                    <div className="g-login-header g-wrap">
                        <div className="g-login-logo">
                            <img src={require("../logo-small.png")}></img>
                        </div>
                        <h1>{this.props.title}</h1>
                        <div className="fr page-tel">
                            <i className="bfonts bf-dianhua"></i>
                            <span>{this.props.phone}</span>
                        </div>
                    </div>
                    <div className="login_banner">
                        <div className="g-module-inner">
                            <div className="login-con">
                                <div className="login-con-title">
                                    <h1>系统登录</h1>
                                </div>
                                <div className="login-con-form">
                                    <form action="">
                                        <div className="form-item">
                                            <input type="text" placeholder="登录用户名是手机号码" name="LoginName" onChange={this.handleChange.bind(this)} />
                                        </div>
                                        <div className="form-item">
                                            <input type="password" placeholder="密码" name="Password" onChange={this.handleChange.bind(this)} />
                                        </div>
                                        <div className="form-item" style={{display: "none"}}>
                                            <span className="err-tips">
                                        用户名或密码不正确
                                    </span>
                                        </div>
                                        <div className="form-item">
                                            <a href="javascript:void(0)" className="g-btn g-btn-default" onClick={this.handleLogin.bind(this)}>立即登录</a>
                                        </div>
                                    </form>
                                </div>
            
                            </div>
                        </div>
                    </div>
                    <div className="g-footer g-module-inner">
                        <p> {this.props.copyRight} </p>
                    </div>
                </div>
        )
    }
}

export default Login;