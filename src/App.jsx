import './style/App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Routes,
} from "react-router-dom"
import {CardSl, Create, Info} from "./cards"

function App() {
  return (
    <Router>
      <header>
        <nav>
          <button><NavLink to='/'>Слайдер карточек</NavLink></button>
          <button><NavLink to='/Create'>Создать карочку</NavLink></button>
          <button><NavLink to='/Info'>Все карточки</NavLink></button>   
          
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<CardSl />}/>
          <Route path="/Create" element={<Create />}/>
          <Route path="/Info" element={<Info />}/>
        </Routes>
      </main>
    </Router>
  )
}

export default App
