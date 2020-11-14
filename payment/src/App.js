import React from 'react'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './Contact'
import Nav from './Nav'
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route} from 'react-router-dom'

function App(){
      return(
          <div>
            <BrowserRouter>
            <Nav />
             <Route path='/' exact component={Home} />
             <Route path='/about' component={About} />
             <Route path='/services' component={Services} />
             <Route path='/contact' component={Contact} />
           </BrowserRouter>

            </div>
      )
}
export default App