export interface BaseOAuthConfig {
    clientId: string;
    clientSecret: string;
}

export interface GoogleConfig extends BaseOAuthConfig {
    googleOauthUrl: string;
}

export interface FacebookConfig extends BaseOAuthConfig {
    facebookOauthUrl: string;
}

export interface LinkedInConfig extends BaseOAuthConfig {
    linkedinEmailUrl: string;
    linkedinProfileUrl: string;
}

export interface DiscordConfig extends BaseOAuthConfig {
    discordOauthUrl: string;
}

export interface TrueCallerConfig extends BaseOAuthConfig {
    trueCallerOauthUrl: string;
}

export interface AppleConfig extends BaseOAuthConfig {
    appleOauthUrl: string;
    appleIssuer: string;
}

export interface ShopifyConfig extends BaseOAuthConfig {}
