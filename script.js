import { varsity } from "./data/varsity.js"
import{uj,name_uj} from "./data/uj.js"
import { wits,name_wits } from "./data/wits.js";
import { tut,name_tut } from "./data/tut.js";
import { smu,name_smu } from "./data/smu.js";
import { ul,name_ul } from "./data/ul.js";
import { univen,name_univen } from "./data/univen.js";
import { ump,name_ump } from "./data/ump.js";
import { uct,name_uct } from "./data/uct.js";
import { su,name_su } from "./data/su.js";
import { uwc,name_uwc } from "./data/uwc.js";
import { cput,name_cput } from "./data/cput.js";
import { spu,name_spu } from "./data/spu.js";
import { ru,name_ru } from "./data/ru.js";
import { nmu,name_nmu } from "./data/nmu.js";
import { wsu,name_wsu } from "./data/wsu.js";
import { ufh,name_ufh } from "./data/ufh.js";
import { ukzn,name_ukzn } from "./data/ukzn.js";
import { dut,name_dut } from "./data/dut.js";
import { mut,name_mut } from "./data/mut.js";
import { ufs,name_ufs } from "./data/ufs.js";
import { nwu,name_nwu } from "./data/nwu.js";
import { cut,name_cut} from "./data/cut.js";
import { vut,name_vut } from "./data/vut.js";
import { unisa,name_unisa } from "./data/unisa.js";
import { saut,name_saut } from "./data/saut.js";

const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});
function login() {
    const username = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;

    // Check if the username and password are correct
    if (username === "admin" && password === "1234") {
        // Redirect to the home page
        window.location.href = "home.html";
    } else {
        // Display an error message
        alert("Invalid login. Please try again.");
    }
}

// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');
if(window.innerWidth > 768){
    sidebar.classList.add('hide');
    menuBar.addEventListener('click', function () {
            sidebar.classList.toggle('hide');
    })
}
if (window.innerWidth < 768) {
    menuBar.addEventListener('click', function () {
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.classList.remove('hide');
            sidebar.style.display = "block"; 
        } else {
            sidebar.classList.add('hide');
            sidebar.style.display = "none";
        }
        allSideMenu.forEach(menuItem => {
            menuItem.addEventListener('click', function() {
                sidebar.classList.add('hide');
                sidebar.style.display = "none";
            })
        })
    });
}
let search_university_input = document.getElementById("search_university_input")

let universities_search = document.getElementById("universities_search")
let universities_search_list = ""
varsity.Gauteng.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.Limpopo.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.Mpumalanga.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.WesternCape.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.EasternCape.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.KwaZulu_Natal.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.free_state.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.North_West.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.Northern_Cape.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.Vaal_Triangle.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})
varsity.National.varsity.forEach(el=>{
    universities_search_list += `<li><a href="#" id="${el.abbr}">${el.title}</a></li>`
})

let home = document.getElementById("home")
let add = document.getElementById("add")
let settings = document.getElementById("settings")
let dashboard = document.getElementById("dashboard")
let profile = document.getElementById("profile")
search_university_input.addEventListener("input", function() {
    
    let userInput = search_university_input.value;
    let filterUserInput = userInput.toUpperCase();
    let ul_universities_search = document.querySelectorAll("#universities_search_container #universities_search li");
    
    if (userInput === "") {
        universities_search_container.style.display = "";
    } else {
        universities_search_container.style.display = "flex";
        for (let i = 0; i < ul_universities_search.length; i++) {
            let a = ul_universities_search[i].getElementsByTagName("a")[0];
            let txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filterUserInput) > -1) {
                ul_universities_search[i].style.display = "";
            } else {
                ul_universities_search[i].style.display = "none";
            }
        }
    }  
});

const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})



if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})


