type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const postUrl = 'https://jsonplaceholder.typicode.com/posts';
export function getAllPosts(): Promise<Post[]> {
  return fetch(postUrl).then((resp) => resp.json());
}

export function getPostById(postId: string): Promise<Post> {
  return fetch(postUrl + `/${postId}`).then((resp) => resp.json());
}
