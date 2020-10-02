import repo from "../../models/users/user.model"
import { checkDelete } from "../../utils/domains"

export default async function deleteUser(body) {
  const resp = checkDelete(repo, { _id: body._id })
  return resp
}
