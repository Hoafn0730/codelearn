import html from '../../utils/html.js';

import PhaseItem from './PhaseItem.js';

function PhaseRow({ data }) {
    return html`
        <div class="row d-flex-center">
            <div class="col l-6 d-flex-center">
                <h5 class="phase_header">${data.header}</h5>
            </div>
            <div class="col l-12 d-flex-center">${data.listPhaseCourses.map((item) => PhaseItem({ data: item }))}</div>
        </div>
    `;
}

export default PhaseRow;
