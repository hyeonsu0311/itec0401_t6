'use client';

import { useRouter,useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import CommunityForm from './NewPostComponent'; 

export const CommunityFormWrapper = ({ posts, setPosts }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [post, setPost] = useState(null);
    const postId = searchParams.get('id');
  
    useEffect(() => {
      if (postId) {
        const foundPost = posts.find((p) => p.id === parseInt(postId));
        if (foundPost) {
          setPost(foundPost);
        }
      }
    }, [postId, posts]);
  
    if (postId && !post) {
      return <div>Loading...</div>;
    }
  
    return <CommunityForm posts={posts} setPosts={setPosts} post={post} />;
  };