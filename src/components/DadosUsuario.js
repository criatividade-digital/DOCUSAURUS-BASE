import React, { useState, useEffect } from 'react';
import { getAuth } from "firebase/auth"; // Importações modulares
import { getFunctions, httpsCallable } from "firebase/functions";
import { fetchAndCacheUserBookData, getUserBookData } from '../cache.dados.usuario';

const DadosUsuario = ({ bookCode }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    return <p>Loading...</p>;
  } else if (error) {
    return <p>Error: {error.message}</p>;
  } else if (!data) {
    return <p>Faça login para ver os dados do livro.</p>;
  }

  return (
    <div>
      <h1>Book Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DadosUsuario;