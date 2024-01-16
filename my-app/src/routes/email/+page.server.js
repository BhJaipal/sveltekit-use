import sendmail from 'sendmail';

// Define email content
/**
 * @type {import ('sendmail').MailInput}
 */
const emailContent = {
    from: 'jaipalbhanwariya001@gmail.com',
    to: 'jaipalbhanwariya6@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email.',
};
console.log("Try again");
// Use sendmail to send the email
sendmail({
    logger: {
        debug: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error,
    },
    silent: false,
})(emailContent, error => console.log(error));