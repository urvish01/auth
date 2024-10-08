import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { MailConfig, MailConfigAuth } from "../../interfaces/mail-config.interface";

@Schema({ _id: false })
class MailAuthSchema implements MailConfigAuth {
    @Prop({ required: true })
    user: string;

    @Prop({ required: true })
    pass: string;
}

@Schema({ _id: false })
export class MailConfigSchema implements MailConfig {
    @Prop({ required: true })
    host: string;

    @Prop({ required: true })
    port: number;

    @Prop({ required: true })
    secure: boolean;

    @Prop({ type: MailAuthSchema, required: true })
    auth: MailConfigAuth;

    @Prop({ required: true })
    signUpEnabled: boolean;
}

export const MailConfigSchemaFactory = SchemaFactory.createForClass(MailConfigSchema);