<script>
  import { onMount } from 'svelte';
  import { Chart, registerables } from 'chart.js';
  import annotationPlugin from 'chartjs-plugin-annotation';
  
  Chart.register(...registerables, annotationPlugin);

  let chart;
  export let chartType = 'line';
  export let data = [];
  export let labels = [];
  export let unit = '';
  export let goal = 0;
  export let limit = 0;

  const annotation = {
      type: 'line',
      borderColor: 'grey',
      borderWidth: 3,
      scaleID: 'y',
      value: (goal) ? goal : limit,
      label: {
          content: (goal) ? "Your goal" : "Your limit",
          display: true,
          position: 'end'
      }
  };

  onMount(()=> {
      const ctx = chart.getContext('2d');

      const myChart = new Chart(ctx, {
          type: chartType,
          data: {
              labels: labels,
              datasets: data
          },
          options: {
              responsive: true,
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    text: unit,
                    display: true
                  }
                }
              },
              plugins: {
                autocolors: false,
                annotation: {
                  annotations: {
                    annotation
                  }
                }
              }
            }
      });
  });


</script>

<div class="chart">
  <canvas bind:this={chart} width={1000} />
</div>

<style>
  .chart {
    position: relative;
    margin: 0 auto;
    display: inline-block;
    width: 90vw;
    height: auto;
    max-width: 1000px;
    z-index: -1;
  }
</style>
