import html from '../../utils/html.js';
import * as roadmapService from '../../services/roadmapService.js';

import PhaseRow from './PhaseRow.js';

async function RoadMap() {
    const process = roadmapService.getRoadMap();
    const data = await process;
    console.log('🚀 ~ file: RoadMap.js:7 ~ RoadMap ~ data:', data);
    return html`
        <div class="grid wide">
            <div class="roadmap_wrapper">
                <div class="row">
                    <div class="col l-12 d-flex-center">
                        <h1 class="roadmap_heading">Road Map</h1>
                    </div>
                    <div class="col l-12 d-flex-center">
                        <div class="step_wrapper">
                            <div class="step_horizontal">
                                <div class="step-item">
                                    <div class="step_icon">
                                        <i class="fa-solid fa-pencil"></i>
                                    </div>
                                    <span class="step_label">1. Học kiến thức</span>
                                </div>

                                <div class="step-item">
                                    <div class="step_icon">
                                        <i class="fa-solid fa-desktop"></i>
                                    </div>
                                    <span class="step_label">2. Thực hành</span>
                                </div>

                                <div class="step-item">
                                    <div class="step_icon">
                                        <i class="fa-solid fa-rocket"></i>
                                    </div>
                                    <span class="step_label">3. Triển khai thực tế</span>
                                </div>

                                <span class="step_line"></span>
                            </div>
                        </div>
                    </div>
                </div>

                ${data.map((item) => PhaseRow({ data: item }))}
            </div>
        </div>
    `;
}

export default RoadMap;
