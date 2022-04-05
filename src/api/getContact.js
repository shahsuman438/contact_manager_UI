import authAxios from "../interceptors/axios";

export default()=>{
    authAxios
    .get('contact')
    .then(
        result=>{
            console.log("contact data ", result.data)
        }
    )
    .catch(
        error=>{
            console.log("contact error data",error)
        }
    )
}