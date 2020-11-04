import React, { Component } from "react";
import "./Login.css";
import { KAKAO_AUTH_URL, ACCESS_TOKEN, login } from "../index";
import { Link, Redirect } from "react-router-dom";
//import Alert from 'react-s-alert';
import styled from "styled-components";
import ButtonTemplate from "../../icon/view/ButtonTemplate";

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                // Alert.error(this.props.location.state.error, {
                //     timeout: 5000
                // });
                alert(this.props.location.state.error, {
                    timeout: 5000,
                });
                this.props.history.replace({
                    pathname: this.props.location.pathname,
                    state: {},
                });
            }, 100);
        }
    }

    render() {
        if (this.props.authenticated) {
            return (
                <Redirect
                    to={{
                        pathname: "/",
                        state: { from: this.props.location },
                    }}
                />
            );
        }

        return (
            <div className="login-container">
                <div className="login-content">
                    <h1 className="login-title">
                        <ButtonTemplate text={"로그인하기"} />
                        로그인하기
                    </h1>
                    <SocialLogin />
                    <div className="or-separator">
                        <span className="or-text">OR</span>
                    </div>
                    <LoginForm {...this.props} />
                    <br />
                    <span className="signup-link">
                        StudyON의 회원이 되고싶으신가요??{" "}
                        <Link to="/signup">가입하기 클릭!</Link>
                    </span>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div className="social-login">
                <a
                    className="btn btn-block social-btn google"
                    href={KAKAO_AUTH_URL}
                >
                    Kakao 로그인하기
                </a>
            </div>
        );
    }
}

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;
        const inputValue = target.value;

        this.setState({
            [inputName]: inputValue,
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        const loginRequest = Object.assign({}, this.state);

        login(loginRequest)
            .then((response) => {
                localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                //Alert.success(" 로그인 되었습니다 ! ");
                alert(" 로그인 되었습니다 ! ");

                this.props.history.push("/");
            })
            .catch((error) => {
                // Alert.error((error && error.message) || '아이디 또는 비밀번호가 일치하지 않습니다!');
                alert(
                    (error && error.message) ||
                        "아이디 또는 비밀번호가 일치하지 않습니다!"
                );
            });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-item">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="이메일"
                        value={this.state.email}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="비밀번호"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-item">
                    <ButtonTemplate text={"로그인"} />
                </div>
            </form>
        );
    }
}

export default Login;
