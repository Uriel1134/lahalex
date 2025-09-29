from moviepy.editor import VideoFileClip, ImageClip, CompositeVideoClip

# Charger la vidéo (convertis ton GIF en MP4 si besoin)
# Redimensionner pour occuper toute la zone écran du laptop (996x596)
video = VideoFileClip("laha.mp4").resize((996, 596))

# Charger l'image du laptop
laptop = ImageClip("laptop-1.png").set_duration(video.duration)

# Positionner la vidéo exactement sur l'écran du laptop
video_on_laptop = video.set_position((271, 124))

# Combiner
final = CompositeVideoClip([laptop, video_on_laptop])

# Export haute qualité
final.write_videofile("mockup.mp4", codec="libx264", fps=30, bitrate="5000k")
