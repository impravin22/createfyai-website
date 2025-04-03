import React ,  { useState , useEffect } from 'react';
import '../css/resources.css';
import axios from 'axios';

const Resource = () => {

  const [faqData, setfaqData] = useState([]);
  const [programEvents, setProData] = useState([]);
  
    useEffect(() => {
      
        const fetchFAQData = async () => {
            try {
                const response = await axios.get('http://localhost:4000/resources/faq');
                setfaqData(response.data);
            } catch (error) {
                console.error('Error fetching FAQ data:', error);
            }
        };
        fetchFAQData();
    }, []);
  

    useEffect(() => {
  
      const fetchProData = async () => {
          try {
              const response = await axios.get('http://localhost:4000/resources/programs');
              setProData(response.data);
          } catch (error) {
              console.error('Error fetching FAQ data:', error);
          }
      };
      fetchProData();
  }, []);

  
  
  useEffect(() => {
    var coll = document.getElementsByClassName("collapsible");
    var i;
  
    const handleClick = function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    };
  
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", handleClick);
    }
  
    return () => {
     
      for (i = 0; i < coll.length; i++) {
        coll[i].removeEventListener("click", handleClick);
      }
    };
  }, []);
 

  const [formData, setFormData] = useState({
    image: null,
    name: '',
    description: '',
    college: ''
  });
  
  const [selectedProgram, setSelectedProgram] = useState("");
     const [isVisible, setIsVisible] = useState(false);
   const [blogs, setBlogs] = useState([]);
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('image', formData.image);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('college', formData.college);

    try {
      const response = await axios.post('/resources', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        console.log('Blog submitted successfully');
       
        setFormData({
          image: null,
          name: '',
          description: '',
          college: ''
        });
      } else {
        console.error('Failed to submit blog:', response.data);
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
    }
  };
    
  
    const fetchBlogs = () => {
      axios.get('/resources')
        .then(response => {
          if (response.data.message) {
            console.log(response.data.message); 
           
            setBlogs([]); 
          } else {
            setBlogs(response.data);
            console.log("Blog displayed...");
          }
        })
        .catch(error => {
          console.error('Error fetching blogs:', error);
        });
    };
    
  
    useEffect(() => {
      fetchBlogs();
    }, []);
  
    const showTab = () => {
      setIsVisible(!isVisible);
    };

    const [showModal, setShowModal] = useState(false);
    
    const [formValue, setFormValue] = useState({
      name: '',
      email: '',
      seats: 1, 
      programID:''
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValue({ ...formValue, [name]: value });
    };
    const handleApply = (eventId) => {
      setSelectedProgram(eventId); 
      setFormValue({ ...formValue, programID: eventId });
      setShowModal(true); 
    };
   

    const AddBookingByReducingSeat = async (selectedProgram) => {
      try {
        const ApplicationData = await axios.post('/resources/programs/applicant', formValue, {
          headers: {
            'Content-Type': 'application/json'
          }
        });        
      console.log('Booking added successfully:', ApplicationData);
        const response = await axios.get(`/resources/programs/${selectedProgram}`);
        console.log("fetched", response);
        const programs = response.data;
        console.log(response.data);
    
        if (!programs) {
          console.log("Selected program not found");
          return;
        }
        const cap = response.data.seatCapacity;
        let updatedSeatCapacity;
        console.log(selectedProgram);
        if (cap === 0) {
          alert("This program is currently unavailable");
          console.log("Sorry, all seats have been booked..!!");
          const deleteProgram = await axios.delete(`./resources/programs/${selectedProgram}`);
    
          console.log("Program removed cause of no seats ", deleteProgram);
          return;
        } else if (cap >= formValue.seats) {
          console.log("Seat will be added");
          updatedSeatCapacity = await cap - formValue.seats;
          // Change here: Pass data in the request body instead of appending to URL
          const updateResponse = await axios.patch(`/resources/programs/${selectedProgram}`, {
            seatCapacity: updatedSeatCapacity
          });
          setSelectedProgram(selectedProgram);
    
          console.log('Seats updated successfully:', updateResponse.data);
          console.log("seat added");
          alert("your are successfully registered to the program");
        } else {
    
          alert("Sorry, we have only limited seats");
    
        }
        setShowModal(false);
      } catch (error) {
        console.error('Error in updating seats:', error);
      }
    };
    
   

  return (
    <div>
      <header>
        <h1>Immigration Hub</h1>
      </header>

      <nav>
        <ul>
          <li><a href="#blog">Alumni Testimonials</a></li>
          <li><a href="#chat">Live Chat</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#program-list">Upcoming Programs</a></li>
        </ul>
      </nav>

      <section id="blog">
        <h2>Our Alumni Testimonials</h2>
        <h1>Blog Posts</h1>
   
         <div className="container-blog">
          <img src="https://img.freepik.com/free-photo/female-student-with-books-paperworks_1258-48204.jpg?w=996&t=st=1705380034~exp=1705380634~hmac=44ca3ec3374a0c01c599dbed093b3adb47a8c0eab59a82a9a30e2f4420b88ba1"
            alt="Avatar" style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Rebacca </span>Humber College ,Toronto, Canada</b>
          <p>"I had an amazing experience at Humber College in Toronto. The academic environment and cultural exposure
            exceeded my expectations. John Doe played a crucial role in guiding me through challenges, ensuring a
            smooth transition into the Canadian education system."</p>
        </div>

        <div className="container-blog">
          <img src="https://img.freepik.com/free-photo/handsome-young-curly-haired-man-working-laptop-computer-standing-isolated-white-wall_231208-1164.jpg?w=996&t=st=1705379917~exp=1705380517~hmac=459dcd624785beb649932694f506f72b183c2a1cc5e5ead22a833b9ed971890a"
            alt="Avatar" style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Chris Fox </span> University of Sydney, Australia</b>
          <p>"My experience at the University of Sydney was truly enriching. The vibrant academic community and
            picturesque surroundings created a perfect learning environment. John Doe's expertise and support were
            instrumental in making my study abroad journey at Sydney University a memorable one."</p>
        </div>

        <div className="container-blog">
          <img src="https://www.pngall.com/wp-content/uploads/8/Student-PNG-Photo.png" alt="Avatar"
            style={{ width: '90px' }} />
          <b style={{ fontWeight: 'bold' }}><span style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>Susan</span> Langara College ,Vancouver, Canada</b>
          <p>"My time at Langara College in Vancouver was marked by educational excellence and cultural diversity.
            John Doe's timely assistance and valuable insights were invaluable, steering me away from potential
            web-related challenges and ensuring a successful academic endeavor in Canada."</p>
        </div>
         <div>
  {blogs.map(blog => (
    <div className="container-blog" key={blog._id}>
      <img src={`http://localhost:4000/uploads/${blog.image}`} alt="img-stu" style={{ width: '90px' }} crossOrigin="anonymous" onError={(e) => console.error("Error loading image:", e)} />
      <div style={{ display: "inline-block", marginLeft: "10px" }}>
        <b  style={{ color: 'rgb(71, 240, 212)', fontSize: '26px', fontWeight: 'bold' }}>{blog.name}</b>
        <span id="clg" style={{ display: "inline-block", marginLeft: "20px" }}>{blog.college}</span><br/>
        <b id="des" style={{ fontWeight: "normal", textAlign:"center"}}>{blog.description}</b>

      </div>
    </div>
  ))}
</div>  

      <div className='blog_app'>
     
      <button type="button" onClick={showTab}>Add Blog</button>
       {isVisible && (
       
        <form onSubmit={handleSubmit} method='POST' >
           <h1>Blog Application</h1>
           <input type="file" name="image"  onChange={handleFileChange} required/><br /><br />
          <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/><br /><br />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required></textarea><br /><br />
          <input type="text" name="college" placeholder="College" value={formData.college} onChange={handleChange} required /><br /><br/>
          <button type="submit" style={{width:'839px'}}>Upload Blog</button>
        </form>
      )} 
    </div>
      </section> 

     
      
<section id="program-list">
<h2 style={{ backgroundColor: "rgb(200, 247, 247)", width: '80%', maxWidth: '900px', textAlign: 'center', margin: '0 auto' }}>Upcoming programs of WayTogo</h2>

      <div>
      {programEvents.map(event => (
        <div key={event.id} className="containerTab">
          <span className="closebtn">&times;</span>
          <h2>{event.program}</h2>
          <p><b>Location:</b> {event.location}<br /><strong>When:</strong> {event.when}<br /><strong>Timing:</strong> {event.timing}</p>
          <button type="button" id="apply-pro" onClick={() => handleApply(event.id)}
            >Apply</button>
         
        </div>
      ))}
    </div>

    {showModal && (
         <div className="popup-container">
         <div className="popup-content">
           <span className="popup-close" onClick={() => setShowModal(false)}>&times;</span>
           <form className="popup-form">
              <label>Name:</label>
              <input type="text" name="name" value={formValue.name} onChange={handleInputChange} required />
              <label>Email:</label>
              <input type="email" name="email" value={formValue.email} onChange={handleInputChange} required />
              <label>Seats:</label>
              <input type="number" name="seats" value={formValue.seats} min="1" onChange={handleInputChange} required />
              <button type="button" onClick={() => AddBookingByReducingSeat(selectedProgram)}>Submit</button>

            </form>
          </div>
        </div>
      )}
    </section>

    <section id="faq">
        <h2>Frequently Asked Questions ?</h2>
         {faqData.map(item =>(
          <div key ={item.id}>
            <button type="button" className='collapsible'>{item.question}</button>
            <div className='content-faq'>
              <p>{item.answer}</p>
            </div>
          </div>
         ))}
 
 </section>
      
     
    </div>
  );
};

export default Resource;
