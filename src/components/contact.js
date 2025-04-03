import React, { useState, useEffect } from 'react';
import Bot from './bot';
import '../css/contact.css';

const ContactForm = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/userData", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });
        const data = await response.json();
        setUserData(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); 


  const [filter, setFilter] = useState('');
  // const [chatPopupVisible, setChatPopupVisible] = useState(false);
  // const [chatInput, setChatInput] = useState('');
  // const [userMessages, setUserMessages] = useState([]);

  // useEffect(() => {
  //   const filteredCountries = document.getElementById('myUL').getElementsByTagName('li');
  //   for (let i = 0; i < filteredCountries.length; i++) {
  //     const a = filteredCountries[i].getElementsByTagName('a')[0];
  //     const txtValue = a.textContent || a.innerText;
  //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
  //       filteredCountries[i].style.display = '';
  //     } else {
  //       filteredCountries[i].style.display = 'none';
  //     }
  //   }
  // }, [filter]);

  // const openTab = (tabName) => {
  //   const x = document.getElementsByClassName('containerTab');
  //   for (let i = 0; i < x.length; i++) {
  //     x[i].style.display = 'none';
  //   }
  //   document.getElementById(tabName).style.display = 'block';
  // };

  // const handleChatInputChange = (e) => {
  //   setChatInput(e.target.value);
  // };

  // const handleSendMessage = () => {
  //   const message = chatInput.trim();
  //   if (message !== '') {
  //     setUserMessages([...userMessages, message]);
  //     setChatInput('');
  //   }
  // };

  // const toggleChatPopup = () => {
  //   setChatPopupVisible(!chatPopupVisible);
  // };

//   // Function to handle sending messages
// function handleSendMessage() {
//   const message = document.getElementById('chatInput').value;

//   // Send the message to the server via HTTP POST request
//   fetch('/contact/send-message', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ message: message })
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Handle response from the server
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

