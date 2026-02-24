import { useEffect, useMemo, useState, type MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import * as d3 from 'd3'

const activeStates = new Set([
  'Alabama',
  'Arkansas',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District of Columbia',
  'Florida',
  'Georgia',
  'Hawaii',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Mississippi',
  'Missouri',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'Ohio',
  'Oklahoma',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'Tennessee',
  'Texas',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'Alaska',
])

const stateList = [
  { name: 'Alabama', abbr: 'AL' },
  { name: 'Alaska', abbr: 'AK' },
  { name: 'Arizona', abbr: 'AZ' },
  { name: 'Arkansas', abbr: 'AR' },
  { name: 'California', abbr: 'CA' },
  { name: 'Colorado', abbr: 'CO' },
  { name: 'Connecticut', abbr: 'CT' },
  { name: 'Delaware', abbr: 'DE' },
  { name: 'District of Columbia', abbr: 'DC' },
  { name: 'Florida', abbr: 'FL' },
  { name: 'Georgia', abbr: 'GA' },
  { name: 'Hawaii', abbr: 'HI' },
  { name: 'Idaho', abbr: 'ID' },
  { name: 'Illinois', abbr: 'IL' },
  { name: 'Indiana', abbr: 'IN' },
  { name: 'Iowa', abbr: 'IA' },
  { name: 'Kansas', abbr: 'KS' },
  { name: 'Kentucky', abbr: 'KY' },
  { name: 'Louisiana', abbr: 'LA' },
  { name: 'Maine', abbr: 'ME' },
  { name: 'Maryland', abbr: 'MD' },
  { name: 'Massachusetts', abbr: 'MA' },
  { name: 'Michigan', abbr: 'MI' },
  { name: 'Minnesota', abbr: 'MN' },
  { name: 'Mississippi', abbr: 'MS' },
  { name: 'Missouri', abbr: 'MO' },
  { name: 'Montana', abbr: 'MT' },
  { name: 'Nebraska', abbr: 'NE' },
  { name: 'Nevada', abbr: 'NV' },
  { name: 'New Hampshire', abbr: 'NH' },
  { name: 'New Jersey', abbr: 'NJ' },
  { name: 'New Mexico', abbr: 'NM' },
  { name: 'New York', abbr: 'NY' },
  { name: 'North Carolina', abbr: 'NC' },
  { name: 'North Dakota', abbr: 'ND' },
  { name: 'Ohio', abbr: 'OH' },
  { name: 'Oklahoma', abbr: 'OK' },
  { name: 'Oregon', abbr: 'OR' },
  { name: 'Pennsylvania', abbr: 'PA' },
  { name: 'Rhode Island', abbr: 'RI' },
  { name: 'South Carolina', abbr: 'SC' },
  { name: 'South Dakota', abbr: 'SD' },
  { name: 'Tennessee', abbr: 'TN' },
  { name: 'Texas', abbr: 'TX' },
  { name: 'Utah', abbr: 'UT' },
  { name: 'Vermont', abbr: 'VT' },
  { name: 'Virginia', abbr: 'VA' },
  { name: 'Washington', abbr: 'WA' },
  { name: 'West Virginia', abbr: 'WV' },
  { name: 'Wisconsin', abbr: 'WI' },
  { name: 'Wyoming', abbr: 'WY' },
]

const decodeTopojson = (topology: any, objectName: string) => {
  const obj = topology.objects[objectName]
  const arcs = topology.arcs
  const scale = topology.transform ? topology.transform.scale : [1, 1]
  const translate = topology.transform ? topology.transform.translate : [0, 0]

  const decodeArc = (arc: number[][]) => {
    let x = 0
    let y = 0
    return arc.map((point) => {
      x += point[0]
      y += point[1]
      return [x * scale[0] + translate[0], y * scale[1] + translate[1]]
    })
  }

  const getArc = (idx: number) => {
    if (idx < 0) {
      return decodeArc(arcs[~idx]).reverse()
    }
    return decodeArc(arcs[idx])
  }

  const ringCoords = (ring: number[]) => ring.reduce((pts: number[][], idx) => pts.concat(getArc(idx)), [])

  const features = obj.geometries.map((geom: any) => {
    let geometry
    if (geom.type === 'Polygon') {
      geometry = { type: 'Polygon', coordinates: geom.arcs.map(ringCoords) }
    } else if (geom.type === 'MultiPolygon') {
      geometry = { type: 'MultiPolygon', coordinates: geom.arcs.map((poly: number[][][]) => poly.map(ringCoords)) }
    }
    return { type: 'Feature', properties: geom.properties, geometry }
  })

  return { type: 'FeatureCollection', features }
}

const MarketsServedPage = () => {
  const [features, setFeatures] = useState<any[]>([])
  const [isMapReady, setIsMapReady] = useState(true)
  const [tooltip, setTooltip] = useState({
    visible: false,
    name: '',
    available: false,
    x: 0,
    y: 0,
  })
  const { projection, geoPath } = useMemo(() => {
    const width = 960
    const height = 600
    const projectionInstance = d3.geoAlbersUsa().scale(1280).translate([width / 2, height / 2])
    return {
      projection: projectionInstance,
      geoPath: d3.geoPath(projectionInstance),
    }
  }, [])

  useEffect(() => {
    let isActive = true

    fetch('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json')
      .then((response) => response.json())
      .then((topology) => {
        if (!isActive) {
          return
        }
        const decoded = decodeTopojson(topology, 'states')
        setFeatures(decoded.features)
        setIsMapReady(true)
      })
      .catch(() => {
        if (!isActive) {
          return
        }
        setIsMapReady(false)
      })

    return () => {
      isActive = false
    }
  }, [])

  const sortedStates = useMemo(
    () => [...stateList].sort((a, b) => a.name.localeCompare(b.name)),
    []
  )

  const handleMouseEnter = (name: string, available: boolean) => (event: MouseEvent) => {
    setTooltip({
      visible: true,
      name,
      available,
      x: event.clientX + 14,
      y: event.clientY - 10,
    })
  }

  const handleMouseMove = (event: MouseEvent) => {
    setTooltip((prev) => ({
      ...prev,
      x: event.clientX + 14,
      y: event.clientY - 10,
    }))
  }

  const handleMouseLeave = () => {
    setTooltip((prev) => ({ ...prev, visible: false }))
  }

  return (
    <main className="markets-page">
      <section id="markets-hero" className="markets-hero">
        <div className="container">
          <div className="markets-hero__eyebrow">
            <span className="markets-hero__dot" aria-hidden="true" />
            Nationwide Coverage
          </div>
          <h1>
            Markets We <em>Serve</em>
          </h1>
          <p>
            Method Lending originates business purpose DSCR loans across 38 states. No W-2s. No personal income
            docs. Just cash-flow-based lending for real estate investors.
          </p>
          <div className="markets-hero__actions">
            <Link className="btn btn-primary btn-lg" to="/request-quote">
              Request a Quote
            </Link>
            <Link className="btn btn-outline-primary btn-lg" to="/loan-options">
              View loan options
            </Link>
          </div>
        </div>
      </section>

      <section id="markets-map" className="markets-map section">
        <div className="container">
          <div className="markets-section-header">
            <h2>Coverage Map</h2>
            <p>Hover any state to check availability. Blue means Method Lending is open for business there.</p>
          </div>
          <div className="markets-map-card">
            <div className="markets-legend">
              <div className="markets-legend__item">
                <span className="markets-legend__swatch markets-legend__swatch--active" aria-hidden="true" />
                Available
              </div>
              <div className="markets-legend__item">
                <span className="markets-legend__swatch markets-legend__swatch--inactive" aria-hidden="true" />
                Not currently available
              </div>
            </div>
            <div className="markets-map-frame">
              {!isMapReady && (
                <p className="markets-map-fallback">
                  Map failed to load. Please refresh.
                </p>
              )}
              {isMapReady && (
                <svg viewBox="0 0 960 600" preserveAspectRatio="xMidYMid meet">
                  {features.map((feature, index) => {
                    const name = feature.properties?.name
                    const path = geoPath(feature)
                    if (!name || !path) {
                      return null
                    }
                    const available = activeStates.has(name)
                    return (
                      <path
                        key={name ?? index}
                        className={`markets-state ${available ? 'markets-state--active' : 'markets-state--inactive'}`}
                        d={path}
                        onMouseEnter={handleMouseEnter(name, available)}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                      />
                    )
                  })}
                  {features.map((feature) => {
                    const name = feature.properties?.name
                    const available = activeStates.has(name)
                    const [x, y] = geoPath.centroid(feature)
                    const match = stateList.find((state) => state.name === name)
                    if (!match || Number.isNaN(x) || Number.isNaN(y)) {
                      return null
                    }
                    return (
                      <text
                        key={`${name}-label`}
                        className="markets-state-label"
                        x={x}
                        y={y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill={available ? 'rgba(255,255,255,0.9)' : 'rgba(80,90,110,0.7)'}
                      >
                        {match.abbr}
                      </text>
                    )
                  })}
                </svg>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="markets-grid" className="markets-grid section">
        <div className="container">
          <div className="markets-section-header">
            <h2>All States at a Glance</h2>
            <p>Full alphabetical list of coverage by state.</p>
          </div>
          <div className="markets-grid__list">
            {sortedStates.map((state) => {
              const available = activeStates.has(state.name)
              return (
                <div className="markets-state-card" key={state.name}>
                  <span
                    className={`markets-state-card__indicator ${
                      available ? 'markets-state-card__indicator--yes' : 'markets-state-card__indicator--no'
                    }`}
                    aria-hidden="true"
                  />
                  <div>
                    <div className="markets-state-card__name">{state.name}</div>
                    <div className="markets-state-card__status">
                      {available ? 'Available' : 'Not available'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="markets-cta section">
        <div className="container">
          <div className="markets-cta__card">
            <div>
              <h3>Ready to finance your next deal?</h3>
              <p>Get a fast, cash-flow-based quote with no personal income documentation.</p>
            </div>
            <Link className="btn btn-light" to="/request-quote">
              Book a Call
            </Link>
          </div>
        </div>
      </section>

      <section id="markets-disclaimer" className="markets-disclaimer section">
        <div className="container">
          <p>
            <strong>Disclaimer:</strong> Method Lending, LLC originates business purpose loans only. This map
            reflects states where Method Lending currently accepts business purpose DSCR loan applications through
            its LLC structure. Availability subject to change. Not all products available in all states. This is not
            an offer to lend.
          </p>
        </div>
      </section>

      <div
        className={`markets-tooltip ${tooltip.visible ? 'markets-tooltip--visible' : ''}`}
        style={{ left: tooltip.x, top: tooltip.y }}
        role="status"
        aria-live="polite"
      >
        <strong>{tooltip.name}</strong>
        <span className={`markets-tooltip__badge ${tooltip.available ? 'is-yes' : 'is-no'}`}>
          {tooltip.available ? 'Available' : 'Not Available'}
        </span>
      </div>
    </main>
  )
}

export default MarketsServedPage
