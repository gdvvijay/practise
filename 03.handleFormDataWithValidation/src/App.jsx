import { Fragment, useState } from 'react'

function App() {
 const [data,setData]=useState({
  name:'',
  email:'',
  password:''
})
const [actualData,setActualData]=useState([])
const [error,setError]=useState({})


  const validation =(formData)=> {
    const regex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const errorMessage={}

    if(!formData.name || formData.name.length <= 5){
      errorMessage.name='name field should not be empty and length should be minimum 6 character'
    }
     if(!formData.email || !regex.test(formData.email)){
      errorMessage.email='email field not should be empty and not enter invalid email'
    }
    
    setError(errorMessage)

    return errorMessage
  }
 

 const handleSubmit=(e)=>{
  e.preventDefault()
   const errorData= validation(data)
  //  here we can not able to use state variable to check error by using error state if we do then first time it will not properly validate
    if(Object.entries(errorData).length > 0 ){ 
      return

    }else{
      setActualData((prev)=>[{...prev,...data,id:crypto.randomUUID()}])
    setData({
  name:'',
  email:'',
  password:''
})
    }

    
  }

  return (
    <>
      <form onSubmit={(e)=>handleSubmit(e)}>
      <label>Enter Name</label>
       <input type="text" value={data.name} onChange={(e)=>setData((prev)=>({...prev,name:e.target.value}))}/>
       <p style={{color:'red'}}>{error.name}</p>
       <label>Enter Email</label>
       <input type="email" value={data.email} onChange={(e)=>setData((prev)=>({...prev,email:e.target.value}))}/>
       <p style={{color:'red'}}>{error.email}</p>
       <label>password</label>
       <input type="password" value={data.password} onChange={(e)=>setData((prev)=>({...prev,password:e.target.value}))}/>
       <p></p>
       <button>Submit</button>
    </form>
    <div>
      {actualData.map((dataObj)=>{
        return(
          <Fragment key={dataObj.id}>
            <p >{dataObj.name}</p>
            <p >{dataObj.email}</p>
          </Fragment>
          
        )
      })}
    </div>
    </>
  )
}

export default App
