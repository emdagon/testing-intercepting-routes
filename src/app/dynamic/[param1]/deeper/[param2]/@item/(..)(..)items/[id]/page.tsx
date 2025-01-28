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
        border: "solid 2px black",
      }}
    >
      <div>Item Modal.</div>
      <div>
        Item ID: <strong>{id}</strong>
      </div>
    </div>
  );
}
