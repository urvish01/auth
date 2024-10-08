import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { BaseOAuthConfig, GoogleConfig, FacebookConfig, LinkedInConfig, DiscordConfig, TrueCallerConfig, AppleConfig, ShopifyConfig } from "../../interfaces/oauth-config.interface";

@Schema({ _id: false })
export class BaseOAuthConfigSchema implements BaseOAuthConfig {
    @Prop({ required: true })
    clientId: string;

    @Prop({ required: true })
    clientSecret: string;
}

@Schema({ _id: false })
export class GoogleConfigSchema extends BaseOAuthConfigSchema implements GoogleConfig {
    @Prop({ required: true })
    googleOauthUrl: string;
}

@Schema({ _id: false })
export class FacebookConfigSchema extends BaseOAuthConfigSchema implements FacebookConfig {
    @Prop({ required: true })
    facebookOauthUrl: string;
}

@Schema({ _id: false })
export class LinkedInConfigSchema extends BaseOAuthConfigSchema implements LinkedInConfig {
    @Prop({ required: true })
    linkedinEmailUrl: string;

    @Prop({ required: true })
    linkedinProfileUrl: string;
}

@Schema({ _id: false })
export class DiscordConfigSchema extends BaseOAuthConfigSchema implements DiscordConfig {
    @Prop({ required: true })
    discordOauthUrl: string;
}

@Schema({ _id: false })
export class TrueCallerConfigSchema extends BaseOAuthConfigSchema implements TrueCallerConfig {
    @Prop({ required: true })
    trueCallerOauthUrl: string;
}

@Schema({ _id: false })
export class AppleConfigSchema extends BaseOAuthConfigSchema implements AppleConfig {
    @Prop({ required: true })
    appleOauthUrl: string;

    @Prop({ required: true })
    appleIssuer: string;
}

@Schema({ _id: false })
export class ShopifyConfigSchema extends BaseOAuthConfigSchema implements ShopifyConfig {}

export const GoogleConfigSchemaFactory = SchemaFactory.createForClass(GoogleConfigSchema);
export const FacebookConfigSchemaFactory = SchemaFactory.createForClass(FacebookConfigSchema);
export const LinkedInConfigSchemaFactory = SchemaFactory.createForClass(LinkedInConfigSchema);
export const DiscordConfigSchemaFactory = SchemaFactory.createForClass(DiscordConfigSchema);
export const TrueCallerConfigSchemaFactory = SchemaFactory.createForClass(TrueCallerConfigSchema);
export const AppleConfigSchemaFactory = SchemaFactory.createForClass(AppleConfigSchema);
export const ShopifyConfigSchemaFactory = SchemaFactory.createForClass(ShopifyConfigSchema);
