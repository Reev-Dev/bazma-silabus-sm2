const response = (res, status, data) => {
    res.status(status).json(data);
}

// const responseOk = (res, status = 200, message, data) => {
//     res.status(status).json({
//         message,
//         data
//     });
// }

module.exports = response;