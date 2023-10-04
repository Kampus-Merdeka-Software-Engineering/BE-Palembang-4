export const get = (request, response) => {
    response.json({
        message: "Books data are on the way",
    })
};

export const post = (request, response) => {
    const { id } = request.query;
    const { name } = request.params;
    const { alamat } = request.body;

    response.json({
        id,
        name,
        alamat,
    })
};

