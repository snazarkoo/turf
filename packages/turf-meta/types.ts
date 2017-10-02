import * as helpers from '@turf/helpers'
import {
    featureCollection,
    point,
    Feature,
    Point
} from '@turf/helpers'
import * as meta from './'
import {
    coordReduce,
    coordEach,
    propEach,
    propReduce,
    featureReduce,
    featureEach,
    coordAll,
    geomReduce,
    geomEach,
    flattenReduce,
    flattenEach,
    segmentReduce,
    segmentEach,
    lineReduce,
    lineEach
} from './'

// Fixtures
const pt = helpers.point([0, 0])
const line = helpers.lineString([[0, 0], [1, 1]])
const poly = helpers.polygon([[[0, 0], [1, 1], [0, 1], [0, 0]]])
const multiPoly = helpers.multiPolygon([[[[0, 0], [1, 1], [0, 1], [0, 0]]]])
const multiLine = helpers.multiLineString([[[0, 0], [1, 1], [0, 1], [0, 0]], [[2, 2], [3, 3]]])
const geomCollection = helpers.geometryCollection([pt.geometry, line.geometry])
const features = helpers.featureCollection([pt, line])

interface CustomProps {
    foo: string
    bar: number
}

/**
 * meta.coordEach
 */
const coordEachValue: void = meta.coordEach(pt, coords => coords)
coordEach(pt, (coords, index) => coords)
meta.coordEach(pt, (coords, index) => coords)
meta.coordEach(pt.geometry, coords => { const equal: number[] = coords })
meta.coordEach(line, coords => { const equal: number[] = coords })
meta.coordEach(poly, coords => { const equal: number[] = coords })
meta.coordEach(multiPoly, coords => { const equal: number[] = coords })
meta.coordEach(geomCollection, coords => coords)

/**
 * meta.coordReduce
 */
const coordReduceValue: number = meta.coordReduce(pt, (previous, coords) => 1 + 1)
coordReduce(pt, (previous, coords, index) => coords)
meta.coordReduce(pt, (previous, coords, index) => coords)
meta.coordReduce(pt, (previous, coords, index) => 1 + 1, 0)
meta.coordReduce<number[]>(pt, (previous, coords) => coords)
meta.coordReduce(geomCollection, (previous, coords) => coords)

/**
 * meta.propReduce
 */
const propReduceValue: number = meta.propReduce(poly, (previous, prop) => 1 + 1)
propReduce(poly, (previous, prop) => 1 + 1, 0)
meta.propReduce(poly, (previous, prop) => 1 + 1, 0)
meta.propReduce(features, (previous, prop) => prop)
meta.propReduce(poly, (previous, prop, index) => prop)
meta.propReduce<number, CustomProps>(poly, (previous, prop) => 1 + 1)
meta.propReduce(geomCollection, (previous, prop) => prop)

/**
 * meta.propEach
 */
const propEachValue: void = meta.propEach(poly, prop => prop)
propEach(features, prop => prop)
meta.propEach(features, prop => prop)
meta.propEach(poly, (prop, index) => prop)
meta.propEach<CustomProps>(poly, prop => prop.bar)
meta.propEach(geomCollection, prop => prop)

/**
 * meta.coordAll
 */
coordAll(poly)
const coords: Array<Array<number>> = meta.coordAll(poly)

/**
 * meta.featureReduce
 */
const featureReduceValue: number = meta.featureReduce(poly, (previous, feature) => 1 + 1)
featureReduce(poly, (previous, feature) => 1 + 1, 0)
meta.featureReduce(poly, (previous, feature) => 1 + 1, 0)
meta.featureReduce(features, (previous, feature) => feature)
meta.featureReduce(poly, (previous, feature, index) => feature)
meta.featureReduce(geomCollection, (previous, feature, index) => feature)

/**
 * meta.featureEach
 */
const featureEachValue: void = meta.featureEach(poly, feature => feature)
featureEach(features, feature => feature)
meta.featureEach(features, feature => feature)
meta.featureEach(poly, (feature, index) => feature)
meta.featureEach(geomCollection, (feature, index) => feature)

/**
 * meta.geomReduce
 */
const geomReduceValue: number = meta.geomReduce(poly, (previous, geom) => 1 + 1)
geomReduce(poly, (previous, geom) => 1 + 1, 0)
meta.geomReduce(poly, (previous, geom) => 1 + 1, 0)
meta.geomReduce(features, (previous, geom) => geom)
meta.geomReduce(poly, (previous, geom, index, props) => geom)
meta.geomReduce(geomCollection, (previous, geom, index, props) => geom)

/**
 * meta.geomEach
 */
const geomEachValue: void = meta.geomEach(poly, geom => geom)
geomEach(features, geom => geom)
meta.geomEach(features, geom => geom)
meta.geomEach(poly, (geom, index, props) => geom)
meta.geomEach(geomCollection, (geom, index, props) => geom)

