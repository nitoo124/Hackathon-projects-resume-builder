// Define an interface to structure resume data
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    degree: string;
    gradDate: string;
    jobTitle: string;
    companyName: string;
    duration: string;
    responsibilities: string;
    skills: string;
    profilePic?: File;
}

// Handle form submission
document.getElementById('resumeForm')?.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const resumeData: ResumeData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        education: formData.get('education') as string,
        degree: formData.get('degree') as string,
        gradDate: formData.get('gradDate') as string,
        jobTitle: formData.get('jobTitle') as string,
        companyName: formData.get('companyName') as string,
        duration: formData.get('duration') as string,
        responsibilities: formData.get('responsibilities') as string,
        skills: formData.get('skills') as string,
        profilePic: formData.get('profilePic') as File
    };

    generateResume(resumeData);
});

// Function to generate and display the resume
function generateResume(data: ResumeData) {
    let resumeHtml = '';

    if (data.profilePic) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const imageSrc = event.target?.result as string;
            resumeHtml += `<h2>Profile Picture</h2><img src="${imageSrc}" alt="Profile Picture" style="max-width: 200px; max-height: 200px; display: block; margin-bottom: 20px;">`;
            resumeHtml += `
                <h1>${data.name}</h1>
                <p>Email: ${data.email}</p>
                <p>Phone: ${data.phone}</p>
                <h2>Education</h2>
                <p>Institution: ${data.education}</p>
                <p>Degree: ${data.degree}</p>
                <p>Graduation Date: ${data.gradDate}</p>
                <h2>Work Experience</h2>
                <p>Job Title: ${data.jobTitle}</p>
                <p>Company: ${data.companyName}</p>
                <p>Duration: ${data.duration}</p>
                <p>Responsibilities: ${data.responsibilities}</p>
                <h2>Skills</h2>
                <p>${data.skills}</p>
            `;
            document.getElementById('resumeOutput')!.innerHTML = resumeHtml;
        };
        reader.readAsDataURL(data.profilePic);
    } else {
        resumeHtml += `
            <h1>${data.name}</h1>
            <p>Email: ${data.email}</p>
            <p>Phone: ${data.phone}</p>
            <h2>Education</h2>
            <p>Institution: ${data.education}</p>
            <p>Degree: ${data.degree}</p>
            <p>Graduation Date: ${data.gradDate}</p>
            <h2>Work Experience</h2>
            <p>Job Title: ${data.jobTitle}</p>
            <p>Company: ${data.companyName}</p>
            <p>Duration: ${data.duration}</p>
            <p>Responsibilities: ${data.responsibilities}</p>
            <h2>Skills</h2>
            <p>${data.skills}</p>
        `;
        document.getElementById('resumeOutput')!.innerHTML = resumeHtml;
    }
}
