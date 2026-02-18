import { type KeyboardEvent, useEffect, useRef, useState } from 'react'
import { Calendar, FileText, MessageCircle, Minimize2, Send, X } from 'lucide-react'

type ChatMessage = {
  role: 'assistant' | 'user'
  content: string
}

const MethodLendingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        "Hi! I'm here to help you with business purpose loans for investment properties. We specialize in DSCR loans for rental properties and non-owner occupied real estate. What questions do you have about financing your investment property?",
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen, isMinimized])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const systemPrompt = `You are an AI assistant for Method Lending, LLC, a retail lending company specializing in DSCR (Debt Service Coverage Ratio) loans for NON-OWNER OCCUPIED investment properties ONLY.

CRITICAL: Method Lending does NOT offer consumer loans. We ONLY do business purpose loans for investment properties (rental properties, non-owner occupied real estate). If someone asks about primary residence, owner-occupied, or buying a home to live in, politely explain we only do investment property loans.

CRITICAL PRIORITY: Your #1 goal is to get users to book a call with a loan officer or submit a quote request form. DO NOT collect customer information directly in the chat. Instead, always direct them to book a call or fill out the form.

Method Lending's Loan Program (we have ONE primary program with options):

**DSCR Loans (Business Purpose Loans for Investment Properties)**
- These are business purpose loans for investment real estate
- NOT consumer loans - exclusively for non-owner occupied rental properties
- Qualify based on the property's rental income (Debt Service Coverage Ratio)
- DSCR of 1.0+ required (rental income must cover the mortgage payment)
- LTV up to 80% for qualified borrowers
- Available for purchase, rate/term refinance, and cash-out refinance
- Can use standard documentation OR alternative documents for better rates

**Alternative Documentation Option (to lower the rate on business purpose loans):**
We work with lenders that allow alternative income documents on business purpose loans to get better rates:
- Bank statements (12 or 24 months) - can lower the rate
- P&L statements (12 or 24 months) - can lower the rate
- 1099 documentation - can lower the rate
- Asset depletion/qualifier - can lower the rate
These are NOT separate loan programs - they're documentation options that can improve pricing on the business purpose DSCR loan.

Key points to emphasize:
- Everything we do is business purpose loans for investment properties
- We do not offer consumer mortgage products
- Alternative documents (bank statements, P&L, etc.) are available to potentially get better rates on business purpose loans
- All loans are for non-owner occupied investment real estate only

DO NOT say:
- "Bank Statement Program" or "P&L Program" (these sound like consumer loans)
- "Primary residence" or "owner-occupied" options
- Anything that implies we have consumer loan products
- FHA/VA/Conventional loans

CORRECT way to describe alternative docs:
"For business purpose DSCR loans, we can use alternative documentation like bank statements or P&L statements, which may help you get a better rate on your investment property loan."

INCORRECT way:
"We have a Bank Statement Program for self-employed borrowers" (sounds like a consumer loan)

If someone asks about owner-occupied or primary residence:
"We specialize exclusively in business purpose loans for investment properties. For properties you plan to live in, you'll want to work with a lender that offers consumer mortgage products. However, if you're looking to finance rental properties or investment real estate, we'd love to help!"

Your conversation style:
- Be enthusiastic, helpful, and conversational
- Keep responses concise (2-4 sentences typically)
- FREQUENTLY suggest booking a call or submitting the form
- After answering just 1-2 questions, encourage action: "Want to hop on a quick call with one of our loan officers? They can walk you through everything and get you exact rates for your investment property."
- Use investment-focused language: "Let's get you connected," "Ready to grow your portfolio?" "Want to finance your next rental property?"
- Alternate between suggesting calls and the quote form
- NEVER ask for or collect customer information like name, email, or phone in the chat
- Always emphasize these are business purpose loans for investment properties

Example responses:
- "Great question! Our DSCR loans are business purpose loans for investment properties. You qualify based on the rental income the property generates. We can also use alternative docs like bank statements to potentially get you a better rate. Want to book a call?"
- "We specialize in business purpose financing for rental properties. If you have P&L statements or bank statements, we may be able to get you an even better rate on your investment property loan. Ready to submit a quote request?"
- "That sounds like a great investment opportunity! Our DSCR loans are specifically designed for rental properties like yours. Let's connect you with a loan officer who can discuss rates for your investment property!"

What NOT to do:
- Never offer or discuss consumer loans
- Never say "Bank Statement Program" or "P&L Program" as if they're separate products
- Never mention owner-occupied financing
- Never ask for customer contact information
- Don't provide specific interest rates
- Don't guarantee approval`

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return

    const userMessage = inputValue.trim()
    const nextMessages = [...messages, { role: 'user', content: userMessage }]

    setInputValue('')
    setMessages(nextMessages)
    setIsLoading(true)

    try {
      const response = await fetch('/api/claude-chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: systemPrompt,
          messages: nextMessages.map((msg) => ({
            role: msg.role,
            content: msg.content,
          })),
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      const data = await response.json()
      const assistantMessage = Array.isArray(data?.content)
        ? data.content
            .filter((item: { type?: string }) => item.type === 'text')
            .map((item: { text?: string }) => item.text || '')
            .join('\n')
        : ''

      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            assistantMessage ||
            "Thanks for reaching out! Please visit methodlending.com/request-quote to submit your info or book a call with a loan officer.",
        },
      ])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content:
            "I apologize, I'm having trouble connecting. Please visit methodlending.com/request-quote to submit your information directly, or call us!",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSendMessage()
    }
  }

  const handleOpenChat = () => {
    setIsAnimating(true)
    window.setTimeout(() => {
      setIsOpen(true)
      setIsMinimized(false)
      setIsAnimating(false)
    }, 240)
  }

  return (
    <div className="chatbot">
      {isAnimating && <div className="chatbot__ping" />}

      {!isOpen && !isAnimating && (
        <button className="chatbot__toggle" onClick={handleOpenChat} type="button">
          <MessageCircle size={24} />
          <span className="chatbot__toggle-label">Chat with Method Lending</span>
        </button>
      )}

      {isOpen && (
        <div className={`chatbot__panel ${isMinimized ? 'is-minimized' : ''}`}>
          <div className="chatbot__header">
            <div>
              <div className="chatbot__title">Method Lending</div>
              <div className="chatbot__subtitle">Investment Property Specialists</div>
            </div>
            <div className="chatbot__header-actions">
              <button
                className="chatbot__icon-button chatbot__icon-button--minimize"
                type="button"
                onClick={() => setIsMinimized((prev) => !prev)}
                aria-label={isMinimized ? 'Expand chat' : 'Minimize chat'}
              >
                <Minimize2 size={18} />
              </button>
              <button
                className="chatbot__icon-button"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chatbot__cta">
                <a
                  className="chatbot__cta-button chatbot__cta-button--primary"
                  href="https://www.methodlending.com/request-quote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar size={16} />
                  Book a Call
                </a>
                <a
                  className="chatbot__cta-button chatbot__cta-button--secondary"
                  href="https://www.methodlending.com/request-quote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText size={16} />
                  Get Quote
                </a>
              </div>

              <div className="chatbot__messages">
                {messages.map((msg, idx) => (
                  <div
                    key={`${msg.role}-${idx}`}
                    className={`chatbot__message chatbot__message--${msg.role}`}
                  >
                    <div className="chatbot__bubble">{msg.content}</div>
                  </div>
                ))}
                {isLoading && (
                  <div className="chatbot__message chatbot__message--assistant">
                    <div className="chatbot__bubble chatbot__bubble--loading">
                      <span className="chatbot__dot" />
                      <span className="chatbot__dot" />
                      <span className="chatbot__dot" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              <div className="chatbot__input">
                <input
                  ref={inputRef}
                  className="chatbot__input-field"
                  type="text"
                  placeholder="Ask about investment property loans"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={handleKeyPress}
                  aria-label="Chat message"
                />
                <button
                  className="chatbot__send"
                  type="button"
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputValue.trim()}
                  aria-label="Send message"
                >
                  <Send size={16} />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default MethodLendingChatbot
