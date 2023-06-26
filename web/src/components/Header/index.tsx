import { Link } from 'react-router-dom'
import './styles.css'

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from "../../assets/images/ForteIcon.svg"
import { ReactNode } from 'react';



interface TitleProps{
    children?: ReactNode;
    title:string,
    description?:string
}


const PageHeader = ({title,description,children}:TitleProps) => {
return (
    <header className="page-header">
        <div className="topbar">
            <Link to="/">
                <img src={backIcon} alt="Voltar" />
            </Link>
            <img src={logoImg} alt="ForteEduca"/>
        </div>
        <div className="header-content">
            <strong>{title}</strong>
            <p>{description}</p>
            {children}
        </div>
    </header>
)



}

export default PageHeader