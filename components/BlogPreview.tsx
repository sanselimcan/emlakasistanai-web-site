import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section className="py-24" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-12">
          <div>
            <div
              className="inline-block mb-3 px-4 py-1.5 rounded-full text-xs font-medium"
              style={{
                background: "rgba(45,212,216,0.1)",
                border: "1px solid rgba(45,212,216,0.2)",
                color: "var(--cyan)",
                fontFamily: "DM Sans, sans-serif",
              }}
            >
              Bilgi Merkezi
            </div>
            <h2
              className="text-4xl font-bold"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Son Yazılar
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden sm:flex items-center gap-2 text-sm"
            style={{ color: "var(--cyan)" }}
          >
            Tümünü Gör
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group glass rounded-2xl overflow-hidden hover:border-[rgba(45,212,216,0.3)] transition-all duration-300 flex flex-col"
            >
              <div
                className="flex items-center justify-center text-4xl"
                style={{
                  height: "120px",
                  background: i === 0
                    ? "linear-gradient(135deg, var(--navy) 0%, rgba(45,212,216,0.2) 100%)"
                    : "linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {post.coverEmoji}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(45,212,216,0.08)",
                      color: "var(--cyan)",
                      border: "1px solid rgba(45,212,216,0.15)",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.5 }}>
                    {post.readTime}
                  </span>
                </div>
                <h3
                  className="text-sm font-bold leading-snug mb-2 group-hover:text-[var(--cyan)] transition-colors flex-1"
                  style={{ fontFamily: "Syne, sans-serif" }}
                >
                  {post.title}
                </h3>
                <div className="flex items-center gap-1 text-xs mt-2" style={{ color: "var(--cyan)" }}>
                  Oku
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link href="/blog" className="btn-outline inline-flex">
            Tüm Yazıları Gör →
          </Link>
        </div>
      </div>
    </section>
  );
}
