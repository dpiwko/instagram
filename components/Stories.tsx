import faker from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'
import { useEffect, useState } from 'react'
import { Story } from './Story'

export function Stories() {
  const [data, setData] = useState<ContextualCard[]>([])

  useEffect(() => {
    const generatedData = [...Array(20)].map(() => ({
      ...faker.helpers.contextualCard(),
    }))

    setData(generatedData)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-auto rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {data.map((profile) => (
        <Story
          key={profile.username}
          avatar={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}
