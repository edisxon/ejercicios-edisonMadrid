

import { filterSeriesByPlatform, renderSeries} from './modules.js';
import {series} from './modules.js';

console.log(series);




const hboContainer = document.getElementById('disneyContainer');


const hboSeries = filterSeriesByPlatform(series, "Disney+");
renderSeries(hboSeries, hboContainer);
