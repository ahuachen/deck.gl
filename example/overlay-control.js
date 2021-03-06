/* eslint-disable no-unused-vars */
/* eslint-disable no-inline-comments */
import React from 'react';

function OverlayControl({
  hoverChoropleth,
  hoverHexagon,
  hoverPoint,
  hoverArc,
  hoverLine,
  clickItem
}) {
  const clickCoords = clickItem && clickItem.geoCoords;

  return (
    <div id="overlay-control" style={ {
      position: 'absolute',
      bottom: 20,
      left: 20,
      zIndex: 99
    } }>

      <div style={ {
        background: 'white',
        padding: '1em',
        marginBottom: '1em',
        width: 300
      } }>
        <div>
          { hoverHexagon && hoverHexagon.geoCoords &&
            ` (${hoverHexagon.geoCoords.lat.toFixed(4)} ` +
            `${hoverHexagon.geoCoords.lon.toFixed(4)})` }
        </div>
        <div>
          Hexagon
          { hoverHexagon && ` ${hoverHexagon.type}=${hoverHexagon.index}` }
        </div>
        <div>
          Point
          { hoverPoint && ` ${hoverPoint.type}=${hoverPoint.index}` }
        </div>
        <div>
          Arc
          { hoverArc && ` ${hoverArc.type}=${hoverArc.index}` }
        </div>
        <div>
          Line
          { hoverLine && ` ${hoverLine.type}=${hoverLine.index}` }
        </div>
        <div>
          Choropleth
          { hoverChoropleth &&
            ` ${hoverChoropleth.type}=${hoverChoropleth.index}` }
        </div>
        <div>````
          Click
          { clickItem && ` ${clickItem.type}=${clickItem.index}` }
          { clickCoords &&
            ` (${clickCoords.lat.toFixed(4)} ${clickCoords.lon.toFixed(4)})` }
        </div>
      </div>
    </div>
  );
}

export default OverlayControl;
