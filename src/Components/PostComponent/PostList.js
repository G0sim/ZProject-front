import {useEffect, useState} from "react";
import {SERVER_ADDRESS} from "../Constant";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {postIdState , pageState} from "../../index";

export function PostList({source}) {

    const navigate = useNavigate();
    const setPages = useSetRecoilState(pageState);
    const setPostDetailId = useSetRecoilState(postIdState);
    const moveDetailPage = (evt) => {
        navigate("/post/detail"+source.id);
    }
    console.log(source);

    return (
        <div onClick={moveDetailPage}>
            <div>
                {/*{source.posts.title}*/}
            </div>

        </div>
    );
}
