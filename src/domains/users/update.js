import repo from "../../models/users/user.model"
import { checkUpdate } from "../../utils/domains"

export default async function deleteUser(body) {
  const resp = checkUpdate(repo, { _id: body._id }, body)
  return resp
}
