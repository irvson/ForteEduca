import { BrowserRouter,Routes,Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import RegistreForm from "./pages/RegistrePage"
import SearchList from "./pages/SearchList"



const Router = () =>{
    return(
        <BrowserRouter>
        <Routes>
    <Route path="/" element={<LandingPage/>}  />
    <Route path="/registre" element={<RegistreForm/>} />
    <Route path="/search" element={<SearchList/>} />  
    </Routes>
        </BrowserRouter>
    )
} 

export default Router