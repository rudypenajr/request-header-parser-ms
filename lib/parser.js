const getIPAddress = (req) => {
    return (req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress).split(",")[0]
}

const getLanguage = (req) => {
    return req.headers["accept-language"]
}

const getUserAgent = (req) => {
    return req.headers['user-agent']
}

module.exports = { getIPAddress, getLanguage, getUserAgent }