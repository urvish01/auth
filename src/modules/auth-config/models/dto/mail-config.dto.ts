import { IsString, IsNumber, IsBoolean, IsObject, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class MailAuthDto {
    @IsString()
    user: string;

    @IsString()
    pass: string;
}

export class MailConfigDto {
    @IsString()
    host: string;

    @IsNumber()
    port: number;

    @IsBoolean()
    secure: boolean;

    @ValidateNested()
    @Type(() => MailAuthDto)
    @IsObject()
    auth: MailAuthDto;

    @IsBoolean()
    signUpEnabled: boolean;
}
