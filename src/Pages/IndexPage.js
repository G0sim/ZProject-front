import {Top} from "../Components/Top";
import {UserView} from "../Components/IndexComponent/UserView";
import {CateList} from "../Components/IndexComponent/CateList";
import {NotificationBoard} from "../Components/PostComponent/NotificationBoard";
import {HotPost} from "../Components/PostComponent/HotPost";

export function IndexPage() {
    return (
        <div>
            <div>
                <Top/>
            </div>
            <div className="q1">
                <div className="q2">
                    <img className="main-image" alt="main"
                         src={process.env.PUBLIC_URL + '/Resources/Images/mainImage.png'}/>
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
            <div>
                <NotificationBoard />
            </div>
            <div className="q7">
                <HotPost />
            </div>
        </div>
    );
}