//varsity home container
function populatevarsityname(){
    let varsity_list = ""
    let university_list_main = document.getElementById("university_list_main")
    
    
    varsity_list += `<h1>${varsity.Gauteng.name}<h1/> `
    varsity.Gauteng.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.Limpopo.name}<h1/> `
    varsity.Limpopo.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.Mpumalanga.name}<h1/> `
    varsity.Mpumalanga.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.WesternCape.name}<h1/> `
    varsity.WesternCape.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.EasternCape.name}<h1/> `
    varsity.EasternCape.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.KwaZulu_Natal.name}<h1/> `
    varsity.KwaZulu_Natal.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.free_state.name}<h1/> `
    varsity.free_state.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.North_West.name}<h1/> `
    varsity.North_West.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.Northern_Cape.name}<h1/> `
    varsity.Northern_Cape.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.Vaal_Triangle.name}<h1/> `
    varsity.Vaal_Triangle.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    varsity_list += `<h1>${varsity.National.name}<h1/> `
    varsity.National.varsity.forEach(el=>{
        varsity_list += ` <div class="section_list_university">
        <h1>${el.title}</h1>
        <div class="section_header_btn">
        <a id="${el.link}"><button>view course<i class="fa-solid fa-arrow-right"></i></button></a>
        </div>
        
        </div>`
    })
    university_list_main.innerHTML = varsity_list
  }

  //----------------------------------home functions---------------------------------------------------------------------------------------
  populatevarsityname()
document.getElementById("home_page").addEventListener("click",()=>{
    home.style.display = ''
    add.style.display = "none"
    settings.style.display = "none"
    dashboard.style.display = "none"
    profile.style.display = "none"
})
document.getElementById("add_page").addEventListener("click",()=>{
    home.style.display = 'none'
    add.style.display = "block"
    settings.style.display = "none"
    dashboard.style.display = "none"
    profile.style.display = "none"
})
document.getElementById("dashboard_page").addEventListener("click",()=>{
    home.style.display = 'none'
    add.style.display = "none"
    settings.style.display = "none"
    dashboard.style.display = "block"
    profile.style.display = "none"
})
document.getElementById("settings_page").addEventListener("click",()=>{
    home.style.display = 'none'
    add.style.display = "none"
    settings.style.display = "flex"
    dashboard.style.display = "none"
    profile.style.display = "none"
})

document.getElementById("profile_page").addEventListener("click",()=>{
    home.style.display = 'none'
    add.style.display = "none"
    settings.style.display = "none"
    dashboard.style.display = "none"
    profile.style.display = "block"
})


universities_search.innerHTML += universities_search_list
let universities_search_container = document.getElementById("universities_search_container")
const firstListItem = document.querySelector('#sidebar .side-menu.top li:nth-child(1)');
const secondListItem = document.querySelector('#sidebar .side-menu.top li:nth-child(2)');
const thirdListItem = document.querySelector('#sidebar .side-menu.top li:nth-child(3)');
const fourthListItem = document.querySelector('#sidebar .side-menu.top li:nth-child(4)');
const fifthListItem = document.querySelector('#sidebar .side-menu.top li:nth-child(5)');

function search_university_container(content){
    universities_search_container.style.display = "none"
    if(home.style.display = " "){
        homecontents.style.display="none"
        const divs = document.querySelectorAll('#home .universities')
        divs.forEach(div => {
            div.style.display = "none"
        })
        divs[0].style.display = "none"
        content.style.display = "flex"

    }
    if(add.style.display = "block" ){
        firstListItem.classList.add('active')
        secondListItem.classList.remove('active');
        add.style.display = "none"
        home.style.display = "block"
    }
    if(dashboard.style.display = "block" ){
        firstListItem.classList.add('active')
        thirdListItem.classList.remove('active');
        dashboard.style.display = "none"
        home.style.display = "block"
    }
    if(settings.style.display = "flex" ){
        firstListItem.classList.add('active')
        fourthListItem.classList.remove('active');
        settings.style.display = "none"
        home.style.display = "block"
    }
    if(profile.style.display = "flex" ){
        firstListItem.classList.add('active')
        fifthListItem.classList.remove('active');
        profile.style.display = "none"
        home.style.display = "block"
    }

    
}

const inputElementuj = document.getElementById('UJ');
const inputElementwits = document.getElementById('WITS');
const inputElementtut = document.getElementById('TUT');
const inputElementsmu = document.getElementById('SMU');
const inputElementul = document.getElementById('UL');
const inputElementuniven = document.getElementById('UNIVEN')
const inputElementump = document.getElementById('UMP');
const inputElementiuct = document.getElementById('UCT');
const inputElementsu = document.getElementById('SU');
const inputElementuwc = document.getElementById('UWC');
const inputElementcput = document.getElementById('CPUT');
const inputElementspu = document.getElementById('SPU');
const inputElementru = document.getElementById('RU');
const inputElementnmu = document.getElementById('NMU');
const inputElementwsu = document.getElementById('WSU');
const inputElementufh = document.getElementById('UFH');
const inputElementukzn = document.getElementById('UKZN');
const inputElementdut = document.getElementById('DUT');
const inputElementmut = document.getElementById('MUT');
const inputElementufs = document.getElementById('UFS');
const inputElementnwu = document.getElementById('NWU');
const inputElementcut = document.getElementById('CUT');
const inputElementvut = document.getElementById('VUT');
const inputElementunisa = document.getElementById('UNISA');
const inputElementsaut = document.getElementById('SAUT');
inputElementuj.addEventListener("click",()=>{
    search_university_container(uj_contents)
    populates_uj_boby()
    scrollToTop()
    
})
inputElementwits.addEventListener("click",()=>{
    search_university_container(wits_contents)
    populates_wits_boby()
    scrollToTop()
})
inputElementtut.addEventListener("click",()=>{
    search_university_container(tut_contents)
    populates_tut_boby()
    scrollToTop()
})
inputElementsmu.addEventListener("click",()=>{
    search_university_container(smu_contents)
    populates_smu_boby()
    scrollToTop()
})
inputElementul.addEventListener("click",()=>{
    search_university_container(ul_contents)
    populates_ul_boby()
    scrollToTop()
})
inputElementuniven.addEventListener("click",()=>{
    search_university_container(univen_contents)
    populates_univen_boby()
    scrollToTop()
})
inputElementump.addEventListener("click",()=>{
    search_university_container(ump_contents)
    populates_ump_boby()
    scrollToTop()
})
inputElementiuct.addEventListener("click",()=>{
    search_university_container(uct_contents)
    populates_uct_boby()
    scrollToTop()
})
inputElementsu.addEventListener("click",()=>{
    search_university_container(su_contents)
    populates_su_boby()
    scrollToTop()
})
inputElementuwc.addEventListener("click",()=>{
    search_university_container(uwc_contents)
    populates_uwc_boby()
    scrollToTop()
})
inputElementcput.addEventListener("click",()=>{
    search_university_container(cput_contents)
    populates_cput_boby()
    scrollToTop()
})
inputElementspu.addEventListener("click",()=>{
    search_university_container(spu_contents)
    populates_spu_boby()
    scrollToTop()
})
inputElementru.addEventListener("click",()=>{
    search_university_container(ru_contents)
    populates_ru_boby()
    scrollToTop()
})
inputElementnmu.addEventListener("click",()=>{
    search_university_container(nmu_contents)
    populates_nmu_boby()
    scrollToTop()
})
inputElementwsu.addEventListener("click",()=>{
    search_university_container(wsu_contents)
    populates_wsu_boby()
    scrollToTop()
})
inputElementufh.addEventListener("click",()=>{
    search_university_container(ufh_contents)
    populates_ufh_boby()
    scrollToTop()
})
inputElementukzn.addEventListener("click",()=>{
    search_university_container(ukzn_contents)
    populates_ukzn_boby()
    scrollToTop()
})
inputElementdut.addEventListener("click",()=>{
    search_university_container(dut_contents)
    populates_dut_boby()
    scrollToTop()
})
inputElementmut.addEventListener("click",()=>{
    search_university_container(mut_contents)
    populates_mut_boby()
    scrollToTop()
})
inputElementufs.addEventListener("click",()=>{
    search_university_container(ufs_contents)
    populates_ufs_boby()
    scrollToTop()
})
inputElementnwu.addEventListener("click",()=>{
    search_university_container(nwu_contents)
    populates_nwu_boby()
    scrollToTop()
})
inputElementcut.addEventListener("click",()=>{
    search_university_container(cut_contents)
    populates_cut_boby()
    scrollToTop()
})
inputElementvut.addEventListener("click",()=>{
    search_university_container(vut_contents)
    populates_vut_boby()
    scrollToTop()
})
inputElementunisa.addEventListener("click",()=>{
    search_university_container(unisa_contents)
    populates_unisa_boby()
    scrollToTop()
})
inputElementsaut.addEventListener("click",()=>{
    search_university_container(saut_contents)
    populates_saut_boby()
    scrollToTop()
})


    // ----------------------------------------------------functions for populating university coure on sidebar---------------------------------------------------
      //populates varsity course and course
      //populates varsity course and course
      function populates_uj_boby(){
        let side_bar_uj = document.getElementById("side_bar_course_list_uj")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_uj">`
      
      for (const key in uj) {
                if(selectedOptions.length > 0){
                    if(finalvalue >= uj[key].minimum_aps){
                        course_button += `<li><a href="#" class ="course_button_links_uj" id = "${uj[key].Id}">${uj[key].programme_name}</a></li>`
                      }
                }else{
                    course_button += `<li><a href="#" class ="course_button_links_uj" id = "${uj[key].Id}">${uj[key].programme_name}</a></li>`

                }
      }
      
      side_bar_uj.innerHTML=course_button
      let course_details_container = document.getElementById("course_details_container_uj")
  
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_uj")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (uj.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = uj[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_uj}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_uj").addEventListener("keyup", search_courses_uj);
      
      }
  
      function populates_wits_boby(){
        let side_bar_wits = document.getElementById("side_bar_course_list_wits")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_wits">`
      
      
      
      for (const key in wits) {
        if(selectedOptions.length >0){
            if(finalvalue >= wits[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_wits" id = "${wits[key].Id}">${wits[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_wits" id = "${wits[key].Id}">${wits[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_wits.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_wits")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_wits")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (wits.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = wits[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_wits}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_wits").addEventListener("keyup", search_courses_wits);
      }
      function populates_tut_boby(){
        let side_bar_tut = document.getElementById("side_bar_course_list_tut")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_tut">`
      
      
      
      for (const key in tut) {
        if(selectedOptions.length >0){
            if(finalvalue >= tut[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_tut" id = "${tut[key].Id}">${tut[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_tut" id = "${tut[key].Id}">${tut[key].programme_name}</a></li>`

        }
      
      }
      
      side_bar_tut.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_tut")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_tut")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (tut.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = tut[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_tut}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_tut").addEventListener("keyup", search_courses_tut);
      }
      function populates_smu_boby(){
        let side_bar_smu = document.getElementById("side_bar_course_list_smu")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_smu">`

    for (const key in smu) {
        if(selectedOptions.length >0){
            if(finalvalue >= smu[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_smu" id = "${smu[key].Id}">${smu[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_smu" id = "${smu[key].Id}">${smu[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_smu.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_smu")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_smu")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (smu.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = smu[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_smu}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>minimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>physical science: ${courseDetails.physical_Sciences}</p>
                         <p>Life science: ${courseDetails.life_science}</p>
                         <p>mathematics: ${courseDetails.mathematics}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_smu").addEventListener("keyup", search_courses_smu);
      }
      function populates_ul_boby(){
        let side_bar_ul = document.getElementById("side_bar_course_list_ul")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_ul">`
  
      
      
      for (const key in ul) {
        if(selectedOptions.length >0){
            if(finalvalue >= ul[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_ul" id = "${ul[key].Id}">${ul[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_ul" id = "${ul[key].Id}">${ul[key].programme_name}</a></li>`

        }
      
      }
      
      side_bar_ul.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_ul")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_ul")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (ul.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = ul[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_ul}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_ul").addEventListener("keyup", search_courses_ul);
      }
      function populates_univen_boby(){
        let side_bar_univen = document.getElementById("side_bar_course_list_univen")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_univen">`
      
      
      
      for (const key in univen) {
        if(selectedOptions.length >0){
            if(finalvalue >= univen[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_univen" id = "${univen[key].Id}">${univen[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_univen" id = "${univen[key].Id}">${univen[key].programme_name}</a></li>`

        }
      
      }
      
      side_bar_univen.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_univen")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_univen")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (univen.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = univen[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_univen}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_univen").addEventListener("keyup", search_courses_univen);
      }
      function populates_ump_boby(){
        let side_bar_ump = document.getElementById("side_bar_course_list_ump")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_ump">`
      
      
      
      for (const key in ump) {
        if(selectedOptions.length >0){
            if(finalvalue >= ump[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_ump" id = "${ump[key].Id}">${ump[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_ump" id = "${ump[key].Id}">${ump[key].programme_name}</a></li>`
        }
      }
      
      side_bar_ump.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_ump")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_ump")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (ump.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = ump[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_ump}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_ump").addEventListener("keyup", search_courses_ump);
      }
      function populates_uct_boby(){
        let side_bar_uct = document.getElementById("side_bar_course_list_uct")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_uct">`
      
      
      
      for (const key in uct) {
        if(selectedOptions.length >0){
            if(finalvalue >= uct[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_uct" id = "${uct[key].Id}">${uct[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_uct" id = "${uct[key].Id}">${uct[key].programme_name}</a></li>`

        }
      }
      
      side_bar_uct.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_uct")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_uct")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (uct.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = uct[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                 
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_uct}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_uct").addEventListener("keyup", search_courses_uct);
      }
      function populates_su_boby(){
        let side_bar_su = document.getElementById("side_bar_course_list_su")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_su">`
      
      for (const key in su) {
        if(selectedOptions.length >0){
            if(finalvalue >= su[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_su" id = "${su[key].Id}">${su[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_su" id = "${su[key].Id}">${su[key].programme_name}</a></li>`

        }      
      }
      
      side_bar_su.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_su")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_su")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (su.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = su[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_su}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_su").addEventListener("keyup", search_courses_su);
      }
      function populates_uwc_boby(){
        let side_bar_uwc = document.getElementById("side_bar_course_list_uwc")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_uwc">`
      
      
      
      for (const key in uwc) {
        if(selectedOptions.length >0){
            if(finalvalue >= uwc[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_uwc" id = "${uwc[key].Id}">${uwc[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_uwc" id = "${uwc[key].Id}">${uwc[key].programme_name}</a></li>`

        }            
      }
      
      side_bar_uwc.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_uwc")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_uwc")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (uwc.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = uwc[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_uwc}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_uwc").addEventListener("keyup", search_courses_uwc);
      }
      function populates_cput_boby(){
        let side_bar_cput = document.getElementById("side_bar_course_list_cput")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_cput">`
     
      
      for (const key in cput) {
        if(selectedOptions.length >0){
            if(finalvalue >= cput[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_cput" id = "${cput[key].Id}">${cput[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_cput" id = "${cput[key].Id}">${cput[key].programme_name}</a></li>`

        } 
      
      }
      
      side_bar_cput.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_cput")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_cput")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (cput.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = cput[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_cput}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_cput").addEventListener("keyup", search_courses_cput);
      }
      function populates_spu_boby(){
        let side_bar_spu = document.getElementById("side_bar_course_list_spu")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_spu">`
      
      
      for (const key in spu) {
        if(selectedOptions.length >0){
            if(finalvalue >= spu[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_spu" id = "${spu[key].Id}">${spu[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_spu" id = "${spu[key].Id}">${spu[key].programme_name}</a></li>`

        } 
      }
      
      side_bar_spu.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_spu")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_spu")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (spu.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = spu[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_spu}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_spu").addEventListener("keyup", search_courses_spu);
      }
      function populates_ru_boby(){
        let side_bar_ru = document.getElementById("side_bar_course_list_ru")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_ru">`
      
      
      for (const key in ru) {
        if(selectedOptions.length >0){
            if(finalvalue >= ru[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_ru" id = "${ru[key].Id}">${ru[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_ru" id = "${ru[key].Id}">${ru[key].programme_name}</a></li>`

        } 
      
          
      }
      
      side_bar_ru.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_ru")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_ru")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (ru.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = ru[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_ru}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_ru").addEventListener("keyup", search_courses_ru);
      }
      function populates_nmu_boby(){
        let side_bar_nmu = document.getElementById("side_bar_course_list_nmu")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_nmu">`
      
      
      for (const key in nmu) {
        if(selectedOptions.length >0){
            if(finalvalue >= nmu[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_nmu" id = "${nmu[key].Id}">${nmu[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_nmu" id = "${nmu[key].Id}">${nmu[key].programme_name}</a></li>`

        }       
      }
      
      side_bar_nmu.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_nmu")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_nmu")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (nmu.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = nmu[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_nmu}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_nmu").addEventListener("keyup", search_courses_nmu);
      }
      function populates_wsu_boby(){
        let side_bar_wsu = document.getElementById("side_bar_course_list_wsu")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_wsu">`
      
      
      for (const key in wsu) {
        if(selectedOptions.length >0){
            if(finalvalue >= wsu[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_wsu" id = "${wsu[key].Id}">${wsu[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_wsu" id = "${wsu[key].Id}">${wsu[key].programme_name}</a></li>`

        }       
          
      }
      
      side_bar_wsu.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_wsu")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_wsu")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (wsu.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = wsu[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_wsu}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_wsu").addEventListener("keyup", search_courses_wsu);
      }
      function populates_ufh_boby(){
        let side_bar_ufh = document.getElementById("side_bar_course_list_ufh")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_ufh">`
      
      for (const key in ufh) {
        if(selectedOptions.length >0){
            if(finalvalue >= ufh[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_ufh" id = "${ufh[key].Id}">${ufh[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_ufh" id = "${ufh[key].Id}">${ufh[key].programme_name}</a></li>`

        } 
      
          
      }
      
      side_bar_ufh.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_ufh")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_ufh")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (ufh.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = ufh[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_ufh}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_ufh").addEventListener("keyup", search_courses_ufh);
      }
      function populates_ukzn_boby(){
        let side_bar_ukzn = document.getElementById("side_bar_course_list_ukzn")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_ukzn">`
      
      
      
      for (const key in ukzn) {
        if(selectedOptions.length >0){
            if(finalvalue >= ukzn[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_ukzn" id = "${ukzn[key].Id}">${ukzn[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_ukzn" id = "${ukzn[key].Id}">${ukzn[key].programme_name}</a></li>`

        } 
      }
      
      side_bar_ukzn.innerHTML=course_button
      
      let course_details_container = document.getElementById("course_details_container_ukzn")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_ukzn")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (ukzn.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = ukzn[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_ukzn}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_ukzn").addEventListener("keyup", search_courses_ukzn);
      }
      function populates_dut_boby(){
        let side_bar_dut = document.getElementById("side_bar_course_list_dut")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_dut">`
      for (const key in dut) {
        if(selectedOptions.length >0){
            if(finalvalue >= dut[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_dut" id = "${dut[key].Id}">${dut[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_dut" id = "${dut[key].Id}">${dut[key].programme_name}</a></li>`
        } 
      }
      
      side_bar_dut.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_dut")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_dut")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (dut.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = dut[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_dut}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_dut").addEventListener("keyup", search_courses_dut);
      }
      function populates_mut_boby(){
        let side_bar_mut = document.getElementById("side_bar_course_list_mut")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_mut">`
      
      
      
      for (const key in mut) {
        if(selectedOptions.length >0){
            if(finalvalue >= mut[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_mut" id = "${mut[key].Id}">${mut[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_mut" id = "${mut[key].Id}">${mut[key].programme_name}</a></li>`
        }
      }
      side_bar_mut.innerHTML=course_button
      let course_details_container = document.getElementById("course_details_container_mut")
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_mut")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (mut.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = mut[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_mut}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_mut").addEventListener("keyup", search_courses_mut);
      }
      function populates_ufs_boby(){
        let side_bar_ufs = document.getElementById("side_bar_course_list_ufs")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_ufs">`
      
      
      for (const key in ufs) {
        if(selectedOptions.length >0){
            if(finalvalue >= ufs[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_ufs" id = "${ufs[key].Id}">${ufs[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_ufs" id = "${ufs[key].Id}">${ufs[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_ufs.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_ufs")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_ufs")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (ufs.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = ufs[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_ufs}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_ufs").addEventListener("keyup", search_courses_ufs);
      }
      function populates_nwu_boby(){
        let side_bar_nwu = document.getElementById("side_bar_course_list_nwu")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_nwu">`
      
      for (const key in nwu) {
        if(selectedOptions.length >0){
            if(finalvalue >= nwu[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_nwu" id = "${nwu[key].Id}">${nwu[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_nwu" id = "${nwu[key].Id}">${nwu[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_nwu.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_nwu")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_nwu")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (nwu.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = nwu[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_nwu}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_nwu").addEventListener("keyup", search_courses_nwu);
      }
      function populates_cut_boby(){
        let side_bar_cut = document.getElementById("side_bar_course_list_cut")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_cut">`
      
      
      for (const key in cut) {
        if(selectedOptions.length >0){
            if(finalvalue >= cut[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_cut" id = "${cut[key].Id}">${cut[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_cut" id = "${cut[key].Id}">${cut[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_cut.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_cut")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_cut")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (cut.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = cut[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                  
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_cut}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_cut").addEventListener("keyup", search_courses_cut);
      }
      function populates_vut_boby(){
        let side_bar_vut = document.getElementById("side_bar_course_list_vut")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_vut">`
      
      
      
      for (const key in vut) {
        if(selectedOptions.length >0){
            if(finalvalue >= vut[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_vut" id = "${vut[key].Id}">${vut[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_vut" id = "${vut[key].Id}">${vut[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_vut.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_vut")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_vut")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (vut.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = vut[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                 
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_vut}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_vut").addEventListener("keyup", search_courses_vut);
      }
      function populates_unisa_boby(){
        let side_bar_unisa = document.getElementById("side_bar_course_list_unisa")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_unisa">`
      
      
      
      for (const key in unisa) {
        if(selectedOptions.length >0){
            if(finalvalue >= unisa[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_unisa" id = "${unisa[key].Id}">${unisa[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_unisa" id = "${unisa[key].Id}">${unisa[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_unisa.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_unisa")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_unisa")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (unisa.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = unisa[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                                
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_unisa}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_unisa").addEventListener("keyup", search_courses_unisa);
      }
      function populates_saut_boby(){
        let side_bar_saut = document.getElementById("side_bar_course_list_saut")
      
      let course_button = `<input type="text" placeholder="search for courses" id="search_courses_saut">`
      
      for (const key in saut) {
        if(selectedOptions.length > 0){
            if(finalvalue >= saut[key].minimum_aps){
                course_button += `<li><a href="#" class ="course_button_links_saut" id = "${saut[key].Id}">${saut[key].programme_name}</a></li>`
            }
        }else{
            course_button += `<li><a href="#" class ="course_button_links_saut" id = "${saut[key].Id}">${saut[key].programme_name}</a></li>`

        }
      
          
      }
      
      side_bar_saut.innerHTML=course_button
      
      
      let course_details_container = document.getElementById("course_details_container_saut")
      
      
      // check when buttons are clicked
      let course_button_links = document.querySelectorAll(".course_button_links_saut")
      
        course_button_links.forEach((button) => {
          button.addEventListener('click', (event) => {
            const clickedButton = event.target;
            const clickedButtonId = clickedButton.id; // Get the button ID
            
            course_button_links.forEach((btn) => {
              btn.style.backgroundColor = ""; // Reset background color
              btn.style.color = ""; // Reset font color
            });
            if (saut.hasOwnProperty(clickedButtonId)) { // Check if ID exists in uj object
              const courseDetails = saut[clickedButtonId];
              clickedButton.style.backgroundColor = "white";
            clickedButton.style.color = "black";
              
              let coures_description_details = `
      <div class="course-details" id="course-details">
      
                 </div>
                 <div class="university_course_name">
                     <div class="heading_div">
                         university name
                     </div>
                     <div class="sub_heading_div">
                         <p>${name_saut}</p>
                     </div>
      
                 </div>
                 <div class="university_course_details">
                     <div class="heading_div">
                         details
                     </div>
                     <div class="sub_heading_div">
                         <p>programme name: ${courseDetails.programme_name}</p>
                         <p>Qualification code: ${courseDetails.qualification_code}</p>
                         <p>Faculty: ${courseDetails.faculty}</p>
                     </div>
         
                 </div>
                 <div class="university_course_degree">
                     <div class="heading_div">
                         degree
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.degree}</p>
                     </div>
         
                 </div>
                 <div class="university_course_requirements">
                     <div class="heading_div">
                         requirements
                     </div>
                     <div class="sub_heading_div">
                         <p>Bminimum aps: ${courseDetails.minimum_aps}+</p>
                         <p>english: ${courseDetails.english}</p>
                         <p>mathemaitcs: ${courseDetails.mathematics}</p>
                         <p>techninical mathematics: ${courseDetails.technical_maths}</p>
                         <p>mathematical literacy: ${courseDetails.mathematical_literacy}</p>
                     </div>
                 </div>
                 <div class="university_course_description">
                     <div class="heading_div">
                         career description
                     </div>
                     <div class="sub_heading_div">
                         <p>${courseDetails.career}
                         </p>
                     </div>
         
                 </div>
      
      `
      course_details_container.innerHTML = coures_description_details;
      
            } else {
              console.warn(`No course found for ID: ${clickedButtonId}`); // Handle missing ID
            }
          });
        });
        document.getElementById("search_courses_saut").addEventListener("keyup", search_courses_saut);
      }

      function scrollToTop() {
        let content = document.getElementById("home")
        content.scrollTo({
            top: 0,
            behavior: "smooth" // Optional: Smooth scrolling animation
          }) // For Chrome, Firefox, IE and Opera
          content.style.overflow = "hidden"
          
      }

      function addscroll(){
        let content = document.getElementById("home")
        content.style.overflow = "auto"
      }
let ujButton = document.getElementById("#uj")
let witsbutton = document.getElementById("#wits")
let tutbutton = document.getElementById("#tut")
let smubutton = document.getElementById("#smu")
let ulbutton = document.getElementById("#ul")
let univenbutton = document.getElementById("#univen")
let umpbuttton = document.getElementById("#ump")
let uctbutton = document.getElementById("#uct")
let subutton = document.getElementById("#su")
let uwcbutton = document.getElementById("#uwc")
let cputbutton = document.getElementById("#cput")
let spubutton = document.getElementById("#spu")
let rubutton = document.getElementById("#ru")
let nmubutton = document.getElementById("#nmu")
let wsubutton = document.getElementById("#wsu")
let ufhbutton = document.getElementById("#ufh")
let ukznbutton = document.getElementById("#ukzn")
let dutbutton = document.getElementById("#dut")
let mutbutton = document.getElementById("#mut")
let ufsbutton = document.getElementById("#ufs")
let nwubutton = document.getElementById("#nwu")
let cutbutton = document.getElementById("#cut")
let vutbutton = document.getElementById("#vut")
let unisabutton = document.getElementById("#unisa")
let sautbutton = document.getElementById("#saut")

let ujcloseButton = document.getElementById('btn-close-uj')
let witsclosebutton = document.getElementById("btn-close-wits")
let tutclosebutton = document.getElementById("btn-close-tut")
let smuclosebutton = document.getElementById("btn-close-smu")
let ulclosebutton = document.getElementById("btn-close-ul")
let univenclosebutton = document.getElementById("btn-close-univen")
let umpclosebutton = document.getElementById("btn-close-ump")
let uctclosebutton = document.getElementById("btn-close-uct")
let suclosebutton = document.getElementById("btn-close-su")
let uwcclosebutton = document.getElementById("btn-close-uwc")
let cputclosebutton = document.getElementById("btn-close-cput")
let spuclosebutton = document.getElementById("btn-close-spu")
let ruclosebutton = document.getElementById("btn-close-ru")
let nmuclosebutton = document.getElementById("btn-close-nmu")
let wsuclosebutton = document.getElementById("btn-close-wsu")
let ufhclosebutton = document.getElementById("btn-close-ufh")
let ukznclosebutton = document.getElementById("btn-close-ukzn")
let dutclosebutton = document.getElementById("btn-close-dut")
let mutclosebutton = document.getElementById("btn-close-mut")
let ufsclosebutton = document.getElementById("btn-close-ufs")
let nwuclosebutton = document.getElementById("btn-close-nwu")
let cutclosebutton = document.getElementById("btn-close-cut")
let vutclosebutton = document.getElementById("btn-close-vut")
let unisaclosebutton = document.getElementById("btn-close-unisa")
let sautclosebutton = document.getElementById("btn-close-saut")

let homecontents = document.getElementById("home_contents")
let uj_contents = document.getElementById("uj_contents")
let wits_contents = document.getElementById("wits_contents")
let tut_contents = document.getElementById("tut_contents")
let smu_contents = document.getElementById("smu_contents")
let ul_contents = document.getElementById("ul_contents")
let univen_contents = document.getElementById("univen_contents")
let ump_contents = document.getElementById("ump_contents")
let uct_contents = document.getElementById("uct_contents")
let su_contents = document.getElementById("su_contents")
let uwc_contents = document.getElementById("uwc_contents")
let cput_contents = document.getElementById("cput_contents")
let spu_contents = document.getElementById("spu_contents")
let ru_contents = document.getElementById("ru_contents")
let nmu_contents = document.getElementById("nmu_contents")
let wsu_contents = document.getElementById("wsu_contents")
let ufh_contents = document.getElementById("ufh_contents")
let ukzn_contents = document.getElementById("ukzn_contents")
let dut_contents = document.getElementById("dut_contents")
let mut_contents = document.getElementById("mut_contents")
let ufs_contents = document.getElementById("ufs_contents")
let nwu_contents = document.getElementById("nwu_contents")
let cut_contents = document.getElementById("cut_contents")
let vut_contents = document.getElementById("vut_contents")
let unisa_contents = document.getElementById("unisa_contents")
let saut_contents = document.getElementById("saut_contents")

// Add event listener to the button



//search functions
function search_courses_uj() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_uj");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_uj"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_wits() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_wits");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_wits"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_tut() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_tut");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_tut"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_smu() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_smu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_smu"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_ul() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_ul");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_ul"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_univen() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_univen");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_univen"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_ump() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_ump");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_ump"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_uct() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_uct");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_uct"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_su() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_su");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_su"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_uwc() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_uwc");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_uwc"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_cput() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_cput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_cput"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_spu() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_spu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_spu"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_ru() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_ru");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_ru"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_nmu() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_nmu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_nmu"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_wsu() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_wsu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_wsu"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_ufh() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_ufh");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_ufh"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_ukzn() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_ukzn");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_ukzn"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_dut() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_dut");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_dut"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_mut() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_mut");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_mut"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_ufs() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_ufs");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_ufs"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_nwu() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_nwu");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_nwu"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_cut() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_cut");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_cut"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_vut() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_vut");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_vut"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_unisa() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_unisa");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_unisa"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}
function search_courses_saut() {
    let input, filter, ul, li, a, i;
    input = document.getElementById("search_courses_saut");
    filter = input.value.toUpperCase();
    ul = document.getElementById("side_bar_course_list_saut"); // Get the ul element directly
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = ""; // Show the list item
        } else {
            li[i].style.display = "none"; // Hide the list item
        }
    }
}

//popu;lates university bodys
ujButton.addEventListener('click',()=>{
  populates_uj_boby()
  scrollToTop()
  homecontents.style.display="none"
  uj_contents.style.display = "flex"

})
witsbutton.addEventListener("click",()=>{
  populates_wits_boby()
  scrollToTop()
  homecontents.style.display = "none"
  wits_contents.style.display = "flex"

})
tutbutton.addEventListener("click",()=>{
  populates_tut_boby()
  scrollToTop()
  homecontents.style.display = "none"
  tut_contents.style.display = "flex"

})
smubutton.addEventListener("click",()=>{
  populates_smu_boby()
  scrollToTop()
  homecontents.style.display="none"
  smu_contents.style.display="flex"

})
ulbutton.addEventListener("click",()=>{
  populates_ul_boby()
  scrollToTop()
  homecontents.style.display="none"
  ul_contents.style.display="flex"

})
univenbutton.addEventListener("click",()=>{
  populates_univen_boby()
  scrollToTop()
  homecontents.style.display="none"
  univen_contents.style.display="flex"

  
})
umpbuttton.addEventListener("click",()=>{
  populates_ump_boby()
  scrollToTop()
  homecontents.style.display="none"
  ump_contents.style.display="flex"

  
})
uctbutton.addEventListener("click",()=>{
  populates_uct_boby()
  scrollToTop()
  homecontents.style.display="none"
  uct_contents.style.display="flex"

})
subutton.addEventListener("click",()=>{
  populates_su_boby()
  scrollToTop()
  homecontents.style.display="none"
  su_contents.style.display="flex"


})
uwcbutton.addEventListener("click",()=>{
  populates_uwc_boby()
  scrollToTop()
  homecontents.style.display="none"
  uwc_contents.style.display="flex"

})
cputbutton.addEventListener("click",()=>{
  populates_cput_boby()
  scrollToTop()
  homecontents.style.display="none"
  cput_contents.style.display="flex"

})
spubutton.addEventListener("click",()=>{
  populates_spu_boby()
  scrollToTop()
  homecontents.style.display="none"
  spu_contents.style.display="flex"


})
rubutton.addEventListener("click",()=>{
  populates_ru_boby()
  scrollToTop()
  homecontents.style.display="none"
  ru_contents.style.display="flex"

})
nmubutton.addEventListener("click",()=>{
  populates_nmu_boby()
  scrollToTop()
  homecontents.style.display="none"
  nmu_contents.style.display="flex"

})
wsubutton.addEventListener("click",()=>{
  populates_wsu_boby()
  scrollToTop()
  homecontents.style.display = "none"
  wsu_contents.style.display="flex"

})
ufhbutton.addEventListener("click",()=>{
  populates_ufh_boby()
  scrollToTop()
  homecontents.style.display="none"
  ufh_contents.style.display="flex"

})
ukznbutton.addEventListener("click",()=>{
  populates_ukzn_boby()
  scrollToTop()
  homecontents.style.display="none"
  ukzn_contents.style.display="flex"
})
dutbutton.addEventListener("click",()=>{
  populates_dut_boby()
  scrollToTop()
  homecontents.style.display="none"
  dut_contents.style.display="flex"

})
mutbutton.addEventListener("click",()=>{
  populates_mut_boby()
  scrollToTop()
  homecontents.style.display="none"
  mut_contents.style.display="flex"

})
ufsbutton.addEventListener("click",()=>{
  populates_ufs_boby()
  scrollToTop()
  homecontents.style.display="none"
  ufs_contents.style.display="flex"

})
nwubutton.addEventListener("click",()=>{
  populates_nwu_boby()
  scrollToTop()
  homecontents.style.display="none"
  nwu_contents.style.display="flex"

})
cutbutton.addEventListener("click",()=>{
  populates_cut_boby()
  scrollToTop()
  homecontents.style.display="none"
  cut_contents.style.display="flex"

})
vutbutton.addEventListener("click",()=>{
  populates_vut_boby()
  scrollToTop()
  homecontents.style.display="none"
  vut_contents.style.display="flex"
})
unisabutton.addEventListener("click",()=>{
  populates_unisa_boby()
  scrollToTop()
  homecontents.style.display="none"
  unisa_contents.style.display="flex"

})
sautbutton.addEventListener("click",()=>{
  populates_saut_boby()
  scrollToTop()
  homecontents.style.display="none"
  saut_contents.style.display="flex"
})

ujcloseButton.addEventListener('click',()=>{
    addscroll()
    homecontents.style.display="block"
    uj_contents.style.display = "none"
  })
  witsclosebutton.addEventListener('click',()=>{
    addscroll()
    homecontents.style.display="block"
    wits_contents.style.display = "none"
  })
  tutclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display = "block"
    tut_contents.style.display = "none"
  })
  smuclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    smu_contents.style.display="none"
  })
  ulclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    ul_contents.style.display="none"
  })
  univenclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    univen_contents.style.display="none"
  })
  umpclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    ump_contents.style.display="none"
  })
  uctclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    uct_contents.style.display="none"
  })
  suclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display= "block"
    su_contents.style.display="none"
  })
  uwcclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    uwc_contents.style.display="none"
  })
  cputclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    cput_contents.style.display="none"
  })
  spuclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    spu_contents.style.display="none"
  })
  ruclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    ru_contents.style.display="none"
  })
  nmuclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    nmu_contents.style.display="none"
  })
  wsuclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display = "block"
    wsu_contents.style.display = "none"
  })
  ufhclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    ufh_contents.style.display="none"
  })
  ukznclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    ukzn_contents.style.display="none"
  })
  dutclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    dut_contents.style.display="none"
  })
  mutclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    mut_contents.style.display="none"
  })
  ufsclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    ufs_contents.style.display="none"
  })
  nwuclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    nwu_contents.style.display="none"
  })
  cutclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    cut_contents.style.display="none"
  })
  vutclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    vut_contents.style.display="none"
  })
  unisaclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    unisa_contents.style.display="none"
  })
  sautclosebutton.addEventListener("click",()=>{
    addscroll()
    homecontents.style.display="block"
    saut_contents.style.display="none"
  })
function toggleSidebaruj(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_uj").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_uj").style.display = "none";
    }
}
function toggleSidebarwits(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_wits").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_wits").style.display = "none";
    }
}
function toggleSidebartut(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_tut").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_tut").style.display = "none";
    }
}
function toggleSidebarsmu(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_smu").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_smu").style.display = "none";
    }
}
function toggleSidebarul(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_ul").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_ul").style.display = "none";
    }
}
function toggleSidebaruniven(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_univen").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_univen").style.display = "none";
    }
}
function toggleSidebarump(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_ump").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_ump").style.display = "none";
    }
}
function toggleSidebaruct(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_uct").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_uct").style.display = "none";
    }
}
function toggleSidebarsu(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_su").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_su").style.display = "none";
    }
}
function toggleSidebaruwc(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_uwc").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_uwc").style.display = "none";
    }
}
function toggleSidebarcput(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_cput").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_cput").style.display = "none";
    }
}
function toggleSidebarspu(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_spu").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_spu").style.display = "none";
    }
}
function toggleSidebarru(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_ru").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_ru").style.display = "none";
    }
}
function toggleSidebarnmu(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_nmu").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_nmu").style.display = "none";
    }
}
function toggleSidebarwsu(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_wsu").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_wsu").style.display = "none";
    }
}
function toggleSidebarufh(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_ufh").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_ufh").style.display = "none";
    }
}
function toggleSidebarukzn(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_ukzn").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_ukzn").style.display = "none";
    }
}
function toggleSidebardut(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_dut").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_dut").style.display = "none";
    }
}
function toggleSidebarmut(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_mut").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_mut").style.display = "none";
    }
}
function toggleSidebarufs(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_ufs").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_ufs").style.display = "none";
    }
}
function toggleSidebarnwu(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_nwu").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_nwu").style.display = "none";
    }
}
function toggleSidebarcut(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_cut").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_cut").style.display = "none";
    }
}
function toggleSidebarvut(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_vut").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_vut").style.display = "none";
    }
}
function toggleSidebarunisa(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_unisa").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_unisa").style.display = "none";
    }
}
function toggleSidebarsaut(slider) {
    if (slider.classList.contains('fa-sliders')) {
        document.getElementById("side_bar_saut").style.display = "flex";
        slider.classList.remove('fa-sliders');
        slider.classList.add('fa-xmark');
    } else {
        slider.classList.remove('fa-xmark');
        slider.classList.add('fa-sliders');
        document.getElementById("side_bar_saut").style.display = "none";
    }
}

