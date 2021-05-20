export enum HttpError {
    badRequest = 400,
    unauthorized,
    paymentRequired,
    forbidden,
    notFound,
    methodNotAllowed,
    notAcceptable,
    requestTimeout = 408,
    conflict,
    gone,
    lengthRequired,
    preconditionFailed,
    payloadTooLarge,
    requestUriTooLong,
    unsupportedMediaType
}

export enum HttpCode {
    ok = 200,
    created,
    accepted,
    noContent= 204,
    partialContent = 206,
    multiStatus
}
