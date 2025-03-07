import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component'
import {Routes,Route} from 'react-router-dom';

const Shop = () => <h1>I am at shop page</h1>

const App = () => {
  return (
  <Routes>
    <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path ='shop' element={<Shop/>}/>
    </Route>
  </Routes>
  
  )
};

export default App;
