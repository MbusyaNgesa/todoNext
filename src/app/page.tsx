import { TodoItem } from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

export default async function Home() {
  const todos = await getTodos();
  // await prisma.todo.create({ data: { title: "test", complete: false } });
  return (
    <>
      <header
        className="flex justify-between items-center
      mb-4"
      >
        <h1 className="text-2xl">Todo</h1>
        <Link
          className="border border-teal-300 px-2 py-1
          rounded-lg
        text-teal-300 hover:bg-teal-700 focus-within:bg-teal-700
        outline-none
        "
          href={"new"}
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
