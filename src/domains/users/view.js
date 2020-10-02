import repo from "../../models/users/user.model"
import { findOneIfNotExistThrowError } from "../../utils/domains"

export default async function viewUser(_id) {
  const resp = await findOneIfNotExistThrowError(repo, { _id: _id })
  return resp
}
