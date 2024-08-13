let select = document.querySelectorAll(".currency")

let input = document.getElementById('input')

let btn = document.getElementById('btn')

fetch('https://api.frankfurter.app/currencies')
.then((res) => res.json() )
.then((res) => displayDropDown(res))   //Sending res to function



function displayDropDown(res){
let curr = Object.entries(res)


for(let i=0;i<curr.length;i++){
    select[0].innerHTML += `<option value = "${curr[i][0]}">${curr[i][0]}</option>`
    select[1].innerHTML += `<option value = "${curr[i][0]}">${curr[i][0]}</option>`
}
}

btn.addEventListener('click' , () => {
    let curr1 = select[0].value
    let curr2 = select[1].value
    let inputusr = input.value

   if(curr1 == curr2){
    alert('choose different currencies')
   }
   else{
    convert(curr1,curr2,inputusr)
   }
})

function convert(curr1,curr2,inputusr){
    const host ='api.frankfurter.app'
    fetch(`https://${host}/latest?amount=${inputusr}&from=${curr1}&to=${curr2}`)
    .then((res) => res.json())
    .then((res) => {
        document.getElementById('result').value = Object.entries(res.rates)[0][1]
    })

}    
