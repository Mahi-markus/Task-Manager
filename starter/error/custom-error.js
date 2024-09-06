class CustomAPIError extends Error {
  constructor(messege, statusCode) {
    super(messege);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

exports.module = { createCustomError, CustomAPIError };
