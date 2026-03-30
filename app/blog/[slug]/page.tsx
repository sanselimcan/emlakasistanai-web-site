import { getBlogPost, getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllBlogPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — EmlakAsistan AI Blog`,
    description: post.excerpt,
  };
}

// Minimal markdown-like renderer (bold, headings, lists, tables, paragraphs)
function renderContent(content: string) {
  const lines = content.trim().split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-2xl font-bold mt-10 mb-4"
          style={{ fontFamily: "Syne, sans-serif", color: "var(--text)" }}
        >
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-lg font-semibold mt-6 mb-3"
          style={{ fontFamily: "Syne, sans-serif", color: "var(--cyan)" }}
        >
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("**") && line.endsWith("**")) {
      elements.push(
        <p key={key++} className="font-semibold mt-4 mb-1" style={{ color: "var(--text)" }}>
          {line.slice(2, -2)}
        </p>
      );
    } else if (line.startsWith("- ")) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={key++} className="space-y-2 my-4 pl-4">
          {items.map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              <span style={{ color: "var(--cyan)", flexShrink: 0, marginTop: "2px" }}>→</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            </li>
          ))}
        </ul>
      );
      continue;
    } else if (line.startsWith("|")) {
      // Table
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].match(/^\|[-|\s]+\|$/)) {
          tableLines.push(lines[i]);
        }
        i++;
      }
      elements.push(
        <div key={key++} className="overflow-x-auto my-6">
          <table
            className="w-full text-sm border-collapse"
            style={{ border: "1px solid var(--border)", borderRadius: "0.5rem", overflow: "hidden" }}
          >
            {tableLines.map((row, rowIdx) => {
              const cells = row.split("|").filter((c) => c.trim());
              return rowIdx === 0 ? (
                <thead key={rowIdx}>
                  <tr style={{ background: "var(--surface)" }}>
                    {cells.map((cell, ci) => (
                      <th
                        key={ci}
                        className="px-4 py-2 text-left font-semibold"
                        style={{ color: "var(--cyan)", borderBottom: "1px solid var(--border)" }}
                      >
                        {cell.trim()}
                      </th>
                    ))}
                  </tr>
                </thead>
              ) : (
                <tbody key={rowIdx}>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {cells.map((cell, ci) => (
                      <td key={ci} className="px-4 py-2" style={{ color: "var(--text-muted)" }}>
                        {cell.trim()}
                      </td>
                    ))}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      elements.push(
        <p
          key={key++}
          className="text-base leading-relaxed my-3"
          style={{ color: "var(--text-muted)" }}
          dangerouslySetInnerHTML={{
            __html: line
              .replace(/\*\*(.*?)\*\*/g, '<strong style="color:var(--text)">$1</strong>')
              .replace(/`(.*?)`/g, '<code style="background:rgba(45,212,216,0.1);color:var(--cyan);padding:2px 6px;border-radius:4px;font-size:0.9em">$1</code>'),
          }}
        />
      );
    }
    i++;
  }

  return elements;
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const allPosts = getAllBlogPosts().filter((p) => p.slug !== params.slug).slice(0, 3);

  return (
    <main style={{ background: "var(--bg)", minHeight: "100vh" }}>
      {/* Hero */}
      <div
        className="pt-32 pb-12 relative overflow-hidden"
        style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-6"
            style={{ color: "var(--text-muted)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 5l-7 7 7 7"/>
            </svg>
            Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{
                background: "rgba(45,212,216,0.1)",
                color: "var(--cyan)",
                border: "1px solid rgba(45,212,216,0.2)",
              }}
            >
              {post.category}
            </span>
            <span className="text-xs" style={{ color: "var(--text-muted)", opacity: 0.6 }}>
              {post.readTime} okuma ·{" "}
              {new Date(post.date).toLocaleDateString("tr-TR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1
            className="text-4xl lg:text-5xl font-bold leading-tight mb-4"
            style={{ fontFamily: "Syne, sans-serif" }}
          >
            {post.title}
          </h1>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="prose-custom">{renderContent(post.content)}</div>

        {/* CTA */}
        <div
          className="glass rounded-2xl p-8 mt-16 text-center"
          style={{ borderColor: "rgba(45,212,216,0.2)" }}
        >
          <div className="text-4xl mb-4">🤖</div>
          <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "Syne, sans-serif" }}>
            AI Asistanı Kendiniz Deneyin
          </h3>
          <p className="mb-6" style={{ color: "var(--text-muted)" }}>
            Makalede anlattığımız özellikleri gerçekte nasıl çalıştığını görmek için demo asistanımızla konuşun.
          </p>
          <a href="/#demo" className="btn-primary inline-flex">
            Ücretsiz Demo Dene →
          </a>
        </div>

        {/* Related posts */}
        {allPosts.length > 0 && (
          <div className="mt-16">
            <h2
              className="text-2xl font-bold mb-6"
              style={{ fontFamily: "Syne, sans-serif" }}
            >
              Diğer Yazılar
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {allPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass rounded-xl p-4 hover:border-[rgba(45,212,216,0.3)] transition-all"
                >
                  <div className="text-2xl mb-2">{p.coverEmoji}</div>
                  <p
                    className="text-sm font-semibold leading-snug"
                    style={{ fontFamily: "Syne, sans-serif" }}
                  >
                    {p.title}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--cyan)" }}>
                    {p.readTime} okuma →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
