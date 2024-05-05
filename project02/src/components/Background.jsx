import {useState} from 'react'
import './background.css'
function Background() {
    const [background, setBackground] = useState('olive')                          
  return (
    <>
        <div className="w-full h-screen duration-200 " style={{backgroundColor:background}}>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
                <div className="flex flex-wrap justify-center gap-3 bg-white rounded-xl py-2 px-3">
                    <button onClick={()=>setBackground('black')} className='bg-black text-white rounded-xl py-1 px-4'>Black</button>
                    <button  onClick={()=>setBackground('red')} className="bg-red-400 text-white rounded-xl py-1 px-4">Red</button>
                    <button  onClick={()=>setBackground('green')} className="bg-green-500 text-white rounded-xl py-1 px-4">Green</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Background