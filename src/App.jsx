import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Contact from './Contact'
import Home from './Home'
import './style.css';
import { HelmetProvider } from 'react-helmet-async';

const helmetContext = {};

const App = () => {
    return (
        <HelmetProvider context={helmetContext}>
            <BrowserRouter>
                <Routes>
                    <Route path='/' Component={Home}></Route>
                    <Route path='/contact' Component={Contact}></Route>
                </Routes>
            </BrowserRouter>
        </HelmetProvider>

    )
}

export default App