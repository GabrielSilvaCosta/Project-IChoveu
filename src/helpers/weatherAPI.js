export const searchCities = async (term) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?lang=pt&key=${
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

export const getWeatherByCity = async (cityURL) => {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?lang=pt&key=${
        import.meta.env.VITE_TOKEN
      }&q=${cityURL}`,
    );
    const data = await response.json();

    const weatherInfo = {
      temp: data.current.temp_c,
      condition: data.current.condition.text,
      icon: data.current.condition.icon,
      country: data.location.country,
      name: data.location.name,
      url: cityURL,
    };

    return weatherInfo;
  } catch (error) {
    console.error('Erro na obtenção do tempo atual:', error);
    return null;
  }
};
