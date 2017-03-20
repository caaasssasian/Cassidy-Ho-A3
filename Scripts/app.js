/* app.js/Cassidy Ho/Cassidy Ho/Javascript for index.html, projects.html & contact.html */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () {

    console.log(`App Started`);
    console.info(`${document.title}`);

    // initiating the Start function
    function Start() {
        PageContent();
        Copyright();
    }

    // initiating the Pages and their content
    function PageContent() {
        switch (document.title) {
            case "Cassidy Ho - Home":
                HomePage();
                break;

            case "Cassidy Ho - Projects":
                ProjectsPage();
                break;

            case "Cassidy Ho - Contact Me":
                ContactPage();
                break;
        }
    }

    function HomePage() {
        // MAIN/BIO PAGE
        // PERSONAL DESCRIPTION
        let data = {};

        let XHR = new XMLHttpRequest();

        XHR.open("GET", "../paragraph.json", true);

        XHR.send(null);

        XHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                data = JSON.parse(this.responseText);
            }
        };

        XHR.addEventListener("load", function () {
            let personalDesc = document.getElementById("personalDesc");

            data.home.forEach(function (home) {
                let newRow = document.createElement("p");

                newRow.innerHTML = `<p>${home.paragraph}</p>`;

                personalDesc.appendChild(newRow);
            }, this);
        });
    }

    function ProjectsPage() {
        // PROJECTS PAGE
        // NUTELLA IMAGES & DESCRIPTION
        let data = {};

        let XHR = new XMLHttpRequest();

        XHR.open("GET", "../paragraph.json", true);

        XHR.send(null);

        XHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                data = JSON.parse(this.responseText);
            }
        };

        XHR.addEventListener("load", function () {
            // NUTELLA PARAGRAPH
            let nutella = document.getElementById("nutellaWebsite");

            // TRAVEL PARAGRAPH
            let travel = document.getElementById("travelWebsite");

            // NAPOLEON PARAGRAPH
            let napoleon = document.getElementById("napoleonPoster");

            data.project.forEach(function (project) {
                // DISPLAY NUTELLA PARAGRAPH
                let nutellaRow = document.createElement("p");

                nutella.innerHTML = `<p>${project.nutellaParagraph}</p>`;

                nutellaWebsite.appendChild(nutellaRow);

                // DISPLAY TRAVEL PARAGRAPH
                let travelRow = document.createElement("p");

                travelRow.innerHTML = `<p>${project.travelParagraph}</p>`;

                travelWebsite.appendChild(travelRow);

                // DISPLAY NAPOLEON PARAGRAPH
                let napoleonRow = document.createElement("p");

                napoleon.innerHTML = `<p>${project.napoleonParagraph}</p>`;

                napoleonPoster.appendChild(napoleonRow);
            }, this);
        });
    }

    function ContactPage() {
        // CONTACT PAGE
        // FOR <H1> TAG
        let data = {};

        let XHR = new XMLHttpRequest();

        XHR.open("GET", "../paragraph.json", true);

        XHR.send(null);

        XHR.onreadystatechange = function () {
            if ((this.readyState === 4) && (this.status === 200)) {
                data = JSON.parse(this.responseText);
            }
        };

        XHR.addEventListener("load", function () {
            let contactMe = document.getElementById("contactMe");

            data.contact.forEach(function (contact) {
                // DISPLAY CONTACT ME HEADING
                let contactH1 = document.createElement("h1");

                contactH1.innerHTML = `<h1>${contact.contactMe}</h1>`;

                contactMe.appendChild(contactH1);
            }, this);

        });

        // GETTING INPUTS FROM USER
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        let submitButton = document.getElementById("submit");

        // DISPLAYING INPUTS FROM USER ONTO CONSOLE
        submitButton.addEventListener("click", function (event) {
            event.preventDefault();

            console.log(fname.value);
            console.log(lname.value);
            console.log(email.value);
            console.log(message.value);
        })

    }

    function Copyright() {
        // COPYRIGHT
        let copyright = document.getElementById("copyright");

        let copyrightContent = "Copyright © 2017 by Cassidy Ho";

        copyright.textContent = copyrightContent;
    }


    // calling the Start function when the window loads
    window.onload = Start;

})(); // end of IIFE