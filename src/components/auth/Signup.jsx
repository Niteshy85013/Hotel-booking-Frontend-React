import React from 'react'

const Register = () => {
  return (
    <>

    <section id="register-form">
        
        <div class="container shadow-lg p-3 mt-5 py-5 rounded text-center ">
           <div class="row ">
                <h1 class="text-center">Register Now.</h1>
               <div class="col-md-6 mt-5">
                  
                   <div class="card   mt-3">
                       <div class="card-body homeit">
                            
                           <form action="/register" method="POST"autocomplete="off">
      
                           <div class="form-floating">
                               <input type="text" class="form-control" name="fullname"   placeholder="Full Name"
                                    required/>
                               <label for="floatingInputGroup1">Fullname</label>
                           </div>

                           <div class="form-floating mt-3">
                               <input type="text" class="form-control" name="username"   placeholder="UserName"
                                    required/>
                               <label for="floatingInputGroup1">Username</label>
                           </div>
      
                           <div class="form-floating mt-3">
                               <input type="email" class="form-control" name="email" placeholder="Email" required/>
                               <label for="floatingInputGroup1">Email</label>
                           </div>

                           <div class="form-floating mt-3">
                               <input type="text" class="form-control" name="address" placeholder="Address" required/>
                               <label for="floatingInputGroup1">Address</label>
                           </div>

                          
                           <div class="form-floating mt-3">
                               <input type="password" class="form-control" name='password' placeholder='Password'/>
                               <label  for="floatingInputGroup1">Password</label>
                            </div>
                           <button type="submit" class="btn btn-warning fw-bold fs-5 text-center mt-4 ">Sign Up</button>
                           <a href="/login" class="btn btn-info ms-4  mt-4 fw-bold fs-5 " type="submit">Login</a>
                           </form>
      
                       </div>
      
                   </div>
                   </div>
      
                   <div class="col-md-6 mt-3">
                       <img src="https://imgs.search.brave.com/qlOYpdmN9oNtMNga2yyeRbD0DpA3xmptSTHc2cG1MlQ/rs:fit:474:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/czJ2Q0VpZXN6VTdR/UXFzTENobDZBSGFI/YSZwaWQ9QXBp" alt="" class="mt-5 img-fluid"   />
                   </div>
               </div>
           </div>
      
      </section>
        </>
  )
}

export default Register