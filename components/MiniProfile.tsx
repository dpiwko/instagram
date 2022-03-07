import { signOut, useSession } from 'next-auth/react'

export function MiniProfile() {
  const { data: session } = useSession()

  return (
    <div className="flex items-center justify-between">
      <img
        src={session?.user?.image}
        alt={session?.user?.username}
        className="h-16 w-16 rounded-full border p-[2px]"
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-500">Welcome to Instagram</h3>
      </div>

      <button
        className="text-sm font-semibold text-blue-400"
        onClick={() => signOut()}
      >
        Sing Out
      </button>
    </div>
  )
}