/**
 * meta.flattenReduce
 */
const flattenReduceValue: number = meta.flattenReduce(poly, (previous, feature) => 1 + 1)
flattenReduce(poly, (previous, feature) => 1 + 1, 0)
meta.flattenReduce(poly, (previous, feature) => 1 + 1, 0)
meta.flattenReduce(features, (previous, feature) => feature)
meta.flattenReduce(poly, (previous, feature, index, props) => feature)
meta.flattenReduce(geomCollection, (previous, feature, index, props) => feature)

/**
 * meta.flattenEach
 */
const flattenEachValue: void = meta.flattenEach(poly, feature => feature)
flattenEach(features, feature => feature)
meta.flattenEach(features, feature => feature)
meta.flattenEach(poly.geometry, (feature, index, props) => feature)
meta.flattenEach(geomCollection, (feature, index, props) => feature)

/**
 * meta.segmentReduce
 */
const segmentReduceValue: number = meta.segmentReduce(poly, () => 1 + 1)
segmentReduce(poly, previousValue => previousValue)
meta.segmentReduce(poly, previousValue => previousValue)
meta.segmentReduce(poly, (previousValue, currentSegment) => currentSegment)
meta.segmentReduce(poly, (previousValue, currentSegment) => 1 + 1, 0)
meta.segmentReduce(features, (previousValue, currentSegment) => currentSegment)
meta.segmentReduce(poly, (previousValue, currentSegment, currentIndex) => currentSegment)
meta.segmentReduce(geomCollection, (previousValue, currentSegment, currentIndex) => currentSegment)
meta.segmentReduce(geomCollection, (previousValue, currentSegment, currentIndex, currentSubIndex) => currentSegment)

/**
 * meta.segmentEach
 */
const segmentEachValue: void = meta.segmentEach(poly, () => {})
segmentEach(poly, currentSegment => currentSegment)
meta.segmentEach(poly, currentSegment => currentSegment)
meta.segmentEach(features, currentSegment => currentSegment)
meta.segmentEach(poly.geometry, (currentSegment, currentIndex) => currentSegment)
meta.segmentEach(geomCollection, (currentSegment, currentIndex) => currentSegment)
meta.segmentEach(geomCollection, (currentSegment, currentIndex, currentSubIndex) => currentSegment)

/**
 * meta.lineEach
 */
// meta.lineEach(pt, () => {}) // Argument of type 'Feature<Point>' is not assignable to parameter of type 'LineString | Polygon | MultiPolygon | MultiLineString | Feature<Lines>'.
const lineEachValue: void = meta.lineEach(line, () => {})
lineEach(line, currentLine => currentLine)
meta.lineEach(line, currentLine => currentLine)
meta.lineEach(multiLine, (currentLine, currentIndex) => currentLine)
meta.lineEach(poly, currentLine => currentLine)
meta.lineEach(poly, (currentLine, currentIndex) => currentLine)
meta.lineEach(multiPoly, (currentLine, currentIndex, currentSubIndex) => currentLine)

/**
 * meta.lineReduce
 */
// meta.lineReduce(pt, () => {}) // Argument of type 'Feature<Point>' is not assignable to parameter of type 'LineString | Polygon | MultiPolygon | MultiLineString | Feature<Lines>'.
const lineReduceValue: number = meta.lineReduce(line, () => 1 + 1)
lineReduce(line, previousValue => previousValue)
meta.lineReduce(line, previousValue => previousValue)
meta.lineReduce(line, (previousValue, currentLine) => currentLine)
meta.lineReduce(line, (previousValue, currentLine) => 1 + 1, 0)
meta.lineReduce(multiLine, (previousValue, currentLine) => currentLine)
meta.lineReduce(multiLine, (previousValue, currentLine, currentIndex) => currentLine)
meta.lineReduce(poly, (previousValue, currentLine) => currentLine)
meta.lineReduce(poly, (previousValue, currentLine, currentIndex) => currentLine)
meta.lineReduce(poly, (previousValue, currentLine, currentIndex) => 1 + 1, 1)
meta.lineReduce(multiPoly, (previousValue, currentLine, currentIndex, currentSubIndex) => currentLine)
meta.lineReduce(multiPoly, (previousValue, currentLine, currentIndex, currentSubIndex) => 1 + 1, 1)

/**
 * Translate Feature Properties
 */
interface CustomPoint extends Feature<Point> {
    properties: {
        foo: string
        bar: number
        [key: string]: any
    }
}

interface CustomPoints {
    type: 'FeatureCollection';
    features: CustomPoint[]
}

const customPoint = point([10, 20], {foo: 'abc', bar: 123})
const customPoints: CustomPoints = featureCollection([customPoint])

featureEach(customPoints, pt => {
    pt.properties.bar
})