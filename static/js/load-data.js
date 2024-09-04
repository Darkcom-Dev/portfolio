fetch('static/js/linkedin-profile.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("profile_name").innerHTML = data.firstName + " " + data.lastName + " (darkcom)";
        profile_photo = document.getElementById("profile_photo")
        profile_photo.src = data.profilePicture;
    
        headline = document.getElementById("headline")
        headline.innerHTML = data.headline;
        geo = document.getElementById("geo")
        geo.innerHTML = data.geo.full;
        summary = document.getElementById("summary")
        summary.innerHTML = data.summary;

        // Work Experience
        
        company_name_0 = document.getElementById("company_name_0")
        company_name_0.innerHTML = data.position[0].companyName;
        company_role_0 = document.getElementById("company_role_0")
        company_role_0.innerHTML = data.position[0].title;
        role_description_0 = document.getElementById("role_description_0")
        role_description_0.innerHTML = data.position[0].description;
        company_date_0 = document.getElementById("company_date_0")
        company_date_0.innerHTML = data.position[0].start.year + "-" + data.position[0].end.year;

        
        company_name_1 = document.getElementById("company_name_1")
        company_name_1.innerHTML = data.position[1].companyName;
        company_role_1 = document.getElementById("company_role_1")
        company_role_1.innerHTML = data.position[1].title;
        role_description_1 = document.getElementById("role_description_1")
        role_description_1.innerHTML = data.position[1].description;
        company_date_1 = document.getElementById("company_date_1")
        company_date_1.innerHTML = data.position[1].start.year + "-" + data.position[1].end.year;

        
        company_name_2 = document.getElementById("company_name_2")
        company_name_2.innerHTML = data.position[2].companyName;
        company_role_2 = document.getElementById("company_role_2")
        company_role_2.innerHTML = data.position[2].title;
        role_description_2 = document.getElementById("role_description_2")
        role_description_2.innerHTML = data.position[2].description;
        company_date_2 = document.getElementById("company_date_2")
        company_date_2.innerHTML = data.position[2].start.year + "-" + data.position[2].end.year;

})
    .catch(error => {
        console.error('Error:', error);
});