type WaveDividerProps = {
  className?: string;
  fill?: string;
};

export default function WaveDivider({
  className = "",
  fill = "#D9A441",
}: WaveDividerProps) {
  return (
    <div className={className} aria-hidden="true">
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="h-[60px] w-full sm:h-[90px]"
      >
        <path
          d="M0,40 C120,70 240,10 360,40 C480,70 600,10 720,40 C840,70 960,10 1080,40 C1200,70 1320,10 1440,40 L1440,120 L0,120 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
