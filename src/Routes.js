import { BrowserRouter, Switch, Route } from 'react-router-dom'
import React from 'react'
import App from './App'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Index2 from './pages/Index2'


function Router(){
    return (
        <BrowserRouter>
            <style jsx="true" global="true">
            {`body {margin: 0px; padding: 0px; font-family: 'Red Hat Display', sans-serif;}`}
            </style>
            <style jsx="true" global="true">
                {`body {background-color: #18161D; margin: 0px; padding: 0px; overflow-x: hidden; max-width: 100vw; -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
                    box-sizing: border-box;}`}
            </style>

            <Switch>
                <Route path='/' component={App} exact/>
                <Route path='/fveiga' component={App} exact/>

                <Route path='/index2' component={Index2} exact/>

                <Route path='/projects' component={Projects} />
                <Route path='/contact' component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router