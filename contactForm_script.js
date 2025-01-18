
  //* ========================================================
  //* JavaScript code to send form data to WhatsApp
  //* ========================================================
    document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally
    
    // Collect form data
    const name = encodeURIComponent(document.getElementById("name").value);
    const email = encodeURIComponent(document.getElementById("email").value);
    const sub = encodeURIComponent(document.getElementById("sub").value);
    const message = encodeURIComponent(document.getElementById("message").value);
    
    // Construct WhatsApp URL
    const phoneNumber = "918218658959"; // Replace with your WhatsApp number (without '+' or spaces)
    const whatsappURL = `https://wa.me/${phoneNumber}?text=Hello,%20I%20am%20${name}%0AEmail:%20${email}%0ASub:%20${sub}%0AMessage:%20${message}`;
    
    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  });