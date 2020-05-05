import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn, FiLock } from 'react-icons/fi';

import api from '../../services/api';


import logo1 from '../../assets/profile.svg';

import './styles.css';

export default function Logon() {

    return  (

        <div className="logon-container">
            
            <div className="description">
               
                   <section className="form">
              
                      
                        <h2><i>Vamos ajudar?</i></h2>
                         <p> "Atualmente, muitas pessoas não tem ou possuem o hábito de poupar, investir ou controlar as suas finanças.
                            Por isso você poderia ser <strong><i>Nosso parceiro</i></strong>,
                            e dessa fomra ajudar milhões de pessoas a mudar hábito e rotina."</p>
                    
                    <form>
                    <h1>É parceiro? Faça Login!</h1>
                    <input placeholder="Digite seu email" />
                    <input type="password" name="senha" placeholder="Digite a Senha" />
                    <button className="button" type="submit" >Entrar</button>
                    <Link className="back-link" to="/register">
                    <FiLogIn size={20} color="#8B0000" />
                        Não tenho cadastro
                     </Link>
                    <Link className="back-link" to="/resetpassword">
                    <FiLock size={20} color="#8B0000" />
                        Esqueci a senha!
                    </Link>
              </form>        
      </section>

            </div>
                
            
            <img src={logo1} alt="Econimic Game"/>
           
        </div>
      
    )
};