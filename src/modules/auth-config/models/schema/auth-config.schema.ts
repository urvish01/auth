import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, HydratedDocument } from "mongoose";
import { AuthStrategiesSchema } from "../schema/sub-schemas/auth-strategies.schema";
import { MailConfigSchema } from "../schema/sub-schemas/mail-config.schema";
import { PhoneConfigSchema } from "../schema/sub-schemas/phone-config.schema";
import { AppleConfigSchema, DiscordConfigSchema, GoogleConfigSchema, LinkedInConfigSchema, ShopifyConfigSchema, TrueCallerConfigSchema } from "../schema/sub-schemas/oauth-config.schema";
import { FacebookConfigSchema } from "../schema/sub-schemas/oauth-config.schema";
import { OtpConfigSchema } from "./sub-schemas/otp-config.schema";
import { AuthConfigStatusType } from "../enum/status.enum";


@Schema({
    timestamps: true,
    collection: "authConfigs",
    toJSON: { 
        virtuals: true 
    },
    toObject: { 
        virtuals: true 
    },
})
export class AuthConfig extends Document {
    @Prop({ type: AuthStrategiesSchema, required: true })
    strategies: AuthStrategiesSchema;

    @Prop({ required: true, index: true })
    entityId: number;

    @Prop({ type: MailConfigSchema })
    mailConfig?: MailConfigSchema;

    @Prop({ type: PhoneConfigSchema })
    phoneConfig?: PhoneConfigSchema;

    @Prop({ type: GoogleConfigSchema })
    googleConfig?: GoogleConfigSchema;

    @Prop({ type: FacebookConfigSchema })
    facebookConfig?: FacebookConfigSchema;

    @Prop({ type: LinkedInConfigSchema })
    linkedInConfig?: LinkedInConfigSchema;

    @Prop({ type: DiscordConfigSchema })
    discordConfig?: DiscordConfigSchema;

    @Prop({ type: ShopifyConfigSchema })
    shopifyConfig?: ShopifyConfigSchema;

    @Prop({ type: TrueCallerConfigSchema })
    trueCallerConfig?: TrueCallerConfigSchema;

    @Prop({ type: AppleConfigSchema })
    appleConfig?: AppleConfigSchema;

    @Prop({ type: OtpConfigSchema, required: true })
    otpConfig: OtpConfigSchema;

    @Prop({ type: Number, enum: AuthConfigStatusType, default: AuthConfigStatusType.ACTIVE, index: true })
    status: AuthConfigStatusType;
}


// TODO: add index
// Create indexes
// AuthConfig.index({ entityId: 1, status: 1 });
// AuthConfig.index({ createdAt: 1 });
// AuthConfig.index({ updatedAt: 1 });

export const AuthConfigSchema = SchemaFactory.createForClass(AuthConfig);
export type AuthConfigDocument= HydratedDocument<AuthConfig>;