'use client'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

async function addTodo(name, refresh) {
    await fetch("/api/todo/add", {
        method: 'POST',
        body: JSON.stringify({ name }),
    });
    refresh();
}

export default function addNewTodo() {
    const router = useRouter();
    let [name, setName] = useState("");
    return (
        <main className={styles.main}>
            <p className={styles.description} style={{ marginTop: "-100px" }}>
                <u>
                    Todo Application
                </u>
            </p>
            <div style={{ marginBottom: "250px" }}>
                <label style={{ fontSize: "18px", color: "black" }}>Task: </label>
                <input type="text" name="" id="" style={{ width: "360px", border: "none", background: "none", borderBottom: "1px solid teal", outline: "none" }} onChange={(e) => setName(e.target.value)} value={name} />
                <br /><br />
                <div className={styles.center}>
                    <button style={{ padding: "10px 20px 10px 20px", color: "white", background: "teal", border: "none", borderRadius: "2px", fontSize: "15px", fontWeight: "700px", letterSpacing: "1px" }}
                        onClick={async () => {
                            await addTodo(name, router.refresh);
                            setName("");
                        }}
                    >ADD</button>
                </div>
            </div>
        </main >
    )
}