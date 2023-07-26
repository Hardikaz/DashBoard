


// For Chart.js library
const ctx = document.getElementById('myChart');
      
new Chart(ctx, {
  type: 'line',
  
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
     
    datasets: [{
      label: 'Present',
      data: [12, 19, 3, 5, 2, 3,25,30,23,62,10,27],
      borderWidth: 1,
      backgroundColor:'green',
      borderColor:'green'
    },{
        label: 'Absent',
      data: [1, 9, 13, 15, 8, 3,7,10,8,12,6,3],
      borderWidth: 1,
      backgroundColor:'red',
      borderColor:'red'
    },
{
    label: 'Others',
      data: [10, 29, 1, 5, 2, 3,6,10,1,1,6,7,5],
      borderWidth: 1,
      backgroundColor:'black',
      border:'black'
}]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// onLoad

