import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Switch>
          <Route exact path="/"><News setProgress={setprogress} key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKey} /></Route>
          <Route exact path="/business"><News setProgress={setprogress} key="business" pageSize={pageSize} country="in" category="business" apiKey={apiKey} /></Route>
          <Route exact path="/entertainment"><News setProgress={setprogress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={apiKey} /></Route>
          <Route exact path="/health"><News setProgress={setprogress} key="health" pageSize={pageSize} country="in" category="health" apiKey={apiKey} /></Route>
          <Route exact path="/science"><News setProgress={setprogress} key="science" pageSize={pageSize} country="in" category="science" apiKey={apiKey} /></Route>
          <Route exact path="/sports"><News setProgress={setprogress} key="sports" pageSize={pageSize} country="in" category="sports" apiKey={apiKey} /></Route>
          <Route exact path="/technology"><News setProgress={setprogress} key="technology" pageSize={pageSize} country="in" category="technology" apiKey={apiKey} /></Route>
        </Switch>
        {/* <News setProgress={setprogress}  key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKey} /> */}
      </Router>
    </div>
  );
}

export default App