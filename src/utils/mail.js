import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verificationUrl) => {
    return {
        body : {
            name: username,
            intro: "Welcome to our APP! We are excited to have you on board.",
            action: {
                instructions: "To Verify your email please click on following button",
                button: {
                    color: "#22BC66",
                    text: "verify your email",
                    link: verificationUrl
                },
            },
            outro : "Need Help, or have questions? Just reply to this email, we'd love to help."
        },
    };
};

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body : {
            name: username,
            intro: "We got an request to reset password of your account.",
            action: {
                instructions: "To reset your password click on following button",
                button: {
                    color: "#22BC66",
                    text: "Reset Password",
                    link: passwordResetUrl
                },
            },
            outro : "Need Help, or have questions? Just reply to this email, we'd love to help."
        },
    };
};

export {
    emailVerificationMailgenContent,
    forgotPasswordMailgenContent
}