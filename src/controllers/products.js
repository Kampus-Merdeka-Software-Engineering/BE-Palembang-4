import { listproducts } from "../contans/product.js";

export const get = (request, response) =>{
    const {id} = request.params;
    const product = listproducts[Number(id) -1]
    
    if(!product) {
        response.status (404);
        response.json({
            message: "Data not found",
        })
    }
    
    response.json({
        data : listproducts[id],
        message : "Successfully",
    });
};

export const post = () => {};