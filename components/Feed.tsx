import { MiniProfile } from './MiniProfile'
import { Posts } from './Posts'
import { Stories } from './Stories'
import { Suggestions } from './Suggestions'

export function Feed() {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      <section className="col-span-2">
        <Stories />
        <Posts />
      </section>

      <aside className="hidden w-full md:col-span-1 xl:inline-grid">
        <div className="fixed top-20 mt-10 ml-10">
          <MiniProfile />
          <Suggestions />
        </div>
      </aside>
    </main>
  )
}
