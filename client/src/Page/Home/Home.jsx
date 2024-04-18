import React from 'react'
import { toast } from '../../components/ui/use-toast'
import { Toaster } from '../../components/ui/toaster'
import { LoginButton, LogoutButton } from '../../components/Log(in-out)Button'
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Input } from '../../components/ui/input'
import { Search} from 'lucide-react'
import { ConclusionCards, DocsCard } from '../../components/Cards'
import { conclusion } from '../../lists/Data'
import Display from '../../components/Display'


function Home({contract ,account, setModalOpen}) {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (
    <div className='grid pl-64 py-4 w-[86vw] text-gray-5'>
      <div className='flex gap-2 px-2 rounded-full place-items-center w-96 bg-gray-5 text-gray-10'>
        <Search/>
        <Input type="text" placeholder="Search keyword" className="outline-0 border-none border active:border-none rounded-full "></Input>
      </div>
      <h1 className='font-bold text-xl py-4 tracking-wider'>DASHBOARD</h1>
      <div className='grid gap-4 grid-cols-3'>
          {conclusion.map((data)=>{
            return(
              <ConclusionCards
              {...data}
              />
            )
          })}
      </div>
      <h1 className='font-bold text-xl py-4 pt-6 tracking-wider'>Recently Viewed Documents</h1>
      <div className='grid gap-4 grid-cols-4'>
        {/* <DocsCard/>
        <DocsCard/>
        <DocsCard/>
        <DocsCard/> */}
        <Display contract={contract} account={account} setModalOpen={setModalOpen}/>

      </div>
      <h1 className='font-bold text-2xl py-4 pt-6 tracking-wider'>Activity</h1>
      <div>

      </div>
    </div>
  )
}

export default Home