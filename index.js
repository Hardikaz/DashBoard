// BOX-1 PopOut
document.querySelectorAll('.box1')[0].addEventListener('click',displaybox1)

function displaybox1()
{
    if(document.querySelectorAll('.box1-display')[0].style.display==="none"){
   document.querySelectorAll('.box1-display')[0].style.display="flex";
  //  document.querySelectorAll('.box1')[0].style.backgroundColor="rgb(165, 4, 4)";
  //  document.querySelectorAll('.box1')[0].style.color="white";
    }
    else{
    document.querySelectorAll('.box1-display')[0].style.display="none";
    // document.querySelectorAll('.box1')[0].style.backgroundColor="#f3f7f9";
    // document.querySelectorAll('.box1')[0].style.color="black";
    }
}

//BOX-2 PopOut
document.querySelectorAll('.box2')[0].addEventListener('click',displaybox2)

function displaybox2()
{
    if(document.querySelectorAll('.box2-display')[0].style.display==="none"){
   document.querySelectorAll('.box2-display')[0].style.display="flex";
    }
    else
    document.querySelectorAll('.box2-display')[0].style.display="none";

}

//BOX-3 PopOut
document.querySelectorAll('.box3')[0].addEventListener('click',displaybox3)

function displaybox3()
{
    if(document.querySelectorAll('.box3-display')[0].style.display==="none"){
   document.querySelectorAll('.box3-display')[0].style.display="flex";
    }
    else
    document.querySelectorAll('.box3-display')[0].style.display="none";

}

//BOX-4 PopOut
document.querySelectorAll('.box4')[0].addEventListener('click',displaybox4)

function displaybox4()
{
    if(document.querySelectorAll('.box4-display')[0].style.display==="none"){
   document.querySelectorAll('.box4-display')[0].style.display="flex";
    }
    else
    document.querySelectorAll('.box4-display')[0].style.display="none";
}

//BOX-5 PopOut
document.querySelectorAll('.box5')[0].addEventListener('click',displaybox5)

function displaybox5()
{
    if(document.querySelectorAll('.box5-display')[0].style.display==="none"){
   document.querySelectorAll('.box5-display')[0].style.display="flex";
    }
    else
    document.querySelectorAll('.box5-display')[0].style.display="none";
}

//BOX-6 PopOut
document.querySelectorAll('.box6')[0].addEventListener('click',displaybox6)

function displaybox6()
{
    if(document.querySelectorAll('.box6-display')[0].style.display==="none"){
   document.querySelectorAll('.box6-display')[0].style.display="flex";
    }
    else
    document.querySelectorAll('.box6-display')[0].style.display="none";
}
//For Menu Search Bar

document.querySelectorAll('.MenuSearch')[0].addEventListener('click',active)

function active()
{
  if( document.querySelectorAll('.MenuSearch')[0].style.boxShadow==="none")
  {
  document.querySelectorAll('.MenuSearch')[0].style.boxShadow="2px 2px blue";
  }
  else
  {
    document.querySelectorAll('.MenuSearch')[0].style.boxShadow="none";
  }
  //console.log(document.querySelectorAll('.MenuSearch')[0].style.boxShadow);
}

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




