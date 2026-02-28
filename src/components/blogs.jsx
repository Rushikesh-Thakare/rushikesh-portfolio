import React from "react";
import "../index.css";
import { blogsData } from "../data/blogsData";
import { useState } from "react";


// ── Single Blog Card (reused in both preview and full page) ──
function BlogCard({ blog, onClick }) {
  return (
    <div className="blog-card" onClick={() => onClick(blog)}>
      {/* Emoji banner */}
      <div className="blog-card-banner">{blog.emoji}</div>

      <div className="blog-card-body">
        {/* Tag + read time */}
        <div className="blog-card-meta">
          <span className="blog-tag">{blog.tag}</span>
          <span className="blog-read-time">⏱ {blog.readTime} read</span>
        </div>

        {/* Title */}
        <h3 className="blog-card-title">{blog.title}</h3>

        {/* Description */}
        <p className="blog-card-desc">{blog.description}</p>

        {/* Date + Read link */}
        <div className="blog-card-footer">
          <span className="blog-date">📅 {blog.date}</span>
          <span className="blog-read-link">Read more →</span>
        </div>
      </div>
    </div>
  );
}

// ── Blog Preview (shown on home page — 3 cards) ───────────────
function BlogPreview({ onViewAll, onReadPost }) {
  return (
    <section id="blog" className="blog-section">
      {/* Heading row with "View All" button on the right */}
      <div className="blog-heading-row">
        <div>
          <h3 className="blog-label">// Blog</h3>
          <h2 className="blog-heading">My <span>Blog</span></h2>
          <p className="blog-desc">Latest thoughts and tutorials from my learning journey</p>
        </div>
        <button className="blog-view-all-btn" onClick={onViewAll}>
          📝 View All Posts →
        </button>
      </div>

      {/* 3 latest blog cards */}
      <div className="blog-grid">
        {blogsData.slice(0, 3).map(blog => (
          <BlogCard key={blog.id} blog={blog} onClick={onReadPost} />
        ))}
      </div>
    </section>
  );
}

// ── Full Blog Page (all 6 posts) ──────────────────────────────
function BlogAllPosts({ onBack, onReadPost }) {
  return (
    <section className="blog-section blog-page">
      {/* Back button */}
      <button className="blog-back-btn" onClick={onBack}>
        ← Back to Home
      </button>

      <h3 className="blog-label">// All Posts</h3>
      <h2 className="blog-heading">All <span>Blog Posts</span></h2>
      <p className="blog-desc">Thoughts, tutorials and learnings I share with the community</p>

      {/* All 6 blog cards */}
      <div className="blog-grid">
        {blogsData.map(blog => (
          <BlogCard key={blog.id} blog={blog} onClick={onReadPost} />
        ))}
      </div>
    </section>
  );
}

// ── Single Post Reader ────────────────────────────────────────
function BlogPostReader({ post, onBack }) {
  return (
    <section id="blogs" className="blog-post-page">
      {/* Back button */}
      <button className="blog-back-btn" onClick={onBack}>
        ← Back to Blog
      </button>

      {/* Post header */}
      <div className="blog-post-emoji">{post.emoji}</div>
      <div className="blog-post-meta">
        <span className="blog-tag">{post.tag}</span>
        <span className="blog-read-time">📅 {post.date}</span>
        <span className="blog-read-time">⏱ {post.readTime} read</span>
      </div>
      <h1 className="blog-post-title">{post.title}</h1>

      {/* Post content — each paragraph separated */}
      <div className="blog-post-content">
        {post.content.split("\n\n").map((para, i) => (
          <p key={i} className="blog-post-para">{para}</p>
        ))}
      </div>
    </section>
  );
}

// ── Main Blog Component (handles all 3 modes) ─────────────────
function Blog({ mode, activePost, onViewAll, onReadPost, onBack, onBackToBlog }) {
  if (mode === "blog") {
    return <BlogAllPosts onBack={onBack} onReadPost={onReadPost} />;
  }
  if (mode === "post" && activePost) {
    return <BlogPostReader post={activePost} onBack={onBackToBlog} />;
  }
  // Default: preview on home page
  return <BlogPreview onViewAll={onViewAll} onReadPost={onReadPost} />;
}

export default Blog;