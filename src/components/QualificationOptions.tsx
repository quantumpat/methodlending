import { Link } from 'react-router-dom'

type LoanPurpose = 'purchase' | 'refinance' | 'cash-out'

const leadByPurpose: Record<LoanPurpose, { dscr: string; multiUnit: string; intro: string }> = {
  purchase: {
    dscr: 'Purchase financing for income-producing investment properties',
    multiUnit: 'Purchase financing for 5+ unit residential investment properties',
    intro: 'Choose the qualification path that fits how you invest.',
  },
  refinance: {
    dscr: 'Rate-and-term refinancing for income-producing investment properties',
    multiUnit: 'Refinancing for 5+ unit residential investment properties',
    intro: 'Refinance on the qualification path that fits your portfolio.',
  },
  'cash-out': {
    dscr: 'Cash-out refinancing for income-producing investment properties',
    multiUnit: 'Cash-out refinancing for 5+ unit residential investment properties',
    intro: 'Access equity on the qualification path that fits your portfolio.',
  },
}

type QualificationOptionsProps = {
  id: string
  purpose: LoanPurpose
  shaded?: boolean
}

const QualificationOptions = ({ id, purpose, shaded = false }: QualificationOptionsProps) => {
  const lead = leadByPurpose[purpose]
  const options = [
    {
      title: 'DSCR',
      points: [
        lead.dscr,
        'Qualification based on property cash flow and debt service coverage',
        'Business-purpose, non-owner-occupied transactions only',
      ],
    },
    {
      title: 'Asset Utilization',
      points: [
        'Uses verified assets in place of traditional income documentation',
        'Ideal for investors with strong balance sheets and complex cash flow',
        'Business-purpose real estate financing only',
      ],
    },
    {
      title: 'Bank Statement and Alt Doc for Business Purpose',
      points: [
        'Uses business bank statements or alternative financial records in place of traditional income',
        'Designed for self-employed investors and entity-owned properties',
        'Business-purpose real estate transactions only',
      ],
    },
    {
      title: 'Multi-Unit Property',
      points: [
        lead.multiUnit,
        'Focused on cash flow, scale, and long-term portfolio growth',
        'Non-owner-occupied, business-purpose only',
      ],
    },
  ]

  return (
    <section id={id} className={`section${shaded ? ' bg-light' : ''}`}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="h2 fw-bold">Ways to Qualify</h2>
          <p className="text-muted">{lead.intro}</p>
        </div>
        <div className="row g-4">
          {options.map((option) => (
            <div key={option.title} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm loan-option-card">
                <div className="card-body loan-option-card__body">
                  <h3 className="h5">{option.title}</h3>
                  <ul className="text-muted mb-3">
                    {option.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <Link className="btn btn-link p-0 loan-option-card__cta" to="/request-quote">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted fst-italic mt-4 mb-0">
          All programs are offered for business-purpose, non-owner-occupied real estate transactions only.
        </p>
      </div>
    </section>
  )
}

export default QualificationOptions
