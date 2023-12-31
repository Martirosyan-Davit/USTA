import httpStatusCodes from "../../common/constants/httpStatusCodes.js"
import BaseError from '../../common/extension/baseError.js'

class CompanyCanNotCreated extends BaseError {
    constructor(
        name,
        statusCode = httpStatusCodes.BAD_REQUEST,
        description = 'Company can not created',
        isOperational = true
    ) {
        super(name, statusCode, isOperational, description)
    }
}
export default CompanyCanNotCreated
