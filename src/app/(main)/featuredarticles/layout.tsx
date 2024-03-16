import './layout.scss';

export default function FeaturedArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="main">{children}</main>;
}
