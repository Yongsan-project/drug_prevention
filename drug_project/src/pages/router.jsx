import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login';
import Join from './join';
import Home from './home';
import Sms from './sms';
import NotFound from './notFound';

function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/join' element={<Join />} />
        <Route path='send' element={<Sms />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default Router;