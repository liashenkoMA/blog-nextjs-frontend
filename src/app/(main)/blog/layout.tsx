import "./bloglayout.scss";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="main">{children}</main>;
}
