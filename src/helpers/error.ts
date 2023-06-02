interface ApiError extends Error {
  statusCode: any;
  message: any;
}

// class ApiError extends Error {
//   constructor(statusCode, message) {
//     super(message);
//     this.statusCode = statusCode;
//     this.message = message;
//   }
// }

export default ApiError;
