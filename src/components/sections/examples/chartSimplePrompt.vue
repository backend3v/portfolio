<template lang="pug">
  .gridSimplePrompt(class="gridSpaceS")
    .itemTitle(class="itemsCenter")
      |{{title}}
    .itemImage(class="itemsCenter")
      img(:src="image" class="imageM")
    .itemDescription(class="itemsCenter")
      |{{summary}}
    .itemSectionA(class="itemsCenter")
      div
        |{{comparativeDescription}}

      LineChart(:chart-data="getData" :chart-options="chartOptions")
    .itemSectionB(style="display:flex")
      .itemsCenter(v-for="item in news")
        h3()
          |{{item.value}}
          br
          br
          a(:href="item.path")
            | Link
  
</template>

<script>
import { LineChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
export default {
  name: 'ChartSimplePrompt',
  data() {
    return {
      test:[],
      //lineColors: ['#42A5F5', '#66BB6A','#FFA726'],
      chartData: {

      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Line Chart Example',
          },
        },
      },
    }
  },
  computed: {
    getData() {
      const tempItem = []
      const labels = this.data.slice(1).map(row => row[0]); // Extrae los años
      const line1 = this.data.slice(1).map(row => parseFloat(row[1])); // Crecimiento del PIB
      const line2 = this.data.slice(1).map(row => parseFloat(row[2])); // Tasa de inflación
      const line3 = this.data.slice(1).map(row => parseFloat(row[3])); // Tasa de desempleo
      console.log("L",labels)
      for (let i = 0; i < this.data[0].length -1; i++) {
        console.log(i,"data",labels, line1[i], line2[i], line3[i],line1.length)
        console.log("label",this.data[i+1][0])
        console.log("label2",this.data[0][i+1])
        console.log("data",this.data.slice(1).map(row => parseFloat(row[i+1])))
        let tempData = this.data.slice(1).map(row => parseFloat(row[i+1]))
          tempItem.push({
          label:this.data[0][i+1],
          data: tempData,
          borderColor: this.lineColors[i],
          backgroundColor: 'rgba(66, 165, 245, 0.2)',
          fill: true

        })

      }
      return {
        labels: labels,
        datasets: tempItem,
        
      }

    }
  },
  methods: {



    },
    props: {
    data:Object,
    title: String,
    summary: String,
    image: String,
    news: Array,
    lineColors: Array,
    comparativeDescription:String

  },
    mounted() {

      //this.getData()
    },
  components: {
    LineChart: LineChart,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
