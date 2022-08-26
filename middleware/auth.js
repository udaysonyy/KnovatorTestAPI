const jwt = require('jsonwebtoken');
const auth = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if(token){
            token = token.split(" ")[1];
            let user = jwt.verify(token, "API");
            req.userId = user.id;
        }else{
            res.send("Unauthorized user");
        }
        next();
    } catch (e) {
        console.log(e);
        res.send("Unauthorized user");
    }
}

module.exports = auth;