import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

// import api from '../../services/api';

import './styles.css';

export default function Profile() {

//     const [id, setID] = useState('');
//     const history = useHistory();

//     async function handleLogin(e) {
//         e.preventDefault();

//         const login = {email, senha};
    
//     try {
        
//         const response = await api.post('parceiroconteudo', {login} );

//         localStorage.setItem('parceiroID', id);
//         localStorage.setItem('parceiroNome', response.data.nome);

//         history.push('/profile');
//     }
//     catch (err) {
//         alert('ONG não existe ou não está cadastrada.')
//     }
  
// }

    return  (
        <div className="profile-container">
        <header>
       
                <span> Bem vinda, <strong>Partner</strong></span>

                <Link className="button" to="/newcontent">
                    Cadastrar novo conteúdo
                </Link>
                <button  type="button">
                    <FiPower size={20} color="#8B0000" />
                </button>
        </header>
        <h1>Conteúdos cadastrados</h1>
        <ul>           
            <li>    
                    <strong>MATURIDADE</strong>
                    <p>Sênior</p>

                    <strong>TÍTULO</strong>
                    <p>Como ficar rico?</p>

                    <strong>CONTEÚDO:</strong>
                    <p>Basta fazer investimentos. heheheheheh</p>

                    <strong>AUTOR</strong>
                    <p><i>Maria severo</i></p>
                    
                    <button type="button">
                        <FiTrash2 size={18} color="#8B4513" />
                    </button>
                </li>
                <li>    
                    <strong>MATURIDADE</strong>
                    <p>Aprendiz</p>

                    <strong>TÍTULO</strong>
                    <p>Como econimizar?</p>

                    <strong>CONTEÚDO:</strong>
                    <p>Não gaste tudo e pronto!</p>

                    <strong>AUTOR</strong>
                    <p><i>João severo</i></p>
                    
                    <button type="button">
                        <FiTrash2 size={18} color="#8B4513" />
                    </button>
                </li>
        </ul>
        </div>
    )
};