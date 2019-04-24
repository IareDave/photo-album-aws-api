
// these are the status codes that can be used with Serverless
export const statusCode = (statusCode) => {
  switch (statusCode) {
    case 400:
      return "Bad Request"
    case 401:
      return "Unauthorized"
    case 403:
      return "Forbidden"
    case 404:
      return "Not Found"
    case 422:
      return "Unprocessable Entity"
    case 500:
      return "Internal Server Error"
    case 502:
      return "Bad Gateway"
    case 504:
      return "Gateway Timeout"
  }
}

