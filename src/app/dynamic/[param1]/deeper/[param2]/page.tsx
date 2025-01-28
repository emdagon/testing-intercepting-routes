import Link from "next/link";

type ThePageProps = {
  params: Promise<{
    param1: string;
    param2: string;
  }>;
};

export default async function ThePage({ params }: ThePageProps) {
  const { param1, param2 } = await params;
  return (
    <div
      style={{
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>Dynamic page: {param2}</div>
      <div>
        <Link href={`../../${param1}/items/111`}>Item 1</Link>
      </div>
      <div>
        <Link href={`/dynamic/${param1}/items/222`}>Item 2</Link>
      </div>
      <div>
        <Link href={`/dynamic/${param1}/items/333`}>Item 3</Link>
      </div>
    </div>
  );
}
