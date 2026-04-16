import { useEffect, useRef, type FC } from 'react'
import bgVideo from '@/assets/Homepage_vid.mp4'
import { VideoEl } from './VideoBackground.styles'

const CROSSFADE_S = 1.5

export const VideoBackground: FC = () => {
  const refA = useRef<HTMLVideoElement>(null)
  const refB = useRef<HTMLVideoElement>(null)
  const current = useRef<'a' | 'b'>('a')
  const fading = useRef(false)

  useEffect(() => {
    const a = refA.current!
    const b = refB.current!

    a.style.opacity = '1'
    b.style.opacity = '0'

    function crossfade() {
      if (fading.current) return
      fading.current = true

      const fg = current.current === 'a' ? a : b
      const bg = current.current === 'a' ? b : a

      bg.currentTime = 0
      bg.play().catch(() => {})

      const start = performance.now()
      const dur = CROSSFADE_S * 1000

      function tick(now: number) {
        const t = Math.min((now - start) / dur, 1)
        fg.style.opacity = String(1 - t)
        bg.style.opacity = String(t)

        if (t < 1) {
          requestAnimationFrame(tick)
        } else {
          fg.pause()
          fg.currentTime = 0
          current.current = current.current === 'a' ? 'b' : 'a'
          fading.current = false
        }
      }

      requestAnimationFrame(tick)
    }

    function onTimeUpdate(this: HTMLVideoElement) {
      const fg = current.current === 'a' ? a : b
      if (this !== fg) return
      if (fading.current || !this.duration) return
      if (this.duration - this.currentTime <= CROSSFADE_S) crossfade()
    }

    a.addEventListener('timeupdate', onTimeUpdate)
    b.addEventListener('timeupdate', onTimeUpdate)

    return () => {
      a.removeEventListener('timeupdate', onTimeUpdate)
      b.removeEventListener('timeupdate', onTimeUpdate)
    }
  }, [])

  return (
    <>
      <VideoEl ref={refA} src={bgVideo} autoPlay muted playsInline preload="auto" />
      <VideoEl ref={refB} src={bgVideo} muted playsInline preload="auto" />
    </>
  )
}
