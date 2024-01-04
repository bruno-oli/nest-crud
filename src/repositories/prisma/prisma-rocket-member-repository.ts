import { CreateTeamMemberBody } from 'src/dtos/create-team-member-body'
import { RocketMemberRepository } from '../rocket-member-repository'
import { PrismaService } from 'src/database/prisma.service'
import { Injectable } from '@nestjs/common'

@Injectable()
class PrismaRocketMemberRepository implements RocketMemberRepository {
  constructor(private prisma: PrismaService) {
    this.prisma = prisma
  }

  async create(body: CreateTeamMemberBody) {
    await this.prisma.rocketTeamMember.create({
      data: {
        name: body.name,
        function: body.function,
      },
    })
  }
}

export { PrismaRocketMemberRepository }
