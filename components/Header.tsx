import {
  HeartIcon,
  MenuIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline'
import { HomeIcon } from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/router'

export function Header() {
  const { data: session } = useSession()
  const router = useRouter()

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-5 flex max-w-6xl justify-between lg:mx-auto">
        {/* Left - logo */}
        <div
          className="relative hidden w-24 cursor-pointer lg:inline-grid"
          onClick={() => router.push('/')}
        >
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative w-10 flex-shrink-0 cursor-pointer lg:hidden"
          onClick={() => router.push('/')}
        >
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Middle - search */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3">
            <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
              <SearchIcon className="h-5 w-5 cursor-pointer text-gray-500" />
            </div>
            <input
              type="search"
              placeholder="Search"
              className="block w-full rounded-md border-gray-300 bg-gray-50 pl-10 focus:border-black focus:ring-black sm:text-sm"
            />
          </div>
        </div>

        {/* Right - menu */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push('/')} />
          <MenuIcon className="h-6 cursor-pointer md:hidden" />

          {session ? (
            <>
              <div className="navBtn relative">
                <PaperAirplaneIcon className="navBtn" />
                <span className="absolute -top-3 -right-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  3
                </span>
              </div>
              <PlusCircleIcon className="navBtn" />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />

              <img
                src={session?.user?.image}
                alt="avatar"
                className="h-10 w-10 cursor-pointer rounded-full"
                onClick={() => signOut()}
              />
            </>
          ) : (
            <button className="text-sm font-semibold" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
