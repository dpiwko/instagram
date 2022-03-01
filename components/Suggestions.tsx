import faker from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'
import { useEffect, useState } from 'react'

export function Suggestions() {
  const [suggestions, setSuggesions] = useState<ContextualCard[]>([])

  useEffect(() => {
    const suggestions = [...Array(5)].map(() => ({
      ...faker.helpers.contextualCard(),
    }))

    setSuggesions(suggestions)
  }, [])

  return (
    <div className="mt-4">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See all</button>
      </div>

      {suggestions?.map((profile) => (
        <div
          key={profile.username}
          className="mb-3 flex items-center justify-between"
        >
          <img
            src={profile.avatar}
            alt={profile.username}
            className="h-10 w-10 rounded-full border p-[2px]"
          />

          <div className="mx-4 flex-1 truncate">
            <h2 className="text-sm font-semibold">{profile.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {profile.company.name}
            </h3>
          </div>

          <button className="text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}
