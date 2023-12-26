interface UlProps {
  children: React.ReactNode;
}

export default function Ul({ children }: UlProps) {
  return <ul style={{ paddingLeft: "2vw" }}>{children}</ul>;
}
