// Data featuring categorized skills based on the resume
const portfolioData = {
    "personal": {
        "name": "Deepak Sharma",
        "title": "Senior Salesforce Developer",
        "location": "Jaipur (RJ)-302039",
        "email": "deepak.mylist@outlook.com",
        "phone": "+91-7062323012"
    },
    "socials": [
        { "platform": "GitHub", "link": "https://github.com/Collabalist", "display": "collabalist" },
        { "platform": "LinkedIn", "link": "#", "display": "Linked/Collabalist" },
        { "platform": "StackOverflow", "link": "#", "display": "deepak-sharma" }
    ],
    "skills": [
        {
            "category": "Salesforce Core & Development",
            "items": [
                { "name": "Apex", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Trigger", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "SOQL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "SOSL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "JavaScript", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
                { "name": "LWC", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Aura", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Visualforce", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "SLDS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Force.com Sites", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "REST/SOAP Integration", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" }
            ]
        },
        {
            "category": "Salesforce Clouds",
            "items": [
                { "name": "CPQ", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Service Cloud", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Sales Cloud", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "ServiceMax", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "FSL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "Community (Experience)", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" }
            ]
        },
        {
            "category": "Android & IoT",
            "items": [
                { "name": "Java", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
                { "name": "MySQL", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
                { "name": "Android", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" },
                { "name": "Firebase", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
                { "name": "Socket.io", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg" },
                { "name": "C", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
                { "name": "C++", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" }
            ]
        },
        {
            "category": "Miscellaneous Tools",
            "items": [
                { "name": "Azure DevOps", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg" },
                { "name": "Jira", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" },
                { "name": "Git", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
                { "name": "Gitlab", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
                { "name": "Github", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
                { "name": "ANT (Salesforce)", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" },
                { "name": "HTML", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
                { "name": "CSS", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
                { "name": "XML", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/xml/xml-original.svg" },
                { "name": "JSON", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" }
            ]
        },
        {
            "category": "IDEs",
            "items": [
                { "name": "VS Code", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
                { "name": "IntelliJ", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" },
                { "name": "Eclipse", "icon": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original.svg" }
            ]
        }
    ],
    "experience": [
        {
            "role": "Team Lead",
            "company": "Lirik Infotech, Jaipur",
            "logo": "https://logo.clearbit.com/lirik.com",
            "duration": "August 2024 - PRESENT",
            "description": "Working as Tech Lead for Salesforce DEV team. Developing proof of concepts, handling code reviews, solution designs, and supporting Integration/Data teams."
        },
        {
            "role": "Application Development Team Lead",
            "company": "Accenture India, Jaipur",
            "logo": "https://logo.clearbit.com/accenture.com",
            "duration": "July 2022 - August 2024",
            "description": "Solution Architect & Team Lead. Focused on LWC, Flows, and CPQ development. Handled code reviews and solution designs."
        },
        {
            "role": "Consultant (Solution Engineer)",
            "company": "Capgemini India, Bengaluru",
            "logo": "https://logo.clearbit.com/capgemini.com",
            "duration": "February 2019 - July 2022",
            "description": "Salesforce & ServiceMax Developer/Solution Engineer. Gathered requirements, module designs, and ServiceMax customization."
        },
        {
            "role": "Android Developer",
            "company": "The Nine Hertz India, Jaipur",
            "logo": "https://logo.clearbit.com/theninehertz.com",
            "duration": "April 2017 - October 2018",
            "description": "Built navigation structures, fixed bugs in legacy apps, designed custom views, and wrote API documentation."
        }
    ],
    "education": [
        {
            "degree": "B.Tech in CSE (69%)",
            "institution": "Rajasthan Institute of Engineering and Technology Jaipur",
            "duration": "July 2013 - June 2016"
        },
        {
            "degree": "Diploma in Computer Engineering (76.76%)",
            "institution": "Govt. Polytechnic of Obulavaripalli",
            "duration": "July 2013 - June 2016"
        }
    ],
    "projects": [
        {
            "title": "Google-Feed",
            "description": "RSS Feed in Salesforce using Lightning component and Apex. Supports multiple news categories and languages."
        },
        {
            "title": "Extra-Validation",
            "description": "Screen flow utility to set up extra-validation instead of using Connect to Element in Salesforce."
        },
        {
            "title": "Retrolet",
            "description": "A simple Android library that simplifies RetroFit2.0."
        },
        {
            "title": "Crashlet",
            "description": "An Android library that helps manage app crashes efficiently."
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    
    // Theme Toggle Logic
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");
    
    const sunIcon = `<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>`;
    const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;

    themeToggle.addEventListener("click", () => {
        const currentTheme = document.documentElement.getAttribute("data-theme");
        if (currentTheme === "dark") {
            document.documentElement.removeAttribute("data-theme");
            themeIcon.innerHTML = moonIcon; 
        } else {
            document.documentElement.setAttribute("data-theme", "dark");
            themeIcon.innerHTML = sunIcon; 
        }
    });

    // Populate Header
    document.getElementById("name").textContent = portfolioData.personal.name;
    document.getElementById("title").textContent = portfolioData.personal.title;

    // Populate Social & Contact Links
    const socialContainer = document.getElementById("social-links");
    portfolioData.socials.forEach(social => {
        socialContainer.innerHTML += `<a href="${social.link}" target="_blank">${social.platform}: ${social.display}</a>`;
    });

    // Populate Categorized Skills
    const skillsContainer = document.getElementById("skills-list");
    portfolioData.skills.forEach(skillCategory => {
        let categoryHTML = `
            <div class="skill-category">
                <h4>${skillCategory.category}</h4>
                <div class="pill-container">
        `;
        
        skillCategory.items.forEach(skill => {
            categoryHTML += `
                <span class="pill">
                    <img src="${skill.icon}" alt="${skill.name} icon" class="skill-icon" onerror="this.style.display='none'"> 
                    ${skill.name}
                </span>`;
        });
        
        categoryHTML += `</div></div>`;
        skillsContainer.innerHTML += categoryHTML;
    });

    // Populate Experience with Logos
    const expContainer = document.getElementById("experience-list");
    portfolioData.experience.forEach(exp => {
        expContainer.innerHTML += `
            <div class="timeline-item">
                <div class="exp-header">
                    <img src="${exp.logo}" alt="${exp.company} Logo" class="company-logo" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYTFhMWFhIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHJlY3QgeD0iMiIgeT0iNyIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiByeD0iMiIgcnk9IjIiPjwvcmVjdD48cGF0aCBkPSJNMTYgMjFWNWEyIDIgMCAwIDAtMi0yaC00YTIgMiAwIDAgMC0yIDJ2MTYiPjwvcGF0aD48L3N2Zz4='">
                    <div>
                        <h4>${exp.role}</h4>
                        <h5>${exp.company}</h5>
                    </div>
                </div>
                <span class="exp-date">${exp.duration}</span>
                <p class="exp-desc">${exp.description}</p>
            </div>
        `;
    });

    // Populate Utilities
    const projectsContainer = document.getElementById("projects-list");
    portfolioData.projects.forEach(project => {
        projectsContainer.innerHTML += `
            <div class="project-item">
                <h4>${project.title}</h4>
                <p>${project.description}</p>
            </div>
        `;
    });

    // Populate Education
    const eduContainer = document.getElementById("education-list");
    portfolioData.education.forEach(edu => {
        eduContainer.innerHTML += `
            <div class="edu-item">
                <h4>${edu.degree}</h4>
                <span>${edu.institution} | ${edu.duration}</span>
            </div>
        `;
    });
});