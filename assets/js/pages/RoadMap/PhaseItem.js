import html from '../../utils/html.js';

function PhaseItem({ data }) {
    return html`
        <div class="phase-courses">
            <span class="phase_title">${data.title}</span>
            <hr />
            <div class="phase-courses-list">
                ${data.images.map(
                    (item) => html`<div class="phase-courses-item">
                        <img class="courses_img" src="${item.image}" alt="${item.name}" />
                    </div>`,
                )}
            </div>
        </div>
    `;
}

export default PhaseItem;
