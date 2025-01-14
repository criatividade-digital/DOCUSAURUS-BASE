import React from 'react';
import { useState, useEffect, useRef } from "react";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { useLocation, useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { userData, useUserContext } from '../context';
import { fetchAndCacheUserBookData } from '../cache.dados.usuario';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import {
  PROTECTED_PATHS
} from "../utils/constants";

export default function loginlink() {
  const [userLogged, setUserLogged] = useState(false);
  const baseUrlProtected = useBaseUrl(PROTECTED_PATHS[0]); // Coloca como base uma página protegida para forçar o login no redirecionamento se o usuário não estiver logado e acessar esta página
  const baseUrl = useBaseUrl('/');
  const history = useHistory();
  const { userData, setUserData } = useUserContext();
  const { siteConfig } = useDocusaurusContext();

  const updateUserData = async () => {
      console.log('Atualizando dados do usuário...');
      const user = firebase.auth().currentUser;
      const token = await user.getIdToken();
      try {
        setUserData((prev) => ({
          ...prev,
          id: 'loading data...', 
          fetching: true,
        }));
      } catch (error) {
        console.error('Erro setUserData:', error);
      }
      try {
        const result = await fetchAndCacheUserBookData(siteConfig.customFields.bookCode, token, user.uid);
        setUserData((prev) => ({
          ...prev,
          id: user.uid, 
          result: result,
          fetching: false,
        }));
      } catch (error) {
        console.error('Erro setUserData:', error);
        setUserData((prev) => ({ //se deu erro retira o loading da tela
          ...prev,
          fetching: false,
        }));
      }
      console.log('Dados do usuário atualizados:', userData);
    };

  useEffect(() => {
    const estaLogado = firebase.auth().currentUser;
    if (estaLogado) {
      console.log('Usuário já está logado');
      history.push(`${baseUrl}`); 
    }
    else {
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      console.log(window.location.href);
      // Recupera o e-mail do localStorage
      let email = window.localStorage.getItem('emailForSignIn');
      console.log('email from localstorage:', email);
      if (!email) {
        console.log('Não consegui ler email do localstorage');
        alert('O link do e-mail pode ser usado apenas uma vez. Por favor, faça o login com seu e-mail novamente.');
        history.push(`${baseUrlProtected}`);
      }
      else {
        firebase.auth().signInWithEmailLink(email, window.location.href)
        .then((result) => {
          console.log('Usuário autenticado:', result.user);
          window.localStorage.removeItem('emailForSignIn');
          setUserLogged(true);
          updateUserData();
          history.push(`${baseUrl}`); 
        })
        .catch((error) => {
          setUserLogged(false);
          switch (error.code){
            case 'auth/invalid-action-code':
              console.log('erro no login com email (auth/invalid-action-code)');
              alert('O link do e-mail pode ser usado apenas uma vez. Por favor, faça o login com seu e-mail novamente.');
              history.push(`${baseUrlProtected}`);    
              break;            
            default:
              console.error('Erro:', error);
          }
          return; //deu erro sai da função
        });
      }
      
    }
    else {
      console.log('Falha loginlink.')
    }}
  }, [baseUrl, history]); // Dependências para evitar loops infinitos

  return (
    <Layout title="Hello" description="Hello React Page">
    <div>
      <div className="container">
        <div className="loginContainer">
          <center>
          <br />
          <h2 className="title">Verificando licença para acesso ao guia...</h2>
          </center>
          </div>
      </div>
    </div>
    </Layout>
  );
}