let sliderr_uj = document.getElementById("icon_slide_uj")
let sliderr_wits = document.getElementById("icon_slide_wits")
let sliderr_tut = document.getElementById("icon_slide_tut")
let sliderr_smu = document.getElementById("icon_slide_smu")
let sliderr_ump = document.getElementById("icon_slide_ump")
let sliderr_ul = document.getElementById("icon_slide_ul")
let sliderr_univen = document.getElementById("icon_slide_univen")
let sliderr_uct = document.getElementById("icon_slide_uct")
let sliderr_su = document.getElementById("icon_slide_su")
let sliderr_uwc = document.getElementById("icon_slide_uwc")
let sliderr_cput = document.getElementById("icon_slide_cput")
let sliderr_spu = document.getElementById("icon_slide_spu")
let sliderr_ru = document.getElementById("icon_slide_ru")
let sliderr_nmu = document.getElementById("icon_slide_nmu")
let sliderr_wsu = document.getElementById("icon_slide_wsu")
let sliderr_ufh = document.getElementById("icon_slide_ufh")
let sliderr_ukzn = document.getElementById("icon_slide_ukzn")
let sliderr_dut = document.getElementById("icon_slide_dut")
let sliderr_mut = document.getElementById("icon_slide_mut")
let sliderr_ufs = document.getElementById("icon_slide_ufs")
let sliderr_nwu = document.getElementById("icon_slide_nwu")
let sliderr_cut = document.getElementById("icon_slide_cut")
let sliderr_vut = document.getElementById("icon_slide_vut")
let sliderr_unisa = document.getElementById("icon_slide_unisa")
let sliderr_saut = document.getElementById("icon_slide_saut")

