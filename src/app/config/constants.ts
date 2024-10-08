import { ConfigService } from '@nestjs/config';
import { OtpConfigType, MailConfigType, PhoneConfigType, OAuthConfigType } from './constants.types';

export const OTP_CONFIG = (config: ConfigService): OtpConfigType => ({
  MIN_LENGTH: config.get<number>('OTP_MIN_LENGTH'),
  MAX_LENGTH: config.get<number>('OTP_MAX_LENGTH'),
  MIN_EXPIRE_TIME: config.get<number>('OTP_MIN_EXPIRE_TIME'),
  MAX_EXPIRE_TIME: config.get<number>('OTP_MAX_EXPIRE_TIME'),
});

export const MAIL_CONFIG = (config: ConfigService): MailConfigType => ({
  HOST: config.get<string>('MAIL_HOST'),
  PORT: config.get<number>('MAIL_PORT'),
  SECURE: config.get<boolean>('MAIL_SECURE'),
  AUTH: {
    USER: config.get<string>('MAIL_USER'),
    PASS: config.get<string>('MAIL_PASS'),
  },
  SIGN_UP_ENABLED: config.get<boolean>('MAIL_SIGN_UP_ENABLED'),
});

export const PHONE_CONFIG = (config: ConfigService): PhoneConfigType => ({
  AUTH_KEY: config.get<string>('PHONE_AUTH_KEY'),
  SEND_OTP_URL: config.get<string>('PHONE_SEND_OTP_URL'),
  VERIFY_OTP_URL: config.get<string>('PHONE_VERIFY_OTP_URL'),
  SENDER: config.get<string>('PHONE_SENDER'),
  TEMPLATE_ID: config.get<string>('PHONE_TEMPLATE_ID'),
  SIGN_UP_ENABLED: config.get<boolean>('PHONE_SIGN_UP_ENABLED'),
});

export const OAUTH_CONFIG = (config: ConfigService): OAuthConfigType => ({
  GOOGLE: {
    CLIENT_ID: config.get<string>('GOOGLE_CLIENT_ID'),
    CLIENT_SECRET: config.get<string>('GOOGLE_CLIENT_SECRET'),
  },
  FACEBOOK: {
    CLIENT_ID: config.get<string>('FACEBOOK_CLIENT_ID'),
    CLIENT_SECRET: config.get<string>('FACEBOOK_CLIENT_SECRET'),
  },
  LINKEDIN: {
    CLIENT_ID: config.get<string>('LINKEDIN_CLIENT_ID'),
    CLIENT_SECRET: config.get<string>('LINKEDIN_CLIENT_SECRET'),
  },
  DISCORD: {
    CLIENT_ID: config.get<string>('DISCORD_CLIENT_ID'),
    CLIENT_SECRET: config.get<string>('DISCORD_CLIENT_SECRET'),
  },
  APPLE: {
    CLIENT_ID: config.get<string>('APPLE_CLIENT_ID'),
    CLIENT_SECRET: config.get<string>('APPLE_CLIENT_SECRET'),
  },
});

// Create a static config object
export const CONFIG = {
  OTP: {} as OtpConfigType,
  MAIL: {} as MailConfigType,
  PHONE: {} as PhoneConfigType,
  OAUTH: {} as OAuthConfigType,
};

// Initialize configs
export const initializeConfigs = (configService: ConfigService) => {
  Object.assign(CONFIG.OTP, OTP_CONFIG(configService));
  Object.assign(CONFIG.MAIL, MAIL_CONFIG(configService));
  Object.assign(CONFIG.PHONE, PHONE_CONFIG(configService));
  Object.assign(CONFIG.OAUTH, OAUTH_CONFIG(configService));
};