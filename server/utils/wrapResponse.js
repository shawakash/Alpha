const success = (statusCode, result) => {
    return {
        status: 'success',
        statusCode,
        result: result
    }
};

const error = (statusCode, message) => {
    return {
        status: 'failed',
        statusCode,
        message: message
    }
};

module.exports = { success, error  };