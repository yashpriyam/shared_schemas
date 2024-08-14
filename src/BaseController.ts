export class BaseController {
    constructor() {

    }
    /**
     * This method returns a one time HTTP Response.
     *
     * @returns {null}
     * @name response
     * @param {Object} Res
     * @param {Object} Data
     * @param {Intger} Status
     *
     */
    response(res: any, data: any, status = 200) {
        res.status(status).json(data)
        return res.end()
    }

    responseBinary(
        res: any,
        data: any,
        key: string,
        length: number,
        type = "application/octet-stream",
    ) {
        res.writeHead(200, {
            'Content-Type': type,
            'Content-disposition': 'attachmentfilename=' + key,
            'Content-Length': length
        })
        res.end(Buffer.from(data, 'binary'))
    }
    errorHandler(res: any, error: any, status = 500) {
        const errorResponse = {
            message: error.message || 'An unexpected error occurred',
            // Additional error details can be added here if needed
        };
        res.status(status).json(errorResponse);
        return res.end();
    }
}

// export default BaseController;