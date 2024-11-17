import { getPostById } from '@/app/(server)/api';

export default async function ArticlePage({ params }: Params) {
  const { articleName } = await params;
  const post = await getPostById(articleName);
  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
