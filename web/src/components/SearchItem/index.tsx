import React from 'react';
import './styles.css'
import checkIcon from '../../assets/images/icons/check.svg'



export interface Search {
  id:number;
  name:string
  avatar:string;
  shift:string
  number_register: string;
  finish_course:string;
  
}




export interface SearchItemProps {
search: Search
}








const SearchItem: React.FC<SearchItemProps> = ({search})=>{
  
    return(
      
        <article className="search-item">
          <header>
            <img src={search.avatar} alt={search.name} />
            <div>
                <strong>{search.name}</strong>
                <p><span> Nº Matricula: {search.number_register}</span></p>
            </div>
          </header>
          <p> 
            Término do curso:
            <strong>{search.finish_course}</strong>
          </p>
            <footer>
                <p>
                   <strong>O aluno esta :</strong>                     
                </p>
                <a href="">
                    <img src={checkIcon} alt="Ok" />
                    Matriculado
                </a>
            </footer>
        </article>
    )
}
export default SearchItem;