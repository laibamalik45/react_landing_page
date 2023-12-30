import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'

const Component1 = ()=>{
   return <>

  <div style={{ display:"flex", justifyContent:"space-around",alignItems:"center", height:"60px"}  }> 
    <h1>LOGO </h1>
   <button className="butt">signup </button>
  </div>
   </>
}

const Component2 = ()=>{
    return<>
  <div className='image'>
  <div style={{paddingTop:"10%" ,marginBottom:"10%", color:"white"}} >
        <h1>Generate more lead with a professional <br /> landing page</h1>
        <div>
            <input  className='input' placeholder='Email Address' type="text" />
            <button className="butt">Submit</button>
        </div>
       </div>
  </div>
       
    </>
}

const Component3 = ()=>{
    return<>
           <div className='body'>
       <div>
        <h2>Fully Responsive</h2>
        <p>This theme will look great on any way <br /> devise no matter this size!</p>
     
       </div>

       <div>
        <h2>Bootstrap 5 Ready</h2>
        <p>This theme will look great on any way <br /> devise no matter this size!</p>
     
       </div>

       <div>
        <h2>Easy to Use</h2>
        <p>This theme will look great on any way <br /> devise no matter this size!</p>
     
       </div>

        </div>
    </>
}



const Component4 = ()=>{
    return<>

       <div style={{display:"flex"}} >
           
       <div style={{width:"50%",textAlign:"center", }}>
        <div style={{paddingTop:"200px"}}>
        <h2>Easy to Use</h2>
        <p>This theme will look great on any way <br /> devise no matter this size!</p>
     
        </div>
       </div>

           <div style={{width:"50%"}}>
               <img  height={500} width={700} src={img3} alt="" />
           </div>
       </div>
    </>
}



const Component5 = ()=>{
    return<>
        <div style={{display:"flex"}} >

           <div style={{width:"50%",textAlign:"center", }}>
            <div style={{paddingTop:"200px"}}>
            <h2>Easy to Use</h2>
            <p>This theme will look great on any way <br /> devise no matter this size!</p>
         
            </div>
           </div>

           <div style={{width:"50%"}}>
                   <img  height={500} width={700} src={img3} alt="" />
               </div>
               
           </div>
    </>
}



const Component6 = ()=>{
    return<>
       <div>
           <div style={{textAlign:"center", padding:"30px"}} >
               <h1>What people are saying </h1>
           </div>

           <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"40px"}} >
                <div >
                     <img className='pic' src={img5} alt="" />
                </div>
                <div>
                    <img className='pic' src={img6} alt="" />
                </div>
                <div>
                    <img className='pic' src={img7} alt="" />
                </div>
           </div>
       </div>

    </>
}


const Component7 = ()=>{

    return<>
    <div style={{marginTop:"30px"}} className='image'>
    <div style={{paddingTop:"10%" ,marginBottom:"10%", color:"white"}} >
          <h1>Generate more lead with a professional <br /> landing page</h1>
          <div>
              <input  className='input' placeholder='Email Address' type="text" />
              <button className="butt">Submit</button>
          </div>
         </div>
    </div>
         
      </>
}
export{Component1,Component2,Component3,Component4,Component5,Component6,Component7}