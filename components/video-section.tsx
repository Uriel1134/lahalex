"use client"

import { useRef } from "react"
import YouTube from "react-youtube"

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
        height: '100%',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    }

    const onPlay = (event: any) => {
        // Pause l'autre vidéo si elle joue
        if (playerRef.current && playerRef.current !== event.target) {
            playerRef.current.pauseVideo()
        }
        // Force le son à s'activer (démute)
        if (event.target.isMuted()) {
            event.target.unMute()
        }
        // Met à jour la référence vers la vidéo courante
        playerRef.current = event.target
    }

    return (
        <section className="w-full bg-white pb-8 md:pb-16 pt-0">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <h2 className="text-[#770D28] text-[24px] md:text-[36px] font-normal leading-[43px] font-['Gobold_Extra1'] mb-8 md:mb-16 uppercase">
                    NOS VIDÉOS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div key={video.id} className="w-full aspect-video rounded-[20px] overflow-hidden shadow-lg border-2 border-[#770D28]/10 bg-black">
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
