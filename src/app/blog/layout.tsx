import "./bloglayout.scss";

import PopularTags from "@/components/PopularTags/PopularTags";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="main">
      {children}
      <PopularTags />
    </main>
  );
}
