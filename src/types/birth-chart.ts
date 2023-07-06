export interface BirthChart {
    origin: Origin
    _language: string
    _houseSystem: string
    _zodiac: string
    _ascendant: Ascendant
    _midheaven: Midheaven
    _sunSign: SunSign
    _houses: House[]
    _zodiacCusps: ZodiacCusp[]
    _aspectTypes: string[]
    _aspectPoints: string[]
    _aspectWithPoints: string[]
    _customOrbs: CustomOrbs
    Ephemeris: Ephemeris
    _celestialBodies: CelestialBodies
    _celestialPoints: CelestialPoints
    _aspects: Aspects
  }
  
  export interface Origin {
    year: number
    month: number
    date: number
    hour: number
    minute: number
    latitude: number
    longitude: number
    timeObject: TimeObject
    timezone: Timezone
    localTime: string
    localTimeFormatted: string
    utcTime: string
    utcTimeFormatted: string
    julianDate: number
    localSiderealTime: number
  }
  
  export interface TimeObject {
    year: number
    month: number
    date: number
    hour: number
    minute: number
    second: number
    millisecond: number
  }
  
  export interface Timezone {
    name: string
    abbrs: string[]
    untils: number | undefined[]
    offsets: number[]
    population: number
  }
  
  export interface Ascendant {
    key: string
    label: string
    Sign: Sign
    ChartPosition: ChartPosition
  }
  
  export interface Sign {
    key: string
    zodiac: string
    label: string
    startDate: StartDate
    endDate: EndDate
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition {
    Horizon: Horizon
    Ecliptic: Ecliptic
  }
  
  export interface Horizon {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees2
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees2 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Midheaven {
    key: string
    label: string
    Sign: Sign2
    ChartPosition: ChartPosition2
  }
  
  export interface Sign2 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate2
    endDate: EndDate2
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate2 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate2 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition2 {
    Horizon: Horizon2
    Ecliptic: Ecliptic2
  }
  
  export interface Horizon2 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees3
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees3 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic2 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees4
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees4 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface SunSign {
    key: string
    zodiac: string
    label: string
    startDate: StartDate3
    endDate: EndDate3
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate3 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate3 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface House {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition3
    Sign: Sign3
  }
  
  export interface ChartPosition3 {
    StartPosition: StartPosition
    EndPosition: EndPosition
  }
  
  export interface StartPosition {
    Horizon: Horizon3
    Ecliptic: Ecliptic3
  }
  
  export interface Horizon3 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees5
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees5 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic3 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees6
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees6 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition {
    Horizon: Horizon4
    Ecliptic: Ecliptic4
  }
  
  export interface Horizon4 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees7
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees7 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic4 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees8
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees8 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign3 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate4
    endDate: EndDate4
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate4 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate4 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ZodiacCusp {
    ChartPosition: ChartPosition4
    Sign: Sign4
  }
  
  export interface ChartPosition4 {
    Horizon: Horizon5
    Ecliptic: Ecliptic5
  }
  
  export interface Horizon5 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees9
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees9 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic5 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees10
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees10 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign4 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate5
    endDate: EndDate5
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate5 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate5 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface CustomOrbs {}
  
  export interface Ephemeris {
    _calculateMotion: boolean
    _calcHeliocentricLongitudesOnly: boolean
    _calculateShadows: boolean
    _moonQuarterApproximationValue: number
    Observer: Observer
    Earth: Earth
    Results: Result[]
    sun: Sun
    moon: Moon
    mercury: Mercury
    venus: Venus
    mars: Mars
    jupiter: Jupiter
    saturn: Saturn
    uranus: Uranus
    neptune: Neptune
    pluto: Pluto
    chiron: Chiron
    sirius: Sirius
  }
  
  export interface Observer {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date
  }
  
  export interface Date {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Earth {
    _body: Body
    _key: string
    locals: Locals
    aberration: Aberration
    lightTime: LightTime
    position: Position
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable2
  }
  
  export interface Body {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration {}
  
  export interface LightTime {}
  
  export interface Position {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable2 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Result {
    _body: Body2
    _key: string
    locals: Locals3
    aberration: Aberration4
    lightTime: any
    position: Position3
    semiAxis: number
    key: string
    type: string
    weight?: number
    motion: Motion
    ra?: number
    dec?: number
    quarterApproximationValue?: number
    orbit?: Orbit
    _earthBody?: EarthBody
    _observer?: Observer2
    _calculateMotion?: boolean
    distance?: number
    epoch?: number
    semiDiameter?: number
    inclination?: number
    node?: number
    perihelion?: number
    dailyMotion?: number
    eccentricity?: number
    anomaly?: number
    equinox?: number
    magnitude?: number
    ptable?: Ptable7
    longitude?: number
    equinoxEclipticLonLat?: EquinoxEclipticLonLat3
    perihelionDistance?: number
    hmsRa?: HmsRa2
    hmsDec?: HmsDec2
    raMotion?: number
    decMotion?: number
    velocity?: number
    parallax?: number
  }
  
  export interface Body2 {
    key: string
    type: string
    weight?: number
    _key?: string
    locals?: Locals2
    aberration?: Aberration2
    lightTime?: number
    position?: Position2
    distance?: number
    epoch?: number
    semiAxis?: number
    semiDiameter?: number
    _body?: Body3
    inclination?: number
    node?: number
    perihelion?: number
    dailyMotion?: number
    eccentricity?: number
    anomaly?: number
    equinox?: number
    magnitude?: number
    ptable?: Ptable4
    longitude?: number
    equinoxEclipticLonLat?: EquinoxEclipticLonLat
    perihelionDistance?: number
    hmsRa?: HmsRa
    hmsDec?: HmsDec
    raMotion?: number
    decMotion?: number
    velocity?: number
    parallax?: number
    ra?: number
    dec?: number
  }
  
  export interface Locals2 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration2 {
    dRA: number
    dDec: number
  }
  
  export interface Position2 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual
    astrometricJ2000: AstrometricJ2000
    astrometricB1950: AstrometricB1950
    deflection: Deflection
    aberration: Aberration3
    nutation: Nutation
    constellation: string
    apparent: Apparent
    apparentGeocentric: ApparentGeocentric
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz
  }
  
  export interface ApproxVisual {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ2000 {
    dRA: number
    dDec: number
    ra: Ra
    dec: Dec
  }
  
  export interface Ra {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB1950 {
    dRA: number
    dDec: number
    ra: Ra2
    dec: Dec2
  }
  
  export interface Ra2 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec2 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection {
    sunElongation: number
    lightDeflection: LightDeflection
  }
  
  export interface LightDeflection {
    dRA: number
    dDec: number
  }
  
  export interface Aberration3 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation {
    dRA: number
    dDec: number
  }
  
  export interface Apparent {
    dRA: number
    dDec: number
    ra: Ra3
    dec: Dec3
  }
  
  export interface Ra3 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec3 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric {
    "0": number
    "1": number
    "2": number
    "3": N3
    "4": N4
  }
  
  export interface N3 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N4 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime
    diurnalAberation: DiurnalAberation
    transit: Transit
    diurnalParallax: DiurnalParallax
    atmosphericRefraction: AtmosphericRefraction
    topocentric: Topocentric
  }
  
  export interface LocalApparentSiderialTime {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit {
    approxLocalMeridian: ApproxLocalMeridian
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt
    approxSetUT: ApproxSetUt
  }
  
  export interface ApproxLocalMeridian {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa
    dDec: DDec
  }
  
  export interface DRa {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body3 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    perihelionDistance?: number
    ptable?: Ptable3
  }
  
  export interface Ptable3 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable4 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat {
    "0": number
    "1": number
    "2": number
    "3": N32
    "4": N42
  }
  
  export interface N32 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N42 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface HmsRa {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface HmsDec {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface Locals3 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration4 {
    dRA?: number
    dDec?: number
  }
  
  export interface Position3 {
    equinoxEclipticLonLat?: EquinoxEclipticLonLat2
    lightTime?: number
    aberration?: Aberration5
    constellation?: string
    apparent: Apparent2
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz2
    polar?: number[]
    rect?: number[]
    nutation?: Nutation2
    geometric?: Geometric
    annualAberration?: AnnualAberration
    apparentGeocentric?: ApparentGeocentric2
    dHorizontalParallax?: number
    horizontalParallax?: HorizontalParallax
    dSemidiameter?: number
    Semidiameter?: Semidiameter
    sunElongation?: number
    illuminatedFraction?: number
    phaseDecimal?: number
    phaseDaysPast?: number
    phaseDaysDistance?: number
    phaseQuarter?: number
    phaseQuarterString?: string
    shapeString?: string
    shapeDirectionString?: string
    withinQuarterApproximation?: boolean
    trueGeocentricDistance?: number
    equatorialDiameter?: number
    approxVisual?: ApproxVisual2
    astrometricJ2000?: AstrometricJ20002
    astrometricB1950?: AstrometricB19502
    deflection?: Deflection2
    approxVisualMagnitude?: number
    astrimetricJ2000?: AstrimetricJ2000
    astrimetricB1950?: AstrimetricB1950
    astrimetricDate?: AstrimetricDate
  }
  
  export interface EquinoxEclipticLonLat2 {
    "0": number
    "1": number
    "2": number
    "3": N33
    "4": N43
  }
  
  export interface N33 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N43 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Aberration5 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent2 {
    dRA: number
    dDec: number
    ra: Ra4
    dec: Dec4
  }
  
  export interface Ra4 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec4 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz2 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime2
    diurnalAberation: DiurnalAberation2
    transit: Transit2
    diurnalParallax: DiurnalParallax2
    atmosphericRefraction: AtmosphericRefraction2
    topocentric: Topocentric2
  }
  
  export interface LocalApparentSiderialTime2 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation2 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit2 {
    approxLocalMeridian: ApproxLocalMeridian2
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt2
    approxSetUT: ApproxSetUt2
  }
  
  export interface ApproxLocalMeridian2 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt2 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt2 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax2 {
    ra: number
    dec: number
    dRA?: number
    dDec?: number
  }
  
  export interface AtmosphericRefraction2 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric2 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa2
    dDec: DDec2
  }
  
  export interface DRa2 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec2 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Nutation2 {
    dRA: number
    dDec: number
  }
  
  export interface Geometric {
    longitude: number
    latitude: number
    distance: number
  }
  
  export interface AnnualAberration {
    dRA: number
    dDec: number
  }
  
  export interface ApparentGeocentric2 {
    "0"?: number
    "1"?: number
    "2"?: number
    "3"?: N34
    "4"?: N44
    longitude?: number
    dLongitude?: number
    latitude?: number
    dLatitude?: number
    distance?: number
  }
  
  export interface N34 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N44 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface HorizontalParallax {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Semidiameter {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApproxVisual2 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20002 {
    dRA: number
    dDec: number
    ra: Ra5
    dec: Dec5
  }
  
  export interface Ra5 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec5 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19502 {
    dRA: number
    dDec: number
    ra: Ra6
    dec: Dec6
  }
  
  export interface Ra6 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec6 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection2 {
    sunElongation: number
    lightDeflection: LightDeflection2
  }
  
  export interface LightDeflection2 {
    dRA: number
    dDec: number
  }
  
  export interface AstrimetricJ2000 {
    dRA: number
    dDec: number
    ra: Ra7
    dec: Dec7
  }
  
  export interface Ra7 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec7 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrimetricB1950 {
    dRA: number
    dDec: number
    ra: Ra8
    dec: Dec8
  }
  
  export interface Ra8 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec8 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrimetricDate {
    dRA: number
    dDec: number
    ra: Ra9
    dec: Dec9
  }
  
  export interface Ra9 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec9 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion {
    oneSecondMotionAmount?: number
    isRetrograde?: boolean
  }
  
  export interface Orbit {
    meanAscendingNode: MeanAscendingNode
    meanDescendingNode: MeanDescendingNode
    meanPerigee: MeanPerigee
    meanApogee: MeanApogee
  }
  
  export interface MeanAscendingNode {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface MeanDescendingNode {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface MeanPerigee {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface MeanApogee {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface EarthBody {
    _body: Body4
    _key: string
    locals: Locals4
    aberration: Aberration6
    lightTime: LightTime2
    position: Position4
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable6
  }
  
  export interface Body4 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable5
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable5 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals4 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration6 {}
  
  export interface LightTime2 {}
  
  export interface Position4 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable6 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer2 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date2
  }
  
  export interface Date2 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Ptable7 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat3 {
    "0": number
    "1": number
    "2": number
    "3": N35
    "4": N45
  }
  
  export interface N35 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N45 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface HmsRa2 {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface HmsDec2 {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface Sun {
    _body: Body5
    _key: string
    locals: Locals5
    aberration: Aberration7
    lightTime: LightTime3
    position: Position5
    semiAxis: number
    key: string
    type: string
    weight: number
    motion: Motion2
  }
  
  export interface Body5 {
    key: string
    type: string
    weight: number
  }
  
  export interface Locals5 {
    dp: any[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration7 {}
  
  export interface LightTime3 {}
  
  export interface Position5 {
    equinoxEclipticLonLat: EquinoxEclipticLonLat4
    lightTime: number
    aberration: Aberration8
    constellation: string
    apparent: Apparent3
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz3
  }
  
  export interface EquinoxEclipticLonLat4 {
    "0": number
    "1": number
    "2": number
    "3": N36
    "4": N46
  }
  
  export interface N36 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N46 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Aberration8 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent3 {
    dRA: number
    dDec: number
    ra: Ra10
    dec: Dec10
  }
  
  export interface Ra10 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec10 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz3 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime3
    diurnalAberation: DiurnalAberation3
    transit: Transit3
    diurnalParallax: DiurnalParallax3
    atmosphericRefraction: AtmosphericRefraction3
    topocentric: Topocentric3
  }
  
  export interface LocalApparentSiderialTime3 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation3 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit3 {
    approxLocalMeridian: ApproxLocalMeridian3
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt3
    approxSetUT: ApproxSetUt3
  }
  
  export interface ApproxLocalMeridian3 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt3 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt3 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax3 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction3 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric3 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa3
    dDec: DDec3
  }
  
  export interface DRa3 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec3 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion2 {}
  
  export interface Moon {
    ra: number
    dec: number
    quarterApproximationValue: number
    _body: Body6
    _key: string
    locals: Locals6
    aberration: Aberration9
    lightTime: LightTime4
    position: Position6
    semiAxis: number
    key: string
    type: string
    motion: Motion3
    orbit: Orbit2
  }
  
  export interface Body6 {
    key: string
    type: string
  }
  
  export interface Locals6 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration9 {}
  
  export interface LightTime4 {}
  
  export interface Position6 {
    polar: number[]
    rect: any[]
    nutation: Nutation3
    geometric: Geometric2
    annualAberration: AnnualAberration2
    apparentGeocentric: ApparentGeocentric3
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    dHorizontalParallax: number
    horizontalParallax: HorizontalParallax2
    dSemidiameter: number
    Semidiameter: Semidiameter2
    sunElongation: number
    illuminatedFraction: number
    phaseDecimal: number
    phaseDaysPast: number
    phaseDaysDistance: number
    phaseQuarter: number
    phaseQuarterString: string
    shapeString: string
    shapeDirectionString: string
    withinQuarterApproximation: boolean
    apparent: Apparent4
    altaz: Altaz4
  }
  
  export interface Nutation3 {
    dRA: number
    dDec: number
  }
  
  export interface Geometric2 {
    longitude: number
    latitude: number
    distance: number
  }
  
  export interface AnnualAberration2 {
    dRA: number
    dDec: number
  }
  
  export interface ApparentGeocentric3 {
    longitude: number
    dLongitude: number
    latitude: number
    dLatitude: number
    distance: number
  }
  
  export interface HorizontalParallax2 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Semidiameter2 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Apparent4 {
    dRA: number
    dDec: number
    ra: Ra11
    dec: Dec11
  }
  
  export interface Ra11 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec11 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz4 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime4
    diurnalAberation: DiurnalAberation4
    transit: Transit4
    diurnalParallax: DiurnalParallax4
    atmosphericRefraction: AtmosphericRefraction4
    topocentric: Topocentric4
  }
  
  export interface LocalApparentSiderialTime4 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation4 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit4 {
    approxLocalMeridian: ApproxLocalMeridian4
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt4
    approxSetUT: ApproxSetUt4
  }
  
  export interface ApproxLocalMeridian4 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt4 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt4 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax4 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction4 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric4 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa4
    dDec: DDec4
  }
  
  export interface DRa4 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec4 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion3 {}
  
  export interface Orbit2 {
    meanAscendingNode: MeanAscendingNode2
    meanDescendingNode: MeanDescendingNode2
    meanPerigee: MeanPerigee2
    meanApogee: MeanApogee2
  }
  
  export interface MeanAscendingNode2 {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface MeanDescendingNode2 {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface MeanPerigee2 {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface MeanApogee2 {
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
  }
  
  export interface Mercury {
    _earthBody: EarthBody2
    _observer: Observer3
    _calculateMotion: boolean
    _body: Body8
    _key: string
    locals: Locals9
    aberration: Aberration13
    lightTime: number
    position: Position9
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable12
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat6
    motion: Motion4
  }
  
  export interface EarthBody2 {
    _body: Body7
    _key: string
    locals: Locals7
    aberration: Aberration10
    lightTime: LightTime5
    position: Position7
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable9
  }
  
  export interface Body7 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable8
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable8 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals7 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration10 {}
  
  export interface LightTime5 {}
  
  export interface Position7 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable9 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer3 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date3
  }
  
  export interface Date3 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body8 {
    _key: string
    locals: Locals8
    aberration: Aberration11
    lightTime: number
    position: Position8
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body9
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable11
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat5
  }
  
  export interface Locals8 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration11 {
    dRA: number
    dDec: number
  }
  
  export interface Position8 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual3
    astrometricJ2000: AstrometricJ20003
    astrometricB1950: AstrometricB19503
    deflection: Deflection3
    aberration: Aberration12
    nutation: Nutation4
    constellation: string
    apparent: Apparent5
    apparentGeocentric: ApparentGeocentric4
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz5
  }
  
  export interface ApproxVisual3 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20003 {
    dRA: number
    dDec: number
    ra: Ra12
    dec: Dec12
  }
  
  export interface Ra12 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec12 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19503 {
    dRA: number
    dDec: number
    ra: Ra13
    dec: Dec13
  }
  
  export interface Ra13 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec13 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection3 {
    sunElongation: number
    lightDeflection: LightDeflection3
  }
  
  export interface LightDeflection3 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration12 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation4 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent5 {
    dRA: number
    dDec: number
    ra: Ra14
    dec: Dec14
  }
  
  export interface Ra14 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec14 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric4 {
    "0": number
    "1": number
    "2": number
    "3": N37
    "4": N47
  }
  
  export interface N37 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N47 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz5 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime5
    diurnalAberation: DiurnalAberation5
    transit: Transit5
    diurnalParallax: DiurnalParallax5
    atmosphericRefraction: AtmosphericRefraction5
    topocentric: Topocentric5
  }
  
  export interface LocalApparentSiderialTime5 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation5 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit5 {
    approxLocalMeridian: ApproxLocalMeridian5
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt5
    approxSetUT: ApproxSetUt5
  }
  
  export interface ApproxLocalMeridian5 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt5 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt5 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax5 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction5 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric5 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa5
    dDec: DDec5
  }
  
  export interface DRa5 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec5 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body9 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable10
  }
  
  export interface Ptable10 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable11 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat5 {
    "0": number
    "1": number
    "2": number
    "3": N38
    "4": N48
  }
  
  export interface N38 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N48 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals9 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration13 {
    dRA: number
    dDec: number
  }
  
  export interface Position9 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual4
    astrometricJ2000: AstrometricJ20004
    astrometricB1950: AstrometricB19504
    deflection: Deflection4
    aberration: Aberration14
    nutation: Nutation5
    constellation: string
    apparent: Apparent6
    apparentGeocentric: ApparentGeocentric5
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz6
  }
  
  export interface ApproxVisual4 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20004 {
    dRA: number
    dDec: number
    ra: Ra15
    dec: Dec15
  }
  
  export interface Ra15 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec15 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19504 {
    dRA: number
    dDec: number
    ra: Ra16
    dec: Dec16
  }
  
  export interface Ra16 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec16 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection4 {
    sunElongation: number
    lightDeflection: LightDeflection4
  }
  
  export interface LightDeflection4 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration14 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation5 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent6 {
    dRA: number
    dDec: number
    ra: Ra17
    dec: Dec17
  }
  
  export interface Ra17 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec17 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric5 {
    "0": number
    "1": number
    "2": number
    "3": N39
    "4": N49
  }
  
  export interface N39 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N49 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz6 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime6
    diurnalAberation: DiurnalAberation6
    transit: Transit6
    diurnalParallax: DiurnalParallax6
    atmosphericRefraction: AtmosphericRefraction6
    topocentric: Topocentric6
  }
  
  export interface LocalApparentSiderialTime6 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation6 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit6 {
    approxLocalMeridian: ApproxLocalMeridian6
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt6
    approxSetUT: ApproxSetUt6
  }
  
  export interface ApproxLocalMeridian6 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt6 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt6 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax6 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction6 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric6 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa6
    dDec: DDec6
  }
  
  export interface DRa6 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec6 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable12 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat6 {
    "0": number
    "1": number
    "2": number
    "3": N310
    "4": N410
  }
  
  export interface N310 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N410 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion4 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Venus {
    _earthBody: EarthBody3
    _observer: Observer4
    _calculateMotion: boolean
    _body: Body11
    _key: string
    locals: Locals12
    aberration: Aberration18
    lightTime: number
    position: Position12
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable17
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat8
    motion: Motion5
  }
  
  export interface EarthBody3 {
    _body: Body10
    _key: string
    locals: Locals10
    aberration: Aberration15
    lightTime: LightTime6
    position: Position10
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable14
  }
  
  export interface Body10 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable13
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable13 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals10 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration15 {}
  
  export interface LightTime6 {}
  
  export interface Position10 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable14 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer4 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date4
  }
  
  export interface Date4 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body11 {
    _key: string
    locals: Locals11
    aberration: Aberration16
    lightTime: number
    position: Position11
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body12
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable16
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat7
  }
  
  export interface Locals11 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration16 {
    dRA: number
    dDec: number
  }
  
  export interface Position11 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual5
    astrometricJ2000: AstrometricJ20005
    astrometricB1950: AstrometricB19505
    deflection: Deflection5
    aberration: Aberration17
    nutation: Nutation6
    constellation: string
    apparent: Apparent7
    apparentGeocentric: ApparentGeocentric6
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz7
  }
  
  export interface ApproxVisual5 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20005 {
    dRA: number
    dDec: number
    ra: Ra18
    dec: Dec18
  }
  
  export interface Ra18 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec18 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19505 {
    dRA: number
    dDec: number
    ra: Ra19
    dec: Dec19
  }
  
  export interface Ra19 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec19 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection5 {
    sunElongation: number
    lightDeflection: LightDeflection5
  }
  
  export interface LightDeflection5 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration17 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation6 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent7 {
    dRA: number
    dDec: number
    ra: Ra20
    dec: Dec20
  }
  
  export interface Ra20 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec20 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric6 {
    "0": number
    "1": number
    "2": number
    "3": N311
    "4": N411
  }
  
  export interface N311 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N411 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz7 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime7
    diurnalAberation: DiurnalAberation7
    transit: Transit7
    diurnalParallax: DiurnalParallax7
    atmosphericRefraction: AtmosphericRefraction7
    topocentric: Topocentric7
  }
  
  export interface LocalApparentSiderialTime7 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation7 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit7 {
    approxLocalMeridian: ApproxLocalMeridian7
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt7
    approxSetUT: ApproxSetUt7
  }
  
  export interface ApproxLocalMeridian7 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt7 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt7 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax7 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction7 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric7 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa7
    dDec: DDec7
  }
  
  export interface DRa7 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec7 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body12 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable15
  }
  
  export interface Ptable15 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable16 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat7 {
    "0": number
    "1": number
    "2": number
    "3": N312
    "4": N412
  }
  
  export interface N312 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N412 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals12 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration18 {
    dRA: number
    dDec: number
  }
  
  export interface Position12 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual6
    astrometricJ2000: AstrometricJ20006
    astrometricB1950: AstrometricB19506
    deflection: Deflection6
    aberration: Aberration19
    nutation: Nutation7
    constellation: string
    apparent: Apparent8
    apparentGeocentric: ApparentGeocentric7
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz8
  }
  
  export interface ApproxVisual6 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20006 {
    dRA: number
    dDec: number
    ra: Ra21
    dec: Dec21
  }
  
  export interface Ra21 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec21 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19506 {
    dRA: number
    dDec: number
    ra: Ra22
    dec: Dec22
  }
  
  export interface Ra22 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec22 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection6 {
    sunElongation: number
    lightDeflection: LightDeflection6
  }
  
  export interface LightDeflection6 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration19 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation7 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent8 {
    dRA: number
    dDec: number
    ra: Ra23
    dec: Dec23
  }
  
  export interface Ra23 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec23 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric7 {
    "0": number
    "1": number
    "2": number
    "3": N313
    "4": N413
  }
  
  export interface N313 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N413 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz8 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime8
    diurnalAberation: DiurnalAberation8
    transit: Transit8
    diurnalParallax: DiurnalParallax8
    atmosphericRefraction: AtmosphericRefraction8
    topocentric: Topocentric8
  }
  
  export interface LocalApparentSiderialTime8 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation8 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit8 {
    approxLocalMeridian: ApproxLocalMeridian8
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt8
    approxSetUT: ApproxSetUt8
  }
  
  export interface ApproxLocalMeridian8 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt8 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt8 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax8 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction8 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric8 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa8
    dDec: DDec8
  }
  
  export interface DRa8 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec8 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable17 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat8 {
    "0": number
    "1": number
    "2": number
    "3": N314
    "4": N414
  }
  
  export interface N314 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N414 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion5 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Mars {
    _earthBody: EarthBody4
    _observer: Observer5
    _calculateMotion: boolean
    _body: Body14
    _key: string
    locals: Locals15
    aberration: Aberration23
    lightTime: number
    position: Position15
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable22
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat10
    motion: Motion6
  }
  
  export interface EarthBody4 {
    _body: Body13
    _key: string
    locals: Locals13
    aberration: Aberration20
    lightTime: LightTime7
    position: Position13
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable19
  }
  
  export interface Body13 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable18
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable18 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals13 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration20 {}
  
  export interface LightTime7 {}
  
  export interface Position13 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable19 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer5 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date5
  }
  
  export interface Date5 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body14 {
    _key: string
    locals: Locals14
    aberration: Aberration21
    lightTime: number
    position: Position14
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body15
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable21
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat9
  }
  
  export interface Locals14 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration21 {
    dRA: number
    dDec: number
  }
  
  export interface Position14 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual7
    astrometricJ2000: AstrometricJ20007
    astrometricB1950: AstrometricB19507
    deflection: Deflection7
    aberration: Aberration22
    nutation: Nutation8
    constellation: string
    apparent: Apparent9
    apparentGeocentric: ApparentGeocentric8
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz9
  }
  
  export interface ApproxVisual7 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20007 {
    dRA: number
    dDec: number
    ra: Ra24
    dec: Dec24
  }
  
  export interface Ra24 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec24 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19507 {
    dRA: number
    dDec: number
    ra: Ra25
    dec: Dec25
  }
  
  export interface Ra25 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec25 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection7 {
    sunElongation: number
    lightDeflection: LightDeflection7
  }
  
  export interface LightDeflection7 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration22 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation8 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent9 {
    dRA: number
    dDec: number
    ra: Ra26
    dec: Dec26
  }
  
  export interface Ra26 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec26 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric8 {
    "0": number
    "1": number
    "2": number
    "3": N315
    "4": N415
  }
  
  export interface N315 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N415 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz9 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime9
    diurnalAberation: DiurnalAberation9
    transit: Transit9
    diurnalParallax: DiurnalParallax9
    atmosphericRefraction: AtmosphericRefraction9
    topocentric: Topocentric9
  }
  
  export interface LocalApparentSiderialTime9 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation9 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit9 {
    approxLocalMeridian: ApproxLocalMeridian9
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt9
    approxSetUT: ApproxSetUt9
  }
  
  export interface ApproxLocalMeridian9 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt9 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt9 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax9 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction9 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric9 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa9
    dDec: DDec9
  }
  
  export interface DRa9 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec9 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body15 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable20
  }
  
  export interface Ptable20 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable21 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat9 {
    "0": number
    "1": number
    "2": number
    "3": N316
    "4": N416
  }
  
  export interface N316 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N416 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals15 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration23 {
    dRA: number
    dDec: number
  }
  
  export interface Position15 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual8
    astrometricJ2000: AstrometricJ20008
    astrometricB1950: AstrometricB19508
    deflection: Deflection8
    aberration: Aberration24
    nutation: Nutation9
    constellation: string
    apparent: Apparent10
    apparentGeocentric: ApparentGeocentric9
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz10
  }
  
  export interface ApproxVisual8 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20008 {
    dRA: number
    dDec: number
    ra: Ra27
    dec: Dec27
  }
  
  export interface Ra27 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec27 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19508 {
    dRA: number
    dDec: number
    ra: Ra28
    dec: Dec28
  }
  
  export interface Ra28 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec28 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection8 {
    sunElongation: number
    lightDeflection: LightDeflection8
  }
  
  export interface LightDeflection8 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration24 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation9 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent10 {
    dRA: number
    dDec: number
    ra: Ra29
    dec: Dec29
  }
  
  export interface Ra29 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec29 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric9 {
    "0": number
    "1": number
    "2": number
    "3": N317
    "4": N417
  }
  
  export interface N317 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N417 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz10 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime10
    diurnalAberation: DiurnalAberation10
    transit: Transit10
    diurnalParallax: DiurnalParallax10
    atmosphericRefraction: AtmosphericRefraction10
    topocentric: Topocentric10
  }
  
  export interface LocalApparentSiderialTime10 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation10 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit10 {
    approxLocalMeridian: ApproxLocalMeridian10
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt10
    approxSetUT: ApproxSetUt10
  }
  
  export interface ApproxLocalMeridian10 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt10 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt10 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax10 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction10 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric10 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa10
    dDec: DDec10
  }
  
  export interface DRa10 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec10 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable22 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat10 {
    "0": number
    "1": number
    "2": number
    "3": N318
    "4": N418
  }
  
  export interface N318 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N418 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion6 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Jupiter {
    _earthBody: EarthBody5
    _observer: Observer6
    _calculateMotion: boolean
    _body: Body17
    _key: string
    locals: Locals18
    aberration: Aberration28
    lightTime: number
    position: Position18
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable27
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat12
    motion: Motion7
  }
  
  export interface EarthBody5 {
    _body: Body16
    _key: string
    locals: Locals16
    aberration: Aberration25
    lightTime: LightTime8
    position: Position16
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable24
  }
  
  export interface Body16 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable23
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable23 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals16 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration25 {}
  
  export interface LightTime8 {}
  
  export interface Position16 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable24 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer6 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date6
  }
  
  export interface Date6 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body17 {
    _key: string
    locals: Locals17
    aberration: Aberration26
    lightTime: number
    position: Position17
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body18
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable26
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat11
  }
  
  export interface Locals17 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration26 {
    dRA: number
    dDec: number
  }
  
  export interface Position17 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual9
    astrometricJ2000: AstrometricJ20009
    astrometricB1950: AstrometricB19509
    deflection: Deflection9
    aberration: Aberration27
    nutation: Nutation10
    constellation: string
    apparent: Apparent11
    apparentGeocentric: ApparentGeocentric10
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz11
  }
  
  export interface ApproxVisual9 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ20009 {
    dRA: number
    dDec: number
    ra: Ra30
    dec: Dec30
  }
  
  export interface Ra30 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec30 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB19509 {
    dRA: number
    dDec: number
    ra: Ra31
    dec: Dec31
  }
  
  export interface Ra31 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec31 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection9 {
    sunElongation: number
    lightDeflection: LightDeflection9
  }
  
  export interface LightDeflection9 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration27 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation10 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent11 {
    dRA: number
    dDec: number
    ra: Ra32
    dec: Dec32
  }
  
  export interface Ra32 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec32 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric10 {
    "0": number
    "1": number
    "2": number
    "3": N319
    "4": N419
  }
  
  export interface N319 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N419 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz11 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime11
    diurnalAberation: DiurnalAberation11
    transit: Transit11
    diurnalParallax: DiurnalParallax11
    atmosphericRefraction: AtmosphericRefraction11
    topocentric: Topocentric11
  }
  
  export interface LocalApparentSiderialTime11 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation11 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit11 {
    approxLocalMeridian: ApproxLocalMeridian11
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt11
    approxSetUT: ApproxSetUt11
  }
  
  export interface ApproxLocalMeridian11 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt11 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt11 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax11 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction11 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric11 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa11
    dDec: DDec11
  }
  
  export interface DRa11 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec11 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body18 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable25
  }
  
  export interface Ptable25 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable26 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat11 {
    "0": number
    "1": number
    "2": number
    "3": N320
    "4": N420
  }
  
  export interface N320 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N420 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals18 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration28 {
    dRA: number
    dDec: number
  }
  
  export interface Position18 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual10
    astrometricJ2000: AstrometricJ200010
    astrometricB1950: AstrometricB195010
    deflection: Deflection10
    aberration: Aberration29
    nutation: Nutation11
    constellation: string
    apparent: Apparent12
    apparentGeocentric: ApparentGeocentric11
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz12
  }
  
  export interface ApproxVisual10 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200010 {
    dRA: number
    dDec: number
    ra: Ra33
    dec: Dec33
  }
  
  export interface Ra33 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec33 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195010 {
    dRA: number
    dDec: number
    ra: Ra34
    dec: Dec34
  }
  
  export interface Ra34 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec34 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection10 {
    sunElongation: number
    lightDeflection: LightDeflection10
  }
  
  export interface LightDeflection10 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration29 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation11 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent12 {
    dRA: number
    dDec: number
    ra: Ra35
    dec: Dec35
  }
  
  export interface Ra35 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec35 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric11 {
    "0": number
    "1": number
    "2": number
    "3": N321
    "4": N421
  }
  
  export interface N321 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N421 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz12 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime12
    diurnalAberation: DiurnalAberation12
    transit: Transit12
    diurnalParallax: DiurnalParallax12
    atmosphericRefraction: AtmosphericRefraction12
    topocentric: Topocentric12
  }
  
  export interface LocalApparentSiderialTime12 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation12 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit12 {
    approxLocalMeridian: ApproxLocalMeridian12
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt12
    approxSetUT: ApproxSetUt12
  }
  
  export interface ApproxLocalMeridian12 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt12 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt12 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax12 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction12 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric12 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa12
    dDec: DDec12
  }
  
  export interface DRa12 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec12 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable27 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat12 {
    "0": number
    "1": number
    "2": number
    "3": N322
    "4": N422
  }
  
  export interface N322 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N422 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion7 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Saturn {
    _earthBody: EarthBody6
    _observer: Observer7
    _calculateMotion: boolean
    _body: Body20
    _key: string
    locals: Locals21
    aberration: Aberration33
    lightTime: number
    position: Position21
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable32
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat14
    motion: Motion8
  }
  
  export interface EarthBody6 {
    _body: Body19
    _key: string
    locals: Locals19
    aberration: Aberration30
    lightTime: LightTime9
    position: Position19
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable29
  }
  
  export interface Body19 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable28
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable28 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals19 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration30 {}
  
  export interface LightTime9 {}
  
  export interface Position19 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable29 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer7 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date7
  }
  
  export interface Date7 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body20 {
    _key: string
    locals: Locals20
    aberration: Aberration31
    lightTime: number
    position: Position20
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body21
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable31
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat13
  }
  
  export interface Locals20 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration31 {
    dRA: number
    dDec: number
  }
  
  export interface Position20 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual11
    astrometricJ2000: AstrometricJ200011
    astrometricB1950: AstrometricB195011
    deflection: Deflection11
    aberration: Aberration32
    nutation: Nutation12
    constellation: string
    apparent: Apparent13
    apparentGeocentric: ApparentGeocentric12
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz13
  }
  
  export interface ApproxVisual11 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200011 {
    dRA: number
    dDec: number
    ra: Ra36
    dec: Dec36
  }
  
  export interface Ra36 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec36 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195011 {
    dRA: number
    dDec: number
    ra: Ra37
    dec: Dec37
  }
  
  export interface Ra37 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec37 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection11 {
    sunElongation: number
    lightDeflection: LightDeflection11
  }
  
  export interface LightDeflection11 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration32 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation12 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent13 {
    dRA: number
    dDec: number
    ra: Ra38
    dec: Dec38
  }
  
  export interface Ra38 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec38 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric12 {
    "0": number
    "1": number
    "2": number
    "3": N323
    "4": N423
  }
  
  export interface N323 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N423 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz13 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime13
    diurnalAberation: DiurnalAberation13
    transit: Transit13
    diurnalParallax: DiurnalParallax13
    atmosphericRefraction: AtmosphericRefraction13
    topocentric: Topocentric13
  }
  
  export interface LocalApparentSiderialTime13 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation13 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit13 {
    approxLocalMeridian: ApproxLocalMeridian13
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt13
    approxSetUT: ApproxSetUt13
  }
  
  export interface ApproxLocalMeridian13 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt13 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt13 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax13 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction13 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric13 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa13
    dDec: DDec13
  }
  
  export interface DRa13 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec13 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body21 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable30
  }
  
  export interface Ptable30 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable31 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat13 {
    "0": number
    "1": number
    "2": number
    "3": N324
    "4": N424
  }
  
  export interface N324 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N424 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals21 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration33 {
    dRA: number
    dDec: number
  }
  
  export interface Position21 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual12
    astrometricJ2000: AstrometricJ200012
    astrometricB1950: AstrometricB195012
    deflection: Deflection12
    aberration: Aberration34
    nutation: Nutation13
    constellation: string
    apparent: Apparent14
    apparentGeocentric: ApparentGeocentric13
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz14
  }
  
  export interface ApproxVisual12 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200012 {
    dRA: number
    dDec: number
    ra: Ra39
    dec: Dec39
  }
  
  export interface Ra39 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec39 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195012 {
    dRA: number
    dDec: number
    ra: Ra40
    dec: Dec40
  }
  
  export interface Ra40 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec40 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection12 {
    sunElongation: number
    lightDeflection: LightDeflection12
  }
  
  export interface LightDeflection12 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration34 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation13 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent14 {
    dRA: number
    dDec: number
    ra: Ra41
    dec: Dec41
  }
  
  export interface Ra41 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec41 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric13 {
    "0": number
    "1": number
    "2": number
    "3": N325
    "4": N425
  }
  
  export interface N325 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N425 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz14 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime14
    diurnalAberation: DiurnalAberation14
    transit: Transit14
    diurnalParallax: DiurnalParallax14
    atmosphericRefraction: AtmosphericRefraction14
    topocentric: Topocentric14
  }
  
  export interface LocalApparentSiderialTime14 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation14 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit14 {
    approxLocalMeridian: ApproxLocalMeridian14
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt14
    approxSetUT: ApproxSetUt14
  }
  
  export interface ApproxLocalMeridian14 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt14 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt14 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax14 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction14 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric14 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa14
    dDec: DDec14
  }
  
  export interface DRa14 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec14 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable32 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat14 {
    "0": number
    "1": number
    "2": number
    "3": N326
    "4": N426
  }
  
  export interface N326 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N426 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion8 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Uranus {
    _earthBody: EarthBody7
    _observer: Observer8
    _calculateMotion: boolean
    _body: Body23
    _key: string
    locals: Locals24
    aberration: Aberration38
    lightTime: number
    position: Position24
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable37
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat16
    motion: Motion9
  }
  
  export interface EarthBody7 {
    _body: Body22
    _key: string
    locals: Locals22
    aberration: Aberration35
    lightTime: LightTime10
    position: Position22
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable34
  }
  
  export interface Body22 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable33
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable33 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals22 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration35 {}
  
  export interface LightTime10 {}
  
  export interface Position22 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable34 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer8 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date8
  }
  
  export interface Date8 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body23 {
    _key: string
    locals: Locals23
    aberration: Aberration36
    lightTime: number
    position: Position23
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body24
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable36
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat15
  }
  
  export interface Locals23 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration36 {
    dRA: number
    dDec: number
  }
  
  export interface Position23 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual13
    astrometricJ2000: AstrometricJ200013
    astrometricB1950: AstrometricB195013
    deflection: Deflection13
    aberration: Aberration37
    nutation: Nutation14
    constellation: string
    apparent: Apparent15
    apparentGeocentric: ApparentGeocentric14
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz15
  }
  
  export interface ApproxVisual13 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200013 {
    dRA: number
    dDec: number
    ra: Ra42
    dec: Dec42
  }
  
  export interface Ra42 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec42 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195013 {
    dRA: number
    dDec: number
    ra: Ra43
    dec: Dec43
  }
  
  export interface Ra43 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec43 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection13 {
    sunElongation: number
    lightDeflection: LightDeflection13
  }
  
  export interface LightDeflection13 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration37 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation14 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent15 {
    dRA: number
    dDec: number
    ra: Ra44
    dec: Dec44
  }
  
  export interface Ra44 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec44 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric14 {
    "0": number
    "1": number
    "2": number
    "3": N327
    "4": N427
  }
  
  export interface N327 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N427 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz15 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime15
    diurnalAberation: DiurnalAberation15
    transit: Transit15
    diurnalParallax: DiurnalParallax15
    atmosphericRefraction: AtmosphericRefraction15
    topocentric: Topocentric15
  }
  
  export interface LocalApparentSiderialTime15 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation15 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit15 {
    approxLocalMeridian: ApproxLocalMeridian15
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt15
    approxSetUT: ApproxSetUt15
  }
  
  export interface ApproxLocalMeridian15 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt15 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt15 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax15 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction15 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric15 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa15
    dDec: DDec15
  }
  
  export interface DRa15 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec15 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body24 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable35
  }
  
  export interface Ptable35 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable36 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat15 {
    "0": number
    "1": number
    "2": number
    "3": N328
    "4": N428
  }
  
  export interface N328 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N428 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals24 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration38 {
    dRA: number
    dDec: number
  }
  
  export interface Position24 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual14
    astrometricJ2000: AstrometricJ200014
    astrometricB1950: AstrometricB195014
    deflection: Deflection14
    aberration: Aberration39
    nutation: Nutation15
    constellation: string
    apparent: Apparent16
    apparentGeocentric: ApparentGeocentric15
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz16
  }
  
  export interface ApproxVisual14 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200014 {
    dRA: number
    dDec: number
    ra: Ra45
    dec: Dec45
  }
  
  export interface Ra45 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec45 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195014 {
    dRA: number
    dDec: number
    ra: Ra46
    dec: Dec46
  }
  
  export interface Ra46 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec46 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection14 {
    sunElongation: number
    lightDeflection: LightDeflection14
  }
  
  export interface LightDeflection14 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration39 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation15 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent16 {
    dRA: number
    dDec: number
    ra: Ra47
    dec: Dec47
  }
  
  export interface Ra47 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec47 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric15 {
    "0": number
    "1": number
    "2": number
    "3": N329
    "4": N429
  }
  
  export interface N329 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N429 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz16 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime16
    diurnalAberation: DiurnalAberation16
    transit: Transit16
    diurnalParallax: DiurnalParallax16
    atmosphericRefraction: AtmosphericRefraction16
    topocentric: Topocentric16
  }
  
  export interface LocalApparentSiderialTime16 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation16 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit16 {
    approxLocalMeridian: ApproxLocalMeridian16
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt16
    approxSetUT: ApproxSetUt16
  }
  
  export interface ApproxLocalMeridian16 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt16 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt16 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax16 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction16 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric16 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa16
    dDec: DDec16
  }
  
  export interface DRa16 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec16 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable37 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat16 {
    "0": number
    "1": number
    "2": number
    "3": N330
    "4": N430
  }
  
  export interface N330 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N430 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion9 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Neptune {
    _earthBody: EarthBody8
    _observer: Observer9
    _calculateMotion: boolean
    _body: Body26
    _key: string
    locals: Locals27
    aberration: Aberration43
    lightTime: number
    position: Position27
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable42
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat18
    motion: Motion10
  }
  
  export interface EarthBody8 {
    _body: Body25
    _key: string
    locals: Locals25
    aberration: Aberration40
    lightTime: LightTime11
    position: Position25
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable39
  }
  
  export interface Body25 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable38
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable38 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals25 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration40 {}
  
  export interface LightTime11 {}
  
  export interface Position25 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable39 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer9 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date9
  }
  
  export interface Date9 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body26 {
    _key: string
    locals: Locals26
    aberration: Aberration41
    lightTime: number
    position: Position26
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body27
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable41
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat17
  }
  
  export interface Locals26 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration41 {
    dRA: number
    dDec: number
  }
  
  export interface Position26 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual15
    astrometricJ2000: AstrometricJ200015
    astrometricB1950: AstrometricB195015
    deflection: Deflection15
    aberration: Aberration42
    nutation: Nutation16
    constellation: string
    apparent: Apparent17
    apparentGeocentric: ApparentGeocentric16
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz17
  }
  
  export interface ApproxVisual15 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200015 {
    dRA: number
    dDec: number
    ra: Ra48
    dec: Dec48
  }
  
  export interface Ra48 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec48 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195015 {
    dRA: number
    dDec: number
    ra: Ra49
    dec: Dec49
  }
  
  export interface Ra49 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec49 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection15 {
    sunElongation: number
    lightDeflection: LightDeflection15
  }
  
  export interface LightDeflection15 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration42 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation16 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent17 {
    dRA: number
    dDec: number
    ra: Ra50
    dec: Dec50
  }
  
  export interface Ra50 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec50 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric16 {
    "0": number
    "1": number
    "2": number
    "3": N331
    "4": N431
  }
  
  export interface N331 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N431 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz17 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime17
    diurnalAberation: DiurnalAberation17
    transit: Transit17
    diurnalParallax: DiurnalParallax17
    atmosphericRefraction: AtmosphericRefraction17
    topocentric: Topocentric17
  }
  
  export interface LocalApparentSiderialTime17 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation17 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit17 {
    approxLocalMeridian: ApproxLocalMeridian17
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt17
    approxSetUT: ApproxSetUt17
  }
  
  export interface ApproxLocalMeridian17 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt17 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt17 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax17 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction17 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric17 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa17
    dDec: DDec17
  }
  
  export interface DRa17 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec17 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body27 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable40
  }
  
  export interface Ptable40 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable41 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat17 {
    "0": number
    "1": number
    "2": number
    "3": N332
    "4": N432
  }
  
  export interface N332 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N432 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals27 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration43 {
    dRA: number
    dDec: number
  }
  
  export interface Position27 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual16
    astrometricJ2000: AstrometricJ200016
    astrometricB1950: AstrometricB195016
    deflection: Deflection16
    aberration: Aberration44
    nutation: Nutation17
    constellation: string
    apparent: Apparent18
    apparentGeocentric: ApparentGeocentric17
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz18
  }
  
  export interface ApproxVisual16 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200016 {
    dRA: number
    dDec: number
    ra: Ra51
    dec: Dec51
  }
  
  export interface Ra51 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec51 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195016 {
    dRA: number
    dDec: number
    ra: Ra52
    dec: Dec52
  }
  
  export interface Ra52 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec52 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection16 {
    sunElongation: number
    lightDeflection: LightDeflection16
  }
  
  export interface LightDeflection16 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration44 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation17 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent18 {
    dRA: number
    dDec: number
    ra: Ra53
    dec: Dec53
  }
  
  export interface Ra53 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec53 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric17 {
    "0": number
    "1": number
    "2": number
    "3": N333
    "4": N433
  }
  
  export interface N333 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N433 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz18 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime18
    diurnalAberation: DiurnalAberation18
    transit: Transit18
    diurnalParallax: DiurnalParallax18
    atmosphericRefraction: AtmosphericRefraction18
    topocentric: Topocentric18
  }
  
  export interface LocalApparentSiderialTime18 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation18 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit18 {
    approxLocalMeridian: ApproxLocalMeridian18
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt18
    approxSetUT: ApproxSetUt18
  }
  
  export interface ApproxLocalMeridian18 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt18 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt18 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax18 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction18 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric18 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa18
    dDec: DDec18
  }
  
  export interface DRa18 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec18 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable42 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat18 {
    "0": number
    "1": number
    "2": number
    "3": N334
    "4": N434
  }
  
  export interface N334 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N434 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion10 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Pluto {
    _earthBody: EarthBody9
    _observer: Observer10
    _calculateMotion: boolean
    _body: Body29
    _key: string
    locals: Locals30
    aberration: Aberration48
    lightTime: number
    position: Position30
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable47
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat20
    motion: Motion11
  }
  
  export interface EarthBody9 {
    _body: Body28
    _key: string
    locals: Locals28
    aberration: Aberration45
    lightTime: LightTime12
    position: Position28
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable44
  }
  
  export interface Body28 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable43
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable43 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals28 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration45 {}
  
  export interface LightTime12 {}
  
  export interface Position28 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable44 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer10 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date10
  }
  
  export interface Date10 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body29 {
    _key: string
    locals: Locals29
    aberration: Aberration46
    lightTime: number
    position: Position29
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body30
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    ptable: Ptable46
    longitude: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat19
  }
  
  export interface Locals29 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration46 {
    dRA: number
    dDec: number
  }
  
  export interface Position29 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual17
    astrometricJ2000: AstrometricJ200017
    astrometricB1950: AstrometricB195017
    deflection: Deflection17
    aberration: Aberration47
    nutation: Nutation18
    constellation: string
    apparent: Apparent19
    apparentGeocentric: ApparentGeocentric18
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz19
  }
  
  export interface ApproxVisual17 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200017 {
    dRA: number
    dDec: number
    ra: Ra54
    dec: Dec54
  }
  
  export interface Ra54 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec54 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195017 {
    dRA: number
    dDec: number
    ra: Ra55
    dec: Dec55
  }
  
  export interface Ra55 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec55 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection17 {
    sunElongation: number
    lightDeflection: LightDeflection17
  }
  
  export interface LightDeflection17 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration47 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation18 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent19 {
    dRA: number
    dDec: number
    ra: Ra56
    dec: Dec56
  }
  
  export interface Ra56 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec56 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric18 {
    "0": number
    "1": number
    "2": number
    "3": N335
    "4": N435
  }
  
  export interface N335 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N435 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz19 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime19
    diurnalAberation: DiurnalAberation19
    transit: Transit19
    diurnalParallax: DiurnalParallax19
    atmosphericRefraction: AtmosphericRefraction19
    topocentric: Topocentric19
  }
  
  export interface LocalApparentSiderialTime19 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation19 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit19 {
    approxLocalMeridian: ApproxLocalMeridian19
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt19
    approxSetUT: ApproxSetUt19
  }
  
  export interface ApproxLocalMeridian19 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt19 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt19 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax19 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction19 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric19 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa19
    dDec: DDec19
  }
  
  export interface DRa19 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec19 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body30 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    ptable: Ptable45
  }
  
  export interface Ptable45 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Ptable46 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat19 {
    "0": number
    "1": number
    "2": number
    "3": N336
    "4": N436
  }
  
  export interface N336 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N436 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals30 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration48 {
    dRA: number
    dDec: number
  }
  
  export interface Position30 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual18
    astrometricJ2000: AstrometricJ200018
    astrometricB1950: AstrometricB195018
    deflection: Deflection18
    aberration: Aberration49
    nutation: Nutation19
    constellation: string
    apparent: Apparent20
    apparentGeocentric: ApparentGeocentric19
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz20
  }
  
  export interface ApproxVisual18 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200018 {
    dRA: number
    dDec: number
    ra: Ra57
    dec: Dec57
  }
  
  export interface Ra57 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec57 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195018 {
    dRA: number
    dDec: number
    ra: Ra58
    dec: Dec58
  }
  
  export interface Ra58 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec58 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection18 {
    sunElongation: number
    lightDeflection: LightDeflection18
  }
  
  export interface LightDeflection18 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration49 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation19 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent20 {
    dRA: number
    dDec: number
    ra: Ra59
    dec: Dec59
  }
  
  export interface Ra59 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec59 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric19 {
    "0": number
    "1": number
    "2": number
    "3": N337
    "4": N437
  }
  
  export interface N337 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N437 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz20 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime20
    diurnalAberation: DiurnalAberation20
    transit: Transit20
    diurnalParallax: DiurnalParallax20
    atmosphericRefraction: AtmosphericRefraction20
    topocentric: Topocentric20
  }
  
  export interface LocalApparentSiderialTime20 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation20 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit20 {
    approxLocalMeridian: ApproxLocalMeridian20
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt20
    approxSetUT: ApproxSetUt20
  }
  
  export interface ApproxLocalMeridian20 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt20 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt20 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax20 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction20 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric20 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa20
    dDec: DDec20
  }
  
  export interface DRa20 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec20 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Ptable47 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface EquinoxEclipticLonLat20 {
    "0": number
    "1": number
    "2": number
    "3": N338
    "4": N438
  }
  
  export interface N338 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N438 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion11 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Chiron {
    _earthBody: EarthBody10
    _observer: Observer11
    _calculateMotion: boolean
    _body: Body32
    _key: string
    locals: Locals33
    aberration: Aberration53
    lightTime: number
    position: Position33
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    perihelionDistance: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat22
    motion: Motion12
  }
  
  export interface EarthBody10 {
    _body: Body31
    _key: string
    locals: Locals31
    aberration: Aberration50
    lightTime: LightTime13
    position: Position31
    distance: number
    epoch: number
    semiAxis: number
    semiDiameter: number
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    eccentricity: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable49
  }
  
  export interface Body31 {
    key: string
    type: string
    anomaly: number
    dailyMotion: number
    distance: number
    eccentricity: number
    epoch: number
    equinox: number
    inclination: number
    longitude: number
    magnitude: number
    node: number
    perihelion: number
    perturbation: number
    ptable: Ptable48
    semiAxis: number
    semiDiameter: number
  }
  
  export interface Ptable48 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Locals31 {
    dp: any[]
    dradt: any
    ddecdt: any
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration50 {}
  
  export interface LightTime13 {}
  
  export interface Position31 {
    rect: number[]
    polar: number[]
  }
  
  export interface Ptable49 {
    maxargs: number
    max_harmonic: number[]
    max_power_of_t: number
    distance: number
    timescale: number
    trunclvl: number
    lon_tbl: number[]
    lat_tbl: number[]
    rad_tbl: number[]
    arg_tbl: number[]
  }
  
  export interface Observer11 {
    year: number
    month: number
    day: number
    hours: number
    minutes: number
    seconds: number
    latitude: number
    longitude: number
    height: number
    glat: number
    tlong: number
    attemp: number
    atpress: number
    trho: number
    tlat: number
    Date: Date11
  }
  
  export interface Date11 {
    utc: string
    dateString: string
    julian: number
    j2000: number
    b1950: number
    j1900: number
    universalJulian: number
    universalDate: string
  }
  
  export interface Body32 {
    _key: string
    locals: Locals32
    aberration: Aberration51
    lightTime: number
    position: Position32
    epoch: number
    semiAxis: number
    semiDiameter: number
    _body: Body33
    key: string
    type: string
    inclination: number
    node: number
    perihelion: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    perihelionDistance: number
    equinoxEclipticLonLat: EquinoxEclipticLonLat21
  }
  
  export interface Locals32 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration51 {
    dRA: number
    dDec: number
  }
  
  export interface Position32 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual19
    astrometricJ2000: AstrometricJ200019
    astrometricB1950: AstrometricB195019
    deflection: Deflection19
    aberration: Aberration52
    nutation: Nutation20
    constellation: string
    apparent: Apparent21
    apparentGeocentric: ApparentGeocentric20
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz21
  }
  
  export interface ApproxVisual19 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200019 {
    dRA: number
    dDec: number
    ra: Ra60
    dec: Dec60
  }
  
  export interface Ra60 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec60 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195019 {
    dRA: number
    dDec: number
    ra: Ra61
    dec: Dec61
  }
  
  export interface Ra61 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec61 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection19 {
    sunElongation: number
    lightDeflection: LightDeflection19
  }
  
  export interface LightDeflection19 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration52 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation20 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent21 {
    dRA: number
    dDec: number
    ra: Ra62
    dec: Dec62
  }
  
  export interface Ra62 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec62 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric20 {
    "0": number
    "1": number
    "2": number
    "3": N339
    "4": N439
  }
  
  export interface N339 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N439 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz21 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime21
    diurnalAberation: DiurnalAberation21
    transit: Transit21
    diurnalParallax: DiurnalParallax21
    atmosphericRefraction: AtmosphericRefraction21
    topocentric: Topocentric21
  }
  
  export interface LocalApparentSiderialTime21 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation21 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit21 {
    approxLocalMeridian: ApproxLocalMeridian21
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt21
    approxSetUT: ApproxSetUt21
  }
  
  export interface ApproxLocalMeridian21 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt21 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt21 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax21 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction21 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric21 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa21
    dDec: DDec21
  }
  
  export interface DRa21 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec21 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Body33 {
    key: string
    type: string
    epoch: number
    inclination: number
    node: number
    perihelion: number
    semiAxis: number
    dailyMotion: number
    eccentricity: number
    anomaly: number
    equinox: number
    magnitude: number
    semiDiameter: number
    perihelionDistance: number
  }
  
  export interface EquinoxEclipticLonLat21 {
    "0": number
    "1": number
    "2": number
    "3": N340
    "4": N440
  }
  
  export interface N340 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N440 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Locals33 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration53 {
    dRA: number
    dDec: number
  }
  
  export interface Position33 {
    rect: number[]
    polar: number[]
    trueGeocentricDistance: number
    equatorialDiameter: number
    approxVisual: ApproxVisual20
    astrometricJ2000: AstrometricJ200020
    astrometricB1950: AstrometricB195020
    deflection: Deflection20
    aberration: Aberration54
    nutation: Nutation21
    constellation: string
    apparent: Apparent22
    apparentGeocentric: ApparentGeocentric21
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz22
  }
  
  export interface ApproxVisual20 {
    magnitude: number
    phase: number
  }
  
  export interface AstrometricJ200020 {
    dRA: number
    dDec: number
    ra: Ra63
    dec: Dec63
  }
  
  export interface Ra63 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec63 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrometricB195020 {
    dRA: number
    dDec: number
    ra: Ra64
    dec: Dec64
  }
  
  export interface Ra64 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec64 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection20 {
    sunElongation: number
    lightDeflection: LightDeflection20
  }
  
  export interface LightDeflection20 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration54 {
    dRA: number
    dDec: number
  }
  
  export interface Nutation21 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent22 {
    dRA: number
    dDec: number
    ra: Ra65
    dec: Dec65
  }
  
  export interface Ra65 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec65 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface ApparentGeocentric21 {
    "0": number
    "1": number
    "2": number
    "3": N341
    "4": N441
  }
  
  export interface N341 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N441 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz22 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime22
    diurnalAberation: DiurnalAberation22
    transit: Transit22
    diurnalParallax: DiurnalParallax22
    atmosphericRefraction: AtmosphericRefraction22
    topocentric: Topocentric22
  }
  
  export interface LocalApparentSiderialTime22 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation22 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit22 {
    approxLocalMeridian: ApproxLocalMeridian22
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt22
    approxSetUT: ApproxSetUt22
  }
  
  export interface ApproxLocalMeridian22 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt22 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt22 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax22 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface AtmosphericRefraction22 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric22 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa22
    dDec: DDec22
  }
  
  export interface DRa22 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec22 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface EquinoxEclipticLonLat22 {
    "0": number
    "1": number
    "2": number
    "3": N342
    "4": N442
  }
  
  export interface N342 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface N442 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Motion12 {
    oneSecondMotionAmount: number
    isRetrograde: boolean
  }
  
  export interface Sirius {
    _body: Body34
    _key: string
    locals: Locals34
    aberration: Aberration55
    lightTime: LightTime14
    position: Position34
    epoch: number
    semiAxis: number
    key: string
    type: string
    hmsRa: HmsRa4
    hmsDec: HmsDec4
    raMotion: number
    decMotion: number
    velocity: number
    parallax: number
    magnitude: number
    ra: number
    dec: number
    equinox: number
    motion: Motion13
  }
  
  export interface Body34 {
    key: string
    type: string
    epoch: number
    hmsRa: HmsRa3
    hmsDec: HmsDec3
    raMotion: number
    decMotion: number
    velocity: number
    parallax: number
    magnitude: number
    ra: number
    dec: number
    equinox: number
  }
  
  export interface HmsRa3 {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface HmsDec3 {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface Locals34 {
    dp: number[]
    dradt: number
    ddecdt: number
    EO: number
    SE: number
    SO: number
    pq: number
    ep: number
    qe: number
  }
  
  export interface Aberration55 {}
  
  export interface LightTime14 {}
  
  export interface Position34 {
    approxVisualMagnitude: number
    astrimetricJ2000: AstrimetricJ20002
    astrimetricB1950: AstrimetricB19502
    astrimetricDate: AstrimetricDate2
    deflection: Deflection21
    aberration: Aberration56
    apparent: Apparent23
    apparentLongitude: number
    apparentLongitudeString: string
    apparentLongitude30String: string
    geocentricDistance: number
    altaz: Altaz23
  }
  
  export interface AstrimetricJ20002 {
    dRA: number
    dDec: number
    ra: Ra66
    dec: Dec66
  }
  
  export interface Ra66 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec66 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrimetricB19502 {
    dRA: number
    dDec: number
    ra: Ra67
    dec: Dec67
  }
  
  export interface Ra67 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec67 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface AstrimetricDate2 {
    dRA: number
    dDec: number
    ra: Ra68
    dec: Dec68
  }
  
  export interface Ra68 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec68 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Deflection21 {
    sunElongation: number
    lightDeflection: LightDeflection21
  }
  
  export interface LightDeflection21 {
    dRA: number
    dDec: number
  }
  
  export interface Aberration56 {
    dRA: number
    dDec: number
  }
  
  export interface Apparent23 {
    dRA: number
    dDec: number
    ra: Ra69
    dec: Dec69
  }
  
  export interface Ra69 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface Dec69 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface Altaz23 {
    dLocalApparentSiderialTime: number
    localApparentSiderialTime: LocalApparentSiderialTime23
    diurnalAberation: DiurnalAberation23
    transit: Transit23
    diurnalParallax: DiurnalParallax23
    atmosphericRefraction: AtmosphericRefraction23
    topocentric: Topocentric23
  }
  
  export interface LocalApparentSiderialTime23 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalAberation23 {
    ra: number
    dec: number
    dRA: number
    dDec: number
  }
  
  export interface Transit23 {
    approxLocalMeridian: ApproxLocalMeridian23
    UTdate: number
    dApproxRiseUT: number
    dApproxSetUT: number
    approxRiseUT: ApproxRiseUt23
    approxSetUT: ApproxSetUt23
  }
  
  export interface ApproxLocalMeridian23 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxRiseUt23 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface ApproxSetUt23 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DiurnalParallax23 {
    ra: number
    dec: number
  }
  
  export interface AtmosphericRefraction23 {
    deg: number
    dRA: number
    dDec: number
  }
  
  export interface Topocentric23 {
    altitude: number
    azimuth: number
    ra: number
    dec: number
    dRA: DRa23
    dDec: DDec23
  }
  
  export interface DRa23 {
    hours: number
    minutes: number
    seconds: number
    milliseconds: number
  }
  
  export interface DDec23 {
    degree: number
    minutes: number
    seconds: number
  }
  
  export interface HmsRa4 {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface HmsDec4 {
    hours: number
    minutes: number
    seconds: number
  }
  
  export interface Motion13 {}
  
  export interface CelestialBodies {
    all: All[]
    sun: Sun2
    moon: Moon2
    mercury: Mercury2
    venus: Venus2
    mars: Mars2
    jupiter: Jupiter2
    saturn: Saturn2
    uranus: Uranus2
    neptune: Neptune2
    pluto: Pluto2
    chiron: Chiron2
    sirius: Sirius2
  }
  
  export interface All {
    key: string
    label: string
    Sign: Sign5
    ChartPosition: ChartPosition5
    House: House2
    isRetrograde?: boolean
  }
  
  export interface Sign5 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate6
    endDate: EndDate6
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate6 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate6 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition5 {
    Horizon: Horizon6
    Ecliptic: Ecliptic6
  }
  
  export interface Horizon6 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees11
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees11 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic6 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees12
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees12 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House2 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition6
    Sign: Sign6
  }
  
  export interface ChartPosition6 {
    StartPosition: StartPosition2
    EndPosition: EndPosition2
  }
  
  export interface StartPosition2 {
    Horizon: Horizon7
    Ecliptic: Ecliptic7
  }
  
  export interface Horizon7 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees13
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees13 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic7 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees14
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees14 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition2 {
    Horizon: Horizon8
    Ecliptic: Ecliptic8
  }
  
  export interface Horizon8 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees15
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees15 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic8 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees16
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees16 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign6 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate7
    endDate: EndDate7
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate7 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate7 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Sun2 {
    key: string
    label: string
    Sign: Sign7
    ChartPosition: ChartPosition7
    House: House3
  }
  
  export interface Sign7 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate8
    endDate: EndDate8
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate8 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate8 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition7 {
    Horizon: Horizon9
    Ecliptic: Ecliptic9
  }
  
  export interface Horizon9 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees17
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees17 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic9 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees18
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees18 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House3 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition8
    Sign: Sign8
  }
  
  export interface ChartPosition8 {
    StartPosition: StartPosition3
    EndPosition: EndPosition3
  }
  
  export interface StartPosition3 {
    Horizon: Horizon10
    Ecliptic: Ecliptic10
  }
  
  export interface Horizon10 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees19
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees19 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic10 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees20
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees20 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition3 {
    Horizon: Horizon11
    Ecliptic: Ecliptic11
  }
  
  export interface Horizon11 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees21
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees21 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic11 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees22
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees22 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign8 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate9
    endDate: EndDate9
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate9 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate9 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Moon2 {
    key: string
    label: string
    Sign: Sign9
    ChartPosition: ChartPosition9
    House: House4
  }
  
  export interface Sign9 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate10
    endDate: EndDate10
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate10 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate10 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition9 {
    Horizon: Horizon12
    Ecliptic: Ecliptic12
  }
  
  export interface Horizon12 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees23
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees23 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic12 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees24
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees24 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House4 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition10
    Sign: Sign10
  }
  
  export interface ChartPosition10 {
    StartPosition: StartPosition4
    EndPosition: EndPosition4
  }
  
  export interface StartPosition4 {
    Horizon: Horizon13
    Ecliptic: Ecliptic13
  }
  
  export interface Horizon13 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees25
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees25 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic13 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees26
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees26 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition4 {
    Horizon: Horizon14
    Ecliptic: Ecliptic14
  }
  
  export interface Horizon14 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees27
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees27 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic14 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees28
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees28 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign10 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate11
    endDate: EndDate11
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate11 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate11 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Mercury2 {
    key: string
    label: string
    Sign: Sign11
    ChartPosition: ChartPosition11
    House: House5
    isRetrograde: boolean
  }
  
  export interface Sign11 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate12
    endDate: EndDate12
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate12 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate12 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition11 {
    Horizon: Horizon15
    Ecliptic: Ecliptic15
  }
  
  export interface Horizon15 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees29
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees29 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic15 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees30
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees30 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House5 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition12
    Sign: Sign12
  }
  
  export interface ChartPosition12 {
    StartPosition: StartPosition5
    EndPosition: EndPosition5
  }
  
  export interface StartPosition5 {
    Horizon: Horizon16
    Ecliptic: Ecliptic16
  }
  
  export interface Horizon16 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees31
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees31 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic16 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees32
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees32 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition5 {
    Horizon: Horizon17
    Ecliptic: Ecliptic17
  }
  
  export interface Horizon17 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees33
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees33 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic17 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees34
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees34 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign12 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate13
    endDate: EndDate13
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate13 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate13 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Venus2 {
    key: string
    label: string
    Sign: Sign13
    ChartPosition: ChartPosition13
    House: House6
    isRetrograde: boolean
  }
  
  export interface Sign13 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate14
    endDate: EndDate14
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate14 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate14 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition13 {
    Horizon: Horizon18
    Ecliptic: Ecliptic18
  }
  
  export interface Horizon18 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees35
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees35 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic18 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees36
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees36 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House6 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition14
    Sign: Sign14
  }
  
  export interface ChartPosition14 {
    StartPosition: StartPosition6
    EndPosition: EndPosition6
  }
  
  export interface StartPosition6 {
    Horizon: Horizon19
    Ecliptic: Ecliptic19
  }
  
  export interface Horizon19 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees37
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees37 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic19 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees38
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees38 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition6 {
    Horizon: Horizon20
    Ecliptic: Ecliptic20
  }
  
  export interface Horizon20 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees39
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees39 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic20 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees40
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees40 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign14 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate15
    endDate: EndDate15
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate15 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate15 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Mars2 {
    key: string
    label: string
    Sign: Sign15
    ChartPosition: ChartPosition15
    House: House7
    isRetrograde: boolean
  }
  
  export interface Sign15 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate16
    endDate: EndDate16
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate16 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate16 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition15 {
    Horizon: Horizon21
    Ecliptic: Ecliptic21
  }
  
  export interface Horizon21 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees41
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees41 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic21 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees42
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees42 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House7 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition16
    Sign: Sign16
  }
  
  export interface ChartPosition16 {
    StartPosition: StartPosition7
    EndPosition: EndPosition7
  }
  
  export interface StartPosition7 {
    Horizon: Horizon22
    Ecliptic: Ecliptic22
  }
  
  export interface Horizon22 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees43
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees43 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic22 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees44
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees44 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition7 {
    Horizon: Horizon23
    Ecliptic: Ecliptic23
  }
  
  export interface Horizon23 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees45
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees45 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic23 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees46
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees46 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign16 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate17
    endDate: EndDate17
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate17 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate17 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Jupiter2 {
    key: string
    label: string
    Sign: Sign17
    ChartPosition: ChartPosition17
    House: House8
    isRetrograde: boolean
  }
  
  export interface Sign17 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate18
    endDate: EndDate18
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate18 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate18 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition17 {
    Horizon: Horizon24
    Ecliptic: Ecliptic24
  }
  
  export interface Horizon24 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees47
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees47 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic24 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees48
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees48 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House8 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition18
    Sign: Sign18
  }
  
  export interface ChartPosition18 {
    StartPosition: StartPosition8
    EndPosition: EndPosition8
  }
  
  export interface StartPosition8 {
    Horizon: Horizon25
    Ecliptic: Ecliptic25
  }
  
  export interface Horizon25 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees49
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees49 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic25 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees50
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees50 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition8 {
    Horizon: Horizon26
    Ecliptic: Ecliptic26
  }
  
  export interface Horizon26 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees51
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees51 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic26 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees52
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees52 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign18 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate19
    endDate: EndDate19
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate19 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate19 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Saturn2 {
    key: string
    label: string
    Sign: Sign19
    ChartPosition: ChartPosition19
    House: House9
    isRetrograde: boolean
  }
  
  export interface Sign19 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate20
    endDate: EndDate20
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate20 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate20 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition19 {
    Horizon: Horizon27
    Ecliptic: Ecliptic27
  }
  
  export interface Horizon27 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees53
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees53 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic27 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees54
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees54 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House9 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition20
    Sign: Sign20
  }
  
  export interface ChartPosition20 {
    StartPosition: StartPosition9
    EndPosition: EndPosition9
  }
  
  export interface StartPosition9 {
    Horizon: Horizon28
    Ecliptic: Ecliptic28
  }
  
  export interface Horizon28 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees55
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees55 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic28 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees56
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees56 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition9 {
    Horizon: Horizon29
    Ecliptic: Ecliptic29
  }
  
  export interface Horizon29 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees57
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees57 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic29 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees58
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees58 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign20 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate21
    endDate: EndDate21
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate21 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate21 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Uranus2 {
    key: string
    label: string
    Sign: Sign21
    ChartPosition: ChartPosition21
    House: House10
    isRetrograde: boolean
  }
  
  export interface Sign21 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate22
    endDate: EndDate22
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate22 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate22 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition21 {
    Horizon: Horizon30
    Ecliptic: Ecliptic30
  }
  
  export interface Horizon30 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees59
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees59 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic30 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees60
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees60 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House10 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition22
    Sign: Sign22
  }
  
  export interface ChartPosition22 {
    StartPosition: StartPosition10
    EndPosition: EndPosition10
  }
  
  export interface StartPosition10 {
    Horizon: Horizon31
    Ecliptic: Ecliptic31
  }
  
  export interface Horizon31 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees61
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees61 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic31 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees62
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees62 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition10 {
    Horizon: Horizon32
    Ecliptic: Ecliptic32
  }
  
  export interface Horizon32 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees63
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees63 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic32 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees64
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees64 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign22 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate23
    endDate: EndDate23
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate23 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate23 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Neptune2 {
    key: string
    label: string
    Sign: Sign23
    ChartPosition: ChartPosition23
    House: House11
    isRetrograde: boolean
  }
  
  export interface Sign23 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate24
    endDate: EndDate24
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate24 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate24 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition23 {
    Horizon: Horizon33
    Ecliptic: Ecliptic33
  }
  
  export interface Horizon33 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees65
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees65 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic33 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees66
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees66 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House11 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition24
    Sign: Sign24
  }
  
  export interface ChartPosition24 {
    StartPosition: StartPosition11
    EndPosition: EndPosition11
  }
  
  export interface StartPosition11 {
    Horizon: Horizon34
    Ecliptic: Ecliptic34
  }
  
  export interface Horizon34 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees67
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees67 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic34 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees68
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees68 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition11 {
    Horizon: Horizon35
    Ecliptic: Ecliptic35
  }
  
  export interface Horizon35 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees69
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees69 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic35 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees70
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees70 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign24 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate25
    endDate: EndDate25
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate25 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate25 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Pluto2 {
    key: string
    label: string
    Sign: Sign25
    ChartPosition: ChartPosition25
    House: House12
    isRetrograde: boolean
  }
  
  export interface Sign25 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate26
    endDate: EndDate26
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate26 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate26 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition25 {
    Horizon: Horizon36
    Ecliptic: Ecliptic36
  }
  
  export interface Horizon36 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees71
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees71 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic36 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees72
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees72 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House12 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition26
    Sign: Sign26
  }
  
  export interface ChartPosition26 {
    StartPosition: StartPosition12
    EndPosition: EndPosition12
  }
  
  export interface StartPosition12 {
    Horizon: Horizon37
    Ecliptic: Ecliptic37
  }
  
  export interface Horizon37 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees73
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees73 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic37 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees74
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees74 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition12 {
    Horizon: Horizon38
    Ecliptic: Ecliptic38
  }
  
  export interface Horizon38 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees75
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees75 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic38 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees76
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees76 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign26 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate27
    endDate: EndDate27
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate27 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate27 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Chiron2 {
    key: string
    label: string
    Sign: Sign27
    ChartPosition: ChartPosition27
    House: House13
    isRetrograde: boolean
  }
  
  export interface Sign27 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate28
    endDate: EndDate28
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate28 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate28 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition27 {
    Horizon: Horizon39
    Ecliptic: Ecliptic39
  }
  
  export interface Horizon39 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees77
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees77 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic39 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees78
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees78 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House13 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition28
    Sign: Sign28
  }
  
  export interface ChartPosition28 {
    StartPosition: StartPosition13
    EndPosition: EndPosition13
  }
  
  export interface StartPosition13 {
    Horizon: Horizon40
    Ecliptic: Ecliptic40
  }
  
  export interface Horizon40 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees79
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees79 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic40 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees80
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees80 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition13 {
    Horizon: Horizon41
    Ecliptic: Ecliptic41
  }
  
  export interface Horizon41 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees81
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees81 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic41 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees82
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees82 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign28 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate29
    endDate: EndDate29
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate29 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate29 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Sirius2 {
    key: string
    label: string
    Sign: Sign29
    ChartPosition: ChartPosition29
    House: House14
  }
  
  export interface Sign29 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate30
    endDate: EndDate30
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate30 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate30 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface ChartPosition29 {
    Horizon: Horizon42
    Ecliptic: Ecliptic42
  }
  
  export interface Horizon42 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees83
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees83 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic42 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees84
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees84 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface House14 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition30
    Sign: Sign30
  }
  
  export interface ChartPosition30 {
    StartPosition: StartPosition14
    EndPosition: EndPosition14
  }
  
  export interface StartPosition14 {
    Horizon: Horizon43
    Ecliptic: Ecliptic43
  }
  
  export interface Horizon43 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees85
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees85 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic43 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees86
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees86 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition14 {
    Horizon: Horizon44
    Ecliptic: Ecliptic44
  }
  
  export interface Horizon44 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees87
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees87 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic44 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees88
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees88 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign30 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate31
    endDate: EndDate31
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate31 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate31 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface CelestialPoints {
    all: All2[]
    northnode: Northnode
    southnode: Southnode
    lilith: Lilith
  }
  
  export interface All2 {
    key: string
    label: string
    ChartPosition: ChartPosition31
    Sign: Sign31
    House: House15
  }
  
  export interface ChartPosition31 {
    Horizon: Horizon45
    Ecliptic: Ecliptic45
  }
  
  export interface Horizon45 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees89
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees89 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic45 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees90
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees90 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign31 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate32
    endDate: EndDate32
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate32 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate32 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface House15 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition32
    Sign: Sign32
  }
  
  export interface ChartPosition32 {
    StartPosition: StartPosition15
    EndPosition: EndPosition15
  }
  
  export interface StartPosition15 {
    Horizon: Horizon46
    Ecliptic: Ecliptic46
  }
  
  export interface Horizon46 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees91
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees91 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic46 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees92
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees92 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition15 {
    Horizon: Horizon47
    Ecliptic: Ecliptic47
  }
  
  export interface Horizon47 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees93
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees93 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic47 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees94
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees94 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign32 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate33
    endDate: EndDate33
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate33 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate33 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Northnode {
    key: string
    label: string
    ChartPosition: ChartPosition33
    Sign: Sign33
    House: House16
  }
  
  export interface ChartPosition33 {
    Horizon: Horizon48
    Ecliptic: Ecliptic48
  }
  
  export interface Horizon48 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees95
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees95 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic48 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees96
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees96 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign33 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate34
    endDate: EndDate34
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate34 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate34 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface House16 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition34
    Sign: Sign34
  }
  
  export interface ChartPosition34 {
    StartPosition: StartPosition16
    EndPosition: EndPosition16
  }
  
  export interface StartPosition16 {
    Horizon: Horizon49
    Ecliptic: Ecliptic49
  }
  
  export interface Horizon49 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees97
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees97 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic49 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees98
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees98 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition16 {
    Horizon: Horizon50
    Ecliptic: Ecliptic50
  }
  
  export interface Horizon50 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees99
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees99 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic50 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees100
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees100 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign34 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate35
    endDate: EndDate35
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate35 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate35 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Southnode {
    key: string
    label: string
    ChartPosition: ChartPosition35
    Sign: Sign35
    House: House17
  }
  
  export interface ChartPosition35 {
    Horizon: Horizon51
    Ecliptic: Ecliptic51
  }
  
  export interface Horizon51 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees101
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees101 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic51 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees102
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees102 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign35 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate36
    endDate: EndDate36
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate36 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate36 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface House17 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition36
    Sign: Sign36
  }
  
  export interface ChartPosition36 {
    StartPosition: StartPosition17
    EndPosition: EndPosition17
  }
  
  export interface StartPosition17 {
    Horizon: Horizon52
    Ecliptic: Ecliptic52
  }
  
  export interface Horizon52 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees103
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees103 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic52 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees104
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees104 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition17 {
    Horizon: Horizon53
    Ecliptic: Ecliptic53
  }
  
  export interface Horizon53 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees105
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees105 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic53 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees106
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees106 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign36 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate37
    endDate: EndDate37
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate37 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate37 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Lilith {
    key: string
    label: string
    ChartPosition: ChartPosition37
    Sign: Sign37
    House: House18
  }
  
  export interface ChartPosition37 {
    Horizon: Horizon54
    Ecliptic: Ecliptic54
  }
  
  export interface Horizon54 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees107
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees107 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic54 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees108
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees108 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign37 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate38
    endDate: EndDate38
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate38 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate38 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface House18 {
    _language: string
    id: number
    label: string
    ChartPosition: ChartPosition38
    Sign: Sign38
  }
  
  export interface ChartPosition38 {
    StartPosition: StartPosition18
    EndPosition: EndPosition18
  }
  
  export interface StartPosition18 {
    Horizon: Horizon55
    Ecliptic: Ecliptic55
  }
  
  export interface Horizon55 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees109
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees109 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic55 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees110
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees110 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface EndPosition18 {
    Horizon: Horizon56
    Ecliptic: Ecliptic56
  }
  
  export interface Horizon56 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees111
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees111 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Ecliptic56 {
    DecimalDegrees: number
    ArcDegrees: ArcDegrees112
    ArcDegreesFormatted: string
    ArcDegreesFormatted30: string
  }
  
  export interface ArcDegrees112 {
    degrees: number
    minutes: number
    seconds: number
  }
  
  export interface Sign38 {
    key: string
    zodiac: string
    label: string
    startDate: StartDate39
    endDate: EndDate39
    zodiacStart: number
    zodiacEnd: number
  }
  
  export interface StartDate39 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface EndDate39 {
    tropical: string
    sidereal: string
    astronomical: string
  }
  
  export interface Aspects {
    all: All3[]
    types: Types
    points: Points
  }
  
  export interface All3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Types {
    conjunction: Conjunction[]
    trine: Trine[]
    sextile: Sextile[]
    quincunx: Quincunx[]
    quintile: Quintile[]
    opposition: Opposition[]
    square: Square[]
    septile: Septile[]
    "semi-square": SemiSquare[]
    "semi-sextile": SemiSextile[]
  }
  
  export interface Conjunction {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Trine {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Sextile {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Quincunx {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Quintile {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Opposition {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Square {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Septile {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface SemiSquare {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface SemiSextile {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Points {
    sun: Sun3[]
    mercury: Mercury3[]
    venus: Venu[]
    pluto: Pluto3[]
    southnode: Southnode2[]
    ascendant: Ascendant2[]
    mars: Mar[]
    northnode: Northnode2[]
    midheaven: Midheaven2[]
    sirius: Siriu[]
    moon: Moon3[]
    lilith: Lilith2[]
    jupiter: Jupiter3[]
    saturn: Saturn3[]
    neptune: Neptune3[]
    chiron: Chiron3[]
    uranus: Uranu[]
  }
  
  export interface Sun3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Mercury3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Venu {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Pluto3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Southnode2 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Ascendant2 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Mar {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Northnode2 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Midheaven2 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Siriu {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Moon3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Lilith2 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Jupiter3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Saturn3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Neptune3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Chiron3 {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export interface Uranu {
    point1Key: string
    point1Label: string
    point2Label: string
    point2Key: string
    aspectKey: string
    aspectLevel: string
    aspectLevelLabel: string
    label: string
    orb: number
    orbUsed: number
  }
  
  export {}