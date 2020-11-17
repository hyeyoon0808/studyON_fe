import React, { Component } from "react";
import "./Login.scss";
import {
    GOOGLE_AUTH_URL,
    FACEBOOK_AUTH_URL,
    GITHUB_AUTH_URL,
    KAKAO_AUTH_URL,
    NAVER_AUTH_URL,
    ACCESS_TOKEN,
} from "../constants";
import { login } from "../util/APIUtils";
import { Link, Redirect } from "react-router-dom";
import fbLogo from "../img/fb-logo.png";
import googleLogo from "../img/google-logo.png";
import githubLogo from "../img/github-logo.png";
import kakaoLogo from "../img/kakaolink_btn_medium.png";
import naverLogo from "../img/naver_green.png";
import Alert from "react-s-alert";
import ButtonTemplate from "../../icon/view/ButtonTemplate";

class Login extends Component {
    componentDidMount() {
        // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
        // Here we display the error and then remove the error query parameter from the location.
        if (this.props.location.state && this.props.location.state.error) {
            setTimeout(() => {
                Alert.error(this.props.location.state.error, {
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
                    <h1 className="login-title">Login to StudyON</h1>
                    <div className="login-form">
                        <LoginForm {...this.props} />
                    </div>
                    <div className="social-login">
                        <SocialLogin />
                    </div>
                </div>
            </div>
        );
    }
}

class SocialLogin extends Component {
    render() {
        return (
            <div>
                <a
                    // className="btn btn-block social-btn google"
                    href={GOOGLE_AUTH_URL}
                >
                    <img src={googleLogo} alt="Google" />
                </a>
                {/* <a
                    // className="btn btn-block social-btn facebook"
                    href={FACEBOOK_AUTH_URL}
                >
                    <img src={fbLogo} alt="Facebook" />
                </a> */}
                {/* <a
                    // className="btn btn-block social-btn github"
                    href={GITHUB_AUTH_URL}
                >
                    <img src={githubLogo} alt="Github" />
                </a> */}
                <a
                    // className="btn btn-block social-btn github"
                    href={KAKAO_AUTH_URL}
                >
                    <img src={kakaoLogo} alt="Kakao" />
                </a>
                <a
                    // className="btn btn-block social-btn github"
                    href={NAVER_AUTH_URL}
                >
                    <img src={naverLogo} alt="Naver" />
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
                Alert.success("성공적으로 로그인되었습니다!");
                this.props.history.push("/");
            })
            .catch((error) => {
                Alert.error(
                    (error && error.message) ||
                        "아이디와 비밀번호를 다시 확인해주세요!"
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
                        placeholder="Email"
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
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        required
                    />
                </div>
                <div className="form-button">
                    <ButtonTemplate
                        type="submit"
                        className="btn btn-block btn-primary"
                        text={"Login"}
                        style={{ marginRight: 10 }}
                    ></ButtonTemplate>
                    <Link to="/signup">
                        <ButtonTemplate text={"계정 생성"} />
                    </Link>
                </div>
            </form>
        );
    }
}

export default Login;
