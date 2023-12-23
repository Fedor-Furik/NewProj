import {NavLink} from "react-router-dom"
import cards from "../Info/Info"
export default function Create() {
    let butt = document.getElementsByClassName("sub")
    let inp1 = document.getElementsByClassName('inp1')
    let inp2 = document.getElementsByClassName('inp2')
    let inf = cards.document.getElementsByClassName('info')
    function send() {
        let ghg = document.createElement('div')
        ghg.appendChild(inp1.value)
        ghg.appendChild(inp2.value)
        inf.appendChild('ghg')
    }
    butt.addEventEventListener('submit', send())
    return(
        <form action="">
            <input className="inp2" type="text" />
            <input className="inp2" type="text" />
            <button className="sub">Send</button>
        </form>
    )

}