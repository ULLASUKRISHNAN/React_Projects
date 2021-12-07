import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TinderCard from './Components/TinderCard';
import Chats from './Components/Chats';
import ChatScreen from './Components/ChatScreen';

function App() {
  return (
    <Router>
      <div className='app'>
        <Routes>
          <Route
            path='/chat/:person'
            element={
              <>
                <Header backButton='/' />
                <ChatScreen />
              </>
            }
          ></Route>
          <Route
            path='/chat'
            element={
              <>
                <Header backButton='/' />
                <Chats />
              </>
            }
          ></Route>
          <Route
            path='/'
            element={
              <>
                <Header />
                <TinderCard />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
