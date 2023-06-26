import './styles.css'
import { Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import api from '../../services/api';

import logoImg from "../../assets/images/ForteEduca.svg"
import landingImg from "../../assets/images/LogoSecurity.svg"
import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import searchIcon from '../../assets/images/icons/search.svg'
import registreIcon from '../../assets/images/icons/registre.svg'




const LandingPage = () =>{
  const [totalRegiste , setTotalRegistre] = useState(0)

  useEffect(()=> {
    api.get('/registration').then(response =>{
      const {total} = response.data;
      setTotalRegistre(total)
    })
  },[])




return (
    <div id="landing-page">
      <div id="landing-page-content" className="container">
        <div className="container-logo">
          <img src={logoImg} alt="ForteEduca"/>
          <h2>Protegendo o futuro <br/>
             das escolas</h2>
        </div>

        <img
          src={landingImg}
          alt="Segurança na Escola"
          className="hero-image"
        />

        <div className="btn-container">
          <Link to="/search" className="search">
            <img src={searchIcon} alt="Pesquisar" />
            Pesquisar
          </Link>

          <Link to="/registre" className="registre">
            <img src={registreIcon} alt="Cadastrar" />
           Cadastrar
          </Link>
        </div>
        <span className="total-connections">
          Total de {totalRegiste} cadastros ja realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  )


}

export default LandingPage