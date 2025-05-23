import React, { FormEvent, useState, ChangeEvent } from "react";
import { Link } from 'react-router-dom';
import logoImg from '../images/logo.png';
import {BiLogIn,BiAddToQueue} from 'react-icons/bi'
import { useHistory } from "react-router-dom";
import api from "../services/api";
import '../styles/pages/login.css'


function Login(){
     let logado

    const history = useHistory()

    const [name, setName] = useState('')
    const [senha, setPassword] = useState('')
    
    async function handleSubmit() {
  
     console.log(name)
     console.log(senha)
     try{
        const response = await api.get(`/login/?usuario=${name}&senha=${senha}`)
        

        if(response.status == 200){
            const log = api.post(`/log/user/${localStorage.getItem('id_login')}`,{
                acao:"Realizou Login "
              })
           alert('Login realizado com sucesso!!')
           localStorage.setItem('id_login', response.data._id);
           localStorage.setItem('cargo', response.data.cargo);
           localStorage.setItem('nome', response.data.nome);
           history.push(`/admin/inicial`)
        }else{
           
        }
     }catch(e){
        alert('Login não realizado!!')
     }

    
  
    }
   
    return(
        <div id="page-login">
            <aside>
                <header>
                    <img src={logoImg} className="CRA-RR"/>

                    <h2>Digite seu nome e senha para acessar o sistema</h2>
                </header>

                <footer>
                    <strong>Boa Vista</strong>
                    <span>Roraima</span>
                </footer>
            </aside>

            <div className="Formulario">
                <fieldset>
                    <div className="input-block">
                        <label htmlFor="Nome">VALOR</label >
                        <input id="nome"
                        value={name} 
                        onChange={event => setName(event.target.value)} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="senha" show='*'>DATA</label >
                        <input id="senha"
                            value={senha} 
                            onChange={event => setPassword(event.target.value)} />
                    </div>
                    <div className="input-block">
                        <label htmlFor="Nome">TIPO DE CHAVE</label >
                        <input id="nome"
                        
                         />
                    </div>
                    <div className="input-block">
                        <label htmlFor="Nome">CHAVE</label >
                        <input id="nome"
                         />
                    </div>
                    
                    <div>
                        <BiAddToQueue size={26} color="rgba(0,0,0,0.6)"/>
                    </div>
                    <button>
                        ENVIAR
                    </button>
                    
                    <div onClick={handleSubmit} className="Entrar_no_sistema"> 
                        <BiLogIn size={26} color="rgba(0, 0, 0, 0.6)"/>
                    </div>
                </fieldset>
            </div>

            
        </div>
    )
}

export default Login;