import { members } from "../contans/Admin.js";

export const get = (request, response) =>{
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
};

export const post = () => {};