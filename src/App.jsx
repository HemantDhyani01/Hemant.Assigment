
import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';





import Card from 'react-bootstrap/Card';




function App() {

 

  
 

  return (
    <div id="main">
       <Navbar expand="lg" class="text-primary">
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Nav.Link href="#link" className="text">Logo</Nav.Link>
            <NavDropdown title="CATEGORIES" id="basic-nav-dropdown" className="text-primary">
              <NavDropdown.Item href="#action/3.1">Language</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cooking</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Arts&Craft
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" id="logo">TEACH</Nav.Link>
           </Nav>
            <button type="button" class="btn2 btn-primary">Login</button>
            <button type="button" class="button btn-primary">Sign Up</button>
          

        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <div id="goat">
    <div id='intro' >
      
      <h4 id="images">Hobbies <img src='./src/Images/pngwing 1.png'></img> Happiness<img src='./src/Images/Subtract.png'></img>Home</h4>
      <br/>
      <h5 id='text'> A Nordiac Stratup  which Brings incredibly <h5>Interesting hobbies from around the world to<br/><h5>People of all ages.</h5></h5></h5>
      <br/>
      
      <InputGroup classnamr='recipt'>
        <Form.Control   className='recipt'
          placeholder="Enter Your email"
          aria-label="Recipient's username with two button addons"
          
          
          
        />
         <button type="button" class="button btn-primary">Sign Up <img src='./src/Images/White-arrow.png'></img></button>
        
        
        
      </InputGroup>
      
    </div>
    <div><img id="img2" src="./src/Images/Mask Group.png"></img></div>
    
    </div>

    <div><img src='./src/Images/Group 927.png' id='img3'></img></div>

    <img className='arrow' src='./src/Images/Group.png'></img>

    <br/>

    <h2 className='Font2'>Explore.Enroll.HaveFun.Repeat-<br/><h2>Here hobby meets happiness</h2></h2>
    <br/>

    <div className='cards'>
      
      <div className='card1' >
        <img id='card-img' src='./src/Images/Artboard-27.png'></img>
        <br/>
        <br/>
        <br/>
        <h3 className='card-text' style={{color:"darkblue"}}> Learn something new</h3>
        
        <h5 className='card-text'>  explore youe passion and go</h5>
        <h5 className='card-text'> beyond the physical and mental</h5>
        <h5 className='card-text'>  boundaries of time ,age ,gender or</h5>
        <h5 className='card-text'> geography.</h5>
       
       
         
      </div>
      <div className='card1'>
        <img id='card-img' src='./src/Images/Artboard-21.png'></img>
        <br/>
        <br/>
        <br/>
        <h3 className='card-text' style={{color:"darkblue"}}> Skilled & Passionate Teachres</h3>
        
        <h5 className='card-text'>  We offers interactive classes by</h5>
        <h5 className='card-text'> experts who are qualified and</h5>
        <h5 className='card-text'> trusted. </h5>
    
       
       
         
      </div>

      <div className='card1'>
      <img id='card-img' src='./src/Images/Studying.png'></img>
        <br/>
        <br/>
        
        <h3 className='card-text' style={{color:"darkblue"}}> Learn something new</h3>
        
        <h5 className='card-text'>  explore youe passion and go</h5>
        <h5 className='card-text'> beyond the physical and mental</h5>
        <h5 className='card-text'>  boundaries of time ,age ,gender or</h5>
        <h5 className='card-text'> geography.</h5>
       
      </div>

      
      
    
     <div className='card1'>

      <br/>
      
      
     <img id='card-img' src='./src/Images/Icon.png'></img>
        
        <br/>
        <br/>
        
        <h3 className='card-text' style={{color:"darkblue"}}> Pay as you go</h3>
        
        <h5 className='card-text'>No enrollment fee for our classes</h5>
        <h5 className='card-text'> You only pay for the classes that</h5>
        <h5 className='card-text'>  you take. Your payment is safe and</h5>
        <h5 className='card-text'>secure with us</h5>
       

     </div>
    
    
    
    
    
    </div>

   <div className='currency'> 
    <h1 className='mid-font'>
      Discover Classes <a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">SHOW ALL</a>
      </h1>
      <h4 id='currency-text'>Show Prices in:  <button class='currency-button'>NOK|INR</button></h4>
      </div>


      <br/>
      

      <h6 className='Font-7'>Choose from a variety of classes from around the world.</h6>
      <br/>





      <div className='Big-Cards'style={{display:'flex', justifyContent:'space-evenly'}}>
        <img id='Big-Cards-img'src='./src/Images/Class Card(16_20) (1).png'></img>
        <img id='Big-Cards-img'src='./src/Images/Class Card(16_20) (2).png'></img>
        <img id='Big-Cards-img'src='./src/Images/Class Card(16_20) (2).png'></img>
        
        <img id='Big-Cards-img'src='./src/Images/Class Card(16_20) (2).png'></img>
      </div>
      <br/>

      <h1 id='Cat-txt-2' style={{fontWeight:'700',paddingTop:'100px', color:'darkblue', paddingLeft:'58px'}}>
        Browse By Categories
      </h1>

      <br/>
      

      <div className='Card-el' style={{display:'flex', justifyContent:'space-evenly'}}>

        <div id='el-1'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/Images/Splash.png" />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Language</Card.Title>
      
      </Card.Body>
    </Card>
        

      </div> 
      
      <div id='el-1'>
        <Card style={{ width: '18rem', paddingTop:'14px' }}>
      <Card.Img variant="top" src="./src/Images/Cooking.png" />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Cooking</Card.Title>
      
      </Card.Body>
    </Card>
        

      </div>
      
      <div id='el-1'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/Images/Guitar.png" />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Music</Card.Title>
      
      </Card.Body>
    </Card>
        

      </div>
      
      <div id='el-1'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./src/Images/Paint2.png" />
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}>Arts&crafts</Card.Title>
      
      </Card.Body>
    </Card>
        

      </div>
        
        
       </div>
       
       <br/>
       <br/>
       <br/>
       <div className='Card-el' style={{display:'flex', justifyContent:'space-evenly'}}>

<div id='el-1'>
<Card style={{ width: '18rem' ,paddingTop:'14px' }}>
<Card.Img variant="top" src="./src/Images/Yoga.png" />
<Card.Body>
<Card.Title style={{textAlign:'center'}}>Yoga</Card.Title>

</Card.Body>
</Card>


</div> 

<div id='el-1'>
<Card style={{ width: '18rem', paddingTop:'14px' }}>
<Card.Img variant="top" src="./src/Images/Chess.png" />
<Card.Body>
<Card.Title style={{textAlign:'center'}}>Academics</Card.Title>

</Card.Body>
</Card>


</div>

<div id='el-1'>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="./src/Images/Man.png" />
<Card.Body>
<Card.Title style={{textAlign:'center', paddingTop:'14px'}}>Back to roots</Card.Title>

</Card.Body>
</Card>


</div>

<div id='el-1'>
<Card style={{ width: '18rem' ,paddingTop:'14px'}}>
<Card.Img variant="top" src="./src/Images/Painthands.png" />
<Card.Body>
<Card.Title style={{textAlign:'center'}}>Funteresting</Card.Title>

</Card.Body>
</Card>


</div>


</div>

<br/>

 
<h1  id='Cat-txt-2' style={{fontWeight:'700',paddingTop:'100px', color:'darkblue', paddingLeft:'58px'}}>
  Six Reasons to choose our class
</h1>
<br/>
<div class='divison'>
<div className='cards' style={{paddingLeft:'50px'}}>
      <div className='card-2'>
        <img id='card-img' src='./src/Images/Onlineclass.png'></img>
      
        <h5 className='card-text' >  Interactive live online classes at</h5>
        <h5 className='card-text'> your convenient time slots </h5>
        
       
       
         
      </div>
      <div className='card-2'>
        <img id='card-img' src='./src/Images/Groupclass.png'></img>
       
    
        
        <h5 className='card-text'>  Learning from passsionate,</h5>
        <h5 className='card-text'> talented and trusted teachers</h5>
        
    
       
       
         
      </div>

      <div className='card-2'>
      <img id='card-img' src='./src/Images/Globe.png'></img>
        
        
        
        
        <h5 className='card-text'> Cross country sharing of</h5>
        <h5 className='card-text'>interesting and unique hobbies</h5>
        <h5 className='card-text'> from across the world</h5>
     
       
      </div>

      
      
    
    
     
<img className='sideimg'src='./src/Images/Sideimg.png'></img>
<br/>

  </div>
  

    
     </div>

     
     <br/>

    <div style={{display:'flex', justifyContent:'space-evenly', height:"300px"}}>
    <Card  className='Teacher-img' style={{ width: '18rem', }}>
      <Card.Img  className='Teacher-img' variant="top" src="./src/Images/Karandeep.png"  style={{height:'96px',width:'85.31px',marginLeft:'105px'}} />
      <Card.Body>
        <Card.Title style={{paddingLeft:'80px'}}>Karandeep</Card.Title>
        <Card.Text>
        It is nice to be on an international platform where there are teachers from around the world.
        </Card.Text>
      </Card.Body>
  
      
      <Card.Body>
        
      </Card.Body>
    </Card>

    <Card  className='Teacher-img' style={{ width: '18rem' }}>
      <Card.Img  className='Teacher-img' variant="top" src="./src/Images/Kalpana.png"  style={{height:'96px',width:'85.31px',marginLeft:'105px'}} />
      <Card.Body>
        <Card.Title style={{paddingLeft:'80px'}}>Kalpana</Card.Title>
        <Card.Text>
        The best thing about these classes is that they are live and interactive. They have classes which help us to learn specialties and famous activities from other countries as well.
        </Card.Text>
      </Card.Body>
  
      
      <Card.Body>
        
      </Card.Body>
    </Card>
    <Card  className='Teacher-img' style={{ width: '18rem' }}>
      <Card.Img  className='Teacher-img' variant="top" src="./src/Images/Karandeep.png" style={{height:'96px',width:'85.31px',marginLeft:'105px'}} />
      <Card.Body>
        <Card.Title style={{paddingLeft:'80px'}}>Kirti</Card.Title>
        <Card.Text>
        As a student, I get to explore and learn about the different cultural specialties of another country with native teachers.
        </Card.Text>
      </Card.Body>
  
      
      <Card.Body>
        
      </Card.Body>
    </Card>
    </div>

    <br/>
    <br/>

     <h1 id='Cat-txt-2' style={{fontWeight:'700',paddingTop:'100px', color:'darkblue', paddingLeft:'58px'}}>Meet Our Teachers</h1>
     <div style={{ paddingTop:'30px'}}>

     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img style={{height:'245px',width:'280px', marginLeft:'600px'}}
          className="d-block "
          src="./src/Images/Kalpana-big.png"
          alt="First slide"
        />
        <br/>
        <h2 style={{paddingLeft:'45%'}}>Karandeep</h2>
        <h3 style={{paddingLeft:'47% ',color:'#FF006D'}}>YOGA</h3>
        <br/>
        <br/>
        <br/>
        
       
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'245px',width:'280px', marginLeft:'600px'}}
          className="d-block"
          src="./src/Images/Asier.png"
          alt="Second slide"
        />
        <br/>
        <h2 style={{paddingLeft:'47%'}}>Asier</h2>
        <h3 style={{paddingLeft:'44% ',color:'#FF006D'}}>ARTS&CRAFT</h3>
        <br/>
        <br/>
        <br/>
        
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'245px',width:'280px', marginLeft:'600px'}}
          className="d-block"
          src="./src/Images/Marius.png"
          alt="Third slide"
        />

        <br/>
        <h2 style={{paddingLeft:'42%'}}>Marius Neilson</h2>
        <h3 style={{paddingLeft:'44% ',color:'#FF006D'}}>ACADEMICS</h3>
        <br/>
        <br/>
        <br/>
        
      </Carousel.Item>
    </Carousel>
      
      
     </div>
   



    <br/>

    <div className='Group-c' style={{display:'flex'}}>
      <img src='./src/Images/Group 1082.jpg' style={{paddingTop:'120px'}}></img>
      <div classname='group-c-1'><h1 style={{paddingLeft:'100px', paddingTop:'200px', color:'darkblue'}}>Became a certfied<br/><h1>Teacher</h1></h1>
      <h5 style={{paddingLeft:'100px', color:'darkblue', paddingTop:'20px', fontWeight:'300px'}}>We only have the best and trusted teachers from the globe<br/><h5 style={{fontWeight:'300px'}}>Join us if you have the skill and passion to share it.</h5>
        </h5>

        <ul id="list"style={{paddingLeft:'100px', paddingTop:'20px', color:'darkblue'}}>
  <li><img src='../src/Images/Rectangle 558.png' style={{paddingRight:'10px'}}></img>Make your own schedule</li>
  <li ><img src='../src/Images/Rectangle 558.png' style={{paddingRight:'10px'}}></img>Teach students on an international platform</li>
  <li ><img src='../src/Images/Rectangle 558.png' style={{paddingRight:'10px'}}></img>Become part of an international community of passionate educators</li>
  
