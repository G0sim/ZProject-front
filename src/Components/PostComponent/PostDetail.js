import {SERVER_ADDRESS} from "../Constant";
import {useLocation} from "react-router-dom";

export function PostDetail() {

    const location = useLocation();
    const id = location.search;
    console.log("locationSearch = " + id);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", SERVER_ADDRESS + "/post/detail" + id, false);
    xhr.send();
    const data = JSON.parse(xhr.responseText);
    console.log(data);

    return (
        <div className="post-main">
            <div className="wq4">
                <div className="post-title">
                    {data.title}
                </div>
                <div className="wq6">
                    <div className="post-writer">
                        {data.postWriter.nick}
                    </div>
                    <div className="post-date">
                        {data.postDate}
                    </div>
                </div>
            </div>
            <div className="post-line">
            </div>
        기    <div className="post-content">
                {data.postContent}
            </div>
        </div>
    );

}