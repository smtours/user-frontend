import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AddUser } from './pages/AddUser';
import UserList from './pages/ViewUser';
import { EditUser } from './pages/EditUser';
import MultiStepForm from './pages/MultiStepForm'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen"> 
        <Navbar />
        <ToastContainer />
        <main className="flex-grow"> 
          <Routes>
            <Route path='/' element={<MultiStepForm />} />
            <Route path='/adduser' element={<AddUser/>}/>
            <Route path='/viewusers' element={<UserList />} />
            <Route path='/edituser/:id' element={<EditUser />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
