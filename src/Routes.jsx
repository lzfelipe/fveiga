import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import React from 'react'
import App from './App'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Index2 from './pages/Index2'


function Router(){
    return (
        // basename keeps every route under /fveiga/, so links and page reloads work on GitHub Pages
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            {/* Skips the entrance animations for visitors who prefer reduced motion */}
            <MotionConfig reducedMotion="user">
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/index2' element={<Index2 />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='*' element={<Navigate to='/' replace />} />
                </Routes>
            </MotionConfig>
        </BrowserRouter>
    )
}

export default Router
