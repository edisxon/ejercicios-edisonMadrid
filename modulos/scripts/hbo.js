

import { filterSeriesByPlatform, renderSeries} from './modules.js';
import {series} from './modules.js';

console.log(series);




const hboContainer = document.getElementById('hboContainer');


const hboSeries = filterSeriesByPlatform(series, "HBO");
renderSeries(hboSeries, hboContainer);
