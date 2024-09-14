var _a;
// Handle form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        degree: formData.get('degree'),
        gradDate: formData.get('gradDate'),
        jobTitle: formData.get('jobTitle'),
        companyName: formData.get('companyName'),
        duration: formData.get('duration'),
        responsibilities: formData.get('responsibilities'),
        skills: formData.get('skills'),
        profilePic: formData.get('profilePic')
    };
    generateResume(resumeData);
});
// Function to generate and display the resume
function generateResume(data) {
    var resumeHtml = '';
    if (data.profilePic) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageSrc = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            resumeHtml += "<h2>Profile Picture</h2><img src=\"".concat(imageSrc, "\" alt=\"Profile Picture\" style=\"max-width: 200px; max-height: 200px; display: block; margin-bottom: 20px;\">");
            resumeHtml += "\n                <h1>".concat(data.name, "</h1>\n                <p>Email: ").concat(data.email, "</p>\n                <p>Phone: ").concat(data.phone, "</p>\n                <h2>Education</h2>\n                <p>Institution: ").concat(data.education, "</p>\n                <p>Degree: ").concat(data.degree, "</p>\n                <p>Graduation Date: ").concat(data.gradDate, "</p>\n                <h2>Work Experience</h2>\n                <p>Job Title: ").concat(data.jobTitle, "</p>\n                <p>Company: ").concat(data.companyName, "</p>\n                <p>Duration: ").concat(data.duration, "</p>\n                <p>Responsibilities: ").concat(data.responsibilities, "</p>\n                <h2>Skills</h2>\n                <p>").concat(data.skills, "</p>\n            ");
            document.getElementById('resumeOutput').innerHTML = resumeHtml;
        };
        reader.readAsDataURL(data.profilePic);
    }
    else {
        resumeHtml += "\n            <h1>".concat(data.name, "</h1>\n            <p>Email: ").concat(data.email, "</p>\n            <p>Phone: ").concat(data.phone, "</p>\n            <h2>Education</h2>\n            <p>Institution: ").concat(data.education, "</p>\n            <p>Degree: ").concat(data.degree, "</p>\n            <p>Graduation Date: ").concat(data.gradDate, "</p>\n            <h2>Work Experience</h2>\n            <p>Job Title: ").concat(data.jobTitle, "</p>\n            <p>Company: ").concat(data.companyName, "</p>\n            <p>Duration: ").concat(data.duration, "</p>\n            <p>Responsibilities: ").concat(data.responsibilities, "</p>\n            <h2>Skills</h2>\n            <p>").concat(data.skills, "</p>\n        ");
        document.getElementById('resumeOutput').innerHTML = resumeHtml;
    }
}
