/* app.js/Cassidy Ho/Cassidy Ho/Javascript for index.html, projects.html & contact.html */
"use strict";

// IIFE - Immediately Invoked Function Expression

(function () {

console.log(`App Started`);
console.info(`${document.title}`);

switch (document.title) {
    case "Cassidy Ho - Home":

        // MAIN/BIO PAGE
        // PERSONAL DESCRIPTION
        let personalDesc = document.getElementById("personalDesc");

        let personalDescContent = "Hello! I'm Cassidy Ho and I'm specializing in HTML, CSS, and the design aspect of the web. Currently in my first year of college at Georgian College and taking Interactive Media Design — Web. I hope to become a front-end web designer and create beautiful, intuitive, and functional designs.";

        personalDesc.textContent = personalDescContent;
    
    break;

    case "Cassidy Ho - Projects":

        // PROJECTS PAGE
        // NUTELLA IMAGES & DESCRIPTION
        let nutella = document.getElementById("nutellaWebsite");

        let nutellaDetails = "This is a Nutella Website I created in my 'COMP1002 - Web and Internet Fundamentals' class. The goal was to create a website of an existing brand. I chose Nutella because it's my most favourite spread. I believe I've built a decent looking design with functional links and forms. I've incorporated the colours of the Nutella jar and I think I've distributed the colours well.";

        nutella.textContent = nutellaDetails;

        // TRAVEL IMAGE & DESCRIPTION
        let travel = document.getElementById("travelWebsite");

        let travelDetails = "I've designed this Travel/Photography home page in my 'COMP1051 - Design Principles' class. The objective was to design a home page of your business. We had to incorporate the principles we learned in class to our home page such as balance, emphasis, space, typography, colour modes/schemes, and etc. With the mindset of travelling, I used a gradient of white and blue, the plane in the background creates an implied line towards the 'Contact' link and 'Book Your Appointment' link (which also has a royal blue book for emphasis as the call-to-action).";

        travel.textContent = travelDetails;

        // NAPOLEON DYNAMITE POSTER & DESCRIPTION
        let napoleon = document.getElementById("napoleonPoster");

        let napoleonDetails = "In 'COMP1002 - Web and Internet Fundamentals' class, we were suppose to replace the text in a movie poster with only HTML. I chose to do the 'Napoleon Dynamite' movie poster and I believe I did a good job in creating a copy of the movie poster. I've also created a mini website showcasing the description of the movie, the link to the poster and reivews.";

        napoleon.textContent = napoleonDetails;

    break;

    case "Cassidy Ho - Contact Me":

        // CONTACT PAGE
        // FOR <H1> TAG
        let contactme = document.getElementById("contactme");

        let contactmeContent = "Contact Me";

        contactme.textContent = contactmeContent;

        // GETTING INPUTS FROM USER
        let fname = document.getElementById("fname");
        let lname = document.getElementById("lname");
        let email = document.getElementById("email");
        let message = document.getElementById("message");
        let submitButton = document.getElementById("submit");

        // DISPLAYING INPUTS FROM USER ONTO CONSOLE
        submitButton.addEventListener("click", function(event){event.preventDefault();

            console.log(fname.value);
            console.log(lname.value);
            console.log(email.value);
            console.log(message.value);
        })

    break; 

}
    // COPYRIGHT
        let copyright = document.getElementById("copyright");

        let copyrightContent = "Copyright © 2017 by Cassidy Ho";

        copyright.textContent = copyrightContent;

})(); // end of IIFE