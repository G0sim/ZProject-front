import {SERVER_ADDRESS} from "../Constant";
import {useEffect, useRef, useState} from "react";
import '../../Css/SignUp.css';
import {SugnUpPickImage} from "./SignUpPickImage";

export function SignUpForm() {

    //const emailRegexp = /^[a-z0-9]*@[a-z]*\.[a-z]{2,3}$/;
    //const passwordRegexp = /^[a-zA-Z0-9]{5,10}$/;

    const [availableFlag, setAvailableFlag] = useState(0);
    const [min, setMin] = useState(3);
    const [sec, setSec] = useState(0);
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

    const [isPassword, setIsPassword] = useState(false);
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);


    const time = useRef(180);
    const timerId = useRef(null);
    const certifyBtnRef = useRef();
    const formRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const nickRef = useRef();
    const codeBtnRef = useRef();
    const sighUpBtnRef = useRef();

    //이메일 인증하는 이벤트
    const confirmEmail = (evt) => {
        if (/[a-z0-9]+@[a-z]+\.[a-z]/.test(evt.target.value)) {
            const xhr = new XMLHttpRequest();
            xhr.open("GET",
                SERVER_ADDRESS + "/user/available?email=" + formRef.current.email.value, false);
            xhr.send();
            if (xhr.status === 200) {
                //  사용가능한 이메일일 경우
                setAvailableFlag(1);
                certifyBtnRef.current.disabled = false;
            } else {
                //사용불가능한(중복)이메일일 경우
                setAvailableFlag(-1);
                certifyBtnRef.current.disabled = true;
            }
        } else if (!/[a-z0-9]+@[a-z]+\.[a-z]+/.test(evt.target.value) && formRef.current.value !== null) {
            //이메일 형식이 아닐 경우
            setAvailableFlag(2);
            certifyBtnRef.current.disabled = true;
        } else {
            setAvailableFlag(0);
        }
    }

    //인증메일을 발송
    const sendCertifyMail = (evt) => {
        evt.preventDefault();
        if (formRef.current.email.value === "") {
            formRef.current.email.focus();
            return;
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", SERVER_ADDRESS + "/certify/send-mail", false);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send("email=" + formRef.current.email.value);
        setAvailableFlag(3);
    }

    //인증메일 검증
    const codeSubmit = (evt) => {
        evt.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("PATCH", SERVER_ADDRESS + "/certify/confirm-code", false);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send("email=" + formRef.current.email.value + "&code=" + formRef.current.code.value);
        if (xhr.status === 200) {
            setAvailableFlag(4);
            emailRef.current.readOnly = true;
            codeBtnRef.current.disabled = true;
            emailRef.current.classList.add("is-valid");
            window.alert("인증 완료 되었습니다.");
        } else {
            const response = JSON.parse(xhr.responseText);
            window.alert(response.cause);
        }
    }

    //회원가입 처리하기
    const signupSubmit = (evt) => {
        evt.preventDefault();

        const email = formRef.current.email.value;
        const nick = formRef.current.nick.value;
        const password = formRef.current.password.value;

        if( email === "" || nick === "" || password === ""){
            window.alert("빈칸을 전부 채워주세요.");
        }

        const xhr = new XMLHttpRequest();
        xhr.open("POST", SERVER_ADDRESS+ "/user/signup",false);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send("email="+email+"&nick="+nick+"&password="+password);

        if(xhr.status === 201) {
            window.alert("회원가입이 정상적으로 처리되었습니다.");
        }else{
            window.alert("통신오류로 글이 등록되지 않았습니다.");
        }
    }

    //비밀번호를 양식에 맞게 기입했는지 확인
    const onChangePassword = (evt) => {
        const currentPassword = evt.target.value;
        setPassword(currentPassword);
        const passwordRegExp = /^(?=.*[a-zA-Z0-9]).{6,25}$/;
        if (!passwordRegExp.test(currentPassword)) {
            setPasswordMessage("영문+숫자 조합으로 6자리 이상 입력해주세요.");
            setIsPassword(false);
        } else {
            setPasswordMessage("");
            setIsPassword(true);
        }
    }
    //비밀번호 한번 더 확인하기
    const onChangePasswordConfirm = (evt) => {
        const currentPasswordConfirm = evt.target.value;
        setPasswordConfirm(currentPasswordConfirm);
        if (password !== currentPasswordConfirm) {
            setPasswordConfirmMessage("비밀번호를 다시 한번 확인해주세요.");
            setIsPasswordConfirm(false);
        } else {
            setPasswordConfirmMessage("");
            setIsPasswordConfirm(true);
        }
    }
    //타이머
    useEffect(() => {
        timerId.current = setInterval(() => {
            setMin(Math.floor(time.current / 60));
            setSec(time.current % 60);
            time.current -= 1;
        }, 1000);

        return () => clearInterval(timerId.current);
    }, []);

    //타이머 타임아웃
    useEffect(() => {
        if (time.current <= 0) {
            clearInterval(timerId.current);
        }
    }, [sec]);

    return (
        <div className="signup-main">
            <form className="su3" ref={formRef}>
                <div className="su1">
                    <div className="su6">
                        <input className="signup-blank" type="text" name="email" placeholder="이메일"
                               ref={emailRef} onChange={confirmEmail}/>
                    </div>
                    <div>
                        <button onClick={sendCertifyMail} className="signup-button1" ref={certifyBtnRef}>이메일 인증하기</button>
                    </div>
                </div>
                {availableFlag === 1 && <div className="sut1"> 사용가능한 이메일입니다.</div>}
                <div className="su7">
                    {availableFlag === 3 &&
                        <div >
                            <div className="sut2">남은 인증 시간 ( {min} : {sec})</div>
                            <div className="su1">
                                <input className="signup-blank" type="text" name="code" placeholder="인증번호"/>
                                <button className="signup-button1" onClick={codeSubmit} ref={codeBtnRef} >인증하기</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="su2">
                    <input className="signup-blank" type="password" name="password" ref={passwordRef}
                           placeholder="비밀번호(영문자+숫자 6자리 이상)" onChange={onChangePassword}/>
                    <div className="sut1">
                        {passwordMessage}
                    </div>
                    <input className="signup-blank" type="password" name="passwordConfirm"
                           placeholder="비밀번호 확인" onChange={onChangePasswordConfirm}/>
                    <div className="sut1">
                        {passwordConfirmMessage}
                    </div>
                </div>
                <div>
                    <input className="signup-blank" type="text" name="nick"
                           ref={nickRef} placeholder="사용할 닉네임"/>
                </div>
                <div>
                    프로필 이미지
                    <SugnUpPickImage />
                </div>
                <div className="su4">
                    <button className="signup-button2" onClick={signupSubmit} ref={sighUpBtnRef}>회원가입하기</button>
                </div>

            </form>
        </div>
    );
}