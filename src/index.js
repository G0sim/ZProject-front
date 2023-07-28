import ReactDOM from 'react-dom/client';
import {atom, RecoilRoot} from "recoil";
import {createBrowserRouter, RouterProvider, useParams} from "react-router-dom";
import {SignUpPage} from "./Pages/SignUpPage";
import {LogInPage} from "./Pages/LogInPage";
import "./Css/Index.css"
import {IndexPage} from "./Pages/IndexPage";
import {WritePage} from "./Pages/WritePage";
import {PostDetailPage} from "./Pages/PostDetailPage";
import {BoardListPage} from "./Pages/BoardListPage";

export const jwtState = atom(
    {key: "jwtState", default: null}
);
export const userEmailState = atom(
    {key: "userEmailState", default: null}
);

export const pageState = atom({
    key: "pageState",
    default: "about"
});

export const postIdState = atom({
    key: "postIdState",
    default: undefined
})


const router = createBrowserRouter([
    {path: "/", element: <IndexPage/>},
    {path: "/user/signup", element: <SignUpPage/>},
    {path: "/user/login", element: <LogInPage/>},
    {path: "/post/board/*", element: <BoardListPage/>},
    {path: "/post/write", element: <WritePage/>},
    {path: "/post/detail/*", element: <PostDetailPage/>},
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RecoilRoot>
        <RouterProvider router={router}/>
    </RecoilRoot>
);


