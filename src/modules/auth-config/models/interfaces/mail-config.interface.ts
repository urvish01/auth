export interface MailConfigAuth {
    user: string;
    pass: string;
}

export interface MailConfig {
    host: string;
    port: number;
    secure: boolean;
    auth: MailConfigAuth;
    signUpEnabled: boolean;
  }