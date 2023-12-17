import html from '../../utils/html.js';

function PhaseItem({ data }) {
    return html`
        <div class="phase-courses">
            <span class="phase_title">${data.title}</span>
            <hr />
            <div class="row phase-courses-list">
                ${data.images.map(
                    (item) => html`<div class="col l-3 m-4 c-6 phase-courses-item">
                        <img class="courses_img" src="${item.image}" alt="${item.name}" />
                    </div>`,
                )}
            </div>
        </div>
    `;
}

export default PhaseItem;
