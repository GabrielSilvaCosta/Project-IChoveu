export const searchCities = async (term) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/search.json?lang=pt&key=${
        import.meta.env.VITE_TOKEN
      }&q=${term}`,
    );
    const data = await response.json();

    if (data.length === 0) {
      window.alert('Nenhuma cidade encontrada');
      return [];
    }

    return data;
  } catch (error) {
    console.error('Erro na busca de cidades:', error);
    return [];
  }
};

export const getWeatherByCity = (/* cityURL */) => {
  //   seu código aqui
};