sliderr_uj.addEventListener("click",()=>{toggleSidebaruj(sliderr_uj)})
sliderr_wits.addEventListener("click",()=>{toggleSidebarwits(sliderr_wits)})
sliderr_tut.addEventListener("click",()=>{toggleSidebartut(sliderr_tut)})
sliderr_smu.addEventListener("click",()=>{toggleSidebarsmu(sliderr_smu)})
sliderr_ul.addEventListener("click",()=>{toggleSidebarul(sliderr_ul)})
sliderr_univen.addEventListener("click",()=>{toggleSidebaruniven(sliderr_univen)})
sliderr_ump.addEventListener("click",()=>{toggleSidebarump(sliderr_ump)})
sliderr_uct.addEventListener("click",()=>{toggleSidebaruct(sliderr_uct)})
sliderr_su.addEventListener("click",()=>{toggleSidebarsu(sliderr_su)})
sliderr_uwc.addEventListener("click",()=>{toggleSidebaruwc(sliderr_uwc)})
sliderr_spu.addEventListener("click",()=>{toggleSidebarspu(sliderr_spu)})
sliderr_ru.addEventListener("click",()=>{toggleSidebarru(sliderr_ru)})
sliderr_nmu.addEventListener("click",()=>{toggleSidebarnmu(sliderr_nmu)})
sliderr_wsu.addEventListener("click",()=>{toggleSidebarwsu(sliderr_wsu)})
sliderr_cput.addEventListener("click",()=>{toggleSidebarcput(sliderr_cput)})
sliderr_ufh.addEventListener("click",()=>{toggleSidebarufh(sliderr_ufh)})
sliderr_ukzn.addEventListener("click",()=>{toggleSidebarukzn(sliderr_ukzn)})
sliderr_dut.addEventListener("click",()=>{toggleSidebardut(sliderr_dut)})
sliderr_mut.addEventListener("click",()=>{toggleSidebarmut(sliderr_mut)})
sliderr_ufs.addEventListener("click",()=>{toggleSidebarufs(sliderr_ufs)})
sliderr_nwu.addEventListener("click",()=>{toggleSidebarnwu(sliderr_nwu)})
sliderr_cut.addEventListener("click",()=>{toggleSidebarcut(sliderr_cut)})
sliderr_vut.addEventListener("click",()=>{toggleSidebarvut(sliderr_vut)})
sliderr_unisa.addEventListener("click",()=>{toggleSidebarunisa(sliderr_unisa)})
sliderr_saut.addEventListener("click",()=>{toggleSidebarsaut(sliderr_saut)})

    //settings functionality
    
    let notification_body = document.getElementById("notification_body")
    let support_body = document.getElementById("support_body")
    let about_body = document.getElementById("about_body")
    let rate_body = document.getElementById("rate_body") 
    
    
    let defaultstyle = document.querySelector('.settingsmenu a')
    defaultstyle.style.color = "var(--blue)"
    defaultstyle.classList.add("clicked")
    
    document.querySelectorAll('.settingsmenu a').forEach(function(link) {
        link.addEventListener("click", function() {
            document.querySelectorAll('.settingsmenu a').forEach(function(link) {
                link.style.color = "var(--dark)"
                link.classList.remove("clicked")
            });
            this.style.color = "var(--blue)"
            this.classList.add("clicked")
            switch (this.id) {
                case "notifications":
                    notification_body.style.display = "block"
                    support_body.style.display = "none"
                    about_body.style.display = "none"
                    rate_body.style.display = "none"
                    break;
                case "support":
                    support_body.style.display = "block"
                    notification_body.style.display = "none"
                    about_body.style.display = "none"
                    rate_body.style.display = "none"
                    break;
                case "about":
                    support_body.style.display = "none"
                    notification_body.style.display = "none"
                    about_body.style.display = "flex"
                    rate_body.style.display = "none"
                    break;
                case "rateus":
                    support_body.style.display = "none"
                    notification_body.style.display = "none"
                    about_body.style.display = "none"
                    rate_body.style.display = "flex"
                    break;
                default:
                    break;
            }
        });
    });
    // Notifications Functionality 
    let notification_icon = document.getElementById("notification-body");

