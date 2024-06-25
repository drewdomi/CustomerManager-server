import { JwtPayload } from '../../models/jwt-payload'

export function getJwtPayload(token: string) {
  return JSON.parse(atob(token.split('.')[1])) as JwtPayload
}
