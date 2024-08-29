import { useState } from 'react'
import narutoImage from './assets/Qrcode/naruto.jpeg';


function App() {


  function generateQR(){

     var url = `https://quickchart.io/qr?text=${encodeURIComponent(qrData)}&size=200`;
    setIMG(url);
    console.log(url) 
    
  }
  
  const[img,setIMG] = useState(narutoImage);
  const[qrData,setqrData] = useState()
  return (
   <div id='container' className=' items-center flex justify-center flex-col'>
     <h1 className='text-blue-400'>QR CODE GENARATER</h1>
     <img src={img} alt="" 
     className='w-28'
     />
    <div  className=''>
      <label htmlFor="qr" 
      className='text-blue-400 block-flex'>DATA FOR SEARCH</label>
      <input type="text" name="qr" id="" placeholder='Enter The Data For QR Code'  
      onChange={(e)=>{setqrData(e.target.value)} }
      className="border-2 border-blue-500 outline-blue-600 inline-block w-full p-1 mt-2" />
      <label htmlFor="size" 
      className='text-blue-400 block flex mt-5'>IMG SIZE</label>
      <input type="text" name="size" id="" placeholder='Enter IMG Size'
       className="border-2 border-blue-500 outline-blue-600 w-full	p-1 mt-2"/>
      <button
       className='  p-2 bg-blue-300  text-white mt-4'
       onClick={()=>{generateQR()}}
       >Generate QR
       </button>
      <button 
      className='p-2 bg-green-700 mt-4 text-white ml-8'>Donload QR
      </button>
      <p 
      className='mt-5 text-center'>Design by <span className='text-blue-400 text-sm'>PRAKASH RAMACHANDRAN</span></p>
    </div>
   </div>
  )
}

export default App
