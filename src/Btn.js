import { useContext } from 'react'
import {HeadingContext} from "./Heading";

function Btn(props){
    const {headingSate} = useContext(HeadingContext);
    console.log("00000000000000000000000000",headingSate)
    return(
        <>
            <button>
                enfants button : {headingSate}
            </button>
            <div>
                {props.children}
            </div>
        </>
    );
}


export default Btn;
