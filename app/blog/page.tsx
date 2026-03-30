import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — EmlakAsistan AI",
  description:
    "Emlak danışmanları için AI, otomasyon, lead yönetimi ve emlak piyasası hakkında kapsamlı yazılar.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Header */}
      <div
        className="pt-32 pb-16 text-center relative overflow-hidden"
        style={{ background: "var(--bg-2)" }}
      >
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(45,212,216,0.5) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-medium"
            style={{
              background: "rgba(45,212,216,0.1)",
              border: "1px solid rgba(45,212,216,0.2)",
              color: "var(--cyan)",
            }}
          >
            Bilgi Merkezi
          </div>
          <h1
            className="text-5xl font-bold mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            Blog
          </h1>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            Emlak danışmanları için AI, otomasyon ve lead stratejileri hakkında
            derinlemesine yazılar.
          </p>
        </div>
      </div>

      {/* Posts grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-2xl overflow-hidden hover:border-[rgba(45,212,216,0.3)] transition-all duration-300 flex flex-col"
            >
              {/* Cover */}
              <div
                className="flex items-center justify-center text-5xl"
                style={{
                  height: "140px",
                  background: "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {post.coverEmoji}
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(45,212,216,0.1)",
                      color: "var(--cyan)",
                      border: "1px solid rgba(45,212,216,0.2)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
                    {post.readTime} okuma
                  </span>
                </div>

                <h2
                  className="text-base font-bold mb-2 leading-snug group-hover:text-[var(--cyan)] transition-colors"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {post.title}
                </h2>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-muted)" }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                  <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span
                    className="text-xs font-medium flex items-center gap-1"
                    style={{ color: "var(--cyan)" }}
                  >
                    Oku
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
