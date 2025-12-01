// Demo frontend logic (no real API calls)
document.getElementById('followers').innerText = '12,345';

const ctx = document.getElementById('growthChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Day -6','-5','-4','-3','-2','-1','Today'],
    datasets: [{ label:'Followers', data:[12000,12100,12180,12250,12390,12480,12345], tension:0.3 }]
  },
  options: {}
});

document.getElementById('scheduleForm').addEventListener('submit', e=>{
  e.preventDefault();
  alert('Post scheduled (demo). In a real app this would call the backend.');
});
