type WaveDividerProps = {
  className?: string;
  fill?: string;
};

export default function WaveDivider({
  className = "",
  fill = "#ffffff",
}: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${className}`}>
      <svg
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        className="block w-full h-[90px]"
        preserveAspectRatio="none"
      >
        <path
          fill={fill}
          d="M0,40 C120,60 240,20 360,30 480,40 600,80 720,75 840,70 960,30 1080,25 1200,20 1320,40 1440,35 L1440,0 L0,0 Z"
        />
      </svg>
    </div>
  );
}
