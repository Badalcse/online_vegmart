document.getElementById("paymentForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate form inputs
  var cardNumber = document.getElementById("cardNumber").value;
  var expirationDate = document.getElementById("expirationDate").value;
  var cvv = document.getElementById("cvv").value;
  var nameOnCard = document.getElementById("nameOnCard").value;

  // Perform validation as per your requirements
  // Here, we'll check if all fields are filled
  if (cardNumber && expirationDate && cvv && nameOnCard) {
    // Payment successful
    alert("Payment successful!");
    // Perform any other necessary actions like redirecting to a success page
  } else {
    // Payment failed - display an error message
    alert("Please fill in all the fields.");
  }
});