// // Function to handle receiving messages
// function fetchMessages() {
//   // Fetch messages from the server via HTTP GET request
//   fetch('/contact')
//   .then(response => response.json())
//   .then(data => {
//     // Update the chat popup body with the received messages
//     document.getElementById('chatBody').innerHTML = data.messages;
//     console.log('chat sent');
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// }

  return (
    <div>
      <br/><br/><br/>
      {/* <section className='User-data'>
        Email : <h3>{userData.email}</h3>
      </section> */}
      <section className="contact-info" style={{ textAlign: 'center' }}>
        <h2>Contact Information</h2>
        <p>
          <b>Email:</b> contact@waytogo.com
        </p>
        <p>
          <b>Phone:</b> +1 (123) 456-7890 (Mon-Fri, 9 AM - 5 PM)
        </p>
        <p>
          <b>Address: </b>123 Main Street, Cityville, Country
        </p>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', color: '#0ceedf' }}>Select Your Country</h2>
        <div className="search">
          <input
            type="text"
            id="myInput"
            onKeyUp={(e) => setFilter(e.target.value.toUpperCase())}
            placeholder="Search for country names.."
            title="Type in a name"
          />
          <ul id="myUL">
            <li>
              <a href="/">Canada</a>
            </li>
            <li>
              <a href="/">Australia</a>
            </li>
            <li>
              <a href="/">Ireland</a>
            </li>
            <li>
              <a href="/">france</a>
            </li>
            <li>
              <a href="/">New-Zealand</a>
            </li>
            <li>
              <a href="/">Switchzerland</a>
            </li>
            <li>
              <a href="/">America</a>
            </li>
            <li>
              <a href="/">Europe</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="contact-form">
        <h2 style={{ textAlign: 'center' }}>Get in Touch</h2>
        <h1 style={{ fontSize: '42px', fontWeight: 'bold', textAlign: 'center' }}>Get Free Consultation</h1>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', textAlign: 'center' }}>
          Want to get in touch? We’d love to hear from you.
        </h2>
        <div className="flex-item">
          <div className="form-reg">
            <form method="get">
              <fieldset>
                <legend>
                  <b style={{ fontSize: '26px', color: '#0ceedf' }}>Fill the Registration Form</b>
                </legend>
                <input type="radio" name="salutation" id="mr" value="mr" />Mr
                <input type="radio" name="salutation" id="mrs" value="mrs" />Mrs
                <input type="radio" name="salutation" id="ms" value="ms" />Ms
                <br />
                <br />
                <input
                  type="text"
                  style={{ height: '25px' }}
                  name="name"
                  id="id"
                  placeholder="Name"
                  pattern="^[a-zA-z]{4,20}[.]?[a-zA-Z]{0,3}$"
                  title="Invalid Name"
                  required
                />
                <br />
                <br />
                <input
                  type="text"
                  style={{ height: '25px' }}
                  name="email"
                  id="email"
                  placeholder="Email"
                  pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  title="Invalid Email id"
                  required
                />
                <br />
                <br />
                <input type="password" name="pass" id="pass" placeholder="Password" required />
                <br />
                <br />

                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="+91 (Mobiles)"
                  pattern="[1-9][0-9]{10}"
                  required
                />
                <br />
                <br />
                <input type="date" name="dob" id="dob" />
                <br />
                <br />

                <input type="radio" name="gender" id="m" value="male" />Male
                <input type="radio" name="gender" id="f" value="female" />Female
                <input type="radio" name="gender" id="o" value="others" />Others
                <br />
                <br />
                <textarea type="textarea" name="remark" id="remark" placeholder="Residential address"></textarea>
                <br />
                <br />
                <select name="city" id="city">
                  <option>----City----</option>
                  <option>Chennai</option>
                  <option>Bangalore</option>
                  <option>Coimbatore</option>
                  <option>Trichy</option>
                  <option>Madurai</option>
                </select>
                <br />
                <br />

                <select name="country" id="country">
                  <option>----Preffered Country----</option>
                  <option>Australia</option>
                  <option>Canada</option>
                  <option>America</option>
                  <option>New Zealand</option>
                  <option>Ireland</option>
                  <option>Switcherland</option>
                </select>
                <br />
                <br />

                <input type="submit" />
              </fieldset>
            </form>
          </div>
          <div className="display-item">
            <h1 style={{ color: '#0ceedf', textAlign: 'center' }}>Call us Now..!!</h1>
            <div className="flag">
              <img src="http://www.pngall.com/wp-content/uploads/2016/06/Canada-Flag-PNG-Picture.png" alt="Canada Flag" />
              <h2>+1 604-688-1320</h2>
            </div>
            <div className="flag">
              <img src="https://www.freepnglogos.com/uploads/france-flag-png/france-flag-transparent-images-only-13.png" alt="France Flag" />
              <h2>+971-42865134</h2>
            </div>
            <div className="flag">
              <img src="logos/newzealand.png" alt="New Zealand Flag" />
              <h2>+974 30896449</h2>
            </div>
            <div className="flag">
              <img src="https://cdn.pixabay.com/photo/2017/06/20/17/21/international-2423859_960_720.png" alt="International Flag" />
              <h2>+91-75-94088000</h2>
            </div><br/>
            <div class="loader1"></div>
            <br />
            <button type="button" id="btn">
              Locate Us
            </button>
          </div>
        </div>
      </section>

      {/* <div className="chat-popup" id="chatPopup" style={{ display: chatPopupVisible ? 'block' : 'none' }}>
        <div className="chat-popup-header">
          <span className="chat-popup-title">Chat with our mentors</span>
          <button className="chat-popup-close" onClick={toggleChatPopup}>
            ×
          </button>
        </div>
        <div className="chat-popup-body" id="chatBody" style={{ backgroundColor: 'aliceblue' }}>
          <p>
            <b>Hi..,Feel free to ask your query! We are here to help you</b>
          </p>
          <p id="userMessages">
            {userMessages.map((message, index) => (
              <span key={index}>{message}</span>
            ))}
          </p>
        </div>
        <div className="chat-popup-footer">
          <input type="text" id="chatInput" value={chatInput} onChange={handleChatInputChange} placeholder="Type your message..." />
          <button onClick={fetchMessages} style={{ backgroundColor: '#0ceedf', color: 'aliceblue' }}>
            Send
          </button>
        </div>
      </div> */}
     <Bot/>

      {/* <div className="floating-chat-circle" id="floatingChatCircle" onClick={toggleChatPopup}>
        <img src="https://icon-library.com/images/chat-icon-png/chat-icon-png-22.jpg" alt="Chat Icon" />
      </div> */}
    </div>
  );
};

export default ContactForm;
