import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewContent() {
    return  (
       <div className="newcontent-container">
           <div className="content">
               <section>
                    <h1>Escrever novo conteúdo</h1>
                     <p>Escreva dicas financeiras que possam audar pessoas a mudar seus hábitos</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={20} color="#8B0000"/>
                             Voltar para Home
                    </Link>
               </section>
               <form>
               <select id="maturidade">
                    <option value="aprendiz">1 - Aprendiz</option>
                    <option value="juniot">2 - Júnior </option>
                    <option value="pleno">3 - Pleno </option>
                    <option value="senior">4 - Sênior </option>
                    <option value="expert">5 - Expert </option>
                    <option value="expertprofissional">6 - Expert Profissional</option>
                </select>
                      
               <input 
                        placeholder="Título" />
                <textarea 
                        placeholder="Conteúdo" />
                <input 
                        placeholder="Autor" />
                <button className="button" type="submit">Postar conteúdo</button>
               </form>
              
           </div>

       </div>
    )
};