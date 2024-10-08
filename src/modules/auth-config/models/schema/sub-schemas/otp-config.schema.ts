import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { OtpConfig } from "../../interfaces/otp-config.interface";

@Schema({ _id: false })
export class OtpConfigSchema implements OtpConfig {
    @Prop({ required: true, min: 4, max: 8 })
    length: number;

    @Prop({ required: true, min: 60 }) // minimum 60 seconds
    expireOn: number;

    @Prop({ required: true, default: false })
    viewLog: boolean;

    // Additional helper methods
    @Prop({ type: Boolean, default: false })
    isTestMode?: boolean;
}

export const OtpConfigSchemaFactory = SchemaFactory.createForClass(OtpConfigSchema);

// // Add validation methods
// OtpConfigSchema. methods.isValid = function (): boolean {
//     return this.length >= 4 && this.length <= 8 && this.expireOn >= 60;
// };

// // Add helper methods
// OtpConfigSchema.methods.getExpiryTime = function (): Date {
//     return new Date(Date.now() + this.expireOn * 1000);
// };
