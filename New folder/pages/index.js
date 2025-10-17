import Link from 'next/link'
import { useAuth } from '../src/lib/firebase'

export default function Home() {
  const { user } = useAuth()
  return (
    <div className='min-h-screen p-8'>
      <header className='flex items-center justify-between'>
        <h1 className='text-3xl font-bold'>Teaching & Learning Platform</h1>
        <nav>
          <Link href='/courses'><a className='mr-4'>Courses</a></Link>
          <Link href='/dashboard'><a>Dashboard</a></Link>
        </nav>
      </header>

      <main className='mt-12'>
        <p className='mb-6'>A starter scaffold (Next.js + Firebase + Tailwind). Use this to build the core features listed in the project brief.</p>

        {user ? (
          <div>
            <p>Signed in as <strong>{user.email}</strong></p>
            <Link href='/dashboard'><a className='underline'>Go to dashboard</a></Link>
          </div>
        ) : (
          <div>
            <Link href='/auth/login'><a className='px-4 py-2 rounded bg-blue-600 text-white'>Sign in / Sign up</a></Link>
          </div>
        )}
      </main>
    </div>
  )
}
