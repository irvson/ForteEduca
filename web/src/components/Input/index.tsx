import React,{InputHTMLAttributes} from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
name:string;
label:string;
maxlength?:string;
place?:string;
}





const Input = ({name , label,maxlength,place,...rest}:InputProps)=>{
    return(
        <div className="input-block">
            <label htmlFor={name}>{label} {place} </label>
            <input type="text" id={name} {...rest} />
        </div>
    )
}
export default Input;