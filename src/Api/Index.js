import axios from 'axios';

const URL = 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates';

export const getPlacesData = async (lat, lng) => {
  const options = {
    params: {
      order_by: 'popularity',
      adults_number: '2',
      units: 'metric',
      room_number: '1',
      checkout_date: '2022-10-01',
      filter_by_currency: 'AED',
      locale: 'en-gb',
      checkin_date: '2022-09-30',
      latitude: lat,
      longitude: lng,
      children_number: '2',
      children_ages: '5,0',
      categories_filter_ids: 'class::2,class::4,free_cancellation::1',
      page_number: '0',
      include_adjacency: 'true'
    },
    headers: {
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_HOTEL,
    }
  }

  try {
    const { data: { result } } = await axios.get(URL, options);
    // console.log(result);
    return result;
  } catch (error) {
    console.log(error);
  }
};
