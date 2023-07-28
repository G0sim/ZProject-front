// import {useEffect, useState} from "react";
// import {SERVER_ADDRESS} from "../../Components/Constant";
// import {PostList} from "../../Components/PostComponent/PostList";
// import {useLocation} from "react-router-dom";
//
// export function BoardListBody() {
//
//     const [posts, setPosts] = useState();
//         const location = useLocation();
//     const id = location.search;
//
//
//     useEffect(() => {
//         const fetchData = () => {
//             const xhr = new XMLHttpRequest();
//             xhr.open("GET", SERVER_ADDRESS + "/post/board"+id, true);
//
//             xhr.onload = () => {
//                 if (xhr.status === 200) {
//                     const responseData = JSON.parse(xhr.responseText);
//                     setPosts(responseData);
//                 }
//             };
//             xhr.send();
//         };
//         fetchData();
//     }, []);
//
//     return (
//         <div>
//             전체글보기
//            <ul>
//                {posts.map.posts((post)=>(
//                    <li key = {post.id}>
//                        <p>{post.title}</p>
//                    </li>
//                ))}
//            </ul>
//         </div>
//
//     );
// }
//
// // export function BoardListBody() {
// //     let [datas, setDatas] = useState();
// //
// //     const location = useLocation();
// //     const id = location.search;
// //
// //     useEffect(() => {
// //         const xhr = new XMLHttpRequest();
// //         xhr.open("GET", SERVER_ADDRESS + "/post/board"+id, false);
// //         xhr.send();
// //         xhr.onreadystatechange = () => {
// //             if (xhr.readyState === xhr.HEADERS_RECEIVED) {
// //                 setDatas(JSON.parse(xhr.responseText));
// //             }
// //         }
// //     }, []);
// //
// //
// //     console.log("+++++++",datas);
// //
// //
// //     return (
// //         <div>
// //             전체글보기
// //             {datas ? datas.items.map(t => <PostList source={t}/>) :<></>}
// //         </div>
// //     );
// // }