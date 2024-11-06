import { Routes,Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Body from './Body';
import ApplyProcess from './ApplyProcess';
import JobCategory from './JobCategory';
import AboutUsSection from './AboutUsSection';


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      <ApplyProcess/>
      <JobCategory/>
      <AboutUsSection/>
              <Routes>
                  {/* <Route path='/Home' element={<Header/>}></Route> */}
              </Routes>
    </div>
  );
}


export default App;

