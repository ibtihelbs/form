let summary = {
    username : '',
    useremail : '',
    usernumber : '',
    plan : [],
    addOns: [], 
    total:0,
  }
const sideBar = `
<section id="sidebar">
    <ul>
      <li>
         <a href="#">
            <p>Step 1</p>  
            <h4>Your info</h4>
          </a>
      </li>
      <li>
         <a href="#">
          <p>Step 2</p>  
          <h4>Select plan</h4>
         </a> 
      </li>
      <li>
         <a href="#">
          <p>Step 3</p>  
          <h4>Add-ons</h4>
         </a> 
      </li>
      <li>
        <a href="#">
          <p>Step 4</p>  
          <h4>Summary</h4>
        </a>  
      </li>
    </ul>
    
   </section>`;
const mainTag = document.querySelector('main')
const htmlContent = [
    `
    <div class="title">
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
 <button type="submit">
    Next Step
 </button>
 </form>
 `
 ,
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
     <a href="#" class="previous">Go Back</a>
     <button id="plan-btn">
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
<form id="addOns-form">
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
  <a href="#" class="previous">Go Back</a>
  <button id="checked" type="submit">Next Step</button>
</div>
</form>`]
mainTag.insertAdjacentHTML('afterbegin', sideBar)
const mainSection = document.querySelector('.main')
mainSection.innerHTML= htmlContent[0];
let currentPage = 0;

const form = document.querySelector('form');
const button = document.querySelector('button');
//Selectors 
const prevFn = ()=>{
  const prvBtn = document.querySelector('.previous');
  prvBtn.addEventListener("click",(btn)=>{
       btn.preventDefault();
       currentPage = currentPage - 1;
       mainSection.innerHTML= htmlContent[currentPage];
  })
}
function thankYou(username, useremail, usernumber){
  const tkMsg = `
  <div class='center-thnx'>
  <img src="./assets/images/icon-thank-you.svg" alt="thank-you" id="thanks">
  <h1>
    Thank you! <mark> ${username}</mark>
  </h1>

  <p>
    Thanks for confirming your subscription!
    using email address <mark> ${useremail}</mark>and phone number <mark>${usernumber}</mark>
     We hope you have fun 
using our platform. If you ever need support, please feel free 
to email us at support@loremgaming.com.
  </p>
  </div>
  `;
  mainSection.setAttribute('id','thank-you')
  const confirmBtn = document.getElementById('confirm');
  confirmBtn.addEventListener('click', (e)=>{
       e.preventDefault();
       mainSection.innerHTML= tkMsg;
  })
}
const summaryPage = (t)=>{
    const {username, useremail, usernumber, plan, addOns, total} = t
    const html= `<div class="title">
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
       <h5>
        ${plan[0].name}
      </h5>
       <span>${plan[0].price}</span>
     </div>
     <div>
       ${addOns ? addOns.map((f)=>{
        return `<h5>${f.type}</h5>
                <span>${f.price}</span>`
       }) : '<h2>no plan</h2>'}
     </div>
     
     <div>
       <h5>total (per month) </h5>
       <span>+$ ${total}/mo</span>
     </div>
    </div>
    <div class="steps">
     <a href="#" class="previous">Go Back</a>
     <button id="confirm">Confirm</button>
    </div>
    </div>
    </section>`
    mainSection.innerHTML= html;
    thankYou(username, useremail, usernumber)
}
const addOnsFn = ()=>{
   const addOnsBtn = document.querySelector('#addOns-form')
   console.log(addOnsBtn)
   addOnsBtn.addEventListener('submit',(f)=>{
     f.preventDefault();
     const checkedEl = document.querySelectorAll('input[type="checkbox"]')
     checkedEl.forEach((vl,i)=>{
        console.log(vl.checked, vl.nextElementSibling.querySelector('span').innerHTML, i)
        if (vl.checked){
        summary.addOns.push({
          type: vl.nextElementSibling.querySelector('h4').innerHTML,
          price: vl.nextElementSibling.querySelector('span').innerHTML,
         })
         summary.total = summary.total + parseInt(vl.nextElementSibling.querySelector('span').innerHTML.match(/(\d+)/));
        }
    }) 
    summaryPage(summary)
   })
   
}
const nextPage = ()=>{
    let btnPlans = document.getElementById('plan-btn')
    mainSection.setAttribute('id','add-ons')
    btnPlans.addEventListener('click', (e)=>{
        e.preventDefault();
        currentPage = currentPage + 1;
        mainSection.innerHTML= htmlContent[currentPage];
        addOnsFn();
    })
}
const input = document.querySelectorAll('#input input');
function addPlans(){
    const plans = document.querySelectorAll("#plans div") 
    console.log("plans are",plans)
        plans.forEach((p)=>{
            p.addEventListener('click', (f)=>{
                f.preventDefault();
                summary.plan.push({
                  name: f.target.querySelector('h3')?.innerHTML,
                  price: f.target.querySelector('p')?.innerHTML,
                })
                summary.total = parseInt(f.target.querySelector('p')?.innerHTML.match(/(\d+)/));
            })
       console.log(summary)
      })
      nextPage();
      prevFn()
}
form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const username = document.getElementById('name').value;
      const useremail = document.getElementById('email').value;
      const usernumber = document.getElementById('number').value;
      summary.username = username;
      summary.useremail = useremail;
      summary.usernumber = usernumber;
      
      currentPage = currentPage + 1;
      mainSection.innerHTML= htmlContent[currentPage];
      addPlans();
})






