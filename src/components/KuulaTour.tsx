"use client"

interface KuulaTourProps {
  src: string;
}

/** https://kuula.co/ */
export default function KuulaTour({ src }: KuulaTourProps) {
  return (
    <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        title="Tour Virtual 360"
        src={src}
        width="100%"
        height="100%"
        style={{ position: "absolute", top: 0, left: 0, border: "none" }}
        allowFullScreen
        allow="xr-spatial-tracking; gyroscope; accelerometer"
      />
    </div>
  );
}