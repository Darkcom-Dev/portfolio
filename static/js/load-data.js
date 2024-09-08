// Navigator language
const idiomaPrincipal = navigator.language; // Idioma principal
let currentLanguage = idiomaPrincipal.startsWith("es") ? "es" : "en";

// Menu titles
let menu_experience = document.getElementById("menu_experience")
let menu_projects = document.getElementById("menu_projects")
let menu_about_me = document.getElementById("menu_about_me")
let menu_contact = document.getElementById("menu_contact")

const menu_language = document.getElementById("menu_language")
// Section titles
const section_about_me = document.getElementById("section_about_me")
const section_skills = document.getElementById("section_skills")
const section_projects = document.getElementById("section_projects")
const section_experience = document.getElementById("section_experience")
const section_contact = document.getElementById("section_contact")
const section_extras = document.getElementById("section_extras")
// data
let data_object = null;
const profile_name = document.getElementById("profile_name")
const profile_photo = document.getElementById("profile_photo")
const headline = document.getElementById("headline")
const geo = document.getElementById("geo")
const summary = document.getElementById("summary")

const company_name_0 = document.getElementById("company_name_0")
const company_role_0 = document.getElementById("company_role_0")
const role_description_0 = document.getElementById("role_description_0")
const company_date_0 = document.getElementById("company_date_0")

const company_name_1 = document.getElementById("company_name_1")
const company_role_1 = document.getElementById("company_role_1")
const role_description_1 = document.getElementById("role_description_1")
const company_date_1 = document.getElementById("company_date_1")

const company_name_2 = document.getElementById("company_name_2")
const company_role_2 = document.getElementById("company_role_2")
const role_description_2 = document.getElementById("role_description_2")
const company_date_2 = document.getElementById("company_date_2")

const project_1_title = document.getElementById("project_1_title")
const project_1_description = document.getElementById("project_1_description")
const project_1_image = document.getElementById("project_1_image")
const project_1_code = document.getElementById("project_1_code")
const project_1_demo = document.getElementById("project_1_demo")
const project_1_badges = document.getElementById("project_1_badges")

const project_2_title = document.getElementById("project_2_title")
const project_2_description = document.getElementById("project_2_description")
const project_2_image = document.getElementById("project_2_image")
const project_2_code = document.getElementById("project_2_code")
const project_2_demo = document.getElementById("project_2_demo")
const project_2_badges = document.getElementById("project_2_badges")

const project_3_title = document.getElementById("project_3_title")
const project_3_description = document.getElementById("project_3_description")
const project_3_image = document.getElementById("project_3_image")
const project_3_code = document.getElementById("project_3_code")
const project_3_demo = document.getElementById("project_3_demo")
const project_3_badges = document.getElementById("project_3_badges")




function setInterfaceLanguage() {
    
    if (currentLanguage === "es") {
        // Español
        menu_experience.innerText = "Experiencia";
        menu_projects.innerHTML = '<i class="fa fa-project"> Proyectos</i>';
        menu_about_me.innerHTML = '<i class="fa fa-person"> Sobre mi</i>';
        menu_contact.innerHTML = '<i class="fa fa-mail"> Contacto</i>';
        menu_language.innerHTML = " ES";
        // Section titles
        section_about_me.innerHTML = '<i class="fa fa-person"> Sobre mi</i>';
        section_skills.innerHTML = "Habilidades";
        section_projects.innerHTML = '<i class="fa fa-project"> Proyectos</i>';
        section_experience.innerHTML = "Experiencia";
        section_contact.innerHTML = '<i class="fa fa-mail"> Contacto</i>';
        section_extras.innerHTML = "Extras";
    }
    else {
        // Inglés
        menu_experience.innerHTML = "Experience";
        menu_projects.innerHTML = '<i class="fa fa-project"> Projects</i>';
        menu_about_me.innerHTML = '<i class="fa fa-person"> About me</i>';
        menu_contact.innerHTML = '<i class="fa fa-mail"> Contact</i>';
        menu_language.innerHTML = " EN";

        section_about_me.innerHTML = '<i class="fa fa-person"> About me</i>';
        section_skills.innerHTML = "Skills";
        section_projects.innerHTML = '<i class="fa fa-project"> Projects</i>';
        section_experience.innerHTML = "Experiences";
        section_contact.innerHTML = '<i class="fa fa-mail"> Contact</i>';
        section_extras.innerHTML = "Extras";
    }

}

