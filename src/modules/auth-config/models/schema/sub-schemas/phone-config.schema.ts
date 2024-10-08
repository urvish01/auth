import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { PhoneConfig } from "../../interfaces/phone-config.interface";

@Schema({ _id: false })
export class PhoneConfigSchema implements PhoneConfig {
    @Prop({ required: true })
    authKey: string;

    @Prop({ required: true })
    sendOtpUrl: string;

    @Prop({ required: true })
    verifyOtpUrl: string;

    @Prop({ required: true })
    sender: string;

    @Prop({ required: true })
    templateId: string;

    @Prop({ required: true, default: false })
    signUpEnabled: boolean;
}

export const PhoneConfigSchemaFactory = SchemaFactory.createForClass(PhoneConfigSchema);
