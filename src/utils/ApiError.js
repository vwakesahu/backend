class ApiError extends Error {
  // in constructor ()
  // {} this means to overridingg the constructor
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message); // for overriding the above message for sure message should be overriden
    this.statusCode = statusCode; // for overriding the above statusCode
    this.data = null;
    this.message = message; // for overriding the above message
    this.success = false; // for overriding the above success
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
