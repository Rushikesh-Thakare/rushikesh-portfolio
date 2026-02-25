import React from "react";
import "../index.css";
import { useState } from "react";

const blogsData = [
  {
    id: 1,
    emoji: "⚛️",
    tag: "React",
    readTime: "5 min",
    date: "Jan 10, 2025",
    title: "Getting Started with React Hooks",
    description: "A beginner-friendly guide to understanding useState, useEffect and custom hooks in React.",
    content: `React Hooks completely changed how we write React components. Before hooks, you needed class components to manage state and lifecycle. Now, with just a few functions, you can handle everything cleanly.

    useState is the most basic hook — it lets you add state to a functional component. Think of state as a variable that, when changed, automatically re-renders your UI.

    useEffect lets you handle side effects like fetching data, setting up event listeners, or updating the document title. It runs after every render by default, but you can control when it runs using the dependency array.

    Custom hooks are just functions that use other hooks inside them. They let you extract and reuse logic across multiple components — keeping your code clean and DRY.`
  },
  {
    id: 2,
    emoji: "🎨",
    tag: "CSS",
    readTime: "4 min",
    date: "Dec 28, 2024",
    title: "CSS Grid vs Flexbox: Which to Use?",
    description: "Breaking down the differences and helping you pick the right tool for your layout needs.",
    content: `Both CSS Grid and Flexbox are powerful layout tools, but they solve different problems. Understanding when to use each one makes you a much better developer.

    Flexbox is one-dimensional — it works great for aligning items in a single row or column. Use it for navigation bars, button groups, centering content, and card internals.

    Grid is two-dimensional — perfect for full page layouts where you need control over both rows and columns simultaneously. Use it for the main page structure.

    The best approach? Use them together. A CSS Grid for the overall page layout, and Flexbox inside each grid area to align the content within it. They're complementary, not competing.`
  },
  {
    id: 3,
    emoji: "🔌",
    tag: "JavaScript",
    readTime: "6 min",
    date: "Nov 15, 2024",
    title: "How I Built My First API Integration",
    description: "Step by step walkthrough of consuming a public API in vanilla JavaScript with fetch.",
    content: `APIs felt scary when I first heard about them. But after building a weather app, everything clicked. An API is just a way for two programs to talk to each other.

    The fetch() function in JavaScript makes HTTP requests super simple. You give it a URL, it returns a Promise, you await the result, parse the JSON, and use the data.

    Error handling is important — always wrap your fetch calls in a try/catch block. Networks can fail, servers can be down, and you want your app to handle that gracefully instead of crashing.

    For my weather app I used the OpenWeatherMap API. I learned how to read API documentation, use API keys securely, and display the data in a clean, responsive UI.`
  },
  {
    id: 4,
    emoji: "⏳",
    tag: "JavaScript",
    readTime: "5 min",
    date: "Oct 20, 2024",
    title: "Understanding Async/Await in JavaScript",
    description: "A clear explanation of async/await and how it makes working with Promises much simpler.",
    content: `JavaScript is single-threaded, which means it can only do one thing at a time. But modern apps need to do things like fetch data, read files, and wait for user input — all without freezing the browser.

    Promises were the first solution. But chaining .then() and .catch() can get messy fast. async/await is the modern, cleaner way to write asynchronous code.

    By marking a function as async, you can use await inside it to pause execution until a Promise resolves. The code reads just like synchronous code, making it much easier to understand and debug.

    Always use try/catch with async/await to handle errors — just like you would in synchronous code.`
  },
  {
    id: 5,
    emoji: "🐙",
    tag: "Git",
    readTime: "7 min",
    date: "Sep 5, 2024",
    title: "Git & GitHub: A Student's Complete Guide",
    description: "Everything a CSE student needs to know about version control and collaborating on GitHub.",
    content: `Version control is one of the most important skills for any developer, yet most college courses barely scratch the surface. Git lets you track every change you make to your code.

    The basic workflow: git init to start, git add to stage your changes, git commit to save a snapshot, git push to upload to GitHub. That's the core loop you'll use every single day.

    Branches are where Git gets really powerful. Create a new branch for each feature or bug fix, work on it independently, then merge it back when it's done. This keeps your main branch always working.

    GitHub is where you host your code, collaborate with others, and show recruiters what you've built. Start building your GitHub profile now — it's your developer portfolio.`
  },
  {
    id: 6,
    emoji: "🚀",
    tag: "Career",
    readTime: "4 min",
    date: "Aug 1, 2024",
    title: "My Journey Learning Web Development",
    description: "How I went from zero coding knowledge to building full-stack projects as a diploma student.",
    content: `When I started my diploma in CSE I had absolutely zero coding experience. My first program was a Hello World in C. I still remember how excited I felt just seeing text appear on the screen.

    The biggest mistake beginners make is tutorial hell — watching video after video without actually building anything. I fell into this trap for months before I realized what was happening.

    The shift happened when I forced myself to build a project with whatever I knew, even if it looked terrible. Breaking things and fixing them taught me more than any tutorial ever did.

    My advice to anyone starting: pick one technology, build 3-4 projects with it until you're comfortable, then expand. Don't try to learn everything at once. Progress over perfection.`
  }
];

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
    <section className="blog-post-page">
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