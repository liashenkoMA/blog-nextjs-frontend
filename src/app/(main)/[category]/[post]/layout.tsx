import PostHeader from "@/components/PostHeader/PostHeader";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PostHeader />
      {children}
    </>
  );
}
