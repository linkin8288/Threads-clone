import { UserButton } from "@clerk/nextjs"

export default function Home() {
  return (
    <>
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
      <h1 className='head-text text-left'>Home</h1>

      <section className='mt-9 flex flex-col gap-10'>
        <p className='no-result'>No threads found</p>
      </section>
    </>
  )
}