function setDataLanguage(data) {
    if (currentLanguage === "es") {
        headline.innerHTML = data.multiLocale.es_ES.headline;
        summary.innerHTML = data.multiLocale.es_ES.summary;

        company_role_0.innerHTML = data.position[0].multiLocale.es_ES.title;
        role_description_0.innerHTML = data.position[0].multiLocale.es_ES.description;

        company_role_1.innerHTML = data.position[1].multiLocale.es_ES.title;
        role_description_1.innerHTML = data.position[1].multiLocale.es_ES.description;

        company_role_2.innerHTML = data.position[2].multiLocale.es_ES.title;
        role_description_2.innerHTML = data.position[2].multiLocale.es_ES.description;

        project_1_description.innerHTML = data.projects[0].multiLocale.es_ES.description;
        project_2_description.innerHTML = data.projects[1].multiLocale.es_ES.description;
        project_3_description.innerHTML = data.projects[2].multiLocale.es_ES.description;
    }
    else {
        headline.innerHTML = data.multiLocale.en_US.headline;
        summary.innerHTML = data.multiLocale.en_US.summary;

        company_role_0.innerHTML = data.position[0].multiLocale.en_US.title;
        role_description_0.innerHTML = data.position[0].multiLocale.en_US.description;

        company_role_1.innerHTML = data.position[1].multiLocale.en_US.title;
        role_description_1.innerHTML = data.position[1].multiLocale.en_US.description;

        company_role_2.innerHTML = data.position[2].multiLocale.en_US.title;
        role_description_2.innerHTML = data.position[2].multiLocale.en_US.description;

        project_1_description.innerHTML = data.projects[0].multiLocale.en_US.description;
        project_2_description.innerHTML = data.projects[1].multiLocale.en_US.description;
        project_3_description.innerHTML = data.projects[2].multiLocale.en_US.description;
    }
}

menu_language.addEventListener("click", () => {
    currentLanguage = currentLanguage === "es" ? "en" : "es";

    console.log(currentLanguage);
    setInterfaceLanguage();
    setDataLanguage(data_object);
});



fetch('static/js/data.json')
    .then(response => response.json())
    .then(data => {
        data_object = (data);
        profile_name.innerHTML = data.firstName + " " + data.lastName + " (darkcom)";
        profile_photo.src = data.profilePicture;
    
        geo.innerHTML = data.geo.full;

        // Work Experience
        
        company_name_0.innerHTML = data.position[0].companyName;
        company_date_0.innerHTML = data.position[0].start.year + "-" + data.position[0].end.year;

        company_name_1.innerHTML = data.position[1].companyName;
        company_date_1.innerHTML = data.position[1].start.year + "-" + data.position[1].end.year;

        company_name_2.innerHTML = data.position[2].companyName;
        company_date_2.innerHTML = data.position[2].start.year + "-" + data.position[2].end.year;

        // Projects

        project_1_title.innerHTML = data.projects[0].projectName;
        project_1_badges.innerHTML = "";
        for (let i = 0; i < data.projects[0].projectTechnologies.length; i++) {
            let icon_class = (data.projects[0].projectTechnologies[i].icon).toString();
            let tech_name = data.projects[0].projectTechnologies[i].name
            project_1_badges.innerHTML += `<span class='badge'>
            <i class=${icon_class}> ${tech_name}</i>
            </span>`;
        }
        project_1_image.src = data.projects[0].projectImage;
        let code_link_1 = data.projects[0].projectCode;
        let demo_link_1 = data.projects[0].projectUrl;
        let onclick_link_1 = `window.location.href='${code_link_1}'`;
        let onclick_demo_1 = `window.location.href='${demo_link_1}'`;
        project_1_code.onclick = onclick_link_1;
        project_1_demo.onclick = onclick_demo_1;

        project_2_title.innerHTML = data.projects[1].projectName;
        project_2_badges.innerHTML = "";
        for (let i = 0; i < data.projects[1].projectTechnologies.length; i++) {
            let icon_class = (data.projects[1].projectTechnologies[i].icon).toString();
            let tech_name = data.projects[1].projectTechnologies[i].name
            project_2_badges.innerHTML += `<span class='badge'>
            <i class=${icon_class}> ${tech_name}</i>
            </span>`;
        }
        project_2_image.src = data.projects[1].projectImage;
        let code_link_2 = data.projects[1].projectCode;
        let demo_link_2 = data.projects[1].projectUrl;
        let onclick_link_2 = `window.location.href='${code_link_2}'`;
        let onclick_demo_2 = `window.location.href='${demo_link_2}'`;
        project_2_code.onclick = onclick_link_2;
        project_2_demo.onclick = onclick_demo_2;

        project_3_title.innerHTML = data.projects[2].projectName;
        project_3_badges.innerHTML = "";
        for (let i = 0; i < data.projects[2].projectTechnologies.length; i++) {
            let icon_class = (data.projects[2].projectTechnologies[i].icon).toString();
            let tech_name = data.projects[2].projectTechnologies[i].name
            project_3_badges.innerHTML += `<span class='badge'>
            <i class=${icon_class}> ${tech_name}</i>
            </span>`;
        }
        project_3_image.src = data.projects[2].projectImage;
        let code_link_3 = data.projects[2].projectCode;
        let demo_link_3 = data.projects[2].projectUrl;
        let onclick_link_3 = `window.location.href='${code_link_3}'`;
        let onclick_demo_3 = `window.location.href='${demo_link_3}'`;
        project_3_code.onclick = onclick_link_3;
        project_3_demo.onclick = onclick_demo_3;
        setDataLanguage(data);

})
    .catch(error => {
        console.error('Error:', error);
});

setInterfaceLanguage();