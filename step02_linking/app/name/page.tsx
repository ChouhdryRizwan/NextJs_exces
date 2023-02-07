'use client';

import { useRouter } from 'next/navigation';

export default function GiveName() {
    const router = useRouter();
    return (
        <div>
            I'm Chouhdry Rizwan.
            <br />
            <button type="button" onClick={() => router.push('/name/address')}>
                Get Address
            </button>

        </div>
    )
}