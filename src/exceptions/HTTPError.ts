/**
 * HTTPError class with various HTTP error methods.
 * 
 * @returns {HTTPError}
 */
class HTTPError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
        this.name = 'HTTPError'; // Set the error name to 'HTTPError'
    }

    static badRequest(message: string = 'Bad Request'): HTTPError {
        return new HTTPError(400, message);
    }

    static unauthorized(message: string = 'Bad Credentials'): HTTPError {
        return new HTTPError(401, message);
    }

    static forbidden(message: string = 'Forbidden'): HTTPError {
        return new HTTPError(403, message);
    }

    static notFound(message: string = 'Not Found'): HTTPError {
        return new HTTPError(404, message);
    }

    static internalServerError(message: string = 'Internal Server Error'): HTTPError {
        return new HTTPError(500, message);
    }

    static noContent(message: string = 'No Content'): HTTPError {
        return new HTTPError(204, message);
    }
}

export default HTTPError;
