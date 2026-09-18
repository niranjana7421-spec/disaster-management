// Emergency service buttons

function callService(number) {
    alert("Emergency Service: " + number + "\n\nOn a real device, this can be connected to the phone dialer.");
}


// Find nearby hospitals

function findHospitals() {
    alert(
        "Nearby Hospitals\n\n" +
        "Location services and map integration can be connected here."
    );
}


// Emergency button

function showEmergency() {
    alert(
        "🚨 EMERGENCY CONTACTS\n\n" +
        "Police: 112\n" +
        "Ambulance: 108\n" +
        "Fire & Rescue: 101"
    );
}


// Incident report

document.getElementById("reportForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const incident = document.getElementById("incidentType").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;

    alert(
        "Incident Report Submitted!\n\n" +
        "Type: " + incident + "\n" +
        "Location: " + location + "\n\n" +
        "Thank you for helping keep the community safe."
    );

    this.reset();
});


// AI Disaster Assistant

function openAssistant() {

    const question = prompt(
        "🤖 Disaster Assistant\n\n" +
        "Ask a disaster safety question:"
    );

    if (question) {

        alert(
            "AI Disaster Assistant\n\n" +
            "Your question: " + question +
            "\n\n" +
            "This section can later be connected to an AI API to provide real-time disaster guidance."
        );
    }
}


// Volunteer

function joinVolunteer() {

    alert(
        "Volunteer Registration\n\n" +
        "A volunteer registration form can be added here."
    );
}