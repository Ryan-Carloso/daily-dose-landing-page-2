import Link from "next/link"

export default function Header() {
  return (
    <header className="header">
      <nav className="container">
        <div className="nav">
          <Link href="/" className="logo" aria-label="DailyDose homepage">
            DailyDose
          </Link>
          <Link
            href="https://apps.apple.com/pt/app/never-miss-a-scoop-dailydose/id6739007799?l=en-GB"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get App Free
          </Link>
        </div>
      </nav>
    </header>
  )
}
