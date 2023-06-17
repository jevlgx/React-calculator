import { useContext } from 'react'
import {HeadingContext} from "./Heading";

function Btne(){
    const {headingSate} = useContext(HeadingContext);
    console.log("1111111111111",headingSate)

    return(
        <button Style = "color: blue; margin: 2%; background-color: transparent; border: 1px solid #000; border-radius: 5px">bouton 2
            {headingSate}
        </button>
    );
}

export default Btne;