export const URL_API = "https://fakestoreapi.com/products";
export const METHOD_POST ="POST"
export const METHOD_GET = "GET"
export const BODY = (_body : Array<any>)=>{return JSON.stringify(_body)}
export const HEADER = {
     Accept: 'application/json',
    'Content-Type': 'application/json'
}
export const HEADER_GET_TOKEN = (token : string)=>{
    return{   
        'Content-Type': 'application/json',
         'x-access-token': token    
    }
}
export const INCRECMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
