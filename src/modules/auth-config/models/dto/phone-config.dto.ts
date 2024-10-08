import { IsString, IsBoolean, IsUrl } from "class-validator";

export class PhoneConfigDto {
    @IsString()
    authKey: string;

    @IsUrl()
    sendOtpUrl: string;

    @IsUrl()
    verifyOtpUrl: string;

    @IsString()
    sender: string;

    @IsString()
    templateId: string;

    @IsBoolean()
    signUpEnabled: boolean;
}
