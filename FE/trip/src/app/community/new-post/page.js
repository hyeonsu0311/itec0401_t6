'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { usePosts } from '../../../components/community/context/PostContext';
const CommunityFormWrapper = dynamic(() => import('../../../components/community/CommunityFormWrapper'), {
  ssr: false,
});

export default function NewPostPage() {
  const { posts, setPosts } = usePosts();

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CommunityFormWrapper posts={posts} setPosts={setPosts} />
      </Suspense>
    </div>
  );
}