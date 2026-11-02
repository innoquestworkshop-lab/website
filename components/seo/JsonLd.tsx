// Server-rendered JSON-LD. Escapes "<" per Next's json-ld guidance so the
// structured data can't break out of the <script> tag.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
