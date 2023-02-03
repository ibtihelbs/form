const mainSection = document.querySelector('.main');
const sidebarElements = document.querySelectorAll('li')
const htmlContent = [
    `<div class="title">
    <h1>Personal info</h1>
    <p>Please provide your name, email address, and phone number.</p>
    </div>
    <form>
    <div id="input">
    <div>
      <label for="Name">Name</label>
      <input id="name" type="text" placeholder="e.g. Stephen King" required>
    </div>
    <div>
      <label for="">Email Address</label>
      <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" required>
    </div>
    <div>
      <label for="">Phone Number</label>
      <input id="number" type="text" placeholder="e.g. +1 234 567 890" required>
    </div>
    </div>
    <button href="step2.html" type="submit">
    Next Step
    </button>
 
    </form>`,
    `<div class="title">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <div>
    <div id="plans-wrapper">
      <div id="plans">
        <div>
          <img src="./assets/images/icon-arcade.svg" alt="">
          <div>
             <h3>Arcade</h3>
             <p>$9/mo</p>
          </div>
        </div>
      <div>
          <img src="./assets/images/icon-advanced.svg" alt="">
          <div>
             <h3>Advanced</h3>
             <p>$12/mo</p>
          </div>
        </div>
      <div>
          <img src="./assets/images/icon-pro.svg" alt="">
          <div>
             <h3>Pro</h3>
             <p>$15/mo</p>
          </div>
        </div>
      </div>
      <div id="toggle">
        Monthly
        Yearly
      </div>
  </div>
  <div class="steps">
     <a href="index.html">Go Back</a>
     <button>
       Next Step
     </button>
  </div>
  </div>
`,
`<div class="title">
<h1>Pick add-ons</h1>
<p>
  Add-ons help enhance your gaming experience.
</p>
</div>
<form>
<div>
  <input type="checkbox">
  <div>
    <div>
      <h4>Online service</h4>
      <p>Access to multiplayer games</p>
    </div>
      <span>+$1/mo</span>
  </div>
</div>
<div>
  <input type="checkbox">
  <div>
    <div>
      <h4>Larger storage</h4>
      <p>Extra 1TB of cloud save</p>
    </div>
      <span>+$2/mo</span>
  </div>
</div>
<div>
  <input type="checkbox">
  <div>
    <div>
      <h4>Customizable Profile</h4>
      <p>Custom theme on your profile</p>
    </div>
      <span>+$2/mo</span>
  </div>
</div>
<div class="steps">
  <a href="step2.html">Go Back</a>
  <button id="checked">Next Step</button>
</div>
</form>`,
`<div class="title">
<h1>
 Finishing up
</h1>
<p>  
    Double-check everything looks OK before confirming.
</p>
</div>
<div>
<!-- Dynamically add subscription and add-on selections here -->

Total (per month/year)
<div>
 <div>
   <h5>aracade</h5>
   <span>$9/mo</span>
 </div>
 <div>
   <h5>online service</h5>
   <span>+ 1/mo</span>
 </div>
 <div>
   <h5>Larger storage</h5>
   <span>+2/mo</span>
 </div>
 <div>
   <h5>total (per month) </h5>
   <span>+$ 12/mo</span>
 </div>
</div>
<div class="steps">
 <a href="step3.html">Go Back</a>
 <button>Confirm</button>
</div>
</div>
</section>`
]

mainSection.innerHTML = htmlContent[0]

const input = document.querySelectorAll('#input input')

let summary = {
    username : '',
    useremail : '',
    usernumber : '',
    addOns: [{}]
}
//Selectors 
const username = document.getElementById('name').value;
const useremail = document.getElementById('email').value;
const usernumber = document.getElementById('number').value;

/***add summary to object */

input.forEach((v,i)=>{
  
   v.addEventListener('change', (e)=>{
      e.preventDefault();
      
      const id = e.target.id;
      const value = e.target.value;
      summary["user"+id]= value;
      
   })
   
}) 



function addPlans(){
    const plans = document.querySelectorAll("#plans div") 
        plans.forEach((p)=>{
            p.addEventListener('click', (f)=>{
                f.preventDefault();
                console.log(f.target.querySelector('h3')?.innerHTML)
                summary.plan = f.target.querySelector('h3')?.innerHTML;
                
            })
       console.log(summary)
      })
}



//console.log(sidebarElements)

sidebarElements.forEach((v, i)=>{
    v.addEventListener('click', (e)=>{
        e.preventDefault();
        mainSection.innerHTML= htmlContent[i]
        addPlans();
        const checkedEl = document.querySelectorAll('input[type="checkbox"]')
        const checkedBtn = document.getElementById('checked')
        checkedBtn?.addEventListener('click', (l)=>{
            l.preventDefault();
            checkedEl.forEach((vl,i)=>{
                console.log(vl.checked, vl.nextElementSibling.querySelector('span').innerHTML)
                summary.addOns[i] = i
                /** {...addOns,
                   {
                    type: vl.nextElementSibling.querySelector('h4').innerHTML,
                    price: vl.nextElementSibling.querySelector('span').innerHTML
                   }
                } */
            })
           
        })
        
        console.log(summary)
        
    })
    
})

//console.log(summary, input)