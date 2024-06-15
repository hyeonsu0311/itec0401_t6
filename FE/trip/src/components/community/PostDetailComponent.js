'use client';

const PostDetailComponent = ({ post }) => {
  if (!post) return <p>Post not found</p>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetailComponent;
