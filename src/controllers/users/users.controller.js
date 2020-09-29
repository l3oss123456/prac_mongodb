import { HttpMethod, route } from "koa-decorator"

@route("/users")
class User {
  @route("/", HttpMethod.GET)
  async getUser(ctx) {
    ctx.body = "Users"
  }
}
export default User
