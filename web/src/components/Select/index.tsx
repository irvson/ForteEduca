import React,{SelectHTMLAttributes} from 'react';
import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string;
    label:string;
    options:Array<{
        id:string;
        label:string;
    }>
}



const Select:React.FC<SelectProps> = ({label,name,options,...rest})=>{
    return(
        <div className="select-block">
            <label htmlFor={name}>{label}</label>
            <select id={name} value={rest.value} {...rest}>
            <option value="" disabled  selected hidden>Selecione uma Opção</option>
            {
                options.map(option=>{
                    return <option key={option.id} value={option.id} >{option.label}</option>
                })
            }

            </select>           
            </div>
    )
}

export default Select;