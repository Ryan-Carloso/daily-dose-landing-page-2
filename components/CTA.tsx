import Image from "next/image"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="section" id="cta">
      <div className="container text-center">
        <h2>Ready to optimize your supplement routine?</h2>
        <p className="text-lg mb-8">
          Join fitness enthusiasts and health-conscious individuals who never miss their supplements with DailyDose.
        </p>
        <Link
          href="https://apps.apple.com/pt/app/never-miss-a-scoop-dailydose/id6739007799?l=en-GB"
          className="btn btn-primary text-lg px-10 py-5"
          aria-label="Download DailyDose supplement tracker for iPhone and iPad now"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Now
        </Link>

        <div className="app-badges">
          <Link
            href="https://apps.apple.com/pt/app/never-miss-a-scoop-dailydose/id6739007799?l=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download DailyDose on the App Store"
          >
            <Image
              src="/icon.png?height=180&width=180"
              alt="Download DailyDose supplement tracker on the App Store"
              width={60}
              height={60}
              className="app-badge"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
