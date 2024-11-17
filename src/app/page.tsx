import { getAllPosts } from './(server)/api';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

const POSTS_PER_PAGE = 10;

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const allPosts = await getAllPosts();
  const pageNumber = Number.parseInt((await searchParams['page']) ?? 1);
  const posts = allPosts.slice(
    (pageNumber - 1) * POSTS_PER_PAGE,
    pageNumber * POSTS_PER_PAGE
  );

  const nexPageUrl = {
    search: new URLSearchParams({
      page: (pageNumber + 1).toString(),
    }).toString(),
  };

  return (
    <>
      <h1>Title: {pageNumber}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <AppLink href={ROUTING.article(post.id.toString())}>
              {post.title}
            </AppLink>
          </li>
        ))}
      </ul>
      <AppLink href={nexPageUrl}>Next</AppLink>
    </>
  );
}
