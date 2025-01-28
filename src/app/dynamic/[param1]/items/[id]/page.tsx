type TheItemPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function TheItemPage({ params }: TheItemPageProps) {
  const { id } = await params;
  return (
    <div
      style={{
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>Item Page.</div>
      <div>
        Item ID: <strong>{id}</strong>
      </div>
    </div>
  );
}
