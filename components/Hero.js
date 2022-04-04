import Image from 'next/image'
import Link from 'next/link'
const Hero = ()=>{
    return(
      <div className=" text-center md:items-center overflow-x-hidden bg-no-repeat py-9 mb-50 bg-center bg-cover c bg-w bg-[url('/img/cow-1.jpg')] p-10">
         
              <h1 className="text-[50px]  font-bold text-white  md:text-center font-BebasNeue  "><span className=" font-bold text-[70] text-red-600 ">Welcome</span> to the Farm </h1>
              <h6 className="font-serif text-white " >The chicken (Gallus domesticus) is a domesticated bird, 
              <br></br>with attributes of wild species such<br></br>
                as the red and grey junglefowl[1] that are originally from Southeastern Asia.<br></br> 
                Rooster or cock is a term for an adult male bird, <br></br>
              </h6>
              <button className="w-20 h-5 text-white bg-red-600 rounded " type="submit" >Order</button>
       
    
    </div>
 
    )
}

export default Hero