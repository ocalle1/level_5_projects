function addCustomProperty(request, response, next) {
    // adds new property to the request object,  accessed by route handler in server.js
    request.customProperty = 'Custom Value';
    // lets next function in middleware/route handler to proceed
    next();
}

module.exports = addCustomProperty;