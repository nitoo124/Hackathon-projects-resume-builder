function generateResume(data) {
    var resumeHtml = '';
    if (data.profilePic) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var _a;
            var imageSrc = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
            resumeHtml += "<h2>Profile Picture</h2><img src=\"".concat(imageSrc, "\" alt=\"Profile Picture\" style=\"max-width: 200px; max-height: 200px; display: block; margin-bottom: 20px;\">");
            resumeHtml += getEditableContent(data);
            document.getElementById('resumeOutput').innerHTML = resumeHtml;
            attachEditListeners();
        };
        reader.readAsDataURL(data.profilePic);
    }
    else {
        resumeHtml += getEditableContent(data);
        document.getElementById('resumeOutput').innerHTML = resumeHtml;
        attachEditListeners();
    }
}
// Helper function to get editable content HTML
function getEditableContent(data) {
    return "\n        <h1 contenteditable=\"true\" data-key=\"name\">".concat(data.name, "</h1>\n        <p>Email: <span contenteditable=\"true\" data-key=\"email\">").concat(data.email, "</span></p>\n        <p>Phone: <span contenteditable=\"true\" data-key=\"phone\">").concat(data.phone, "</span></p>\n        <h2>Education</h2>\n        <p>Institution: <span contenteditable=\"true\" data-key=\"education\">").concat(data.education, "</span></p>\n        <p>Degree: <span contenteditable=\"true\" data-key=\"degree\">").concat(data.degree, "</span></p>\n        <p>Graduation Date: <span contenteditable=\"true\" data-key=\"gradDate\">").concat(data.gradDate, "</span></p>\n        <h2>Work Experience</h2>\n        <p>Job Title: <span contenteditable=\"true\" data-key=\"jobTitle\">").concat(data.jobTitle, "</span></p>\n        <p>Company: <span contenteditable=\"true\" data-key=\"companyName\">").concat(data.companyName, "</span></p>\n        <p>Duration: <span contenteditable=\"true\" data-key=\"duration\">").concat(data.duration, "</span></p>\n        <p>Responsibilities: <span contenteditable=\"true\" data-key=\"responsibilities\">").concat(data.responsibilities, "</span></p>\n        <h2>Skills</h2>\n        <p><span contenteditable=\"true\" data-key=\"skills\">").concat(data.skills, "</span></p>\n    ");
}
// Attach event listeners to editable elements
function attachEditListeners() {
    document.querySelectorAll('[contenteditable="true"]').forEach(function (element) {
        element.addEventListener('blur', function (event) {
            var target = event.target;
            var key = target.getAttribute('data-key');
            if (key) {
                updateResumeData(key, target.innerText);
            }
        });
    });
}
// Update resume data based on changes
function updateResumeData(key, value) {
    var formData = new FormData(document.getElementById('resumeForm'));
    formData.set(key, value);
    var updatedData = {
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
    // Regenerate resume with updated data
    generateResume(updatedData);
}
