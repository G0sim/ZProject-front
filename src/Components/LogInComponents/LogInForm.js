import '../../Css/LogIn.css';
import {Link, useNavigate} from "react-router-dom";
import {SERVER_ADDRESS} from "../Constant";
import {useRef} from "react";
import {useRecoilState} from "recoil";
import {jwtState, userEmailState} from "../../index";

export function LogInForm() {

    const formRef = useRef();
    const navigate = useNavigate();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [jwt, setJwt] = useRecoilState(jwtState);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [userEmail, setUserEmail] = useRecoilState(userEmailState);

    //로그인
    const loginFormHandle = (evt) => {
        evt.preventDefault();
        const email = formRef.current.email.value;
        const password = formRef.current.password.value;

        if (email === "" || password === "") {
            formRef.current.email.focus();
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open("POST", SERVER_ADDRESS + "/user/login", false);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send("email=" + email + "&password=" + password);

        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            setJwt(response.token);
            sessionStorage.setItem("authToken", response.token);
            setUserEmail(response.userEmail);
            sessionStorage.setItem("authUserEmail", response.userEmail);
            navigate("/");

        } else if (xhr.status === 400) {
            formRef.current.email.classList.add("is-invalid");
            formRef.current.password.classList.add("is-invalid");
            formRef.current.password.value = "";
            formRef.current.email.select();
            formRef.current.email.focus();
        } else {
            formRef.current.password.classList.add("is-invalid");
            formRef.current.password.classList.add("is-invalid");
            formRef.current.password.value = "";
        }
    }

    return (
        <div className="login-main">
            <form className="loi3" onSubmit={loginFormHandle} ref={formRef}>
                <div>
                    <input className="login-blank" type="text" name="email" placeholder="이메일"/>
                </div>
                <div>
                    <input className="login-blank" type="password" name="password" placeholder="비밀번호"/>
                </div>
                <div className="loi1">
                    <button className="login-button" type="submit">로그인하기</button>
                </div>
            </form>
            <div className="loi2">
                아직 회원이 아니신가요? <Link to="/user/signup">가입하러 가기</Link>
            </div>
        </div>
    );

}