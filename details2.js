// Details page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Code to load and display the summary table from local storage
    const tickets = JSON.parse(localStorage.getItem('tickets'));
    const summaryTable = document.getElementById('summary-table');
    console.log(tickets);
    if (tickets && tickets.length > 0) {
      let tableHTML = `
        <tr>
          <th>Tickets</th>
          <th>Charges</th>
        </tr>
      `;
      tickets.forEach(ticket => {
        tableHTML += `
          <tr>
            <td>${ticket.category} (${ticket.quantity} Tickets)</td>
            <td>$${ticket.charge}</td>
          </tr>
        `;
      });
      summaryTable.innerHTML = tableHTML;
    }
  
    // Code to check form validity and enable/disable the Continue button
    const detailsForm = document.getElementById('details-form');
    const continueBtn = document.getElementById('continue-btn');
  
    detailsForm.addEventListener('input', function () {
      const isValid = detailsForm.checkValidity();
      continueBtn.disabled = !isValid;
    });
  
    // Code to store user details in local storage on form submission
    detailsForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Code to store user details in local storage
      const fullName = document.getElementById('full-name').value;
      const countryCode = document.getElementById('country-code').value;
      const mobile = countryCode + document.getElementById('mobile').value;
      const email = document.getElementById('email').value;
      const confirmEmail = document.getElementById('confirm-email').value;
      const gender = document.getElementById('gender').value;
  
      const userDetails = {
        fullName,
        mobile,
        email,
        confirmEmail,
        gender
      };
  
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
  
      // Redirect to the Payment page
      window.location.href = 'payment.html';
    });
  });
  