const defaultResponse = (data, statusCode = 200) => ({
  data,
  statusCode,
});

const errorReponse = (message, statusCode = 500) => defaultResponse({
  error: message,
}, statusCode);

module.exports = {
  defaultResponse,
  errorReponse,
};
