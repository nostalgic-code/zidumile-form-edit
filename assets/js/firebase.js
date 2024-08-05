// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyAfwmnE96G9RmU-oyW3yy03ZqCBrdStpyk",
  authDomain: "zidumile-db.firebaseapp.com",
  projectId: "zidumile-db",
  storageBucket: "zidumile-db.appspot.com",
  messagingSenderId: "978317033856",
  appId: "1:978317033856:web:5566e1343687daaad3c165",
  measurementId: "G-922W2KCEZR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get reference to database services
const db = getDatabase(app);

document.getElementById("submit").addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default form submission behavior

  // Debugging: Log form values
  console.log("Submit button clicked");

  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const businessType = document.getElementById("businessType").value;
  const industry = document.getElementById("industry").value;

  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Business Type:", businessType);
  console.log("Industry:", industry);

  set(ref(db, 'user/' + email), {
    email: email,
    phone: phone,
    firstName: firstName,
    lastName: lastName,
    businessType: businessType,
    industry: industry
  }).then(() => {
    alert("Form sent successfully");
    document.getElementById("modalForm").reset(); // Optional: Reset form fields after submission
  }).catch((error) => {
    console.error("Error writing to database", error);
  });
});
