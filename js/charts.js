var charts = [
  {
    section: 'general',
    domNode: 'generalChart',
    type: 'pie',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['blue', 'pink'],
          data: [40, 60]
        }]
      },
      options: {
        tooltips: {
          enabled: true,
        }
      }
   },
  
   {
    section: 'behind',
    domNode: 'behindChart',
    type: 'pie',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['salmon', 'blue'],
          data: [40, 60]
        }]
      }, 
      options: {
        tooltips: {
          enabled: true,
        }
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
      }, 
      options: {
        tooltips: {
          enabled: true,
        }
      }
   },
   {
    section: 'genre',
    domNode: 'genreChart',
    type: 'pie',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['green', 'purple'],
          data: [20, 80]
        }]
      }, 
      options: {
        tooltips: {
          enabled: true,
        }
      }
   },
   {
    section: 'country',
    domNode: 'countryChart',
    type: 'pie',
    data: {
      labels: ['Aprobadas', 'No Aprobadas'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: ['blue', 'red'],
          data: [50, 50]
        }]
      }, 
      options: {
        tooltips: {
          enabled: true,
        }
      }
   },
]


function createChart(section) {
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


function addEvent() {
  document.getElementById('chart-icon').addEventListener('click', showFirstChart);
}
addEvent();




function showFirstChart() {
  document.getElementById('general').classList.remove('fade');
  createChart('general');
}

function manageTabs(tab) {
 
  if(tab === 'general') {
    document.getElementById('general').style.display = 'block';
   

  } else {
    document.getElementById('general').style.display = 'none';
    document.getElementById('general').classList.add('fade');
    document.getElementById('general').classList.remove('show');
  }

}