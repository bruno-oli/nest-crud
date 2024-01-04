import { Injectable } from '@nestjs/common'
import { CreateTeamMemberBody } from 'src/dtos/create-team-member-body'

@Injectable()
abstract class RocketMemberRepository {
  abstract create(body: CreateTeamMemberBody): Promise<void>
}

export { RocketMemberRepository }
