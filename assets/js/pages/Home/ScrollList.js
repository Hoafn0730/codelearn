import html from '../../utils/html.js';

import CommonItem from '../../components/CommonItem.js';

function ScrollList({ data }) {
    return html`
        <div class="scrollList_vertical">
            <div class="scrollList_heading">
                <h1>${data.title}</h1>
            </div>
            <div class="scrollList_body">
                <div class="row">${data.listCourses.map((data) => CommonItem({ data }))}</div>
            </div>
        </div>
    `;
}

export default ScrollList;
