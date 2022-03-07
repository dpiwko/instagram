import { useSession } from 'next-auth/react'
import { MiniProfile } from './MiniProfile'
import { Posts } from './Posts'
import { Stories } from './Stories'
import { Suggestions } from './Suggestions'

export function Feed() {
  const { data: session } = useSession()

  return (
    <main
      className={`mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3 ${
        !session && '!max-w-3xl !grid-cols-1'
      }`}
    >
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      {session && (
        <aside className="hidden w-full md:col-span-1 xl:inline-grid">
          <div className="fixed top-20 mt-10 ml-10">
            <MiniProfile />
            <Suggestions />
          </div>
        </aside>
      )}
    </main>
  )
}
