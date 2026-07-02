import { createLazyFileRoute, Link } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/blog/$articleId')({
  component: ArticleDetail,
});

function ArticleDetail() {
  const { articleId } = Route.useParams();
  return (
    <div className="article-page">
      <div className="article-back-link">
        <Link to="/blog">{'<- BACK TO BLOG'}</Link>
      </div>

      <h1 className="article-title">Article Title for ID: {articleId}</h1>
      <p className="article-content">
        This is the detailed content for article number {articleId}. Later on,
        you can use this ID to fetch the full article data from an API or a
        local JSON file!
      </p>
    </div>
  );
}
