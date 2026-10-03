import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles } from 'lucide-react';

interface VideoPlayer916Props {
  src?: string;
  posterSrc?: string;
}

export const VideoPlayer916: React.FC<VideoPlayer916Props> = ({
  src = '/assets/video/dongfeng-hero.mp4',
  posterSrc = '/assets/dongfeng/dongfeng-commercial-logo.png'
}) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          setHasError(false);
        })
        .catch((err) => {
          console.warn('Playback blocked or failed:', err);
          if (!videoRef.current?.muted) {
            videoRef.current!.muted = true;
            setIsMuted(true);
            videoRef.current!.play().then(() => setIsPlaying(true)).catch(() => setHasError(true));
          } else {
            setHasError(true);
          }
        });
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleVideoLoaded = () => {
    setHasError(false);
  };

  const handleVideoError = () => {
    setHasError(true);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] md:max-w-[380px]">
      {/* Outer Luxury Phone/Screen Bezel Frame */}
      <div className="relative rounded-[36px] p-3.5 bg-gradient-to-b from-[#222730] via-[#14171C] to-[#0A0C0E] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_-5px_rgba(230,0,18,0.2)] border border-white/10">
        
        {/* Top Speaker / Camera Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-[#08090A] rounded-full flex items-center justify-center gap-2 z-20 border border-white/5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1A1E24] border border-white/10" />
          <div className="w-8 h-1 rounded-full bg-[#1A1E24]" />
        </div>

        {/* Video Canvas with Strict 9:16 Aspect Ratio */}
        <div
          onClick={togglePlay}
          className="relative w-full aspect-[9/16] rounded-[26px] overflow-hidden bg-black cursor-pointer group select-none"
        >
          {/* Main Video Element */}
          <video
            ref={videoRef}
            src={src}
            poster={posterSrc}
            loop
            playsInline
            muted={isMuted}
            onLoadedData={handleVideoLoaded}
            onError={handleVideoError}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full h-full object-cover object-center"
          />

          {/* Premium Fallback Poster / Cinematic Card if video error */}
          {hasError && (
            <div className="absolute inset-0 bg-gradient-to-b from-[#14171C] via-[#0E1013] to-[#08090A] p-6 flex flex-col justify-between items-center text-center">
              <div className="pt-8">
                <span className="badge-tag text-[10px]">
                  {t('9:16 SOCIAL CAMPAIGN', 'حملة السوشيال ميديا 9:16')}
                </span>
              </div>
              
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-white p-3 shadow-2xl flex items-center justify-center">
                  <img
                    src="/assets/dongfeng/dongfeng-commercial-logo.png"
                    alt="Dongfeng"
                    className="w-full h-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-black text-white uppercase tracking-wider">
                    {t('KEEP BUSINESS MOVING', 'شغلك ما يقفش')}
                  </h4>
                  <p className="text-xs text-dongfeng-gray mt-1 max-w-[240px] mx-auto">
                    {t(
                      'Official 9:16 Hero Vertical Commercial — Pre-dawn bakery to dynamic city distribution.',
                      'الفيلم التجاري الرأسي 9:16 — من فجر أسواق الجملة إلى شرايين التوزيع داخل المدينة.'
                    )}
                  </p>
                </div>
              </div>

              <div className="w-full pb-4 space-y-2">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-dongfeng-silver flex items-center justify-center gap-2">
                  <Sparkles size={14} className="text-dongfeng-red" />
                  <span>{t('4K Master File Linked', 'تم ربط ملف العرض الرسمي')}</span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setHasError(false);
                    videoRef.current?.load();
                  }}
                  className="w-full py-2 rounded-xl bg-dongfeng-red/20 text-dongfeng-red hover:bg-dongfeng-red text-xs font-bold hover:text-white transition-colors flex items-center justify-center gap-1.5"
                >
                  <RotateCcw size={13} />
                  <span>{t('Retry Playback', 'إعادة المحاولة')}</span>
                </button>
              </div>
            </div>
          )}

          {/* Large Centered Play Button Overlay */}
          {!isPlaying && !hasError && (
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex flex-col items-center justify-center transition-all">
              <button
                onClick={togglePlay}
                aria-label="Play video"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-dongfeng-red text-white flex items-center justify-center shadow-2xl shadow-dongfeng-red/50 transform hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Play size={28} className="translate-x-0.5 fill-current" />
              </button>
              <div className="mt-4 px-3 py-1 rounded-full bg-black/70 text-[11px] font-bold text-white tracking-widest uppercase border border-white/10">
                {t('WATCH HERO FILM', 'مشاهدة الفيلم')}
              </div>
            </div>
          )}

          {/* Quick Corner Controls when playing */}
          {isPlaying && (
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20 pointer-events-auto">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15 hover:bg-dongfeng-red transition-colors"
                aria-label="Pause"
              >
                <Pause size={14} />
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/15 hover:bg-dongfeng-red transition-colors"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Under-player Specifications Label */}
      <div className="text-center mt-4">
        <div className="text-xs font-mono text-dongfeng-gray flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-dongfeng-red" />
          <span>{t('9:16 VERTICAL SOCIAL MEDIA FORMAT', 'صيغة الفيديو الرأسي 9:16 للسوشيال ميديا')}</span>
        </div>
      </div>
    </div>
  );
};
