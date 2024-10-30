import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc, doc } from 'firebase/firestore';


// Universal Tutorial API configuration
const API_KEY = 'tTWleMELsBAtujXq6n2ZfVRVwRWTygA7xqkBm_yQ0cGSu0sj5Ypp8XTzhdbu6vDgDcU';
const BASE_URL = 'https://www.universal-tutorial.com/api';

const getAuthToken = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/getaccesstoken`, {
      headers: {
        "Accept": "application/json",
        "api-token": API_KEY,
        "user-email": "YOUR_EMAIL"
      }
    });
    return response.data.auth_token;
  } catch (error) {
    console.error("Error fetching auth token:", error);
    throw error;
  }
};

const fetchCountries = async (authToken) => {
  try {
    const response = await axios.get(`${BASE_URL}/countries/`, {
      headers: {
        "Authorization": `Bearer ${authToken}`,
        "Accept": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

const fetchStates = async (authToken, country) => {
  try {
    const response = await axios.get(`${BASE_URL}/states/${country}`, {
      headers: {
        "Authorization": `Bearer ${authToken}`,
        "Accept": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching states for country ${country}:`, error);
    throw error;
  }
};

const fetchCities = async (authToken, state) => {
  try {
    const response = await axios.get(`${BASE_URL}/cities/${state}`, {
      headers: {
        "Authorization": `Bearer ${authToken}`,
        "Accept": "application/json"
      }
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching cities for state ${state}:`, error);
    throw error;
  }
};

export const saveCountryStateCityToFirestore = async () => {
  try {
    const authToken = await getAuthToken();
    const countries = await fetchCountries(authToken);

    for (const country of countries) {
      // Add country to Firestore
      await setDoc(doc(collection(db, 'TariRegiuniLocalitati'), country.country_name), {
        name: country.country_name,
        code: country.country_short_name,
        states: []
      });
      console.log(`Added country: ${country.country_name}`);

      const states = await fetchStates(authToken, country.country_name);

      for (const state of states) {
        // Add state under country in Firestore
        await setDoc(doc(collection(db, `TariRegiuniLocalitati/${country.country_name}/states`), state.state_name), {
          name: state.state_name,
          cities: []
        });
        console.log(`  Added state: ${state.state_name} in country: ${country.country_name}`);

        const cities = await fetchCities(authToken, state.state_name);

        for (const city of cities) {
          // Add city under state in Firestore
          await setDoc(doc(collection(db, `TariRegiuniLocalitati/${country.country_name}/states/${state.state_name}/cities`), city.city_name), {
            name: city.city_name
          });
          console.log(`    Added city: ${city.city_name} in state: ${state.state_name}, country: ${country.country_name}`);
        }
      }
    }
  } catch (error) {
    console.error("Error saving country, state, and city to Firestore:", error);
  }
};


