document.getElementById('travelPreferencesForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // 폼에서 입력된 데이터를 객체로 구성
  const preferences = {
    gender: document.getElementById('gender').value,
    travelPreference: document.getElementById('travelPreference').value,
    countryToVisit: document.getElementById('countryToVisit').value,
    travelBudget: document.getElementById('travelBudget').value,
    accommodationPreferences: document.getElementById('accommodationPreferences').value
  };

  // 서버로 POST 요청을 보내고 응답을 처리
  fetch('/findMatches', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(preferences)
  })
    .then(response => response.json())
    .then(data => {
      console.log('Matching travelers:', data);

      // 결과를 표시할 HTML 요소를 선택 또는 생성
      const resultsContainer = document.getElementById('resultsContainer');
      if (!resultsContainer) {
        const container = document.createElement('div');
        container.id = 'resultsContainer';
        document.body.appendChild(container);
      } else {
        resultsContainer.innerHTML = ''; // 이전 결과를 지움
      }

      // 받은 데이터로 결과 요소를 만들어 웹 페이지에 추가
      if (data && data.length > 0) {
        data.forEach(traveler => {
          const travelerInfo = document.createElement('div');
          travelerInfo.innerHTML = `
                    <p>Name: ${traveler.username}</p>
                    <p>Gender: ${traveler.gender}</p>
                    <p>Country of Residence: ${traveler.country_of_residence}</p>
                    <p>Country to Visit: ${traveler.country_to_visit}</p>
                    <p>Travel Budget: ${traveler.travel_budget}</p>
                    <p>Accommodation Preferences: ${traveler.accommodation_preferences}</p>
                `;
          document.getElementById('resultsContainer').appendChild(travelerInfo);
        });
      } else {
        const noResults = document.createElement('p');
        noResults.textContent = 'No matching travelers found.';
        document.getElementById('resultsContainer').appendChild(noResults);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      // 에러를 사용자에게 알림
      alert('An error occurred while fetching the matching travelers.');
    });
});