// Store initial states of other notification checkboxes
var initialStates = {};
document.querySelectorAll('.notifications input[type="checkbox"]:not(#main_notification)').forEach(function(notification) {
    initialStates[notification.id] = notification.checked;
});

// Function to update the state of other notifications
function updateNotificationsState() {
    var otherNotifications = document.querySelectorAll('.notifications input[type="checkbox"]:not(#main_notification)');
    if (mainNotification.checked) {
        notification_icon.style.display = "none";
        // Main notification is unchecked, restore initial states of other notifications
        otherNotifications.forEach(function(notification) {
            notification.disabled = true;
            notification.checked = initialStates[notification.id];
        });
    } else {
        notification_icon.style.display = "flex";
        // Main notification is checked, disable other notifications
        otherNotifications.forEach(function(notification) {
            notification.disabled = false;
        });
    }
}

// Get the main notification checkbox
var mainNotification = document.getElementById("main_notification");

// Initialize the state based on the default checked state of the main notification
updateNotificationsState();

// Add event listener to main notification checkbox to update states on change
mainNotification.addEventListener("change", updateNotificationsState);
               //chatbox
const textarea = document.querySelector('.chatbox-message-input')
const chatboxForm = document.querySelector('.chatbox-message-form')

textarea.addEventListener('input', function () {
	let line = textarea.value.split('\n').length

	if(textarea.rows < 6 || line < 6) {
		textarea.rows = line
	}

	if(textarea.rows > 1) {
		chatboxForm.style.alignItems = 'flex-end'
	} else {
		chatboxForm.style.alignItems = 'center'
	}
})
// TOGGLE CHATBOX
const chatboxToggle = document.querySelector('.chatbox-toggle')
const chatboxMessage = document.querySelector('.chatbox-message-wrapper')

