const postController = require("../controller/post.controller")
const validateJwt = require("../validation/jwt.validation")

module.exports =(app) =>{
    app.get("/postMedia/api/v1/posts",postController.getAllPost)
    app.post("/postMedia/api/v1/posts",[validateJwt.verifyJwt],postController.create)
}