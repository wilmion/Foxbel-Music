import axios from 'axios';
import fetchJsonp from 'fetch-jsonp';

export const GET = async (url) => {
    let error = null;
    let data = null;
    try {
        const dataApi = await fetchJsonp(url);
        const jsonData = await dataApi.json()
        data = jsonData;
    }catch (e) {
        error = 'Hubo un error al pedir los datos , por favor recarge la pagina'
    }

    return [
        data ,
        error
    ]
}

