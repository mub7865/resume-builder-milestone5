let myName : any = document.getElementById('name')

let myDesign : any = document.getElementById('design')

let myPhone : any = document.getElementById('phone')

let myEmail : any = document.getElementById('email')

let myAddress : any = document.getElementById('address')

let myPass : any = document.getElementById('pass')

let myDeg : any = document.getElementById('deg')

let myUni : any = document.getElementById('uni')


let lastEdu : any = document.getElementById('lastEd')


let myPass1 : any = document.getElementById('pass1')


let myDeg1 : any = document.getElementById('deg1')


let myUni1 : any = document.getElementById('uni1')


let mySkill1 : any = document.getElementById('skilll')


let mySkill2 : any = document.getElementById('skill2')


let mySkill3 : any = document.getElementById('skill3')


let mySkill4 : any = document.getElementById('skill4')


let mySkill5 : any = document.getElementById('skill5')

let mylang1 : any = document.getElementById('lang1')


let mylang2 : any = document.getElementById('lang2')

let st_year : any = document.getElementById('st_year')

let end_year : any = document.getElementById('end_year')


let company : any = document.getElementById('company')


let comLocation : any = document.getElementById('comLocation')


let jobTittle : any = document.getElementById('jobTittle')


let myAch1 : any = document.getElementById('ach1')

let myAch2 : any = document.getElementById('ach2')

let myAch3 : any = document.getElementById('ach3')

let profSummary : any = document.getElementById('professional-summary')

let aboutMe : any = document.getElementById('about-me')

let ref : any = document.getElementById('ref')

let  image : any = document.getElementById('image')








let submit_btn = document.getElementById('submit_btn')

let form = document.getElementById('form')


form?.addEventListener('submit', (e)=>{
    e.preventDefault()


        localStorage.setItem('name',myName.value)
        localStorage.setItem('design',myDesign.value)
        localStorage.setItem('phone',myPhone.value)
        localStorage.setItem('email',myEmail.value)
        localStorage.setItem('address',myAddress.value)
        localStorage.setItem('pass',myPass.value)
        localStorage.setItem('deg',myDeg.value)
        localStorage.setItem('uni',myUni.value)
        localStorage.setItem('lastEd',lastEdu.value)
        localStorage.setItem('pass1',myPass1.value)
        localStorage.setItem('deg1',myDeg1.value)
        localStorage.setItem('uni1',myUni1.value)
        localStorage.setItem('skill1',mySkill1.value)
        localStorage.setItem('skill2',mySkill2.value)
        localStorage.setItem('skill3',mySkill3.value)
        localStorage.setItem('skill4',mySkill4.value)
        localStorage.setItem('skill5',mySkill5.value)
        localStorage.setItem('lang1',mylang1.value)
        localStorage.setItem('lang2',mylang2.value)
        localStorage.setItem('st_year',st_year.value)
        localStorage.setItem('end_year',end_year.value)
        localStorage.setItem('company',company.value)
        localStorage.setItem('comLocation',comLocation.value)
        localStorage.setItem('jobTittle',jobTittle.value)
        localStorage.setItem('ach1',myAch1.value)
        localStorage.setItem('ach2',myAch2.value)
        localStorage.setItem('ach3',myAch3.value)
        localStorage.setItem('professional-summary',profSummary.value)
        localStorage.setItem('about-me',aboutMe.value)
        localStorage.setItem('ref',ref.value)

        if (image.files && image.files[0] ){
            let reader = new FileReader()
            reader.addEventListener("load", ()=>{
                  let textImage : any = reader.result
                localStorage.setItem('prof_pic', textImage)                                    
            })
            reader.readAsDataURL(image.files[0])
        }
    
        window.location.href = "./resume/resume.html"     
    
} )










