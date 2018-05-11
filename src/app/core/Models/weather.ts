export interface WeatherStateModel {
  loading: boolean;
  loaded: boolean;
  error: boolean;
  city: string;
  data: WeatherApiModel[];
}

export interface WeatherApiModel {
  cord: {
    lat: number;
    lon: number;
  };
  weather: WeatherApiWeatherArray[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  id: number;
  name: string;
  cod: number;
}

interface WeatherApiWeatherArray {
  id: number;
  main: string;
  description: string;
  icon: string;
}