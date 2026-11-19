import ProgramPage from '../components/ProgramPage'

const RehabLoansPage = () => (
  <ProgramPage
    eyebrow="REHAB / RENOVATE-TO-RENT LENDING"
    title="Rehab financing to renovate and rent."
    intro="Short-term financing to renovate an investment property you intend to hold as a rental. Any future DSCR refinance requires separate qualification and approval."
    highlights={[
      { value: 'Short-term', desc: 'renovation financing for properties you plan to hold as rentals' },
      { value: 'Investment use', desc: 'business-purpose, non-owner-occupied properties only' },
      { value: 'Lending partners', desc: 'we match your project with a third-party lender whose program fits' },
      {
        value: 'Quoted per deal',
        desc: 'leverage, term, and renovation funding are confirmed for your specific transaction',
      },
      { value: 'One point of contact', desc: 'from quote to closing' },
    ]}
    disclosure="Actual terms depend on the borrower, property, project, and lender approval. Not a commitment to lend. Method Lending, LLC is a mortgage broker that arranges business-purpose financing through third-party lending partners. Method Lending does not fund loans, perform lender valuations, or make underwriting or credit decisions."
    ctaText="Share your renovation plan, and we’ll quote financing options through our lending partners."
  />
)

export default RehabLoansPage
