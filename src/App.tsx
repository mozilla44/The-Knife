import { BrowserRouter,Route,Routes } from 'react-router-dom'
import { Homepage } from './pages/HomePage'
/* import { DetailsPage } from './pages/DetailsPage' */
import { NotFound } from './pages/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Test } from './pages/Test'


function App() {
  return (
   <BrowserRouter>
    <Header/>
     <Routes>
       <Route path="/" element={<Homepage />} />
       {/* <Route path="/restaurant/:id" element={<DetailsPage />} /> */}
       <Route path="/test" element={<Test />} />

       {/* <Route path="/favorites" element={<Favorites/>}/> */}
       <Route path="*" element={<NotFound />} />
     </Routes>
     <Footer/>
   </BrowserRouter>
  )
}

export default App
