import {Top} from "../Components/Top";
import {PostDetail} from "../Components/PostComponent/PostDetail";
import {UserView} from "../Components/IndexComponent/UserView";
import {CateList} from "../Components/IndexComponent/CateList";
import {useParams} from "react-router-dom";
import {DetailBottom} from "../Components/PostComponent/DetailBottom";

export function PostDetailPage() {
    const param = useParams();

    return(
        <div>
            <div>
                <Top />
            </div>
            <div className="q1">
                <div className="q2">
                    <PostDetail id = {param.postId}/>
                </div>
                <div className="q4">
                    <div className="q3">
                        <UserView/>
                    </div>
                    <div className="cate">
                        <CateList/>
                    </div>
                </div>
            </div>
            <div className="q8">
                <DetailBottom />
            </div>
        </div>
    )
}