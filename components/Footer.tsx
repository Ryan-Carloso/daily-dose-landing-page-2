import Link from "next/link"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>DailyDose</h4>
            <p>Smart supplement reminders for whey protein, creatine, vitamins, and medications on iOS.</p>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul className="footer-links">
              <li>
                <Link href="/privacy" aria-label="Read DailyDose privacy policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" aria-label="Read DailyDose terms of service">
                  Terms of Service
                </Link>
              </li>
              <li>
              <Link href="mailto:ryancarlos16@gmail.com" aria-label="Email DailyDose support">
              Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li>
                <Link href="mailto:ryancarlos16@gmail.com" aria-label="Email DailyDose support">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/blog" aria-label="Read DailyDose blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/updates" aria-label="Get DailyDose updates">
                  Updates
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DailyDose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
