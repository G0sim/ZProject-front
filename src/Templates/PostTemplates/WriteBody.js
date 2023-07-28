import {SelectCate} from "../../Components/PostComponent/SelectCate";
import {WriteForm} from "../../Components/PostComponent/WriteForm";
import {ImportPostImage} from "../../Components/PostComponent/ImportPostImage";
import '../../Css/Write.css';
import {SERVER_ADDRESS} from "../../Components/Constant";
import {useState} from "react";

export function WriteBody() {

    const [body, setBody] =useState({});

    console.log(body);
    const extractData = (evt) => {
        evt.preventDefault();
        const name = evt.name.value;
        return name;
    }

    const addPost = (evt) => {
        evt.preventDefault();
        const a = extractData(evt.current.cate.value);

        const cate = evt.target.cate.value;
        const title = evt.target.title.value;
        const postContent = evt.target.postContent.value;

        if (cate === "" || title === "" || postContent === "") {
            evt.target.title.focus();
            return;
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", SERVER_ADDRESS + "/post/write", false);
        xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
        xhr.send("cate=" + cate + "&title=" + title + "&postContent=" + postContent);

        if (xhr.status === 201) {
            window.alert("글이 정상적으로 등록되었습니다.");
        } else {
            window.alert("통신오류로 글이 등록되지 않았습니다.");
        }

    }


    return (
        <div className="write-main1">
            <form >
                <div className="wq1">
                    <SelectCate body={body} setBody={setBody}/>
                </div>
                <div className="wq2">
                    <WriteForm body={body} setBody={setBody}/>
                </div>
                <div>
                    <ImportPostImage body={body}/>
                </div>
                <div className="wq8">
                    <div>
                        이미지업로드
                    </div>
                    <div>
                        <button className="post-button" onClick={addPost}>글 등록하기</button>
                    </div>
                </div>
            </form>
        </div>
    );
}