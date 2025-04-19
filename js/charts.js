// Bar Chart - Appointments by Department
new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Cardiology', 'Dermatology', 'Neurology', 'Orthopedics', 'ENT'],
      datasets: [{
        label: 'Appointments',
        data: [80, 60, 45, 70, 50],
        backgroundColor: 'rgba(0, 123, 255, 0.6)'
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Appointments per Department'
        }
      }
    }
  });
  
  // Pie Chart - Doctor Availability
  new Chart(document.getElementById('pieChart'), {
    type: 'pie',
    data: {
      labels: ['Available', 'Busy', 'On Leave'],
      datasets: [{
        data: [65, 25, 10],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545']
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Doctor Availability Status'
        }
      }
    }
  });
  
  // Line Chart - Monthly Appointments
  new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Appointments',
        data: [40, 55, 60, 75, 80, 70],
        borderColor: '#007bff',
        fill: false,
        tension: 0.3
      }]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: 'Monthly Appointment Trends'
        }
      }
    }
  });
  