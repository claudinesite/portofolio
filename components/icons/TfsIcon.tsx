export default function TfsIcon({ size = 18, color = "#5C2D91" }: { size?: number; color?: string }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 96 96" 
      fill={color}
    >
      <path d="M87 12.5L67.5 5L37 35v40l-17-12.5V28L5 37v32l15 10 52.5 12L87 83.5v-71zM37 52l-17-.5v-16L37 38v14zm30 15L37 55V41l30-12.5V67z"/>
    </svg>
  );
}