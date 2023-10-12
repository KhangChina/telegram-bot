import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateTelegramDto {
    @IsNotEmpty()
    @ApiProperty({ example: 'This is message', description: 'Push message is here !' })
    msg: string;
}
