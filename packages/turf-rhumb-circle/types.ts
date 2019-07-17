import {point} from '@turf/helpers';
import rhumbCircle from '.';

const center = point([-75.343, 39.984]);
const units = 'kilometers';
const radius = 5;
const steps = 10;

rhumbCircle(center, radius);
rhumbCircle(center, radius, {steps});
rhumbCircle(center, radius, {steps, units});
rhumbCircle([-75, 39], radius, {steps, units, properties: {foo: 'bar'}});
