import React, {useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

// import axios from 'axios';

import api from '../../services/api';

import './styles.css';

export default function Register() {
    const[CNPJCPF, setCnpjCpf] = useState("");
    const[Nome, setNome] = useState("");
    const[CodPais, setCodPais] = useState("");
    const[Telefone, setTelefone] = useState("");
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    

    const history = useHistory();

    async function handleRegister(e){
        // Deixa a página de cadastro de ong estática 
        // Caso não exista alteração
        e.preventDefault();
        const ID="999";
        const data = {
            ID,
            CNPJCPF,
            Nome,
            CodPais,
            Telefone,
            email,
            senha
        };

        console.log(data);
        // const formatJson = JSON.stringify(data);
        // console.log(formatJson);


        // console.log(data);

        // const url = axios.create({
        //     baseURL: 'https://pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/'
        // });
        // async function add(data) {
        //     return request({
        //     url: 'https://pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/parceiroconteudo',
        //     method: 'post',
        //     data: JSON.stringify(data)
        //     })
        //     }
        
        try{

            // const url = `https://cors-anywhere.herokuapp.com//pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/parceiroconteudo`
            // const confirmCad = await axios.post(`${url}`, formatJson);
            // // history.push('/');
            // alert('Cadastrado com sucesso');

            // var xhttp = new XMLHttpRequest();
    		// xhttp.open("POST", "https://cors-anywhere.herokuapp.com//pcjmmlqv06gvblof-gmnapp-nodejs.cfapps.eu10.hana.ondemand.com/service.xsodata/parceiroconteudo", true);
			// var oJson = JSON.stringify(data);
			// xhttp.setRequestHeader("Content-Type", "application/json");
            // xhttp.send(oJson);
            // var result = xhttp.responseText;
            // xhttp.onload = function () {
            //     if (xhttp.readyState === xhttp.DONE) {
            //         if (xhttp.status === 200){
            //             console.log(xhttp.response);
            //             console.log(xhttp.responseText);
            //             }
            //     }
            // };
            // xhttp.send(null);

            // alert(`Cadastro realizado`)

            // await axios.post(`${url}/parceiroconteudo`, formatJson);
            // await axios.post(`${url}/parceiroconteudo`, JSON.stringify(data).history.push());
            // await axios.post(`${url}/parceiroconteudo`).history.push(JSON.stringify(data));
            // await axios.post(JSON.stringify(data)).history.push();
            // const postar = await api.POST('parceiroconteudo', JSON.stringify(data));
            // return alert('Cadastrado com sucesso')
            // history.push('/');

           
            const response = await api.post('parceiroconteudo', data);
            // Se der sucesso, retorna a ID do usuário
            console.log(response.data);
            alert('Cadastro realizado com sucesso');
            // Aqui definide a página que o usuário será 
            // history.push('/');
            
        }
        catch(err){
           alert('Erro no cadastro, tente novamente.');
        }
    }


    return  (
        <div className="register-container">
        <div className="content">
            <section>            
                <h1>Cadastro</h1>
                <p>Faça seu cadastro, entre na plataforma e ajude pessoas a mudarem de vida com suas dicas.</p>
                <Link className="back-link" to="/">
                    <FiArrowLeft size={20} color="#8B0000" />
                    Já tenho cadastro
                </Link>
            </section>
                
            <form onSubmit={handleRegister}>
            
                <input 
                    placeholder="Seu nome"
                    value={Nome}
                    onChange={e => setNome(e.target.value)}
                />              
                <input 
                    placeholder="CPF/CNPJ"
                    value={CNPJCPF}
                    onChange={e => setCnpjCpf(e.target.value)}
                />
                <div className="input-group">               
                    <input 
                        placeholder="codigopais" 
                        style={{ width: 120}}
                        value={CodPais}
                        onChange={e => setCodPais(e.target.value)}
                    />
                    <input 
                        placeholder="Telefone"
                        value={Telefone}
                        onChange={e => setTelefone(e.target.value)}/>     
                </div>
                <input 
                    type="email" 
                    placeholder="E-mail"  
                    value={email}
                    onChange={e => setEmail(e.target.value)}               
                />
                <input 
                    type="password"
                    name="senha"
                    placeholder="Senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />             
                <button className="button" type="submit">Cadastrar</button>
                
            </form>

        </div>
    </div>
    )
};