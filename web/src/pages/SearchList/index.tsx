import './styles.css'
import PageHeader from '../../components/Header'
import Input from '../../components/Input'
import { FormEvent, useState } from 'react'
import SearchItem,{Search} from '../../components/SearchItem'
import api from '../../services/api'





const SearchList = () => {
    const [searchUsers, setSearchUsers] = useState([])
    
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const [rg, setRg] = useState("");


    async function SearchUsers(e:FormEvent){
        e.preventDefault();

       const response = await api.get('users',{
            params: {
                name,
                cpf,
                rg,
            }
        })
setSearchUsers(response.data);

    }

  


    return(
        <div id="page-search-list" className="container">
            <PageHeader 
            title='ForteEduca, a chave
            para o sucesso das escolas.' 
            description='Lista dos alunos matriculados'>
                <form id='search-student' onSubmit={SearchUsers}>
                    <Input
                    name='name'
                    label='Nome'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />

                    <Input
                    name='cpf'
                    label='CPF'
                    maxLength={12}
                    type='number'
                    value={cpf}
                    onChange={(e) => {
                        setCpf(e.target.value);
                      }}

                    />

                    <Input
                    name='rg'
                    label='RG'
                    maxLength={11}
                    type='number'
                    value={rg}
                    onChange={(e) => {
                        setRg(e.target.value);
                      }}
                    />
                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>
            
            <main>
                      {searchUsers.map((search:Search) =>{
                        return <SearchItem key={search.id} search={search} />
                      })}  
            </main>
        </div>
    )
}

export default SearchList