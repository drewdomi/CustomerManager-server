import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const code = process.env.DEFAULT_CODE?.toUpperCase() || 'user1234'

  const salt = await bcrypt.genSalt(12)
  const password = await bcrypt.hash(
    process.env.DEFAULT_PASSWORD || 'pass1234',
    salt,
  )

  await prisma.user.upsert({
    where: {
      code: code,
    },
    update: {},
    create: {
      code: code,
      password: password,
    },
  })
}

main()
  .catch(e => console.log(e))
  .finally(async () => await prisma.$disconnect())
