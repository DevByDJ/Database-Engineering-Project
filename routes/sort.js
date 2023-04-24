document.addEventListener('DOMContentLoaded', () => {
    const sortSelect = document.getElementById('sort');
    const internshipList = document.getElementById('internship-list');
  
    function sortInternships(field) {
      const internships = Array.from(internshipList.children);
  
      internships.sort((a, b) => {
        const aValue = a.querySelector(`[data-field="${field}"]`).textContent;
        const bValue = b.querySelector(`[data-field="${field}"]`).textContent;
  
        if (field === 'start_date') {
          return new Date(aValue) - new Date(bValue);
        } else {
          return aValue.localeCompare(bValue);
        }
      });
  
      internships.forEach((internship) => internshipList.appendChild(internship));
    }
  
    sortSelect.addEventListener('change', (event) => {
      const field = event.target.value;
      if (field) {
        sortInternships(field);
      }
    });
  });