import './App.css';
import './components/pages/NameList/NameList'
import NameList from './components/pages/NameList/NameList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';


import { BrowserRouter, Routes,Route } from 'react-router-dom';

function App() {
  return (
<BrowserRouter><HeaderBar></HeaderBar>
<Routes>
<Route path="/about" element={<About></About>}></Route>
<Route path="/namelist" element={<NameList></NameList>}></Route>
<Route path="/" element={<Home></Home>}></Route>
</Routes>
</BrowserRouter>



  );
}
export default App;
