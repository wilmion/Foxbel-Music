import axios from 'axios';

export const GET = async (url) => {
    let error = null;
    let data = null;
    try {
        const dataApi = await axios.get(url);
        data = dataApi.data;
    }catch (e) {
        error = 'Hubo un error al pedir los datos , por favor recarge la pagina'
    }

    return [
        data ,
        error
    ]
}

