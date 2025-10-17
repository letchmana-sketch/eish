import { useAuth } from '../src/lib/firebase'
export default function Dashboard(){
  const { user } = useAuth()
  return (
    <div className='p-8'>
      <h2 className='text-2xl font-semibold'>Dashboard</h2>
      {user ? <p>Welcome back, {user.email}</p> : <p>Please sign in.</p>}
    </div>
  )
}
