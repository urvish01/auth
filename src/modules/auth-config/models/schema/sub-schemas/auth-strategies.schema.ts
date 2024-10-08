import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AuthStrategies } from "../../interfaces/auth-strategies.interface";

@Schema({ _id: false })
export class AuthStrategiesSchema implements AuthStrategies {
    @Prop({ default: false })
    emailPassword: boolean;

    @Prop({ default: false })
    phonePassword: boolean;

    @Prop({ default: false })
    phoneOtp: boolean;

    @Prop({ default: false })
    emailOtp: boolean;

    @Prop({ default: false })
    google: boolean;

    @Prop({ default: false })
    facebook: boolean;

    @Prop({ default: false })
    linkedIn: boolean;

    @Prop({ default: false })
    discord: boolean;

    @Prop({ default: false })
    apple: boolean;

    @Prop({ default: false })
    trueCaller: boolean;

    @Prop({ default: false })
    guest: boolean;

    @Prop({ default: false })
    shopify: boolean;
}

export const AuthStrategiesSchemaFactory = SchemaFactory.createForClass(AuthStrategiesSchema);
