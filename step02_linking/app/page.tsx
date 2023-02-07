import Link from 'next/link';

export default function Home() {
  return (
    <div>
      Hello to Next.js family.
      <br />
      <Link href="/name">Go to name page</Link>
    </div>
  )
}
