var _a, _b, _c;
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
            document.getElementById('resumeActions').style.display = 'block'; // Show actions
            document.getElementById('resumeForm').style.display = 'none'; // Hide form
        };
        reader.readAsDataURL(data.profilePic);
    }
    else {
        resumeHtml += "\n            <h1>".concat(data.name, "</h1>\n            <p>Email: ").concat(data.email, "</p>\n            <p>Phone: ").concat(data.phone, "</p>\n            <h2>Education</h2>\n            <p>Institution: ").concat(data.education, "</p>\n            <p>Degree: ").concat(data.degree, "</p>\n            <p>Graduation Date: ").concat(data.gradDate, "</p>\n            <h2>Work Experience</h2>\n            <p>Job Title: ").concat(data.jobTitle, "</p>\n            <p>Company: ").concat(data.companyName, "</p>\n            <p>Duration: ").concat(data.duration, "</p>\n            <p>Responsibilities: ").concat(data.responsibilities, "</p>\n            <h2>Skills</h2>\n            <p>").concat(data.skills, "</p>\n        ");
        document.getElementById('resumeOutput').innerHTML = resumeHtml;
        document.getElementById('resumeActions').style.display = 'block'; // Show actions
        document.getElementById('resumeForm').style.display = 'none'; // Hide form
    }
}
// Handle edit button click
(_b = document.getElementById('editResume')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    document.getElementById('resumeOutput').innerHTML = ''; // Clear the resume output
    document.getElementById('resumeActions').style.display = 'none'; // Hide actions
    document.getElementById('resumeForm').style.display = 'block'; // Show form
});
// Handle download button click
(_c = document.getElementById('downloadResume')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var _a;
    var resumeHtml = (_a = document.getElementById('resumeOutput')) === null || _a === void 0 ? void 0 : _a.innerHTML;
    if (resumeHtml) {
        var blob = new Blob([resumeHtml], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'resume.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
});
