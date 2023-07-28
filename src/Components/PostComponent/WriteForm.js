import '../../Css/Write.css';
import {useState} from "react";

//글쓰기 폼에 들어갈것 카테고리 글제목 글내용 폼데이터(이미지)
export function WriteForm({body, setBody}) {
    const titleChangeHandle = (evt)=>{
        setBody({...body , "title" : evt.target.value});
    }

    const contentChangeHandle = (evt)=>{
        setBody({...body , "postContent" : evt.target.value});
    }
    return (
        <div className="write-main">
            <div className="wq1">
                <input className="postTitle-blank" type="text" name="title"
                       onChange={titleChangeHandle}
                       placeholder="제목"/>
            </div>
            <div className="write-line"></div>
            <div className="wq1">
                <textarea className="postContent-blank" type="postContent" name="title" placeholder="내용"
                          onChange={contentChangeHandle}
                />
            </div>
        </div>
    );

}