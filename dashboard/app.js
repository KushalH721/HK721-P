// Demo data and chart initialization for the PMS demo dashboard
const kpis = {
  employees: 120,
  goals: 86,
  reviews: 23,
  rating: 3.8
};

document.getElementById('kpi-employees').textContent = kpis.employees;
document.getElementById('kpi-goals').textContent = kpis.goals;
document.getElementById('kpi-reviews').textContent = kpis.reviews;
document.getElementById('kpi-rating').textContent = kpis.rating;

// Goals by month sample
const months = ['Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
const goalsCompleted = [8,12,9,14,16,11,13];

const ctx = document.getElementById('goalsChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: months,
    datasets: [{
      label: 'Goals Completed',
      data: goalsCompleted,
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37,99,235,0.08)',
      fill: true,
      tension: 0.3
    }]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  }
});

// Ratings distribution (donut)
const ratingCtx = document.getElementById('ratingChart').getContext('2d');
new Chart(ratingCtx, {
  type: 'doughnut',
  data: {
    labels: ['5★','4★','3★','2★','1★'],
    datasets: [{
      data: [45, 25, 18, 7, 5],
      backgroundColor: ['#16a34a','#60a5fa','#f59e0b','#f97316','#ef4444']
    }]
  },
  options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
});

// Recent reviews table
const reviews = [
  {employee:'Alice Chen', manager:'Ravi Patel', date:'2025-11-10', rating:4.5, status:'completed'},
  {employee:'Mohamed Ali', manager:'Priya Singh', date:'2025-11-09', rating:3.8, status:'completed'},
  {employee:'Daniel Kim', manager:'Sara Lee', date:'2025-11-05', rating:2.9, status:'pending'},
  {employee:'Emma Wilson', manager:'Ravi Patel', date:'2025-11-03', rating:4.0, status:'inprogress'}
];

const tbody = document.querySelector('#reviewsTable tbody');
reviews.forEach(r => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${r.employee}</td><td>${r.manager}</td><td>${r.date}</td><td>${r.rating}</td><td><span class="status ${r.status}">${r.status}</span></td>`;
  tbody.appendChild(tr);
});
