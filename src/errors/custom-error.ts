export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string){
        super(message);

        // only because we are extending a build in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): {
        message: string;
        field?: string
    }[];
}