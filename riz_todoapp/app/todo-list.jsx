import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Todo from './todo';
import TodoList from './todo-list.jsx'

const getTodos = async () => {
    let todos = await fetch("http://localhost:3000/api/todo/list");
    return todos.json();
};


export default async function todoList() {
    const { todos } = await getTodos();
    return (
        <div style={{ marginTop: "-450px", width: "400px" }}>
            <ul style={{ listStyleType: "none" }}>
                {todos.map((t) => {
                    return (
                        <li key={t.id} style={{ padding: "5px 0" }}>
                            <Todo todo={t} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}


