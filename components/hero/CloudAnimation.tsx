"use client";

export default function CloudAnimation() {
  const clouds = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    delay: i * 1.5,
    scale: 0.6 + Math.random() * 0.8,
    opacity: 0.3 + Math.random() * 0.4,
    duration: 6 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {clouds.map((cloud) => (
        <div
          key={cloud.id}
          className="absolute text-white/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${cloud.scale})`,
            opacity: cloud.opacity,
            animationDelay: `${cloud.delay}s`,
            animationDuration: `${cloud.duration}s`,
          }}
        >
          <div className="float-animation">
            <svg
              width="80"
              height="60"
              viewBox="0 0 80 60"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M64 40c8.837 0 16-7.163 16-16s-7.163-16-16-16c-1.026 0-2.024.096-3 .278C58.748 2.828 53.1 0 46.667 0 37.508 0 30.028 7.48 30.028 16.667c0 .642.036 1.275.107 1.899C27.748 17.434 25.028 16.667 22.111 16.667 11.626 16.667 3.111 25.181 3.111 35.667S11.626 54.667 22.111 54.667h41.889C72.837 54.667 80 47.504 80 38.667S72.837 22.667 64 22.667z" />
            </svg>
          </div>
        </div>
      ))}

      {/* Larger feature clouds */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="float-animation" style={{ animationDuration: "8s" }}>
          <svg
            width="120"
            height="90"
            viewBox="0 0 80 60"
            fill="currentColor"
            className="text-white/10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 40c8.837 0 16-7.163 16-16s-7.163-16-16-16c-1.026 0-2.024.096-3 .278C58.748 2.828 53.1 0 46.667 0 37.508 0 30.028 7.48 30.028 16.667c0 .642.036 1.275.107 1.899C27.748 17.434 25.028 16.667 22.111 16.667 11.626 16.667 3.111 25.181 3.111 35.667S11.626 54.667 22.111 54.667h41.889C72.837 54.667 80 47.504 80 38.667S72.837 22.667 64 22.667z" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-32 right-16 opacity-20">
        <div
          className="float-animation"
          style={{ animationDuration: "10s", animationDelay: "2s" }}
        >
          <svg
            width="100"
            height="75"
            viewBox="0 0 80 60"
            fill="currentColor"
            className="text-white/15"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 40c8.837 0 16-7.163 16-16s-7.163-16-16-16c-1.026 0-2.024.096-3 .278C58.748 2.828 53.1 0 46.667 0 37.508 0 30.028 7.48 30.028 16.667c0 .642.036 1.275.107 1.899C27.748 17.434 25.028 16.667 22.111 16.667 11.626 16.667 3.111 25.181 3.111 35.667S11.626 54.667 22.111 54.667h41.889C72.837 54.667 80 47.504 80 38.667S72.837 22.667 64 22.667z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
