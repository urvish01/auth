export interface OtpConfigType {
    MIN_LENGTH: number;
    MAX_LENGTH: number;
    MIN_EXPIRE_TIME: number;
    MAX_EXPIRE_TIME: number;
}

export interface MailConfigType {
    HOST: string;
    PORT: number;
    SECURE: boolean;
    AUTH: {
        USER: string;
        PASS: string;
    };
    SIGN_UP_ENABLED: boolean;
}

export interface PhoneConfigType {
    AUTH_KEY: string;
    SEND_OTP_URL: string;
    VERIFY_OTP_URL: string;
    SENDER: string;
    TEMPLATE_ID: string;
    SIGN_UP_ENABLED: boolean;
}

export interface OAuthConfigType {
    GOOGLE: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
    };
    FACEBOOK: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
    };
    LINKEDIN: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
    };
    DISCORD: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
    };
    APPLE: {
        CLIENT_ID: string;
        CLIENT_SECRET: string;
    };
}
