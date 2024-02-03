import { useState } from "react";
import Btn from "./components/btn/Btn";
import style from "./App.module.css";

function App() {


  const[inputDisp, setInputDisp] = useState('');
  const[result,setResult] = useState(null);

  const handleClick = (e) => {
    // // console.log(e);
    // console.log(e.target.textContent);
 
    
    if(e.target.textContent === '='){

      if(!inputDisp){
        setResult('Error');
      }else{
        let res =Function("return "+ inputDisp)();
      console.log(res); 
      setResult(res);
      }
      

    }else if(e.target.textContent === 'C'){
      setInputDisp([]);
      setResult(null);
    }else{
      setInputDisp(prevValue => prevValue+e.target.textContent);
    }

   
  }

  const btn = [1,2,3,4,5,6,7,8,9,0,'+','-','*','/','=','C',];

  return (
    <div className={style.container}>

        <input className={style.display} type="text" value={inputDisp}/>
        <div className={style.result}>
          {result}
        </div>

        <div className={style.btn_container}>
        {
          btn.map((val)=>(
            <button className={style.btn} key={val} onClick={handleClick}>{val}</button>
          ))
        }
        </div>
       
    </div>
  );
}

export default App;
