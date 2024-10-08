import { IsNumber, IsBoolean, Min, Max } from "class-validator";
import { CONFIG } from "../../../../app/config/constants";

export class OtpConfigDto {
    @IsNumber()
    @Min(CONFIG.OTP.MIN_LENGTH)
    @Max(CONFIG.OTP.MAX_LENGTH)
    length: number;

    @IsNumber()
    @Min(CONFIG.OTP.MIN_EXPIRE_TIME)
    expireOn: number;

    @IsBoolean()
    viewLog: boolean;
}
