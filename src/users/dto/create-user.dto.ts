
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto{
    id: string;
    @ApiProperty(
        {description: "the name of a given user"}
    )
    name: string;
    @ApiProperty(
        {description: "the email of a given user"}
    )
    email: string;

    array_of_groups: string;

}


//example doc:
// @ApiProperty({
//     description: 'The age of a cat',
//     minimum: 1,
//     default: 1,
//   })
//   age: number;