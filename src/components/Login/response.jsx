import axios from 'axios';
import jwt_decode from  'jwt-decode';

export const createOrGetUser = async (response,addUser) => {
    const decoded=jwt_decode(response.credential);
    console.log(decoded)

    const {name,picture,sub,email} = decoded;
    
    const user = {
        _id:sub,
        _type:'user',
        userName:name,
        image:picture,
        emailId:email
    }
    
    addUser(user);

    await axios.post("http://localhost:5000/googleRegister",user)
    
    
}
