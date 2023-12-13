import html from '../utils/html.js';

function CurriculumItem({ data, index }) {
    return html`
        <li class="curriculum-item">
            <div class="curriculum_panel">
                <div class="curriculum_heading">${index + 1}. ${data.title}</div>
                <div class="icon-container">
                    <i class="fas fa-chevron-right"></i>
                </div>
            </div>
            <div class="curriculum_collapse">
                ${data.children.map(
                    (child, index) => /*html*/ `
                    <div class="curriculum_lessionItem">
                    <span>${index + 1}. ${child.nameLesson}</span>
                    <span class="duration">${child.duration}</span>
                </div>
            `,
                )}
            </div>
        </li>
    `;
}

export default CurriculumItem;