chatboxToggle.addEventListener('click', function () {
	chatboxMessage.classList.toggle('show')
})
// DROPDOWN TOGGLE
const dropdownToggle = document.querySelector('.chatbox-message-dropdown-toggle')
const dropdownMenu = document.querySelector('.chatbox-message-dropdown-menu')

dropdownToggle.addEventListener('click', function () {
	dropdownMenu.classList.toggle('show')
})
// CHATBOX MESSAGE
const chatboxMessageWrapper = document.querySelector('.chatbox-message-content')
const chatboxNoMessage = document.querySelector('.chatbox-message-no-message')

chatboxForm.addEventListener('submit', function (e) {
	e.preventDefault()

	if(isValid(textarea.value)) {
		writeMessage()
		setTimeout(autoReply, 1000)
	}
})
function addZero(num) {
	return num < 10 ? '0'+num : num
}

function writeMessage() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item sent">
			<span class="chatbox-message-item-text">
				${textarea.value.trim().replace(/\n/g, '<br>\n')}
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	chatboxForm.style.alignItems = 'center'
	textarea.rows = 1
	textarea.focus()
	textarea.value = ''
	chatboxNoMessage.style.display = 'none'
	scrollBottom()
}

function autoReply() {
	const today = new Date()
	let message = `
		<div class="chatbox-message-item received">
			<span class="chatbox-message-item-text">
				Thank you for reporting a problem we will attend you as soon as posible!
			</span>
			<span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
		</div>
	`
	chatboxMessageWrapper.insertAdjacentHTML('beforeend', message)
	scrollBottom()
}

