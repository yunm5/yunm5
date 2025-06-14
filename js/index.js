document.addEventListener('DOMContentLoaded', function() {
    
    // About 버튼
    const aboutBtn = document.querySelector("#aboutBtn");
    // Skills 버튼 추가
    const skillsBtn = document.querySelector("#skillsBtn");
    
    const popWidth = 600;
    const popHeight = 500;

    // About 버튼 이벤트
    if (aboutBtn) {
        aboutBtn.addEventListener("click", function() {
            let left = (screen.availWidth - popWidth) / 2;
            let top = (screen.availHeight - popHeight) / 2;
            window.open("about.html", "aboutWindow", `width=${popWidth},height=${popHeight},left=${left},top=${top}`);
        });
    }

    // Skills 버튼 이벤트 추가
    if (skillsBtn) {
        skillsBtn.addEventListener("click", function() {
            let left = (screen.availWidth - popWidth) / 2;
            let top = (screen.availHeight - popHeight) / 2;
            window.open("skills.html", "skillsWindow", `width=${popWidth},height=${popHeight},left=${left},top=${top}`);
        });
    }
});
