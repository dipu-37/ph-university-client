
import {jwtDecode} from 'jwt-decode'

export const verityToken = (token : string)=>{
    return jwtDecode(token);
}