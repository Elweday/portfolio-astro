export function onRequest ({ locals, request }, next) {
    locals.myRequestObj = () => {
        return request
    };
    return next();
};