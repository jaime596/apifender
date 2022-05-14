exports.success = function(res, message, status){
    res.status(status || 200).send({
        success: 1,
        body: message
    });
  }
  
  exports.error = function(res, message, status, e){
    res.status(status || 500).send({
        success: 0,
        error: message,
        body: e,
    });
  }
  
  exports.badRequest = function(res){
    res.status(400).send({
        success: 0,
        error: 'Bad Request',
        body: [],
    });
  }
  
  exports.unauthorized = function(res){
    res.status(401).send({
        success: 0,
        error: 'Unauthorized',
        body: [],
    });
  
  }