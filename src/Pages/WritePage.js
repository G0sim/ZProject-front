import {Top} from "../Components/Top";
import {WriteBody} from "../Templates/PostTemplates/WriteBody";
import {UserView} from "../Components/IndexComponent/UserView";
import {CateList} from "../Components/IndexComponent/CateList";

export function WritePage() {
    return (
        <div>
            <div>
                <Top/>
            </div>
            <div className="q1">
                <div className="q2">
                    <WriteBody/>
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
        </div>
    );
}