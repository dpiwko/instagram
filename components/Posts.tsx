import { Post } from './Post'

const MOCK_DATA = [
  {
    id: '123',
    username: '_piwkoo_',
    userImg: '/avatar.jpg',
    img: '/avatar.jpg',
    caption: 'This is a first post',
  },
  {
    id: '124',
    username: '_piwkoo_',
    userImg: '/avatar.jpg',
    img: '/avatar.jpg',
    caption: 'This is a second post',
  },
]
export function Posts() {
  return (
    <div>
      {MOCK_DATA?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}
