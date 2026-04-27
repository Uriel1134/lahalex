"use client"

import { useRef } from "react"
import YouTube from "react-youtube"

const BRAND_BG = "#FFFFFF"
const BRAND_TEXT = "#000000"
const BRAND_ACCENT = "#D4C89A"
const BRAND_ACCENT_LIGHT = "rgba(212, 200, 154, 0.25)"

export function VideoSection() {
  const playerRef = useRef<any>(null)

  const videos = [
    {
      id: "qhlu7I85v8U",
      title: "Vidéo 1",
    },
    {
      id: "IHpAmP5h05Q",
      title: "Vidéo 2",
    },
    {
      id: "QxaWV32_Mc8",
      title: "Vidéo 3",
    },
    {
      id: "i6AYljm1zYk",
      title: "Vidéo 4",
    },
  ]

  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  }

  const onPlay = (event: any) => {
    if (playerRef.current && playerRef.current !== event.target) {
      playerRef.current.pauseVideo()
    }

    if (event.target.isMuted()) {
      event.target.unMute()
    }

    playerRef.current = event.target
  }

  return (
    <section
      className="w-full pb-8 md:pb-16 pt-0"
      style={{ backgroundColor: BRAND_BG }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <h2
          className="text-[24px] md:text-[36px] font-normal leading-[1.2] font-['Gobold_Extra1'] mb-8 md:mb-16 uppercase"
          style={{ color: BRAND_TEXT }}
        >
          NOS VIDÉOS
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg bg-black"
              style={{
                border: `2px solid ${BRAND_ACCENT_LIGHT}`,
              }}
            >
              <YouTube
                videoId={video.id}
                opts={opts}
                onPlay={onPlay}
                title={video.title}
                className="w-full h-full"
                iframeClassName="w-full h-full"
                // @ts-ignore
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}