import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

describe('Home Page', () => {
  it('renders all action buttons with correct links', () => {
    render(<Home />)
    
    // Check "Explore Products" button
    const exploreButton = screen.getByRole('link', { name: /Explore Products/i })
    expect(exploreButton).toBeInTheDocument()
    expect(exploreButton).toHaveAttribute('href', '/products')
    
    // Check "Contact Us" hero button
    const contactHeroButton = screen.getByRole('link', { name: /Contact Us/i })
    expect(contactHeroButton).toBeInTheDocument()
    expect(contactHeroButton).toHaveAttribute('href', '/contact')

    // Check "Request a Free Quote" button
    const quoteButton = screen.getByRole('link', { name: /Request a Free Quote/i })
    expect(quoteButton).toBeInTheDocument()
    expect(quoteButton).toHaveAttribute('href', '/contact')

    // Check "Schedule Consultation" button
    const scheduleButton = screen.getByRole('link', { name: /Schedule Consultation/i })
    expect(scheduleButton).toBeInTheDocument()
    expect(scheduleButton).toHaveAttribute('href', '/contact')
  })

  it('renders prices in Rupees instead of Dollars', () => {
    render(<Home />)
    
    // Check if any element contains the Rupee symbol
    const rupeeElements = screen.getAllByText(/₹/)
    expect(rupeeElements.length).toBeGreaterThan(0)
    
    // Ensure no dollar signs are present in text (excluding classNames or code logic)
    // We check text nodes specifically.
    const dollarElements = screen.queryAllByText(/\$/)
    expect(dollarElements.length).toBe(0)
  })
})
