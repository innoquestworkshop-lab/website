This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Auto billing: receipts and money-in alerts

Needs app migration `72_workshop_receipts.sql` (InnoQuest-app `scripts/`) on the shared database.

- **Beam webhook** (`app/api/beam/webhook`): a paid workshop sign-up gets a DRAFT receipt in the app's Billing (`billing_receipt_for_signup`, never issued or sent here), and every confirmed payment (workshop or an invoice's Beam link) sends one `money_in` staff alert: amount, payer, what was paid, the affiliate and code or Organic, seats taken. Retries never alert twice (`dedupe_key beam:<payment link id>`).
- **Request receipt / ขอใบเสร็จรับเงิน**: a button on `/signup/thanks` and in the confirmation email opens `/signup/receipt?id=&t=` (a signed link, `lib/receipt-token.ts`). The client checks the name, address, tax ID and branch and sends it (`/api/signup/receipt-request`, paid sign-ups only). The first request stores it, fills the draft receipt's bill-to and sends a `receipt_request` alert; a second click alerts nobody.
- Alerts (`lib/notify.ts`, a copy of the app's `lib/notify`): a row in `staff_notifications`, a LINE push and an email to every super admin.

Environment:

| Variable | What |
|---|---|
| `LINE_CHANNEL_ACCESS_TOKEN` | LINE Messaging API channel token (same as the app). No token: LINE is skipped. |
| `LINE_APPROVER_USER_IDS` | Comma list of LINE user ids (`U` + 32 hex) to push to (same as the app). |
| `RECEIPT_REQUEST_SECRET` | 32+ random bytes that sign the Request receipt links (`openssl rand -hex 32`). Without it the key is derived from `SUPABASE_SERVICE_ROLE_KEY`. Changing it breaks links already emailed. |
| `NEXT_PUBLIC_APP_URL` | Optional: the app host for alert links (default `https://interactive.innoquest.tech`). |
| `NEXT_PUBLIC_SITE_URL` | Optional: this site's host for the emailed link (default `https://www.innoquest.tech`). |
| `RESEND_API_KEY`, `EMAIL_FROM` | Already used; the staff alert email goes out through Resend (`EMAIL_FROM` default `InnoQuest <no-reply@innoquest.tech>`). |

Check (no network, no database): `npm run check:receipts`.
