# Blog Guide

## Adding New Blog Posts

To add a new blog post, simply create a new `.md` file in the `content/blog/` directory.

### File Structure

Create a markdown file with the following frontmatter:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A short description of your blog post that appears in the blog listing."
date: "2024-01-15"
author: "SEOMonk Team"
slug: "your-blog-post-slug"
featuredImage: "/blog/your-image.jpg"
---

# Your Blog Post Content

Write your blog post content here using markdown...
```

### Required Fields

- **title**: The title of your blog post
- **excerpt**: A short description (appears in blog listing)
- **date**: Publication date in format "YYYY-MM-DD"
- **author**: Author name (defaults to "SEOMonk Team")
- **slug**: URL-friendly slug (e.g., "your-blog-post-slug" becomes `/blog/your-blog-post-slug`)
- **featuredImage**: (Optional) Path to featured image (e.g., "/blog/your-image.jpg")

### Example

```markdown
---
title: "10 Schema Markup Tips for Better SEO"
excerpt: "Learn the top 10 schema markup tips to improve your website's SEO performance."
date: "2024-01-20"
author: "SEOMonk Team"
slug: "10-schema-markup-tips"
---

# 10 Schema Markup Tips for Better SEO

Content goes here...
```

### Features

- ✅ No CMS needed - just markdown files
- ✅ Automatically appears in blog listing
- ✅ SEO-friendly URLs
- ✅ Static generation for fast performance
- ✅ Markdown support for rich content

### Tips

1. Use descriptive slugs that match your title
2. Keep excerpts concise (2-3 sentences)
3. Use proper markdown formatting for headings, lists, links, etc.
4. Add featured images to `/public/blog/` directory
5. Featured images are optional - if not provided, a default gradient image will be shown

