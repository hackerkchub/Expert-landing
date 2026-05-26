import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background:
            "linear-gradient(135deg, rgb(7, 17, 36) 0%, rgb(20, 92, 255) 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            fontWeight: 600,
            opacity: 0.9,
          }}
        >
          G9Expert
        </div>
        <div
          style={{
            marginTop: "24px",
            fontSize: 74,
            fontWeight: 800,
            lineHeight: 1.08,
            maxWidth: "900px",
          }}
        >
          Sell Your Services and Earn Online
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: 30,
            lineHeight: 1.35,
            maxWidth: "880px",
            opacity: 0.95,
          }}
        >
          Expert registration for chat and call consultations across India.
        </div>
      </div>
    ),
    size
  );
}
