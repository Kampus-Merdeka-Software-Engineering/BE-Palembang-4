export const get = (request, response) => {
    response.json({
        message: "Data are on the way",
    })
};

export const post = (request, response) => {
    const { email } = request.query;
    const { password } = request.params;
    const { user } = request.body;

    response.json({
        email,
        password,
        user,
    })
};