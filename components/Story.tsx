interface IStory {
  avatar: string | undefined
  username: string | undefined
}

export function Story({ avatar, username }: IStory) {
  return (
    <div>
      <img
        src={avatar}
        alt={username}
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-400 object-contain p-[1.75px] transition duration-200 ease-out hover:scale-110"
      />
      <p className="w-14 truncate text-center text-xs text-gray-500">
        {username}
      </p>
    </div>
  )
}
