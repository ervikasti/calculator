

import style from "./Btn.module.css";
export default function Btn({val,click}){
    return(
        <div className={style.container} onClick={click}>
            <h5>{val}</h5>
        </div>
    )
}