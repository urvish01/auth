import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";
import { error } from "console";
import { Response } from "express";
import { isString } from "lodash";

@Catch()
export class ErrorFilter implements ExceptionFilter {
    catch(error: any, host: ArgumentsHost) {
        const context = host.switchToHttp();
        const isGatewayError = !error.status;
        let errorMessage = [];
        const response = context.getResponse<Response>();
        if (!isGatewayError) {
            errorMessage = error?.response?.message || error?.response?.data.errorMessage;
        } else {
            errorMessage = error?.response?.data?.errorMessage || error?.errorResponse?.errmsg;
        }
        const responseObj = {
            success: false,
            message: error?.message || error?.stack,
            errorMessage: errorMessage ? (isString(errorMessage) ? [errorMessage] : errorMessage) : error.message || error.stack || "An unexpected error occurred",
            timestamp: new Date().toISOString(),
            path: context.getRequest().url,
            data: null
        }

        const status: number = error?.response?.status || error?.statusCode || error?.status || 500;
        return response.status(status).json(responseObj);

    }
}