function scrollBottom() {
	chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight)
}

function isValid(value) {
	let text = value.replace(/\n/g, '')
	text = text.replace(/\s/g, '')

	return text.length > 0
}

let submit_rate = document.getElementById("submit_rate")
let post_button = document.getElementById("post_button")
let star_widget = document.getElementById("star-widget")
let editrate = document.getElementById("editrate")
editrate.addEventListener("click",()=>{
    post_button.style.display = "none"
    star_widget.style.display = ""
})
submit_rate.addEventListener("click",(e)=>{
    e.preventDefault()
    post_button.style.display = "block"
    star_widget.style.display = "none"
})
const notications = document.getElementById('notification-body');
const notification_body_content = document.getElementById("notification_body_content")
let notification_body_true = true
notications.addEventListener('click', function () {
    if(notification_body_true){
        notification_body_content.style.display = "flex"
        notification_body_true = false
    }else{
        notification_body_content.style.display = "none"
        notification_body_true = true
    }
})

var selectedOptions = [];
var totalQuantity = 0;
var finalvalue = 0;
            function addItem() {
                if (selectedOptions.length >= 6) {
                alert("You can only select up to 6 options.");
                return;
                }
                var selectElement = document.getElementById("itemSelect");
                var selectedItem = selectElement.value;
                var quantityElement = document.getElementById("quantityInput");
                var selectedQuantity = parseInt(quantityElement.value);
        
                // Check if option already selected
                for (var i = 0; i < selectedOptions.length; i++) {
                    if (selectedOptions[i].name === selectedItem) {
                        alert("Option already selected.");
                        return;
                    }
                }
                if (selectedQuantity > 0) {
                    // Add option to selectedOptions array
                    selectedOptions.push({ name: selectedItem, level: selectedQuantity});
                    
                    // Display selected option
                    var selectedOptionsDiv = document.getElementById("selectedOptions");
                    var optionItem = document.createElement("div");
                    optionItem.textContent = selectedItem + ": " + selectedQuantity;
                    optionItem.classList.add("option-item");
        
                    // Add remove button
                    var removeButton = document.createElement("button");
                    removeButton.textContent = " remove ";
                    removeButton.classList.add("remove-btn");
                    removeButton.onclick = function() {
                        var index = selectedOptions.indexOf(selectedItem);
                        selectedOptions.splice(index, 1);
                        selectedOptionsDiv.removeChild(optionItem);
                        totalQuantity -= selectedQuantity; // Subtract quantity of removed option
                        updateAggregateValue();
                        if (selectedOptions.length < 6) {
                            document.getElementById("updateButton").style.display = "none";
                        }  
                    };
                    optionItem.appendChild(removeButton);
        
                    selectedOptionsDiv.appendChild(optionItem);
        
                    // Update total quantity
                    totalQuantity += selectedQuantity;
                    // Clear input fields
                    quantityElement.value = "";
        
                    // Check if options count reaches 6
                    if (selectedOptions.length >= 6) {
                        document.getElementById("updateButton").style.display = "inline-block";
                    }
                    updateAggregateValue();
                }
            }
            function updateOptions() {
                var displayedOptionsDiv = document.getElementById("displayedOptions");
                displayedOptionsDiv.innerHTML = "";

                selectedOptions.forEach(function(option) {
                    var optionItem = document.createElement("div");
                    optionItem.textContent = option.name + ": " + option.level;
                    displayedOptionsDiv.appendChild(optionItem);
                });
                // Display aggregate value
                var aggregateDiv = document.createElement("div");
                aggregateDiv.textContent = "Total APS Score: " + totalQuantity;
                finalvalue = totalQuantity
                displayedOptionsDiv.appendChild(aggregateDiv);
                document.querySelector(".card2").style.display = "block";
                document.querySelector(".card1").style.display = "none";
            }
            function updateAggregateValue() {
                document.getElementById("aggregateValue").textContent = "Total APS Score: " + totalQuantity;

            }
            function goToCard1() {
                document.querySelector(".card2").style.display = "none";
                document.querySelector(".card1").style.display = "block";
            }
            let addButton = document.getElementById("addButton")
            let updateButton = document.getElementById("updateButton")
            let update_btn = document.getElementById("update_btn")

            addButton.addEventListener("click",()=>{
                addItem()
            })
            updateButton.addEventListener("click",()=>{
                updateOptions()
            })
            update_btn.addEventListener("click",()=>{
                goToCard1()
            })
            
            //--------------change username=------------------------------
