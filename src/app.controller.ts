import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateTeamMemberBody } from './dtos/create-team-member-body'
import { RocketMemberRepository } from './repositories/rocket-member-repository'

@Controller('member')
export class AppController {
  constructor(private rocketMemberRepository: RocketMemberRepository) {
    this.rocketMemberRepository = rocketMemberRepository
  }

  @Post()
  async createMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: func } = body

    await this.rocketMemberRepository.create({ name, function: func })
  }

  @Get(':id')
  async getMember() {}
}
