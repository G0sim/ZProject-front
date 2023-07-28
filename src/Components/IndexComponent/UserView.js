import '../../Css/Index.css';
import {Link} from "react-router-dom";

export function UserView() {


    return (
        <div>

            <div className="qv1">
                <div>
                    <Link to="/user/login">
                        <button className="button">로그인하러가기</button>
                    </Link>
                </div>
                <div className="qv2">
                    <Link to="/user/signup" className="qv3">회원가입하러가기</Link>
                </div>
            </div>
        </div>
    );
}