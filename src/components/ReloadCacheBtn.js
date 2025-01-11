import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth"; // Importações modulares
import { getFunctions, httpsCallable } from "firebase/functions";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { fetchAndCacheUserBookData, getUserBookData } from '../cache.dados.usuario';
 

/*-----------------------------------------------------

ESTE CÓDIGO AQUI ESTÁ DESATUALIZADO.
CASO FOR IMPLEMENTAR O BOTÃO DE RECARREGAR DADOS TEM QUE SER FEITO
USANDO O FETCH E O USERCONTEXT



--------------------------------------------------------*/
const ReloadCacheBtn = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { siteConfig } = useDocusaurusContext();
  const bookCode = siteConfig.customFields.bookCode;


    const fetchAndCacheData2 = async () => {
      alert('teste');
    }

    const fetchAndCacheData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Verifica se o Firebase foi inicializado 
        if (!getAuth() || !getFunctions()) {
          console.warn("Firebase não inicializado, dados do usuário não serão carregados.");
          setData(null); // Limpa qualquer dado anterior
          return; // Sai da função para evitar erros
        }

        const user = getAuth().currentUser;

        if (!user) {
          console.log("Usuário não logado, dados não serão carregados.");
          setData(null);
          return;
        }

        const token = await user.getIdToken();
        const result = await fetchAndCacheUserBookData(bookCode, token, user.uid);
        
        setData(result);
      } catch (error) {
        console.error('Error fetching user book data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

  return (
    <button onClick={fetchAndCacheData}>Recarregar Dados</button>
  );
};

export default ReloadCacheBtn;