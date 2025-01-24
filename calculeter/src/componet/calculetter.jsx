import { useState } from 'react'
import './calculeter.css'

const Calculetter = () => {
    const [input,setinput] = useState("");
    const handlebuttonclick=(value) => {
        if(value === 'C'){
            setinput("");
        }
        else if(value === "="){
            try{
                setinput(eval(input).toString());
            }catch{
                setinput("Error");
            }
        }else{
            setinput(input+value);
        }
    };
    return (
        <div>
            <h1>CALCULATOR APP</h1>
            <div className="box">
                <div className="box_patten">
                <div className="display">{input || "0"}</div>
                    <div className="first_row">
                        <p onClick={()=>handlebuttonclick("C")}>C</p>
                        <p><a href="">\</a></p>
                        <p><a href="">*</a></p>
                        <p><a href="">.</a></p>
                    </div>
                    <div className="secound_row">
                    <p onClick={()=>handlebuttonclick("7")}>7</p>
                        <p><a href=""onClick={()=>handlebuttonclick("8")}>8</a></p>
                        <p><a href="">9</a></p>
                        <p><a href="">-</a></p>
                    </div>
                    <div className="third_row">
                        <p><a href="">4</a></p>
                        <p><a href="">5</a></p>
                        <p><a href="">6</a></p>
                        <p><a href="">+</a></p>
                    </div>
                    <div className="forth_row">
                        <p><a href="">1</a></p>
                        <p><a href="">2</a></p>
                        <p><a href="">3</a></p>
                    </div>
                    <div className="fifth_row">
                        <p><a href="">0</a></p>
                        <p><a href="">(</a></p>
                        <p><a href="">)</a></p>
                        <p><a href="">=</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculetter