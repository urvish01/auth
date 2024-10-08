import { IsString, IsUrl } from "class-validator";
// import { IsValidOAuthUrl } from "../../decorators/validation.decorators";

export class BaseOAuthConfigDto {
    @IsString()
    clientId: string;

    @IsString()
    clientSecret: string;
}

export class GoogleConfigDto extends BaseOAuthConfigDto {
    //@IsValidOAuthUrl()
    @IsUrl()
    googleOauthUrl: string;
}

export class FacebookConfigDto extends BaseOAuthConfigDto {
    //@IsValidOAuthUrl()
    @IsUrl()
    facebookOauthUrl: string;
}

export class LinkedInConfigDto extends BaseOAuthConfigDto {
    //@IsValidOAuthUrl()
    @IsUrl()
    linkedinEmailUrl: string;

    //@IsValidOAuthUrl()
    @IsUrl()
    linkedinProfileUrl: string;
}

export class DiscordConfigDto extends BaseOAuthConfigDto {
    //@IsValidOAuthUrl()
    @IsUrl()
    discordOauthUrl: string;
}

export class TrueCallerConfigDto extends BaseOAuthConfigDto {
    //@IsValidOAuthUrl()
    @IsUrl()
    trueCallerOauthUrl: string;
}

export class AppleConfigDto extends BaseOAuthConfigDto {
    //@IsValidOAuthUrl()
    @IsUrl()
    appleOauthUrl: string;

    @IsString()
    appleIssuer: string;
}

export class ShopifyConfigDto extends BaseOAuthConfigDto {}
