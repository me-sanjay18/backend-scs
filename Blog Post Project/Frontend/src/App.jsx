import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import CreatePost from './assets/Pages/Create'
import Feed from './assets/Pages/Feed'


const App = () => {
  return (
      <Router>
        <Routes>
          <Route path='/CreatePost' element={<CreatePost />} />
          <Route path='/Feed' element={<Feed />} />
        </Routes>
      </Router>
  )
}

export default App