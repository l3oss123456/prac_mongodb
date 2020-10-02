import { HttpMethod, route } from "koa-decorator"
import { listUser, createUser, updateUser, deleteUser, viewUser } from "../../domains/users/index"

@route("/users")
class User {
  @route("/", HttpMethod.GET)
  async getUser(ctx) {
    const resp = await listUser()
    ctx.body = resp
  }

  @route("/create", HttpMethod.POST)
  async createUser(ctx) {
    const { body } = ctx.request
    const resp = await createUser(body)
    ctx.body = resp
  }

  @route("/update", HttpMethod.PUT)
  async UpdateUser(ctx) {
    const { body } = ctx.request
    const resp = await updateUser(body)
    ctx.body = resp
  }

  @route("/delete", HttpMethod.DELETE)
  async deleteUser(ctx) {
    const { body } = ctx.request
    const resp = await deleteUser(body)
    ctx.body = resp
  }

  @route("/:_id", HttpMethod.GET)
  async deleteUser(ctx) {
    const { _id } = ctx.params
    const resp = await viewUser(_id)
    ctx.body = resp
  }
}
export default User
