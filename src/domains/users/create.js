import repo from "../../models/users/user.model"
import { findOrCreate } from "../../utils/domains"

export default async function createUser(body) {
  const resp = findOrCreate(repo, { name: body.name }, body)
  return resp
}
