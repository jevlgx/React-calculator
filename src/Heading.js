import react, { useContext } from 'react';
import React, {useState} from 'react';
import Btn from './Btn';
import Btn2 from './Btn2';

let HeadingContext = React.createContext();

function Heading(props){
    let [headingSate, setHeadingSate] = useState("1");
    let [headingSate2, setHeadingSate2] = useState(0);
    let switchContext = function(){
        setHeadingSate(headingSate + 1);
    }
    let switchContext2 = function(){
        setHeadingSate2(headingSate2 + 1);
    }
    
    return(
        <>
            <HeadingContext.Provider value = {{headingSate}}>

                <button onClick = {switchContext}> changer de contexte {headingSate}</button>
                <button onClick = {switchContext2}> changer de contexte2 {headingSate2}</button>
                {props.children}
                <Btn2  element = {headingSate}/>
            </HeadingContext.Provider>
        </>
    );
}

export {HeadingContext};
export default Heading
