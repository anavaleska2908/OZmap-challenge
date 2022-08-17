class AppError extends Error {
    statusCode = 400;
    constructor(statusCode, message) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
    
}

const handleError = (error, response) => {
 console.log("error ", error);
    return error.response.body = {
        status: error.response.status,
        message: error.response.message,
    }
    
    
};

export {handleError, AppError};