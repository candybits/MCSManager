// 针对API返回的数据缩写的服务模块

class NullError {
    message = null
}


module.exports.ok = (res, statusCode = 200) => {
    res.send(JSON.stringify({
        status: statusCode
    }));
    res.end();
}


module.exports.error = (res, error = new NullError(), statusCode = 500) => {
    res.send(JSON.stringify({
        status: statusCode,
        error: error.message
    }));
    res.end();
}