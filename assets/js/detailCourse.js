const curriculumItems = document.querySelectorAll('.curriculum-item');
curriculumItems.forEach((item) => {
    const curriculumPanel = item.querySelector('.curriculum_panel');
    const icon = item.querySelector('i');
    const curriculumCollapse = curriculumPanel.nextElementSibling;

    curriculumPanel.onclick = () => {
        curriculumItems.forEach((other) => {
            if (other !== item) {
                const otherCurriculumPanel = other.querySelector('.curriculum_panel');
                const otherIcon = other.querySelector('i');
                const otherCurriculumCollapse = otherCurriculumPanel.nextElementSibling;
                otherCurriculumCollapse.classList.remove('active');
                otherIcon.classList.remove('active');
                otherCurriculumCollapse.style.maxHeight = '0';
            }
        });

        curriculumCollapse.classList.toggle('active');
        icon.classList.toggle('active');
        if (curriculumCollapse.classList.contains('active')) {
            curriculumCollapse.style.maxHeight = curriculumCollapse.scrollHeight + 'px';
        } else {
            curriculumCollapse.style.maxHeight = '0';
        }
    };
});
