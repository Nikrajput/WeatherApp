const submitBtn=document.getElementById('submitBtn')
const cityName=document.getElementById('cityName')
const city=document.getElementById('city')
const tempStatus=document.getElementById('tempStatus')
const temp=document.getElementById('tempVal')
const datahide=document.querySelector('.middle-layer')
const date=document.getElementById('date')
const day=document.getElementById('day')

const getday=()=>{
    const d=new Date()
    const idx=d.getDay()
    return idx==0?'Sunday':idx==1?'Monday':idx==2?'Tuesday':idx==3?'Wednesday':idx==4?'Thursday':idx==5?'Friday':'Saturday'
}

const getdate=()=>{
    const month=['January','February','March','April','May','June','July','August','September','October','November','December']
    const d=new Date()
    const m=d.getMonth()
    const idx=d.getDate()
    const y=d.getFullYear()
    return `${idx} ${month[m]} ${y}`
}

day.innerText=getday()
date.innerText=getdate()

const getInfo=async(event)=>{
    event.preventDefault()
    if(cityName.value === ""){
        console.log('Nik')
        city.innerText='City Name cannot be Empty'
        datahide.classList.add('data-hide')
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=5f00240edd73620e48bf2bc65e908ad2`
            const response=await fetch(url)
            const data=[await response.json()]
            city.innerText=`${data[0].name}, ${data[0].sys.country}`
            temp.innerText=data[0].main.temp
            const mood=data[0].weather[0].main
            if(mood==='Clear'){
                tempStatus.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            else if(mood==='Clouds'){
                tempStatus.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }
            else if(mood==='Rain'){
                tempStatus.innerHTML="<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>"
            }
            else{
                tempStatus.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
            }
            datahide.classList.remove('data-hide')
        }
        catch{
            city.innerText='Please Enter City Name Correctly'
            datahide.classList.add('data-hide')
        }

    }
}

submitBtn.addEventListener('click',getInfo) 