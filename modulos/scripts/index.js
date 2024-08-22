

import { filterSeriesByPlatform, renderSeries} from './modules.js';
import {series} from './modules.js';

console.log(series);

const netflix = "Netflix"

const netflixContainer = document.getElementById('netflixContainer');
const netflixSeries = filterSeriesByPlatform(series, "Netflix");
renderSeries(netflixSeries, netflixContainer);



const hboContainer = document.getElementById('hboContainer');


const hboSeries = filterSeriesByPlatform(series, "HBO");
renderSeries(hboSeries, hboContainer);

