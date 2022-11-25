export const validatePassword = (password: string) => {
    const passwordValidator = require("password-validator");

    const pwdSchema = new passwordValidator();

    pwdSchema
        .is().min(8)
        .is().max(128)
        .has().uppercase(1)
        .has().lowercase()
        .has().symbols(1)
        .has().digits(1)
        .has().not().spaces()
        .is().not().oneOf(["Passw0rd", "Password123", "admin123"]);

    return pwdSchema.validate(password);
}