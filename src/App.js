import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
    const apiKey=process.env.REACT_APP_API_KEY;
    const [progress, setProgress] = useState([])
    
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}

          />
          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress}  apiKey={apiKey} key='general' pageSize={9} country="us" category="general"/>}/>
            <Route exact path="/business" element={<News setProgress={setProgress}  apiKey={apiKey} key='business' pageSize={9} country="us" category="business"/>} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress}  apiKey={apiKey} key='entertainment' pageSize={9} country="us" category="entertainment"/>}/>
            <Route exact path="/health" element={<News setProgress={setProgress}  apiKey={apiKey} key='health' pageSize={9} country="us" category="health"/>}/>
            <Route exact path="/science" element={<News setProgress={setProgress}  apiKey={apiKey} key='science' pageSize={9} country="us" category="science"/>}/>
            <Route exact path="/sports" element={<News setProgress={setProgress}  apiKey={apiKey} key='sports' pageSize={9} country="us" category="sports"/>}/>
            <Route exact path="/technology" element={<News setProgress={setProgress}  apiKey={apiKey} key='technology' pageSize={9} country="us" category="technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  
}

export default App;