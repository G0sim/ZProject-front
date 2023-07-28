import {Link} from "react-router-dom";
import '../../Css/Write.css';

export function DetailBottom() {
    return (
        <div className="wq3">
            <div className="post-line1">
            </div>
            <div className="q9">
                <div>
                    <div>
                        이전글
                    </div>
                </div>
                <div>
                    <Link to="/post/board">
                        <button className="post-button">목록으로 돌아가기</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}