import Link from 'next/link'
import useSWR from 'swr'
import { fetcher } from '../../src/lib/fetcher'

export default function CoursesPage() {
  const { data } = useSWR('/api/courses', fetcher)
  const courses = data?.courses || []

  return (
    <div className='p-8'>
      <h2 className='text-2xl font-semibold mb-4'>Courses</h2>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2'>
        {courses.map(c => (
          <div key={c.id} className='p-4 border rounded'>
            <h3 className='font-bold'>{c.title}</h3>
            <p className='text-sm'>{c.shortDescription}</p>
            <Link href={`/courses/${c.id}`}><a className='text-blue-600 underline mt-2 inline-block'>Open</a></Link>
          </div>
        ))}
      </div>
    </div>
  )
}
