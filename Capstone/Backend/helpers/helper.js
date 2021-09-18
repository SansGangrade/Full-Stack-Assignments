const jsonwebtoken = require('jsonwebtoken');

const generateJwtToken = (_id, _role) => {
    return jsonwebtoken.sign({
        id: _id,
        role: _role
    }, process.env.JWT_SECRET_KEY, {
        expiresIn: '1d'
    });
}

const ErrorArray = [];
ErrorArray[500] = "DB Error Occurred. Contact your administrator"

const getErrorResponse = (statusCode, data = null, message = null) => {

    return {
        success: false,
        message: message || ErrorArray[statusCode],
    }
}


module.exports = {
    generateJwtToken,
    getErrorResponse
}