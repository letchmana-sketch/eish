export async function fetcher(url){
  const r = await fetch(url)
  if(!r.ok) throw new Error('Fetch error')
  return r.json()
}
