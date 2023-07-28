import {Top} from "../Components/Top";
import {UserView} from "../Components/IndexComponent/UserView";
import {CateList} from "../Components/IndexComponent/CateList";
import {BoardListBody} from "../Templates/PostTemplates/BoardListBody";

export function BoardListPage() {

    return(
        <div>
            <div>
                <Top />
            </div>
            <div className="q1">
                <div className="q2">
                    글목록
                    <BoardListBody />
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