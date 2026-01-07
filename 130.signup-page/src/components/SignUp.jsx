export default function SignUp(){
    return(
        <div className="w-full max-w-6xl flex flex-col">
            <h1 className="self-center font-['Montserrat'] font-semibold text-5xl text-[#13AA52] mt-10">Comroots</h1>
            <h3 className="self-center font-['Montserrat'] font-medium text-2xl my-5">Find better ECAs</h3>
          <div className="main-box w-full bg-[#FFFFFF] max-w-xl self-center flex flex-col  p-10 rounded-xl space-y-5 shadow">
                <form className=" w-full flex flex-col space-y-5">
                <input type='email' placeholder="Enter Address" className="border border-[#D2D2D2] rounded w-full text-xl placeholder:text-lg py-2 placeholder:font-['Montserrat'] pl-5"/>
                <input type='password' placeholder="New Password" className="border border-[#D2D2D2] rounded w-full text-xl placeholder:text-lg py-2 placeholder:font-['Montserrat'] pl-5"/>
                <input type='password' placeholder="Confirm Password" className="border border-[#D2D2D2] rounded w-full text-xl placeholder:text-lg py-2 placeholder:font-['Montserrat'] pl-5"/>
                <p className="self-center px-3.5 font-['Montserrat']">By clicking Agree & Join, you agree to the Placeholder <span className="text-[#16C172]">User Agreement</span>, <span className="text-[#16C172]">Privacy Policy</span>, and <span className="text-[#16C172]">Cookie Policy</span>.</p>
                <button className="self-center w-full max-w-80 bg-[#16C172] rounded-full h-16 text-2xl font-bold text-white">Agree & Join</button>
                <div className="flex items-center"><hr className='border-[#0000002a] ml-7 border-b w-full'/><h3 className="px-5 font-semibold">or</h3><hr className='border-[#0000002a] mr-7 border-b w-full'/></div>
            </form>
                <button className="self-center w-full max-w-80 rounded-full flex h-16 justify-center border-[#16C172] border-2"><img src="../src/assets/GoogleIcon.png" className="w-full max-w-8 max-h-8 h-full self-center"/><span className="self-center text-2xl text-[#16C172] font-semibold ml-2.5">Join with Google</span></button>
                <h2 className="self-center font-['Montserrat'] font-medium">Already on Placeholder? <span className="text-[#16C172] font-medium">Sign In</span></h2>
          </div>
        </div>
    )
}