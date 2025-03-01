// go to question page 
document.getElementById('clicTO-Q-page')
.addEventListener('click',function (event){
    event.preventDefault();
    window.location.assign("index2.html")
})


//  set current date 
 const newDate = document.getElementById('new-date')
 const update = new Date().toLocaleDateString()
 newDate.innerText=update

// click to submit task  1 
document.getElementById('card-btn-1')
 .addEventListener('click',function(event){
    event.preventDefault()
    alert('board Updated Succesflly')
    const fixMobiledata = document.getElementById("fix-mobile").innerText
    const div1 = document.createElement('div')
    const date = new Date()
    div1.innerHTML=`
    <p>you have complete the task <span class ="font-bold"> ${fixMobiledata}</span></p>
    <p>date: ${date}</p>
    `
    const historyDiv = document.getElementById('history-id')
    historyDiv.appendChild(div1);
    historyDiv.classList.add('bg-[#F4F7FF]')
    historyDiv.classList.add('rounded-xl')
    historyDiv.classList.add('items-center')
    historyDiv.classList.add('p-2')
    const task = document.getElementById('task').innerText
    const convertTask = parseInt(task)
    let button = 1 ;
    result = convertTask - button;
    document.getElementById('task').innerText =result
    this.setAttribute('disabled',true);
    document.getElementById('card-btn-1').style.backgroundColor ='gray'

    
   

   
 })


// click to submit task 2 
 document.getElementById('card-btn-2')
 .addEventListener('click',function(event){
    event.preventDefault()
    alert('board Updated Succesflly')
    const Dark = document.getElementById("Dark").innerText
    const div2 = document.createElement('div')
    const date = new Date()
    div2.innerHTML=`
    <p>you have complete the task<span class ="font-bold"> ${Dark}</span></p>
    <p>date: ${date}</p>
    `
    const historyDiv = document.getElementById('history-id')
    historyDiv.appendChild(div2);
    historyDiv.classList.add('bg-[#F4F7FF]')
    historyDiv.classList.add('rounded-xl')
    historyDiv.classList.add('items-center')
    historyDiv.classList.add('p-2')
    historyDiv.classList.add('mt-8')
    const task = document.getElementById('task').innerText
    const convertTask = parseInt(task)
    let button = 1 ;
    result = convertTask - button;
    document.getElementById('task').innerText =result
     this.setAttribute('disabled',true);
    document.getElementById('card-btn-2').style.backgroundColor ='gray'
   
 })

// click to submit task 3
 document.getElementById('card-btn-3')
 .addEventListener('click',function(event){
    event.preventDefault()
    alert('board Updated Succesflly')
    const Optimize = document.getElementById("Optimize").innerText
    const div3 = document.createElement('div')
    const date = new Date()
    div3.innerHTML=`
    <p>you have complete the task <span class ="font-bold"> ${Optimize}</span></p>
    <p>date: ${date}</p>
    `
    const historyDiv = document.getElementById('history-id')
    historyDiv.appendChild(div3);
    historyDiv.classList.add('bg-[#F4F7FF]')
    historyDiv.classList.add('rounded-xl')
    historyDiv.classList.add('items-center')
    historyDiv.classList.add('p-2')
    historyDiv.classList.add('mt-8')
    const task = document.getElementById('task').innerText
    const convertTask = parseInt(task)
    let button = 1 ;
    result = convertTask - button;
    document.getElementById('task').innerText =result
     this.setAttribute('disabled',true);
    document.getElementById('card-btn-3').style.backgroundColor ='gray'
   
 })
// click to submit task 4
 document.getElementById('card-btn-4')
 .addEventListener('click',function(event){
    event.preventDefault()
    alert('board Updated Succesflly')
    const Emoji = document.getElementById("Emoji").innerText
    const div4 = document.createElement('div')
    const date = new Date()
    div4.innerHTML=`
    <p>you have complete the task <span class ="font-bold"> ${Emoji}</span></p>
    <p>date: ${date}</p>
    `
    const historyDiv = document.getElementById('history-id')
    historyDiv.appendChild(div4);
    historyDiv.classList.add('bg-[#F4F7FF]')
    historyDiv.classList.add('rounded-xl')
    historyDiv.classList.add('items-center')
    historyDiv.classList.add('p-2')
    historyDiv.classList.add('mt-8')
    const task = document.getElementById('task').innerText
    const convertTask = parseInt(task)
    let button = 1 ;
    result = convertTask - button;
    document.getElementById('task').innerText =result
     this.setAttribute('disabled',true);
    document.getElementById('card-btn-4').style.backgroundColor ='gray'
   
 })

// click to submit task 5
 document.getElementById('card-btn-5')
 .addEventListener('click',function(event){
    event.preventDefault()
    alert('board Updated Succesflly')
    const Integrate = document.getElementById("Integrate").innerText
    const div5 = document.createElement('div')
    const date = new Date()
    div5.innerHTML=`
    <p>you have complete the task <span class ="font-bold"> ${Integrate}</span></p>
    <p>date: ${date}</p>
    `
    const historyDiv = document.getElementById('history-id')
    historyDiv.appendChild(div5);
    historyDiv.classList.add('bg-[#F4F7FF]')
    historyDiv.classList.add('rounded-xl')
    historyDiv.classList.add('items-center')
    historyDiv.classList.add('p-2')
    historyDiv.classList.add('mt-8')
    const task = document.getElementById('task').innerText
    const convertTask = parseInt(task)
    let button = 1 ;
    result = convertTask - button;
    document.getElementById('task').innerText =result
     this.setAttribute('disabled',true);
    document.getElementById('card-btn-5').style.backgroundColor ='gray'
   
    
 })
// click to submit task 6
 document.getElementById('card-btn-6')
 .addEventListener('click',function(event){
    event.preventDefault()
    alert('board Updated Succesflly')
    alert('congratulations ! you have completed all the current task');
    const Mobile = document.getElementById("Mobile").innerText
    const div6 = document.createElement('div')
    const date = new Date()
    div6.innerHTML=`
    <p>you have complete the task <span class ="font-bold"> ${Mobile}</span></p>
    <p>date: ${date}</p>
    `
    const historyDiv = document.getElementById('history-id')
    historyDiv.appendChild(div6);
    
    historyDiv.classList.add('bg-[#F4F7FF]')
    historyDiv.classList.add('rounded-xl')
    historyDiv.classList.add('items-center')
    historyDiv.classList.add('p-2')
    historyDiv.classList.add('mt-8')
    const task = document.getElementById('task').innerText
    const convertTask = parseInt(task)
    let button = 1 ;
    result = convertTask - button;
    document.getElementById('task').innerText =result
     this.setAttribute('disabled',true);
    document.getElementById('card-btn-6').style.backgroundColor ='gray'
   
    
 })


// history clear 

document.getElementById('clear-btn')
.addEventListener('click',function(event){
    event.preventDefault()
    document.getElementById('history-id').innerHTML= " "
})


// clik to button and change randomly background color

// function 
function getRandomColor() {
    let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "cyan",['red-']];
    return colors[Math.floor(Math.random() * colors.length)];
}

document.getElementById('theme-btn')
.addEventListener('click',function(event){
    event.preventDefault()
    document.body.style.backgroundColor = getRandomColor();

})





