# Email Setup Instructions with Resend

To enable the contact form's email functionality with Resend, follow these steps:

## 1. Create a Resend Account

1. Go to [Resend's website](https://resend.com) and sign up for an account
2. Verify your email address and log in to your account
3. Create an API key from the dashboard

## 2. Create a `.env.local` file

Create a `.env.local` file in the root of your project with the following variables:

```
# Resend configuration
RESEND_API_KEY=your_resend_api_key_here
RESEND_FROM=Lumi Contact <onboarding@resend.dev>
```

## 3. Configure a Verified Domain (Recommended)

For production use, it's recommended to configure a verified domain with Resend:

1. In the Resend dashboard, go to "Domains"
2. Click "Add Domain" and follow the instructions to add and verify your domain
3. Once verified, update the `RESEND_FROM` environment variable with your domain:
   ```
   RESEND_FROM=Contact Form <contact@yourdomain.com>
   ```

## 4. Test the Form

Once configured, test the contact form by filling it out and submitting. The emails will be sent to `leo@leo.dev` as specified in the API route.

## 5. Change Recipient Email

To change the recipient email, modify the `to` field in `src/app/api/contact/route.ts`:

```typescript
const { data, error } = await resend.emails.send({
  from: process.env.RESEND_FROM || "Lumi Contact <onboarding@resend.dev>",
  to: "your-preferred-email@example.com", // Change this email
  // ... rest of the options
});
```

## Troubleshooting

If you encounter issues with sending emails:

1. Verify your Resend API key is correct in the `.env.local` file
2. Check if you've reached your Resend email sending limit (free plan has limits)
3. Check the server logs for any specific error messages
4. Verify the recipient email is not in your Resend blocklist

## Advantages of Using Resend

- Simple API with no need to configure complex SMTP settings
- Better email deliverability and open tracking
- Clean dashboard to monitor email sending
- Built-in analytics for your emails

## Security Notes

- Never commit your `.env.local` file to version control
- Protect your Resend API key—anyone with access can send emails on your behalf
- Consider using environment variables in your deployment platform
