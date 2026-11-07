const Tailwind = () => {
  return (
    <nav className="border flex p-8">
      <aside className="basis-[20%] flex justify-center items-center">
        <h1 className="text-4xl font-semibold">Tailwind CSS</h1>
      </aside>
      <aside className="basis-[55%] flex justify-center items-center gap-8 text-xl">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </aside>
      <aside className=" basis-[25%] flex justify-evenly items-center">
         <button className="border px-5 py-2 rounded">Login</button>
         <button className="border px-5 py-2 rounded bg-black text-white">Signup</button>
      </aside>
    </nav>
  )
}

export default Tailwind