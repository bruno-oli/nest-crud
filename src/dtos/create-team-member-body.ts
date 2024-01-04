import { IsNotEmpty } from 'class-validator'

class CreateTeamMemberBody {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  function: string
}

export { CreateTeamMemberBody }
