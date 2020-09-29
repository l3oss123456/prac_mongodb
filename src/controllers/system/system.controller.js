import { HttpMethod, route } from "koa-decorator"

@route("/system")
export default class SystemController {
  @route("/health", HttpMethod.GET)
  async health(ctx) {
    ctx.body = {
      health: true,
    }
  }
}
