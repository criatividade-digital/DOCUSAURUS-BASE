import { getFunctions, httpsCallable } from "firebase/functions";

// Função para centralizar a chamada ao servidor e a gravação no cache
export async function fetchAndCacheUserBookData(bookCode, token, uid) {
  const cacheKey = `userBookData_${uid}_${bookCode}`;
  const firebaseFunction = httpsCallable(getFunctions(), 'getUserBookData');

  console.log('Fetching and caching user book data...');
  try {
    // Chamada ao servidor
    const result = await firebaseFunction(
      { bookCode: bookCode },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    const data = result.data;

    // Grava os dados no cache
    localStorage.setItem(cacheKey, JSON.stringify(data));
    console.log('Fetched and cached data:', data);

    return data;
  } catch (error) {
    console.error('Erro fetching and caching user book data:', error);
    throw error;
  }
}

// 
export async function getUserBookData(bookCode, token, uid) {
  const cacheKey = `userBookData_${uid}_${bookCode}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    console.log('Retrieved cached data (getUserBookData):', cachedData);
    try {
      return JSON.parse(cachedData); // Retorna os dados do cache
    } catch (error) {
      console.error('Error parsing cached data:', error);
    }
  }

  // Se não conseguiu recuperar do cache, busca do servidor
  return fetchAndCacheUserBookData(bookCode, token, uid);
}

export async function loadUserBookDataCache(bookCode, uid) {
  const cacheKey = `userBookData_${uid}_${bookCode}`;
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    console.log('Retrieved cached data (loadUserBookDataCache):', cachedData);
    try {
      return JSON.parse(cachedData); // Retorna os dados do cache
    } catch (error) {
      console.error('Error parsing cached data:', error);
    }
  }
  return null;

}

