# Blog Components Guide

## Available Reusable Components

These components can be used in your blog posts to create better-looking, more engaging content.

### MediaBlock

Display images with optional captions:

```markdown
![Alt text](/blog/image.jpg "Optional caption")
```

Or use in HTML:
```html
<div class="media-block" data-src="/blog/image.jpg" data-alt="Description" data-caption="Image caption"></div>
```

### TipBox

Highlight tips and best practices:

```html
<div class="tip-box">
  <p>Always validate your schema markup before deploying to production.</p>
</div>
```

### InfoBox

Display informational content:

```html
<div class="info-box">
  <p>Schema.org supports over 800 schema types for various content formats.</p>
</div>
```

### WarningBox

Show warnings or important notices:

```html
<div class="warning-box">
  <p>Make sure to test your schema markup changes in Google's Rich Results Test.</p>
</div>
```

### CodeBlock

Display code snippets with syntax highlighting:

```html
<div class="code-block" data-language="json" data-title="Example Schema">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SEOMonk"
}
</div>
```

### QuoteBox

Display quotes or testimonials:

```html
<div class="quote-box" data-author="John Doe" data-source="SEO Expert">
  "Schema markup is essential for modern SEO success."
</div>
```

### CTAButton

Add call-to-action buttons:

```html
<div class="cta-button" data-text="Install Extension" data-href="/download" data-variant="primary" data-icon="download"></div>
```

## Styling

All components are pre-styled to match the SEOMonk design system:
- Clean, minimal design
- Proper spacing and typography
- Responsive on all devices
- Consistent with the site's color palette

## Usage Examples

### Example Blog Post Structure

```markdown
---
title: "Schema Markup Best Practices"
excerpt: "Learn how to implement schema markup correctly"
date: "2024-01-20"
author: "SEOMonk Team"
slug: "schema-markup-best-practices"
featuredImage: "/blog/schema-image.jpg"
---

# Schema Markup Best Practices

Regular markdown content here...

<div class="tip-box">
<p>Always use JSON-LD format for schema markup as recommended by Google.</p>
</div>

Here's an example schema:

<div class="code-block" data-language="json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "My Article Title"
}
</div>

<div class="info-box">
<p>You can validate your schema markup using SEOMonk Chrome Extension.</p>
</div>
```

