

document.getElementById('btn-donate').addEventListener('click',function(){

    
    const addmoney=getInputFieldValueById('input-donate-amount')
    const avaliableBalance=getTextFieldValueById('total-donate');
    const newBalance=avaliableBalance + addmoney;
    const totalDonate=document.getElementById('total-donate')
    totalDonate.innerText=newBalance;

    //minus main balance
    const mainBalance=getTextFieldValueById('main-balance')
    const totalMainBalance=mainBalance - addmoney;
   const newTotalMainBalance=document.getElementById('main-balance')
   newTotalMainBalance.innerText=`${totalMainBalance} BDT`
    console.log(mainBalance)

    
    if(addmoney >= 0 ){
       const modal=document.getElementById('my_modal_1')
       modal.showModal()
      }else{
       alert('invalid input')
      
    }


})

//secend card 2 **********
document.getElementById('btn-donate-secend').addEventListener('click',function(){
   console.log('clicked secend btn')
   const addmoney=getInputFieldValueById('secend-input-amount')
    const avaliableBalance=getTextFieldValueById('secend-total-donate');
    const newBalance=avaliableBalance + addmoney;
    const totalDonate=document.getElementById('secend-total-donate')
    totalDonate.innerText=newBalance;

    //minus main balance
    const mainBalance=getTextFieldValueById('main-balance')
    const totalMainBalance=mainBalance - addmoney;
   const newTotalMainBalance=document.getElementById('main-balance')
   newTotalMainBalance.innerText=`${totalMainBalance} BDT`
    console.log(mainBalance)

    if(addmoney >= 0 ){
      const modal=document.getElementById('my_modal_1')
      modal.showModal()
     }else{
      alert('invalid input')
     
   }

   const donatetitles=document.getElementById('secend-donate-title').innerText
const historyInput=getInputFieldValueById('secend-input-amount')
   const historyItem= document.createElement('div')
        historyItem.className="bg-gray-200 p-3 rounded-2xl mb-3 border-1-2 border-indigo-500";
        historyItem.innerHTML=`
        <p class="text-2xl ">${historyInput} Take is ${donatetitles}</p>
        <p class="text-xl">${new Date().toDateString()}</p>
        `
        const historyContainer=document.getElementById('history-list')
        historyContainer.insertBefore(historyItem,historyContainer.firstChild)

   
})

//third card
document.getElementById('btn-donate-third').addEventListener('click',function(){
   console.log('clicked third btn')
   const addmoney=getInputFieldValueById('third-input-amount')
    const avaliableBalance=getTextFieldValueById('third-total-donate');
    const newBalance=avaliableBalance + addmoney;
    const totalDonate=document.getElementById('third-total-donate')
    totalDonate.innerText=newBalance;

    //minus main balance
    const mainBalance=getTextFieldValueById('main-balance')
    const totalMainBalance=mainBalance - addmoney;
   const newTotalMainBalance=document.getElementById('main-balance')
   newTotalMainBalance.innerText=`${totalMainBalance} BDT`
    console.log(mainBalance)

    if(addmoney >= 0 ){
      const modal=document.getElementById('my_modal_1')
      modal.showModal()
     }else{
      alert('invalid input')
     
   }
})




//history tab function
const historyTab = document.getElementById('history-tab')
historyTab.addEventListener('click',function(){
    console.log('clicked history tab')
     historyTab.classList.add(
        "rounded-xl", "bg-[#B4F461]", "py-2,", "px-6"
     )
     const donatioTab =document.getElementById('donation-tab')
     donatioTab.classList.remove(
        "rounded-xl", "bg-[#B4F461]", "py-2,", "px-6"
     )
     document.getElementById('donate').classList.add('hidden')
     document.getElementById('history-list').classList.remove('hidden')

     //history item
     const addmoney=getInputFieldValueById('input-donate-amount')
     const donatetitle=document.getElementById('donate-title').innerText
     
     const historyItem= document.createElement('div')
        historyItem.className="bg-gray-200 p-3 rounded-2xl mb-3 border-1-2 border-indigo-500";
        historyItem.innerHTML=`
        <p class="text-2xl ">${addmoney} Take is ${donatetitle}</p>
        <p class="text-xl">${new Date().toDateString()}</p>
        `
        const historyContainer=document.getElementById('history-list')
        historyContainer.insertBefore(historyItem,historyContainer.firstChild)
})

//donate tab function
const donateTab = document.getElementById('donation-tab')
donateTab.addEventListener('click',function(){
    donateTab.classList.add(
        "rounded-xl", "bg-[#B4F461]", "py-2,", "px-6"
     )
     const historyTab =document.getElementById('history-tab')
     historyTab.classList.remove(
        "rounded-xl", "bg-[#B4F461]", "py-2,", "px-6"
     )
     document.getElementById('history-list').classList.add('hidden')
     document.getElementById('donate').classList.remove('hidden')


})
