import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import {
  BookmarkIcon as BookmarkFilledIcon,
  HeartIcon as HeartFilledIcon,
} from '@heroicons/react/solid'

interface IPost {
  id: string
  username: string
  userImg: string
  img: string
  caption: string
}

export function Post({ post }: { post: IPost }) {
  const { id, username, userImg, img, caption } = post

  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="mr-3 h-12 w-12 rounded-full border p-1"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5 cursor-pointer" />
      </div>

      <img src={img} alt="post image" className="w-full object-cover" />

      <div className="flex justify-between px-5 pt-5">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>

        <BookmarkIcon className="postBtn" />
      </div>

      <p className="truncate p-5">
        <span className="mr-1 font-bold">{username}</span>
        {caption}
      </p>

      <div>{/* comments */}</div>

      <form className="flex items-center p-5">
        <EmojiHappyIcon className="postBtn h-7" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="flex-1 border-none outline-none focus:ring-0"
        />
        <button type="submit" className="font-semibold text-blue-400">
          Post
        </button>
      </form>

      <div className="hidden">
        <HeartFilledIcon />
        <BookmarkFilledIcon />
      </div>
    </div>
  )
}
