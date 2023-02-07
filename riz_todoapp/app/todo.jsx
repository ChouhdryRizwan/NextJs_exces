'use client'

import { updateTodo } from "@/pages/api/todo/list"
import { useRouter } from "next/navigation"

async function update(id, isDone, refresh) {
    await fetch("/api/todo/update", {
        method: 'POST',
        // mode: "no-cors",
        body: JSON.stringify({ id, isDone })
    });
    refresh();
}

async function deleteTodo(id, refresh) {
    await fetch(`/api/todo/delete?id=${id}`, {
        method: 'DELETE',
    });
    refresh();
}

export default function Todo({ todo }) {
    const router = useRouter();
    return (
        <>
            <input type="checkbox"
                onChange={(e) => update(todo.id, e.target.checked, router.refresh)}
                checked={todo.isDone} />
            &nbsp;<span>{todo.name}</span>&nbsp;
            <button style={{ color: "white", background: "red", border: "none", padding: "2px 5px 2px 5px", borderRadius: "2px" }} onClick={(e) => deleteTodo(todo.id, router.refresh)}>X</button>
        </>
    )
}