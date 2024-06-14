'use client';

import { usePosts } from '../../../components/community/context/PostContext';
import { CommunityFormWrapper } from '../../../components/community/CommunityFormWrapper';

export default function NewPostPage() {
  const { posts, setPosts } = usePosts();

  return (
    <div>
      <CommunityFormWrapper posts={posts} setPosts={setPosts} />
    </div>
  );
}
