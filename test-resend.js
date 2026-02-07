const { Resend } = require('./node_modules/resend/dist/index.cjs');
const dotenv = require('dotenv');
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function test() {
    console.log('Testing Resend connection...');
    console.log('API Key present:', !!process.env.RESEND_API_KEY);

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'shreepad.avhad@gmail.com',
            subject: 'Test Email from Script',
            html: '<p>This is a test email to verify connectivity.</p>'
        });

        console.log('Result:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

test();
