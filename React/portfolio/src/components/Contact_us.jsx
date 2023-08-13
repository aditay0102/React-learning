import React from 'react'

function Contact_us() {
  return (
    <div className='contact_us'>
           <div className='feedback'>
            <h1>Give Feedback</h1>

                <div class="mb-3 feed">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3 feed">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>

                <button className='btn' >Submit</button>

            </div>


            <div className='tags'>
                <div className='tagNames'>COMPNAY</div>
                <div className='tagNames'>PROJECTS</div>
                <div className='tagNames'>USEFUL lINKS</div>
                <div className='tagNames'>CONTACT</div>
            </div>

            <div className='extras'>
                <div className='extra'>
                    Email: www.democompanyemai@gamil.
                    <br></br>
                    Phone no: 999XXXXX999
                </div>  
            <div className='extra'>
                <ul>
                <li>Project1</li>
                <li>Project2</li>
                <li>Project3</li>

                </ul>
            </div>
            <div className='extra'>
                Contribute
            </div>
            <div className='extra'>
            <ul>
                <li></li>
                <li>Project2</li>
                <li>Project3</li>
          
                </ul>  
            </div>
        </div>

 
  </div>
  )
}

export default Contact_us