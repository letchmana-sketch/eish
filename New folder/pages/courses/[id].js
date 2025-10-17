import { useRouter } from 'next/router'

export default function CourseDetail() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div className='p-8'>
      <h2 className='text-2xl font-semibold'>Course {id}</h2>
      <p className='mt-4'>Course detail, lessons, resources, and assessments will appear here.</p>
    </div>
  )
}
