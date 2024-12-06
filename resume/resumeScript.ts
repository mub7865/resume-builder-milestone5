let myName  = localStorage.getItem('name')


window.addEventListener('load', () => {

    let design =localStorage.getItem('design')
    let phone = localStorage.getItem('phone')
    let email = localStorage.getItem('email')
    let address = localStorage.getItem('address')
    let pass = localStorage.getItem('pass')
    let deg = localStorage.getItem('deg')
    let uni0 = localStorage.getItem('uni')
    let lastEd = localStorage.getItem('lastEd')
    let pass1 = localStorage.getItem('pass1')
    let deg1 = localStorage.getItem('deg1')
    let uni1 = localStorage.getItem('uni1')
    let skill1 = localStorage.getItem('skill1')
    let skill2 = localStorage.getItem('skill2')
    let skill3 = localStorage.getItem('skill3')
    let skill4 = localStorage.getItem('skill4')
    let skill5 = localStorage.getItem('skill5')
    let lang1 = localStorage.getItem('lang1')
    let lang2 = localStorage.getItem('lang2')
    let st_year = localStorage.getItem('st_year')
    let end_year = localStorage.getItem('end_year')
    let company = localStorage.getItem('company')
    let comLocation = localStorage.getItem('comLocation')
    let jobTittle = localStorage.getItem('jobTittle')
    let ach1 = localStorage.getItem('ach1')
    let ach2 = localStorage.getItem('ach2')
    let ach3 = localStorage.getItem('ach3')
    let profSummary = localStorage.getItem('professional-summary')
    let aboutMe = localStorage.getItem('about-me')
    let refrence= localStorage.getItem('ref')
    let image= localStorage.getItem('prof_pic')








    let resName : any = document.getElementById('resumeName')
    resName.textContent = myName

    let resDesign : any = document.getElementById('resumeDesign')
    resDesign.textContent = design

    let resPhone : any = document.getElementById('resumePhone')
    resPhone.textContent = phone

    let resEmail : any = document.getElementById('resumeEmail')
    resEmail.textContent = email

    let resAddress : any = document.getElementById('resumeAddress')
    resAddress.textContent = address
    
    let resPass : any = document.getElementById('resumePass')
    resPass.textContent = pass
    
    let resDeg : any = document.getElementById('resumeDeg')
    resDeg.textContent = deg

    let resuUni : any = document.getElementById('resumeUni')
    resuUni.textContent = uni0
    
    let resuEduc : any = document.getElementById('resumeLastEd')
    resuEduc.textContent = lastEd

    let resPass1 : any = document.getElementById('resumePass1')
    resPass1.textContent = pass1
    
    let resdeg1 : any = document.getElementById('resumeDeg1')
    resdeg1.textContent = deg1

    let resUni1 : any = document.getElementById('resumeUni1')
    resUni1.textContent = uni1

    let resSkill1 : any = document.getElementById('resumeskill1')
    resSkill1.textContent = skill1

    let resSkill2 : any = document.getElementById('resumeskill2')
    resSkill2.textContent = skill2

    let resSkill3 : any = document.getElementById('resumeskill3')
    resSkill3.textContent = skill3

    let resSkill4 : any = document.getElementById('resumeskill4')
    resSkill4.textContent = skill4

    let resSkill5 : any = document.getElementById('resumeskill5')
    resSkill5.textContent = skill5

    let resLang1 : any = document.getElementById('resumeLang1')
    resLang1.textContent = lang1

    let resLang2 : any = document.getElementById('resumeLang2')
    resLang2.textContent = lang2

    let resSt : any = document.getElementById('resumeSt_year')
    resSt.textContent = st_year

    let resEnd : any = document.getElementById('resumeEnd_year')
    resEnd.textContent = end_year

    let resComp : any = document.getElementById('resumeComp')
    resComp.textContent = company

    let resCompLoc : any = document.getElementById('resumeCompLoc')
    resCompLoc.textContent = comLocation
 
    let resJobTit : any = document.getElementById('resumeJobTit')
    resJobTit.textContent = jobTittle

    let resAch1 : any = document.getElementById('resumeAch1')
    resAch1.textContent = ach1

    let resAch2 : any = document.getElementById('resumeAch2')
    resAch2.textContent = ach2

    let resProfSummary : any = document.getElementById('resumeProfSummary')
    resProfSummary.textContent = profSummary

    let reAboutMe : any = document.getElementById('resumeAboutMe')
    reAboutMe.textContent = aboutMe

    let resRef : any = document.getElementById('resumeRef')
    resRef.textContent = refrence

    
    let resImg : any = document.getElementById('resumeImg')
    resImg.src = image

      
    
})

//---------------------------print---------------------------------------


let print_btn = document.getElementById('print')
print_btn?.addEventListener('click', () => {
    window.print()
})

//---------------------------Edit---------------------------------------

let edit_btn = document.getElementById('edit')
edit_btn?.addEventListener('click', () => {
    window.history.back()
})

//---------------------------Share---------------------------------------

let share_btn = document.getElementById('share')
let anc = document.getElementById("anc")

let userName;
if (myName){
    userName = myName.toLowerCase().replace(/\s+/g, "");
} else{
    userName = 'user'
}

let baseUrl = "http://127.0.0.1:5501/resume/resume.html"
let uniqueUrl = `${baseUrl}?/${userName}`; 
share_btn?.addEventListener('click', () => {
    anc?.setAttribute('href', uniqueUrl)
})   

//---------------------------Share---------------------------------------

let copy_btn = document.getElementById('copy')
copy_btn?.addEventListener('click', ()=>{
    navigator.clipboard.writeText(uniqueUrl).then(()=>{
        alert("Copy Done")
    })
})

