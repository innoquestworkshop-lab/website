import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "InnoQuest | Youth Learning Programs Thailand";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tile = (left: number, top: number, height: number, background: string) => (
  <div style={{ position: "absolute", left, top, width: 170, height, borderRadius: 16, background, display: "flex" }} />
);

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logos/logo-transparent-trimmed.png"), "base64");
  const photo = await readFile(join(process.cwd(), "public/images/events/web/IMG_7900.jpg"), "base64");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FBFBF9",
          padding: "0 72px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Masonry motif, bleeding off the right edge */}
        {tile(690, -60, 300, "#E5E5E0")}
        {tile(690, 256, 200, "#FF0F0F")}
        {tile(690, 472, 220, "#262622")}
        {tile(876, 90, 220, "#262622")}
        <img
          src={`data:image/jpeg;base64,${photo}`}
          alt=""
          width={170}
          height={260}
          style={{ position: "absolute", left: 876, top: 326, width: 170, height: 260, objectFit: "cover", borderRadius: 16 }}
        />
        {tile(1062, -30, 240, "#FF0F0F")}
        {tile(1062, 226, 280, "#E5E5E0")}
        {tile(1062, 522, 160, "#262622")}

        <img src={`data:image/png;base64,${logo}`} alt="" width={378} height={84} style={{ width: 378, height: 84 }} />
        <div style={{ fontSize: 28, fontWeight: 400, color: "#33332E", marginTop: 32, maxWidth: 560, lineHeight: 1.4, display: "flex" }}>
          The skills schools forgot to teach. Business simulations and live workshops for ages 10 to 18.
        </div>
        <div style={{ fontSize: 20, color: "#62625B", marginTop: 24, display: "flex" }}>innoquest.tech</div>
      </div>
    ),
    { ...size }
  );
}
