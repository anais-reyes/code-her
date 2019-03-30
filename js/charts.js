var charts = [
  {
    section: 'general',
    domNode: 'generalChart',
    type: 'pie',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['blue', 'red'],
          //borderColor: 'rgb(255, 99, 132)',
          data: [40, 60]
        }]
      }
   },
   {
    section: 'behind',
    domNode: 'behindChart',
    type: 'line',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['blue', 'red'],
          data: [40, 60]
        }]
      }
   },
   {
    section: 'front',
    domNode: 'frontChart',
    type: 'pie',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['purple', 'white'],
          data: [40, 60]
        }]
      }
   },
   {
    section: 'genre',
    domNode: 'genreChart',
    type: 'line',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['green', 'purple'],
          data: [20, 80]
        }]
      }
   },
   {
    section: 'country',
    domNode: 'countryChart',
    type: 'bar',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['blue', 'red'],
          data: [50, 50]
        }]
      }
   },
]


function createChart(section) {
  console.log('chart')
  charts.forEach(function(element) {
    if(element.section === section) {
      var ctx = document.getElementById(element.domNode).getContext('2d');
      var chart = new Chart(ctx, {
        type: element.type,
        data: element.data
      })
    }
  })
}


