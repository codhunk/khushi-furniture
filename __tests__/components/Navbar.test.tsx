import { render, screen } from '@testing-library/react'
import Navbar from '@/components/Navbar'

// Mock usePathname
jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}))

describe('Navbar Component', () => {
  it('renders all navigation links', () => {
    render(<Navbar />)
    
    // Check main brand text
    expect(screen.getByText('Khushi Furniture')).toBeInTheDocument()
    
    // Check navigation links (they exist in both desktop and mobile menus)
    expect(screen.getAllByText('Home')[0]).toBeInTheDocument()
    expect(screen.getAllByText('About')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Products')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Services')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Gallery')[0]).toBeInTheDocument()
    expect(screen.getAllByText('Contact')[0]).toBeInTheDocument()
  })

  it('renders the Request a Quote button correctly', () => {
    render(<Navbar />)
    const quoteButtons = screen.getAllByRole('link', { name: /Request a Quote/i })
    expect(quoteButtons[0]).toBeInTheDocument()
    expect(quoteButtons[0]).toHaveAttribute('href', '/contact')
  })
})
