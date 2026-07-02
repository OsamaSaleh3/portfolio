import { createLazyFileRoute } from '@tanstack/react-router';
import Card from '../../components/Card';
export const Route = createLazyFileRoute('/blog/')({
  component: Blog,
});

const blogPosts = [
  {
    id: 1,
    title: 'How I Built My Portfolio',
    date: '10-Jul-2026',
    description:
      'A deep dive into using React, TanStack Router, and CSS to build a retro-themed portfolio.',
    technologies: ['React', 'TanStack'],
  },
  {
    id: 2,
    title: 'Understanding Clean Architecture',
    date: '05-Jul-2026',
    description:
      'Why Clean Architecture is essential for scaling enterprise applications.',
    technologies: ['.NET', 'Architecture'],
  },
];
function Blog() {
  return (
    <div className="blog-page">
      <h1 className="section-title blog-title">MY_BLOG</h1>

      <div className="blog-list">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            title={post.title}
            date={post.date}
            description={post.description}
            technologies={post.technologies}
            articleId={post.id}
          />
        ))}
      </div>
    </div>
  );
}
