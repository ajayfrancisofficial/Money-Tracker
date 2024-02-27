import { commonAPI } from "./commonAPI";
import SERVER_URL from "./serverURL";


//register api
export const registerAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,user,"")
}
//login api
export const loginAPI=async(user)=>{
    return await commonAPI("POST",`${SERVER_URL}/login`,user,"")
}
//add transaction api
export const addAPI=async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${SERVER_URL}/add`,reqBody,reqHeader)
}
//getUserTransactions api
export const getUserTransactionsAPI=async(reqHeader)=>{
    return await commonAPI("GET",`${SERVER_URL}/getUserTransactions`,"",reqHeader)
}
//deleteTransaction api
export const deleteTransactionAPI=async(tid,reqHeader)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/deleteTransaction/${tid}`,{},reqHeader)
}