let changeusername = document.getElementById("changeusername")
let showusername = document.getElementById("showusername")
let changeusernamepage = document.getElementById("changeusernamepage")
let cancelusernamepage = document.getElementById("cancelusernamepage")
let changeusernamevalue = document.getElementById("changeusernamevalue")
let changeusernamebutton = document.getElementById("changeusernamebutton")
let changeusernameinput = document.getElementById("changeusernameinput")
changeusername.addEventListener("click",()=>{
    showusername.style.display = "none"
    changeusernamepage.style.display = "block"
})
cancelusernamepage.addEventListener("click",()=>{
    showusername.style.display = ""
    changeusernamepage.style.display = "none"
})
changeusernamebutton.addEventListener("click",()=>{
    
    if(changeusernameinput.value == ""){
        showusername.style.display = ""
        changeusernamepage.style.display = "none"
        alert("invalid username")
    }else{
        changeusernamevalue.textContent = changeusernameinput.value
        showusername.style.display = ""
        changeusernamepage.style.display = "none"
        alert("username updated successfully")
    }
})
//----------------change email-----------------
let changeuseremail = document.getElementById("changeuseremail")
let showuseremail = document.getElementById("showuseremail")
let changeuseremailpage = document.getElementById("changeuseremailpage")
let canceluseremailpage = document.getElementById("canceluseremailpage")
let changeuseremailvalue = document.getElementById("changeuseremailvalue")
let changeuseremailbutton = document.getElementById("changeuseremailbutton")
let changeuseremailinput = document.getElementById("changeuseremailinput")
changeuseremail.addEventListener("click",()=>{
    showuseremail.style.display = "none"
    changeuseremailpage.style.display = "block"
})
canceluseremailpage.addEventListener("click",()=>{
    showuseremail.style.display = ""
    changeuseremailpage.style.display = "none"
})
changeuseremailbutton.addEventListener("click",()=>{
    
    if(changeuseremailinput.value == ""){
        showuseremail.style.display = ""
        changeuseremailpage.style.display = "none"
        alert("invalid email")
    }else{
        changeuseremailvalue.textContent = changeuseremailinput.value
        showuseremail.style.display = ""
        changeuseremailpage.style.display = "none"
        alert("email updated successfully")
    }
})
//------------pasword change----------------------
function a(b) {
    // Check length
    if (b.length < 8) {
        return false;
    }

    // Check for uppercase letter
    const hasUpperCase = /[A-Z]/.test(b);

    // Check for lowercase letter
    const hasLowerCase = /[a-z]/.test(b);

    // Check for number
    const hasNumber = /\d/.test(b);

    // Check for special character
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(b);

    // Return true if all conditions are met
    return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
}
let passwordbutton = document.getElementById("passwordbutton")
let cancelpasswordpage = document.getElementById("cancelpasswordpage")
let changepasswordbutton = document.getElementById("changepasswordbutton")
let changepasswordpage = document.getElementById("changepasswordpage")
let changepassword = document.getElementById("changepassword")
let changepasswordnput1 = document.getElementById("changepasswordnput1")
let changepasswordnput2 = document.getElementById("changepasswordnput2")
let changepasswordnput3 = document.getElementById("changepasswordnput3")
passwordbutton.addEventListener("click",()=>{
    changepasswordpage.style.display = "flex"
    changepassword.style.display = "none"
})
cancelpasswordpage.addEventListener("click",()=>{
    changepasswordpage.style.display = "none"
    changepassword.style.display = ""
})

function logout(){
     window.location.href = "login.html";
     validateLogin()
 }

changepasswordbutton.addEventListener("click",()=>{
    //put code here for password
    if(changepasswordnput1.value == "" || changepasswordnput1.value == ""){
        
        alert("Blank space detected")
    }
    else{
        if(changepasswordnput2.value == changepasswordnput3.value ){
            if(a(changepasswordnput3.value)){
                alert("password updated successfully")
                changepasswordpage.style.display = "none"
                changepassword.style.display = ""
            }else{
                alert("password is weak")
            }
        }else{
            alert("Password doent Mach!New password and confirmation password must be the same");
        }
    }
})
//===============================
