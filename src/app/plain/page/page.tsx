import Link from "next/link";

export default async function ThePage() {
  return (
    <div
      style={{
        padding: "10rem",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>Plain Page</div>
      <div>
        <Link href={`/plain/items/111`}>Item 1</Link>
      </div>
      <div>
        <Link href={`/plain/items/222`}>Item 2</Link>
      </div>
      <div>
        <Link href={`/plain/items/333`}>Item 3</Link>
      </div>
    </div>
  );
}
