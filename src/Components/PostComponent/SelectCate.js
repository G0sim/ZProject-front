import '../../Css/Write.css';
import {useState} from "react";

export function SelectCate({body, setBody}) {
//나중에 게시판 이름으로 바꿀 것.


    const OPTIONS = [
        {value: "default", name: "카테고리"},
        {value: "hoddy", name: "취미"},
        {value: "supplyfood", name: "보조식품"},
        {value: "tip", name: "운동팁"}
    ]

    const changeHandle = (evt) => {
        const newBody = { ...body, "cate" : evt.target.value};
        setBody(newBody);
    };
    const SelectBox = (props) => {
        return (
            <select className="select-box" name="cate" onChange={changeHandle}>
                {props.options.map((option) => (
                    <option value={option.value}
                            defaultValue={props.defaultValue === option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        )
    };

    return (
        <div>
            <SelectBox options={OPTIONS} defaultValue="default" name="cate"></SelectBox>
        </div>
    );
}