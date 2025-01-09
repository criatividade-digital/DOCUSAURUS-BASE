import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth"; // Importações modulares
import { getFunctions, httpsCallable } from "firebase/functions";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { fetchAndCacheUserBookData, getUserBookData } from '../cache.dados.usuario';
  
const Curso = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cursoDisponivel, setcursoDisponivel] = useState(false);
  const { siteConfig } = useDocusaurusContext();
  const bookCode = siteConfig.customFields.bookCode;
  const cursoUrl = useBaseUrl('/docs/curso/apresentacao'); // Moved to top level

  const checkCursoHabilitado = () => {
    try {
      if (data.curso) return true;
      else return false;  
    }
    catch (error) {
      return false; //aqui um erro pode ser de que não existe esta chave dentro dos json do livro
    }
  }

  useEffect(() => {
    const fetchData = async () => {
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
        const result = await getUserBookData(bookCode, token, user.uid);
        
        /*const minhaFuncao = httpsCallable(getFunctions(), 'getUserBookData');
        const result = await minhaFuncao({bookCode: bookCode}, { headers: { 'Authorization': `Bearer ${token}` } });
        setData(result.data);
        */
        setData(result);
      } catch (error) {
        console.error('Error fetching user book data:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [bookCode]);

  // Retorna vazio se o Firebase não foi inicializado ou se ocorreu um erro
  if (!data && (!getAuth() || !getFunctions())) {
    return null;
  } else if (loading) {
    return null; // <p>Loading...</p>;
  } else if (error) {
    return null; //<p>Error: {error.message}</p>;
  } else if (!data) {
    return null; //<p>Faça login para ver os dados do livro.</p>;
  }


  return (
    <></>
    /*checkCursoHabilitado() ? (
      <div>
        <a className="navbar__item navbar__link" href={cursoUrl}>Curso</a>
      </div>
    ) : null */
  );
};

export default Curso;