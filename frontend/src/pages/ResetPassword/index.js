import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

export default function ResetPassword() {
    return  (
        <div className="resetpassword">
            <div className="content">
        <header>
            <h1>
                Esqueceu a senha?
            </h1>
            <p>
                Não tem problema, confirme seu email e vamos te enviar um <i>SMS</i> informando sua senha.
            </p>
            <Link className="back-link" to="/">
                        <FiArrowLeft size={20} color="#8B0000" />
                        Ah, deixa eu lembrei da senha!
             </Link>
        </header>

        <form>
            <input placeholder="Digite seu email e enviaremos um SMS"/>
            <button className="button">Enviar mensagem</button>
            </form>

        </div>
        
        </div>

    )
};