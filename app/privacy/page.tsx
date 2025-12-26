import type { Metadata } from 'next'
import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for The Works Hair Salon by Sara LLC.',
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container-narrow prose prose-gray">
          <h1 className="font-display not-prose text-3xl mb-6">Privacy Policy</h1>
          <p>
            We respect your privacy. Information you share (like your name, email, or phone) is used solely to communicate about appointments and services. We do not sell your data.
          </p>
          <h2>Data</h2>
          <p>
            Contact form submissions are processed securely and are not stored in a database for this site. For any questions, contact us at the email listed on the Contact page.
          </p>
          <h2>Cookies</h2>
          <p>
            We may use minimal analytics to understand site usage. You can block cookies in your browser at any time.
          </p>
          <p className="text-sm text-muted-foreground">Last updated {new Date().getFullYear()}.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