</ul> 
        
        
        </div>
      
    </div>
    <h1 className='mid-font'>
      Discover Classes <a href="#" class="link-danger link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">SHOW ALL</a>
      </h1>

    <br/>
    <br/>

    <div className='Blog-cards' style={{display:'flex', justifyContent:'space-evenly'}}>

     <div className='Blog-card-1'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/Images/Rectangle 8.png"/>
      
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}><h4 style={{fontSize:'1rem'}}>log name - Lorem ipsum dolor sit amet, et varius et consectetur</h4></Card.Title>
        <br/>
        <Card.Text><h5 className='B-c-t'> 
        Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...
        
         </h5>
        </Card.Text>
      </Card.Body>

      
      <Card.Body>
        <Card.Link href="#" style={{paddingLeft:'40px'}}>Publihser Name</Card.Link>
        <img src="data:image/jpeg;base64,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" style={{height:'25px',width:'35px', marginLeft:'60px'}}></img>
        
      </Card.Body>
      
    </Card>

     </div>
     <div className='Blog-card-1'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/Images/Flower.png"/>
      
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}><h4 style={{fontSize:'1rem'}}>log name - Lorem ipsum dolor sit amet, et varius et consectetur</h4></Card.Title>
        <br/>
        <Card.Text><h5 className='B-c-t'> 
        Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...
        
         </h5>
        </Card.Text>
      </Card.Body>

      
      <Card.Body>
        <Card.Link href="#" style={{paddingLeft:'40px'}}>Publihser Name</Card.Link>
        <img src="data:image/jpeg;base64,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" style={{height:'25px',width:'35px', marginLeft:'60px'}}></img>
        
      </Card.Body>
      
    </Card>

     </div>
     <div className='Blog-card-1'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../src/Images/Pen.png"/>
      
      <Card.Body>
        <Card.Title style={{textAlign:'center'}}><h4 style={{fontSize:'1rem'}}>log name - Lorem ipsum dolor sit amet, et varius et consectetur</h4></Card.Title>
        <br/>
        <Card.Text><h5 className='B-c-t'> 
        Lorem ipsum dolor sit amet, consectetur vinit varius adipiscing elit. Ullamcorper lectus turpis amet varius volutpat sed...
        
         </h5>
        </Card.Text>
      </Card.Body>

      
      <Card.Body>
        <Card.Link href="#" style={{paddingLeft:'40px'}}>Publihser Name</Card.Link>
        <img src="data:image/jpeg;base64,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" style={{height:'26px',width:'35px', marginLeft:'60px'}}></img>
        
      </Card.Body>
      
    </Card>

     </div>

     

     


    </div>

    <br/>


    <div className='Rectangular-btn'>

      <h2 id='btn-r-2'>Start learning new skills today and </h2>

      <h2 id='btn-r-3'>pursue your passion </h2>

      <br/>

      <h4 id='btn-r-4'>Join the community of global learners and start exploring today.</h4>
      
      <br/>

      <InputGroup className="mb-3">
        <Form.Control  id='hoverme'style={{borderRadius:'240px', backgroundColor:'#FB7356'}}
          placeholder="Enter Your Email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"

        />
        <button type="button" class="btn btn-warning btn-rounded" data-mdb-ripple-init  style={{borderRadius:'240px',backgroundColor:'white',borderColor:'white'}}>Get Started<img src='../src/Images/arrow-right-circle.png' style={{height:'20px'}}></img></button>
        
      </InputGroup>
      
    
      
    
      
    </div>

    <br/>

    <div><a href="#" class="link-danger2 link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"><img src='../src/Images/UpArrow.png'></img></a></div>

    <div className='footer' style={{display:'flex', justifyContent:'space-between'}}>



      <div className='footer-1'>
        <h3 style={{textAlign:'center', color:'darkblue'}}>class categories
      
        </h3>
        <br/>
        <h5 id='footer-txt-1'>Language</h5>
        <h5  id='footer-txt-1'>Cooking</h5>
        <h5  id='footer-txt-1'>Music</h5>
        <h5  id='footer-txt-1'>Arts&Craft</h5>
        <h5  id='footer-txt-1'>Yoga</h5>
        <h5  id='footer-txt-1'>Academic</h5>
        <h5  id='footer-txt-1'>Back to roots</h5>
        <h5  id='footer-txt-1'>Funtersting</h5>
         
       </div>
       <div className='footer-1'>
        <h3 style={{textAlign:'center', color:'darkblue'}}>Company
      
        </h3>
        <br/>
        <h5 id='footer-txt-2'>About</h5>
        <h5  id='footer-txt-2'>Careers</h5>
        <h5  id='footer-txt-2'>Blog</h5>
        <h5  id='footer-txt-2'>Contact</h5>
        <h5  id='footer-txt-2'>Privacy Policy</h5>
        <h5  id='footer-txt-2'> Terms & Conditions</h5>
        <h5  id='footer-txt-2'>Refund Policy</h5>
       
        
       </div>
       <div className='footer-1'>
        <h3 style={{textAlign:'center', color:'darkblue'}}>Learn
      
        </h3>
        <br/>
        <h5 id='footer-txt-3'>All classes</h5>
       
     
       
         
       </div>
       
       
       <div className='footer-1'>
        <h3 style={{textAlign:'center', color:'darkblue'}}>Teach
      
        </h3>
        <br/>
        <h5 id='footer-txt-4'>Became A Teacher</h5>
       
     
       
         
       </div>


       <Card style={{ width: '18rem', height:'10px' }}>
      <Card.Img variant="top" src="../src/Images/Different.png" />
      <Card.Body>
        <Card.Title id='Footer-title'>Sell Your products with us</Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      
      
    </Card>


    <br/>
    

</div>



    

    


     

  
    </div>
  )
}

export default App
