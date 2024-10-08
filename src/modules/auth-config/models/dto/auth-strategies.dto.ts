import { IsBoolean, IsObject, ValidateNested } from "class-validator";

export class AuthStrategiesDto {
    @IsBoolean()
    emailPassword: boolean = false;

    @IsBoolean()
    phonePassword: boolean = false;

    @IsBoolean()
    phoneOtp: boolean = false;

    @IsBoolean()
    emailOtp: boolean = false;

    @IsBoolean()
    google: boolean = false;

    @IsBoolean()
    facebook: boolean = false;

    @IsBoolean()
    linkedIn: boolean = false;

    @IsBoolean()
    discord: boolean = false;

    @IsBoolean()
    apple: boolean = false;

    @IsBoolean()
    trueCaller: boolean = false;

    @IsBoolean()
    guest: boolean = false;

    @IsBoolean()
    shopify: boolean = false;
}
