import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { CONFIG } from '../../../app/config/constants';

// export function IsValidOAuthUrl(validationOptions?: ValidationOptions) {
//     return function (object: Object, propertyName: string) {
//         registerDecorator({
//             name: 'isValidOAuthUrl',
//             target: object.constructor,
//             propertyName: propertyName,
//             options: validationOptions,
//             validator: {
//                 validate(value: any, args: ValidationArguments) {
//                     if (typeof value !== 'string') return false;
//                     return new RegExp(OAUTH_CONFIG.REDIRECT_URI_PATTERN).test(value) &&
//                         OAUTH_CONFIG.ALLOWED_DOMAINS.some(domain => value.includes(domain));
//                 },
//                 defaultMessage(args: ValidationArguments) {
//                     return `${args.property} must be a valid OAuth URL from allowed domains`;
//                 }
//             }
//         });
//     };
// }

// Custom decorator for conditional validation based on strategies
export function ValidateIfStrategyEnabled(strategyName: string, validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
        registerDecorator({
            name: 'validateIfStrategyEnabled',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const strategies = (args.object as any).strategies;
                    return !strategies[strategyName] || (strategies[strategyName] && value !== undefined);
                },
                defaultMessage(args: ValidationArguments) {
                    return `${args.property} is required when ${strategyName} strategy is enabled`;
                }
            }
        });
    };
}