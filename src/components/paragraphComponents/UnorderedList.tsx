interface UlProps {
  children: React.ReactNode;
}

export default function Ul({ children }: UlProps) {
  return (
    <ul style={{ paddingLeft: "2vw", fontSize: "1.02rem", lineHeight: "2rem" }}>
      {children}
    </ul>
  );
}
