import { getProviders, signIn } from 'next-auth/react'
import { Header } from '../components/Header'

interface ILoginProvider {
  id: string
  name: string
}

export default function Login({ providers }: { providers: ILoginProvider }) {
  return (
    <>
      <Header />

      <div className="-mt-56 flex h-screen flex-col items-center justify-center py-2 px-14 text-center">
        <img
          src="https://links.papareact.com/ocw"
          alt="Instagram"
          className="w-80"
        />

        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-lg bg-blue-500 p-3 text-white"
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
