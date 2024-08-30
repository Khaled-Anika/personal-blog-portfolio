import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BlogListing from '../src/app/blogs/page';
import BlogPost from '../src/app/blogs/[id]/page';

// Mock the fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      { id: 1, title: 'Getting Started with Next.js', excerpt: 'Learn the basics of Next.js and start building awesome apps.' },
      { id: 2, title: 'Test Post 2', excerpt: 'Test excerpt 2' },
    ]),
  })
);

describe('Blog Navigation', () => {
  it('displays blog posts and allows navigation to individual post', async () => {
    const user = userEvent.setup()
    
    render(<BlogListing searchParams={{ page: '1' }} />)

    // Wait for the blog posts to be displayed
    const post1 = await screen.findByText('Getting Started with Next.js')
    expect(post1).toBeInTheDocument()

    // Check if the correct link is rendered
    const link = screen.getByRole('link', { name: 'Getting Started with Next.js' })
    expect(link).toHaveAttribute('href', '/blogs/1')

    // Click on the blog post link
    await user.click(link)

    // Render the individual blog post page
    render(<BlogPost params={{ id: 1 }} />)

    // Check if the blog post title is displayed
    expect(await screen.findByText('Getting Started with Next.js')).toBeInTheDocument()
  })
});


// To clear or reset mocks between tests
// afterEach(() => {
//   jest.clearAllMocks();
// });