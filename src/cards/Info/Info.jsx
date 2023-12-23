import { createElement } from "react"
import Cards from ".../card.json"
export default function Info() {
    let fdf = document.createElement("div")
    for(let i = 0;i < Cards.length; i++){
        let b = createElement("div")
        b.appendChild(Cards[i].title)
        b.appendChild(Cards[i].body)
        fdf.appendChild(b)
    }
    return(
        <div className="info">{fdf}</div>
    )
}