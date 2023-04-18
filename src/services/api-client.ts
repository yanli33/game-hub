import axios from "axios";
export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'4d0764cae540429dba58eaeb1e87047b',
    }
})
