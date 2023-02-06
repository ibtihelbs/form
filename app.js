let summary ={
    username: '',
    useremail: '',
    userphone: '',
    plan:{
        price:0,
        type:null,
    },
    addOns:[]
}
const htmlContent = [
    ` <div class="title">
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
      <label for="email">Email Address</label>
      <input id="email" type="email" placeholder="e.g. stephenking@lorem.com" required>
    </div>
    <div>
      <label for="number">Phone Number</label>
      <input id="number" type="text" placeholder="e.g. +1 234 567 890" required>
    </div>
  </div>
  <button type="submit">
    Next Step
  </button>
 </form>`
    ,
    ` <div class="title">
    <h1>Select your plan</h1>
    <p>You have the option of monthly or yearly billing.</p>
  </div>
  <div>
    <div id="plans-wrapper">
      <div id="plans">
        <div class="plan-info">
          <img src="./assets/images/icon-arcade.svg" alt="">
          <div>
             <h3>Arcade</h3>
             <p>$9/mo</p>
          </div>
        </div>
      <div class="plan-info">
          <img src="./assets/images/icon-advanced.svg" alt="">
          <div>
             <h3>Advanced</h3>
             <p>$12/mo</p>
          </div>
        </div>
      <div class="plan-info">
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
  </div>`,
  ` <div class="title">
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
    <a href="#">Go Back</a>
    <button type="submit">Next Step</button>
  </div>
</form>`
]
const main = document.querySelector('.main');
main.innerHTML = htmlContent[0];
/* selectors */

const email = document.getElementById('email');
const nameId = document.getElementById('name');
const number = document.getElementById('number');
const form = document.querySelector('form');
 function summaryFn(summary){
    const htmlContentsm = `<div class="title">
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
        ${summary.plan.type}
      </h5>
       <span>${summary.plan.price}</span>
     </div>
     <div>
       ${summary.addOns ? summary.addOns.map((f)=>{
        return `<h5>${f.type}</h5>
                <span>${f.price}</span>`
       }) : '<h2>no plan</h2>'}
     </div>
     
     <div>
       <h5>total (per month) </h5>
       <span>+$ /mo</span>
     </div>
    </div>
    <div class="steps">
     <a href="#" class="previous">Go Back</a>
     <button id="confirm">Confirm</button>
    </div>
    </div>
    </section>`
    main.innerHTML = htmlContentsm;
 }
 function addOnsFn (){
    main.setAttribute('id','add-ons');
           const checkbox = document.querySelectorAll('input[type="checkbox"]')
           const addOnsBtn = document.querySelector('#addOns-form')
           console.log(addOnsBtn)
           addOnsBtn.addEventListener('submit', function(ll){
            ll.preventDefault();
            checkbox.forEach(function(vl){
                if(vl.checked == true){
                  const typeAdd = vl.nextElementSibling.querySelector('h4').innerHTML;
                  const priceAdd = vl.nextElementSibling.querySelector('span').innerHTML;
                  summary.addOns.push({
                      price: priceAdd,
                      type: typeAdd,
                  })
              }
             })
             console.log(summary)
             summaryFn(summary)
           })
 }
 function addPlanFn (){
    const plans = document.querySelectorAll('.plan-info');
    plans.forEach(function(v){
       v.addEventListener('click',function(event){
           event.preventDefault();
           const html = event.target;
           const price = html.querySelector('p').innerHTML;
           const type = html.querySelector('h3').innerHTML;
           summary.plan.price = price;
           summary.plan.type = type;
       })
       const btn = document.querySelector('button');
       btn.addEventListener('click', function(el){
           el.preventDefault();
           main.innerHTML= htmlContent[2];
           addOnsFn();
        })
    })
 }
 form.addEventListener('submit',function(e){
    e.preventDefault();
    summary.username = nameId.value;
    summary.useremail = email.value;
    summary.userphone = number.value;
    console.log(summary)
    main.innerHTML=htmlContent[1];
    addPlanFn();
 })
