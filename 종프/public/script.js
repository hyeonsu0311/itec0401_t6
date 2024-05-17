// script.js (예시)
document.getElementById('travelPreferencesForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = {
    gender: document.getElementById('gender').value,
    travelPreference: document.getElementById('travelPreference').value,
    countryToVisit: document.getElementById('countryToVisit').value,
    travelBudget: document.getElementById('travelBudget').value,
    accommodationPreferences: document.getElementById('accommodationPreferences').value
  };

  fetch('/findMatches', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  })
    .then(response => {
      if (response.headers.get("content-type").includes("application/json")) {
        return response.json();
      } else {
        throw new Error('Expected JSON response but got a non-JSON response.');
      }
    })
    .then(data => {
      window.location.href = `match.html?token=${data.token}`;
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while fetching the matching travelers: ' + error.message);
    });
});
