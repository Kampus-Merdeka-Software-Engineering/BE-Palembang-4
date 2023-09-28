import { members } from "../contans/Admin.js";

export const get = (request, response) =>{
    try {
        const {id} = request.params;
        const Admin = members[Number(id) -1]
     
        if(!Admin) {
         response.status (404);
         response.json({
             message: "Data not found",
         })
        }
        
         response.json({
             data : members[id],
             message : "Successfully",
         });

    }catch (error) {
        response.status(500);
        response.json({
            message:"Internal Server Error",
        });
    }
};

export const post = () => {};