import { useEffect } from 'react';

type UseDocumentMetaArgs = {
  title: string;
  description: string;
};

export function useDocumentMeta({ title, description }: UseDocumentMetaArgs) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    const previousDescription = meta?.getAttribute('content');
    meta?.setAttribute('content', description);

    return () => {
      document.title = previousTitle;
      if (previousDescription && meta) meta.setAttribute('content', previousDescription);
    };
  }, [title, description]);
}
