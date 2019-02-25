<template>
  <div>
    <input type="range" min="1" max="100" name="numPolygons" v-model="numPolygons">
    <button @click.prevent="downloadSVG">Download SVG</button>
    <svg ref="renderedPolygons" width="400" height="400" title="polygons" version="1.1" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <g>
        <closed-polyline v-for="(polygon, index) in polygons" :key="index" :lineData="polygon"></closed-polyline>
      </g>
    </svg>
  </div>
</template>

<script>
/* eslint-disable standard/object-curly-even-spacing */

import ClosedPolyline from './ClosedPolyline'

export default {
  name: 'Polygons',
  components: {
    ClosedPolyline
  },
  data () {
    return {
      polygons: [],
      numPolygons: 0
    }
  },
  watch: {
    numPolygons (howMany) {
      this.generatePolygonData(howMany, 100, 100, 5, 50, 0)
    }
  },
  methods: {
    createPolygon (x, y, numOfSides, radius, startAngle) {
      let arr = []
      let xo
      let yo
      for (let i = 0; i < numOfSides; i++) {
        let t = (2 * Math.PI / numOfSides * i) + startAngle * (Math.PI / 180)
        xo = x + radius * Math.sin(t)
        yo = y + radius * Math.cos(t)
        arr.push([xo, yo])
      }
      return arr
    },
    generatePolygonData (howmany, x, y, numSides, radius, startAngle) {
      this.polygons = []
      for (let i = 0; i < howmany; i++) {
        this.polygons.push(this.createPolygon(x, y, numSides, radius + i * i / 2, startAngle + 20 * Math.sin(i * Math.PI / 9)))
      }
    },
    downloadSVG () {
      const svgDoctype = '<?xml version="1.0" standalone="no"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">'

      // serialize our SVG XML to a string.
      let svgString = (new XMLSerializer()).serializeToString(this.$refs.renderedPolygons)

      // reduce the SVG path by cutting off floating point values after the first digit beyond floating point (~50% less MBs)
      svgString = svgString.replace(/([+]?\d+\.\d{3,}([eE][+]?\d+)?)/g, (x) => (+x).toFixed(1)
      )
      svgString = svgString.replace(/ data-v-([0-9a-z]){8}=""/g, () => '')

      const blob = new Blob([svgDoctype + svgString], {type: 'image/svg+xml;charset=utf-8'})

      /* This portion of script saves the file to local filesystem as a download */
      let svgUrl = URL.createObjectURL(blob)

      const downloadLink = document.createElement('a')
      downloadLink.href = svgUrl
      downloadLink.download = 'polygons' + Date.now() + '.svg'
      document.body.appendChild(downloadLink)
      downloadLink.click()
      document.body.removeChild(downloadLink)
    }
  },
  mounted () {
    this.generatePolygonData(10, 100, 100, 5, 50, 0)
  }
}
</script>

<style scoped>

</style>