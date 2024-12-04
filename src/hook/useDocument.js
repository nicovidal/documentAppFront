import apiAzure from "../api/api"


export const useDocument = ()=>{

    const getDocument=async ()=>{
        try {
            const {data}=await apiAzure.get('/documents/get')
            console.log(data)
            return data

        } catch (error) {

            console.log(error)
            
        }
    }



    return {
        getDocument
    }

}