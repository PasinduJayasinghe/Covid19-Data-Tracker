import axios from 'axios';

const url='https://www.hpb.health.gov.lk/en/api-documentation';

export const fetchData = async () =>{

    try {
        const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(url);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,


        }
        return response;
    }catch(error){

    }
    


}