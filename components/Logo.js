export default function Logo({ size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" aria-label="VITA-M">
      <polygon points="24,4 38,20 24,44 10,20" fill="var(--tp)" opacity="0.9"/>
      <polygon points="24,4 38,20 24,24 10,20" fill="var(--tp)" opacity="0.6"/>
      <polygon points="24,24 38,20 24,44" fill="var(--tp)" opacity="0.35"/>
    </svg>
  );
}
