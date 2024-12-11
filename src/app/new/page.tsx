import Link from "next/link";

export default function Page() {
  return (
    <>
      <header
        className="flex justify-between items-center
      mb-4"
      >
        <h1 className="text-2xl">New</h1>
      </header>
      <form className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          className="border border-teal-300
        bg-transparent rounded-lg px-2 py-1 outline-none
        focus-within:border-teal-100"
        />
      </form>
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
          className="border border-teal-300
        bg-transparent rounded-lg px-2 py-1 outline-none
        focus-within:border-teal-100"
        >
          Create
        </button>
      </div>
    </>
  );
}
