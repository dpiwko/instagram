export function MiniProfile() {
  return (
    <div className="flex items-center justify-between">
      <img
        src="/avatar.jpg"
        alt=""
        className="h-16 w-16 rounded-full border p-[2px]"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">_piwkoo_</h2>
        <h3 className="text-sm text-gray-500">Welcome to Instagram</h3>
      </div>

      <button className="text-sm font-semibold text-blue-400">Sing Out</button>
    </div>
  )
}
