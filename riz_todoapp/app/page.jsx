import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import AddNewTodo from './add-new-todo.jsx'
import TodoList from './todo-list.jsx'


export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{ marginBottom: "-30px" }}>
        <AddNewTodo />
      </div>
      <div className={styles.center}>
        <TodoList />
      </div>
    </main>


  )
}
