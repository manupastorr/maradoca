import { cn } from "@/lib/utils";
import { AdvancedVideo } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { Volume2, VolumeX } from "lucide-react";
import Image from "next/image";
import { memo, useEffect, useState } from "react";

const cld = new Cloudinary({
  cloud: {
    cloudName: "dgydlubmz",
  },
});

type VideoProps = {
  isMuted: boolean;
  onToggleMute: () => void;
  desktopVideoId?: string;
  mobileVideoId?: string;
};

function getPosterUrl(videoId: string, width: number, height: number) {
  return `https://res.cloudinary.com/dgydlubmz/video/upload/so_1,c_fill,w_${width},h_${height},q_auto,f_jpg/${videoId}.jpg`;
}

type HeroVideoProps = {
  videoId?: string;
  className: string;
  width: number;
  height: number;
  priority?: boolean;
};

function HeroPoster({
  videoId,
  className,
  width,
  height,
  priority = false,
}: HeroVideoProps) {
  if (!videoId) return null;

  return (
    <div className={cn("absolute inset-0 overflow-clip bg-black", className)}>
      <Image
        src={getPosterUrl(videoId, width, height)}
        alt=""
        aria-hidden="true"
        fill
        className="object-cover"
        priority={priority}
        sizes="100vw"
      />
    </div>
  );
}

function HeroVideo({ videoId, className, width, height }: HeroVideoProps) {
  const [isReady, setIsReady] = useState(false);

  if (!videoId) return null;

  const video = cld.video(videoId).resize(fill().width(width).height(height));
  const posterUrl = getPosterUrl(videoId, width, height);

  return (
    <div className={cn("absolute inset-0 overflow-clip bg-black", className)}>
      <Image
        src={posterUrl}
        alt=""
        aria-hidden="true"
        fill
        className={cn(
          "object-cover transition-opacity duration-700",
          isReady ? "opacity-0" : "opacity-100"
        )}
        priority
        sizes="100vw"
      />
      <AdvancedVideo
        cldVid={video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterUrl}
        onCanPlay={() => setIsReady(true)}
        onPlaying={() => setIsReady(true)}
        className={cn(
          "h-full w-full object-cover transition-opacity duration-700",
          {
            "opacity-0": !isReady,
            "opacity-100": isReady,
          }
        )}
      />
    </div>
  );
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 640px)");
    const update = () => setIsDesktop(query.matches);

    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

const BackgroundVideo = ({
  isMuted,
  onToggleMute,
  desktopVideoId,
  mobileVideoId,
}: VideoProps) => {
  const isDesktop = useIsDesktop();
  const activeVideoId =
    isDesktop === false
      ? mobileVideoId || desktopVideoId
      : desktopVideoId || mobileVideoId;
  const activeWidth = isDesktop === false && mobileVideoId ? 720 : 1920;
  const activeHeight = isDesktop === false && mobileVideoId ? 1280 : 1080;

  return (
    <>
      {isDesktop === null ? (
        <>
          <HeroPoster
            videoId={desktopVideoId}
            className="hidden sm:block"
            width={1920}
            height={1080}
            priority
          />
          <HeroPoster
            videoId={mobileVideoId}
            className="sm:hidden"
            width={720}
            height={1280}
            priority
          />
        </>
      ) : (
        <HeroVideo
          key={activeVideoId}
          videoId={activeVideoId}
          className="block"
          width={activeWidth}
          height={activeHeight}
        />
      )}
      <Overlay />
      <UnmuteButton isMuted={isMuted} onToggle={onToggleMute} />
      {/* Add a hidden video element to control mute state */}
      <video
        id="muteController"
        muted={isMuted}
        className="hidden"
        onVolumeChange={(e) => {
          // Sync mute state with all videos
          const videos = document.querySelectorAll("video");
          videos.forEach((v) => (v.muted = isMuted));
        }}
      />
    </>
  );
};

const Overlay = memo(function Overlay() {
  return <div className="absolute inset-0 bg-black opacity-25" />;
});

const UnmuteButton = memo(function UnmuteButton({
  isMuted,
  onToggle,
}: {
  isMuted: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      onClick={onToggle}
      className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm transition-all hover:bg-black/70"
    >
      {isMuted ? (
        <>
          <VolumeX className="h-4 w-4" />
          <span className="hidden sm:inline">Press Space to Unmute</span>
        </>
      ) : (
        <>
          <Volume2 className="h-4 w-4" />
          <span className="hidden sm:inline">Press Space to Mute</span>
        </>
      )}
    </button>
  );
});

export default BackgroundVideo;
