import Image from "next/dist/client/image"
const Product = ()=>{
    return(
        <div className="w-full overflow-x-hidden ">
        <h1 className="font-bold text-center " > Product Section </h1>
        <h6  className="p-5 font-bold text-center " > We have the best of the best </h6>
        <div className="flex justify-around p-10 mx-1 rounded shadow-2xl ">
          <div className="p-10 rounded shadow-2xl " > <Image src="/img/chicken-3.png" width="100%" height="100%" /> 
          <button className="text-white lowercase bg-red-600 " ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></button>
          </div >
          <div className="p-10 rounded shadow-2xl " > <Image src="/img/chicken-3.png" width="100%" height="100%"  /> 
          <button className="text-white lowercase bg-red-600 " ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></button>
          </div>
          <div className="p-10 rounded shadow-2xl" > <Image src="/img/chicken-3.png" width="100%" height="100%" /> 
          <button className="text-white lowercase bg-red-600 " ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></button>
          </div>
          <div className="p-10 mx-1 rounded shadow-2xl " > <Image src="/img/chicken-3.png" width="100%" height="100%" /> 
          <div className="flex mx-4" >
          <button className="mx-1 text-white lowercase bg-red-600 " ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" /></svg></button>
          <button className="text-white lowercase bg-red-600 " ><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg></button>
          </div>
          </div>
    
        </div>
    
      </div>

    )
}
export default Product