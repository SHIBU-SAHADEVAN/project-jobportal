
import { Routes,Route } from 'react-router-dom';
import './App.css';

import AboutUsPage from './AboutUs-Page';
import HomePage from './HomePage';
import JobListPage from './JobList-Page';
import ContactUsPage from './ContactUs-Page';
import AdminPage from './Admin-Page';
import BrowseJobsPage from './BrowseJobs-Page';
import BrowseCategoryPage from './BrowseCategory-Page';


function App() {
  return (
    <div className="App">
              <Routes>
                  <Route path="/" element={<HomePage/>} />

                  <Route path="/Home" element={<HomePage/>} />
                  <Route path="/AboutUs" element={<AboutUsPage/>} />
                  <Route path='/JobList' element={<JobListPage/>}/>
                  <Route path='/BrowseJobs' element={<BrowseJobsPage/>}/>
                  <Route path='BrowseCategories' element={<BrowseCategoryPage/>}/>
                  <Route path='/Contact' element={<ContactUsPage/>}/>

                  <Route path='/Admin' element={<AdminPage/>}/>
              </Routes>
    </div>
  );
}


export default App;

