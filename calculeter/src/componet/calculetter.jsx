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
                        <p><a onClick={()=>handlebuttonclick("C")}>C</a></p>
                        <p><a onClick={()=>handlebuttonclick("/")}>/</a></p>
                        <p><a onClick={()=>handlebuttonclick("*")}>*</a></p>
                        <p><a onClick={()=>handlebuttonclick(".")}>.</a></p>
                    </div>
                    <div className="secound_row">
                        <p><a onClick={()=>handlebuttonclick("7")}>7</a></p>
                        <p><a onClick={()=>handlebuttonclick("8")}>8</a></p>
                        <p><a onClick={()=>handlebuttonclick("9")}>9</a></p>
                        <p onClick={()=>handlebuttonclick("-")}>-</p>
                    </div>
                    <div className="third_row">
                        <p><a onClick={()=>handlebuttonclick("4")}>4</a></p>
                        <p><a onClick={()=>handlebuttonclick("5")}>5</a></p>
                        <p><a onClick={()=>handlebuttonclick("6")}>6</a></p>
                        <p onClick={()=>handlebuttonclick("+")}>+</p>
                    </div>
                    <div className="forth_row">
                        <p><a onClick={()=>handlebuttonclick("1")}>1</a></p>
                        <p><a onClick={()=>handlebuttonclick("2")}>2</a></p>
                        <p><a onClick={()=>handlebuttonclick("3")}>3</a></p>
                    </div>
                    <div className="fifth_row">
                        <p onClick={()=>handlebuttonclick("0")}>0</p>
                        <p onClick={()=>handlebuttonclick("(")}>(</p>
                        <p a onClick={()=>handlebuttonclick(")")}>)</p>
                        <p onClick={()=>handlebuttonclick("=")}>=</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Calculetter