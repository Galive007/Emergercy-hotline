// functions
function getElement(id) {
    const element = document.getElementById(id)
    return element;
}
function getElementInnerText(id) {
    const element = document.getElementById(id).innerText;
    return element;
}

getElement('service-box').addEventListener('click', function (e) {
    // heart counting functionality
    if (e.target.id.includes('heart')) {
        const currentHeart = getElement('heart-count').innerText
        const clickCountHeart = Number(currentHeart) + 1;
        getElement('heart-count').innerText = clickCountHeart;
        // console.log(currentHeart);

    }
    // call functionality
    if (e.target.className.includes('call-btn')) {
        const callBtn = e.target;
        // console.log(callBtn);
        // alert 2 things
        const serviceName = callBtn.parentNode.parentNode.childNodes[3].innerText;
        const callNumber = callBtn.parentNode.parentNode.childNodes[7].childNodes[1].innerText
        const onCall = alert(`Service Name: ${serviceName} \nNumber: ${callNumber}`)
        const callRate = 20;
        const coin = Number(getElement('current-coin').innerText)
        if (coin > 0) {
            const currentCoin = Number(coin) - callRate;
            getElement('current-coin').innerText = currentCoin
            // call history functionality
            const date = new Date().toLocaleTimeString();
            const callHistory = getElement('call-history')
            const newDiv = document.createElement('div')
            newDiv.innerHTML = `
                            <div class="bg-[#FAFAFA] mt-3 rounded-xl p-4 flex justify-between items-center">
                        <div class="w-3/4">
                            <h1 class="text-[#111] font-semibold text-[18px]">${serviceName}</h1>
                            <p class="text-[#5c5c5cc7] font-semibold">${callNumber}</p>
                        </div>
                        <h1 class="text-[18px]">${date}</h1>
                    </div>
        `;
            callHistory.append(newDiv)
        } else {
            alert(`${coin} - Your Don't Have Enough Coin.It costs 20 coins to call.`)
        }
        // console.log(currentCoin)
    }
    if(e.target.className.includes('copy-btn')){
        const copyBtn=e.target
        let currentCopy=getElement('copy').innerText
        const clickCopyBtn=Number(currentCopy)+1
        // console.log(clickCopyBtn);
        getElement('copy').innerText=clickCopyBtn
                
    }
})
// click clear button than clear all call history
document.getElementById('clear-btn').addEventListener('click', function () {
    const callHistory = getElement('call-history')
    callHistory.innerText = ''
})
/*
<div class="bg-[#FAFAFA] rounded-xl p-4 flex justify-between items-center">
                        <div class="">
                            <h1 class="text-[#111] font-semibold text-[18px]">Fire Service Number</h1>
                            <p class="text-[#5c5c5cc7]">999</p>
                        </div>
                        <h1 class="text-[18px]">11:36:58 AM</h1>
                    </div>


                    <div class="bg-[#FAFAFA] rounded-xl p-4 flex justify-between items-center">
                        <div class="w-3/4 border-2 border-red-300">
                            <h1 class="text-[#111] font-semibold text-[16px]">Fire Service Number</h1>
                            <p class="text-[#5c5c5cc7] font-semibold">999</p>
                        </div>
                        <h1 class="text-[18px]">11:36:58 AM</h1>
                    </div>
*/