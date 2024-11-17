'use client';

import { useState } from 'react';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

type PostPreviewProps = {
  name: string;
  text: string;
};

export function PostPreview({ name, text }: PostPreviewProps) {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <AppLink href={ROUTING.article(name)}>{text}</AppLink>;
      <button onClick={() => setLiked(true)} type="button">
        {liked ? '👍' : 'not liked'}
      </button>
    </>
  );
}
