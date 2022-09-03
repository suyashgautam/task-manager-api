const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'suyash.gautam97@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendGoodByeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'suyash.gautam97@gmail.com',
        subject: `Goodbye ${name}`,
        text: `We are sad to see you going ${name}, Please let us know what we could have done better.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodByeEmail
}