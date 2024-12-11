import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  //For this function to run on the server, says function is server code
  "use server";

  const title = data.get("title")?.valueOf(); //? is there so it does not return undefined
  if (typeof title !== "string" || title.length === 0) {
    // throw new Error("Invalid Title");
    return <h1>Invalid title</h1>;
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/");
  // console.log("Hi");
}

export default function Page() {
  return (
    <>
      <header
        className="flex justify-between items-center
      mb-4"
      >
        <h1 className="text-2xl">New</h1>
      </header>
      <form action={createTodo} className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-teal-300
        bg-transparent rounded-lg px-2 py-1 outline-none
        focus-within:border-teal-100"
        />

        <div className="flex gap-1 justify-end mt-2">
          <Link
            href={".."}
            className="border border-teal-300
        bg-transparent rounded-lg px-2 py-1 outline-none
        focus-within:border-teal-100"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-teal-300
        bg-transparent rounded-lg px-2 py-1 outline-none
        focus-within:border-teal-100"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
