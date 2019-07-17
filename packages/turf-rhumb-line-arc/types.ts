import {point} from '@turf/helpers';
import rhumbLineArc from './';

const center = point([-75.343, 39.984]);
const bearing1 = 10;
const bearing2 = -30;
const radius = 5;
const steps = 10;
const units = 'miles';

rhumbLineArc(center, radius, bearing1, bearing2);
rhumbLineArc(center, radius, bearing1, bearing2, {steps});
rhumbLineArc(center, radius, bearing1, bearing2, {steps, units});
