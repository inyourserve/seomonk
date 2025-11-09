interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  return (
    <div 
      className="prose prose-lg max-w-none 
        prose-headings:text-black prose-headings:font-bold
        prose-p:text-black/70 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-strong:text-black prose-strong:font-semibold
        prose-ul:text-black/70 prose-ul:my-4 prose-ul:space-y-2 prose-ul:pl-6
        prose-ol:text-black/70 prose-ol:my-4 prose-ol:space-y-2 prose-ol:pl-6
        prose-li:text-black/70 prose-li:leading-relaxed prose-li:pl-2
        prose-code:text-sm prose-code:bg-black/5 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono prose-code:text-primary prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-black/5 prose-pre:border prose-pre:border-black/10 prose-pre:rounded-lg prose-pre:p-4 prose-pre:overflow-x-auto prose-pre:my-6
        prose-pre code:bg-transparent prose-pre code:p-0 prose-pre code:text-black/80
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:my-6 prose-blockquote:bg-primary/5 prose-blockquote:py-4 prose-blockquote:rounded-r-lg prose-blockquote:pr-4
        prose-blockquote:not-italic prose-blockquote:text-black/80 prose-blockquote:p-0
        prose-img:rounded-lg prose-img:my-6 prose-img:border prose-img:border-black/10 prose-img:shadow-sm prose-img:w-full prose-img:h-auto
        prose-hr:border-black/10 prose-hr:my-8
        prose-h1:text-4xl prose-h1:font-bold prose-h1:mb-6 prose-h1:mt-8 prose-h1:leading-tight
        prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-4 prose-h2:mt-6 prose-h2:leading-tight
        prose-h3:text-2xl prose-h3:font-semibold prose-h3:mb-3 prose-h3:mt-5 prose-h3:leading-tight
        prose-h4:text-xl prose-h4:font-semibold prose-h4:mb-2 prose-h4:mt-4
        prose-table:text-sm prose-table:my-6 prose-table:w-full prose-table:border prose-table:border-black/10 prose-table:rounded-lg prose-table:overflow-hidden
        prose-th:bg-black/5 prose-th:font-semibold prose-th:text-black prose-th:p-3 prose-th:border prose-th:border-black/10
        prose-td:border prose-td:border-black/10 prose-td:p-3 prose-td:text-black/70
        prose-figcaption:text-sm prose-figcaption:text-black/60 prose-figcaption:mt-2 prose-figcaption:text-center"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
