import React from 'react'

const About = () => {
  return (
    <section id="About">
    {/* <div className="container text-center">
         <img src="./images/all.png" className="image-fluid" alt="/"/>
    </div> */}
<div class="container text-center">
        <div class="row">
            
            <div class="col-md-6 mt-5 py-5">
                <h2 class="font-monospace fw-semibold">We provide High Quality Hostel </h2>
                <p>We offers high quality hostels and rooms with facilities</p>
                <a href="/login" class="btn btn-info  fw-bold fs-5">Enroll now...</a>

            </div>
            <div class="col-md-6">
            <img src="https://imgs.search.brave.com/Zm3O95VQHa1co6T7jROOwFE71hcDwU2EvSaJqqDIALM/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/WFQ2dHl0dmdOaWpk/M01aWXQ4ODNRSGFE/dCZwaWQ9QXBp" alt=""/>
            </div>
        </div>
    </div>


    

<div class="container py-5">
        <h1 class="text-center">Want to Explore our Free Courses?</h1>
        <div class="row py-2">
            <div class="col-md-6 py-5">
                <h2 class=" text-center fst-italic ">Get Popular Courses</h2>
                <p class="fs-5">There are several elements on our website that help users feel more at ease when taking classes. 
                    This site offers courses that are well-liked by programmers and are in high demand, which is advantageous for the user. 
                    If a user has any questions, they can contact the advisers, who may help them to clear up their problems. 
                    The course material is written in a way that is simple for novices to comprehend and provides all information via the fundamentals of coding.</p>
                <a href="/courses" class="btn btn-danger ms-5  fw-bold fs-5">View Courses</a>



            </div>
            <div class="col-md-6 py-5">
                  <h1>Loading</h1>
            </div>
        </div>
    </div>


</section>
  )
}

export default About