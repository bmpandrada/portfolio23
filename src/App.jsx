import { useState } from 'react'
import Feature from './Feature'
import Header from './Header'
import Hero from './Hero'
import Project from './Project'

function App() {
  const [toggle, setToggle] = useState(true)

  const show = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container">
     <Header />
      <section className="hero">
       <Hero toggle={toggle} show={show}/>
      </section>
      <section className="features">
        <Feature />
      </section>
      <section className='projects'>
        <Project />
      </section>
      <footer>
        <h3>&copy; Bruce Andrada | 2023</h3>
      </footer>
    </div>)
}

export default App
