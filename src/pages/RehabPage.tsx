import ProgramPage from '../components/ProgramPage'

const RehabPage = () => (
  <ProgramPage
    idPrefix="rehab"
    eyebrow="Rehab / Renovate-to-Rent Lending"
    title="Rehab financing to renovate and rent."
    intro="Short-term financing to renovate an investment property you intend to hold as a rental. Any future DSCR refinance requires separate qualification and approval."
    highlights={[
      { title: 'Short-term', detail: 'renovation financing for properties you plan to hold as rentals' },
      { title: 'Investment use', detail: 'business-purpose, non-owner-occupied properties only' },
      { title: 'Lending partners', detail: 'we match your project with a third-party lender whose program fits' },
      {
        title: 'Quoted per deal',
        detail: 'leverage, term, and renovation funding are confirmed for your specific transaction',
      },
      { title: 'One point of contact', detail: 'from quote to closing' },
    ]}
    disclaimer="Program terms are confirmed for each transaction and are not advertised here. Actual terms depend on the borrower, property, project, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker that arranges business-purpose financing through third-party lending partners. Method Lending does not fund loans, perform lender valuations, or make underwriting or credit decisions."
    ctaText="Share your renovation plan, and we’ll quote financing options through our lending partners."
  />
)

export default RehabPage
