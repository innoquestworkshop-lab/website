import { Photo } from "@/components/ui/system";
import type { ArticleBlock } from "@/lib/articles";

// Renders an article's content blocks in a single readable column, with photos
// sitting inline between paragraphs. Uses the site's typography classes.
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <div className="article-body" style={{ maxWidth: 720, display: "grid", gap: 4 }}>
      {blocks.map((block, i) => {
        if ("h2" in block) {
          return (
            <h2 key={i} className="h-sm" style={{ marginTop: 32, marginBottom: 4 }}>
              {block.h2}
            </h2>
          );
        }
        if ("ul" in block) {
          return (
            <ul key={i} style={{ margin: "8px 0", paddingLeft: "1.25em", display: "grid", gap: 8 }}>
              {block.ul.map((item, j) => (
                <li key={j} className="lede">{item}</li>
              ))}
            </ul>
          );
        }
        if ("img" in block) {
          return (
            <figure key={i} style={{ margin: "24px 0" }}>
              <Photo src={block.img.src} alt={block.img.alt} ratio="16 / 10" position={block.img.position} />
              <figcaption className="caption" style={{ marginTop: 10 }}>{block.img.caption}</figcaption>
            </figure>
          );
        }
        return (
          <p key={i} className="lede" style={{ marginTop: 12 }}>
            {block.p}
          </p>
        );
      })}
    </div>
  );
}
