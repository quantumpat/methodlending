import { Link } from 'react-router-dom'

export type ProgramHighlight = {
  title: string
  detail: string
}

type ProgramPageProps = {
  idPrefix: string
  eyebrow: string
  title: string
  intro: string
  highlights: ProgramHighlight[]
  disclaimer: string
  ctaText: string
}

const ProgramPage = ({ idPrefix, eyebrow, title, intro, highlights, disclaimer, ctaText }: ProgramPageProps) => (
  <main>
    <section
      id={`${idPrefix}-hero`}
      className="hero-section hero-section--image hero-section--image-sky hero-section--image-contrast"
    >
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <p className="text-uppercase text-primary fw-semibold mb-2">{eyebrow}</p>
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead text-muted">{intro}</p>
          </div>
        </div>
      </div>
    </section>

    <section id={`${idPrefix}-highlights`} className="section bg-light">
      <div className="container">
        <h2 className="h3 fw-bold mb-4">Program Highlights</h2>
        <div className="row g-3">
          {highlights.map((highlight) => (
            <div key={highlight.title} className="col-sm-6 col-lg-3">
              <div className="program-highlight h-100">
                <h3 className="program-highlight__title">{highlight.title}</h3>
                <p className="program-highlight__detail">{highlight.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="program-disclaimer text-muted mt-4 mb-0">{disclaimer}</p>
      </div>
    </section>

    <section id={`${idPrefix}-cta`} className="section bg-primary text-white">
      <div className="container text-center">
        <h2 className="h4 fw-semibold program-cta__text mx-auto">{ctaText}</h2>
        <Link className="btn btn-light mt-2" to="/request-quote">
          Request a Quote
        </Link>
      </div>
    </section>
  </main>
)

export default ProgramPage
