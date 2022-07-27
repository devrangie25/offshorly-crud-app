import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login';
import Header from './components/frame/Header';
import PageNotFound from './pages/errors/PageNotFound';
import Tasks from './pages/views/Tasks';
import SideNav from './components/frame/SideNav';

function App() {
  return (
    <div className="App">
      <Header />
      <SideNav />
      <main>
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route exact path="/" element={<h1>Home</h1>} />
          <Route exact path="/tasks" element={<Tasks />} />
          <Route exact path="/about" element={<h1>About</h1>} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}


export default App;
