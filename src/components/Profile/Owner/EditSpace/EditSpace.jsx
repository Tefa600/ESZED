import React , {useState , useEffect} from 'react'
import axios from '../../../../api/axios';
import style from "../ownerPofile.module.css";
import styles from "../AddSpace/AddSpace.module.css";
import styless from "../AddSpace/Week.module.css";
import { Form, Button } from "react-bootstrap";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaUserCircle,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
  } from "react-icons/fa";
  import { RiLogoutCircleLine } from "react-icons/ri";
import { CgPlayListAdd } from "react-icons/cg";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { TbFileReport } from "react-icons/tb";



export default function EditSpace({ children }) {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);
    const [isOwnerHistoryActive, setIsOwnerHistoryActive] = useState(false);
    const [isShowSpacesActive, setIsShowSpacesActive] = useState(false);
    const [placeName, setPlaceName] = useState("");
    const [spaceNumber, setSpaceNumber] = useState("");
    const [address, setAddress] = useState("");
    const [zone, setZone] = useState("");
    const [avail, setAvail] = useState("weekly");
    const [googleMapsLink, setGoogleMapsLink] = useState("");
    const [hourlyPrice, setHourlyPrice] = useState(0);
    const [isSilentSeats, setIsSilentSeats] = useState(false);
    const [isMeetingRoom, setIsMeetingRoom] = useState(false);
    const [isTrainingRoom, setIsTrainingRoom] = useState(false);
    const [vipHourlyPrice, setVipHourlyPrice] = useState("");
    const [isSelfService, setIsSelfService] = useState(null);
    const [hourPrice, setHourPrice] = useState(0);
    const [numberOfTrainingRooms, setNumberOfTrainingRooms] = useState(0);
    const [numberOfMeetingRooms, setNumberOfMeetingRooms] = useState(0);
    const [numberOfSilentSeats, setNumberOfSilentSeats] = useState(0);
    const [numberOfSeats, setNumberOfSeats] = useState(0);
    const [bio, setBio] = useState("");
    const [rules, setRules] = useState([]);
    const [meetingRoomInputs, setMeetingRoomInputs] = useState([]);
    const [trainingRoomInputs, setTrainingRoomInputs] = useState([]);
    const photoArray = [""];
    const [isEditMode, setIsEditMode] = useState(false);
    const [placeid, setPlaceid] = useState('');



  // Handle form input changes
  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setProfileData((prevProfileData) => ({
  //     ...prevProfileData,
  //     [name]: value,
  //   }));
  // };

  useEffect(() => {
    axios.get(`api/places/editThisPlace/${placeid}`).then((response) => {
      setIsEditMode(response.data.data);
      console.log(response.data.data);
    });
  }, []);

    const [checkboxes, setCheckboxes] = useState([
      { id: "checkbox1", Day: "Sunday", checked: false, start: "", end: "" },
      { id: "checkbox2", Day: "Monday", checked: false, start: "", end: "" },
      { id: "checkbox3", Day: "Tuesday", checked: false, start: "", end: "" },
      { id: "checkbox4", Day: "Wednesday", checked: false, start: "", end: "" },
      { id: "checkbox5", Day: "Thursday", checked: false, start: "", end: "" },
      { id: "checkbox6", Day: "Friday", checked: false, start: "", end: "" },
      { id: "checkbox7", Day: "Saturday", checked: false, start: "", end: "" },
    ]);
  
    const TrainingRoomLength = numberOfTrainingRooms; // Number of training rooms determined elsewhere
    const MeetingRoomLength = numberOfMeetingRooms;
  
    function fillMeetingRoomsArray() {
      const meetingRoomsArray = Array.from(
        { length: MeetingRoomLength },
        (_, index) => {
          const mRoomName = document.getElementById(
            `meetingRoomName_${index + 1}`
          ).value;
          const mRoomPhotos = document
            .getElementById(`meetingRoomPhotos_${index + 1}`)
            .value.split(",");
          const mCapacity = parseInt(
            document.getElementById(`meetingRoomCapacity_${index + 1}`).value
          );

          const mPrice = parseFloat(
            document.getElementById(`meetingRoomPrice_${index + 1}`).value
          );
  
          return {
            mRoomName,
            mRoomPhotos,
            mCapacity,
            mPrice,
          };
        }
      );
      return meetingRoomsArray;
    }
    const fillTrainingRoomsArray = () => {
      const trainingRoomsArray = Array.from(
        { length: TrainingRoomLength },
        (_, index) => {
          const roomName = document.getElementById(
            `trainingRoomName_${index + 1}`
          ).value;
          const roomPhotos = document
            .getElementById(`trainingRoomPhotos_${index + 1}`)
            .value.split(",");
          const capacity = parseInt(
            document.getElementById(`trainingRoomCapacity_${index + 1}`).value
          );
        //   const amenities = document.getElementById(
        //     `trainingRoomAmenities_${index + 1}`
        //   ).value;
        //   const description = document.getElementById(
        //     `trainingRoomDescription_${index + 1}`
        //   ).value;
          const price = parseFloat(
            document.getElementById(`trainingRoomPrice_${index + 1}`).value
          );
  
          return {
            roomName,
            roomPhotos,
            capacity,
            // amenities,
            // description,
            price,
          };
        }
      );
  
      console.log("training Room array", trainingRoomsArray);
      return trainingRoomsArray; // Return the array if needed elsewhere in the code
    };
  
    const handleCheckboxChange = (checkboxId) => {
      const updatedCheckboxes = checkboxes.map((checkbox) => {
        if (checkbox.id === checkboxId) {
          return {
            ...checkbox,
            checked: !checkbox.checked,
          };
        }
        return checkbox;
      });
      setCheckboxes(updatedCheckboxes);
    };
  
    const handleStartChange = (id, value) => {
      const updatedCheckboxes = checkboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, start: value };
        }
        return checkbox;
      });
      setCheckboxes(updatedCheckboxes);
    };
  
    const handleEndChange = (id, value) => {
      const updatedCheckboxes = checkboxes.map((checkbox) => {
        if (checkbox.id === id) {
          return { ...checkbox, end: value };
        }
        return checkbox;
      });
      setCheckboxes(updatedCheckboxes);
    };
  
    const handleGenerateSchedule = () => {
      const schedule = checkboxes.map((checkbox) => {
        if (checkbox.checked) {
          return {
            day: checkbox.Day,
            openTime: checkbox.start,
            closeTime: checkbox.end,
          };
        } else {
          return { day: checkbox.Day, closed: true };
        }
      });
      return schedule;
    };
    const WD = handleGenerateSchedule();
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsEditMode(false);
      const trainingRoomsArray = fillTrainingRoomsArray();
      const meetingRoomsArray = fillMeetingRoomsArray();
      const inSpace = {
        placeName: placeName,
        placePhotos: photoArray,
        address: address,
        zone: zone,
        number: spaceNumber,
        selfService: isSelfService,
        googleAddress: googleMapsLink,
        hourPrice: hourlyPrice,
        numberOfSeats: numberOfSeats,
        numberOfSilentSeats: numberOfSilentSeats,
        silentSeatPrice: vipHourlyPrice,
        // openingHours: WD,
        TrainingRooms: trainingRoomsArray,
        MeetingRooms: meetingRoomsArray,
        silentRoomPhotos: [],
        sharedAreaPhotos: [],
      };
      // Handle form submission logic here
      // You can access the form field values using the corresponding state variables
      console.log("Form submitted!");
      console.log("Place Name:", placeName);
      console.log("Address:", address);
      console.log("Zone:", zone);
      console.log("Google Maps Link:", googleMapsLink);
      console.log("Hourly Price:", hourlyPrice);
      console.log("Meeting Rooms Number", numberOfMeetingRooms);
      console.log("Silent Seats Number", numberOfSilentSeats);
      console.log("Training Rooms Number", numberOfTrainingRooms);
      console.log("Working days", checkboxes);
      console.log("schedule", WD);
      console.log("JSON PROP", inSpace);
      // handleGenerateSchedule();
  
      console.log("TRA", trainingRoomsArray);
      console.log("MRA", meetingRoomsArray);
  
      //
      // const form = e.target;
      // const dynamicArray = [];
      //
      // // Populate dynamic array with training room data
      // for (let i = 1; i <= numberOfTrainingRooms; i++) {
      //   const roomName = form[`trainingRoomName_${i}`].value;
      //   const roomPhotos = form[`trainingRoomPhotos_${i}`].value.split(","); // Assuming room photos are comma-separated
      //   const capacity = form[`trainingRoomCapacity_${i}`].value;
      //   const amenities = form[`trainingRoomAmenities_${i}`].value;
      //   const description = form[`trainingRoomDescription_${i}`].value;
      //   const price = form[`trainingRoomPrice_${i}`].value;
      //
      //   const trainingRoom = {
      //     roomName,
      //     roomPhotos,
      //     capacity,
      //     amenities,
      //     description,
      //     price,
      //   };
      //
      //   dynamicArray.push(trainingRoom);
      // }
      //
      // console.log("try 100 and keep", dynamicArray);
    };
  
    useEffect(() => {
      const renderTrainingRoomInputs = () => {
        for (let index = 0; index < numberOfTrainingRooms; index++) {
          console.log(`This is the training room ${index}`);
        }
        const TrainingInputs = [];
        for (let i = 1; i <= numberOfTrainingRooms; i++) {
          TrainingInputs.push(
            <div key={i}>
              <h3>Training Room {i}</h3>
              <Form.Group controlId={`trainingRoomName_${i}`}>
                <Form.Label srOnly>Room Name</Form.Label>
                <Form.Control type="text" placeholder="Enter room name" />
              </Form.Group>
  
              <Form.Group controlId={`trainingRoomPhotos_${i}`}>
                <Form.Label>Room Photos</Form.Label>
                <Form.Control type="text" placeholder="Enter room photos" />
              </Form.Group>
  
              <Form.Group controlId={`trainingRoomCapacity_${i}`}>
                <Form.Label>Capacity</Form.Label>
                <Form.Control type="number" placeholder="Enter room capacity" />
              </Form.Group>
              <Form.Group controlId={`trainingRoomAmenities_${i}`}>
                <Form.Label>Amenities</Form.Label>
                <Form.Control type="text" placeholder="Enter room amenities" />
              </Form.Group>
              <Form.Group controlId={`trainingRoomDescription_${i}`}>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter room description"
                />
              </Form.Group>
              <Form.Group controlId={`trainingRoomPrice_${i}`}>
                <Form.Label>Price per Hour</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter room price per hour"
                />
              </Form.Group>
            </div>
          );
        }
        return TrainingInputs;
      };
      if (isTrainingRoom && numberOfTrainingRooms > 0) {
        const effTrainingInputs = renderTrainingRoomInputs();
        setTrainingRoomInputs(effTrainingInputs);
      } else {
        setTrainingRoomInputs([]);
      }
    }, [isTrainingRoom, numberOfTrainingRooms]);
    useEffect(() => {
      const renderMeetingRoomInputs = () => {
        const meetingInputs = [];
        for (let i = 1; i <= numberOfMeetingRooms; i++) {
          meetingInputs.push(
            <div key={i}>
              <h3>Meeting Room {i}</h3>
              <Form.Group controlId={`meetingRoomName_${i}`}>
                <Form.Label>Room Name</Form.Label>
                <Form.Control type="text" placeholder="Enter room name" />
              </Form.Group>
  
              <Form.Group controlId={`meetingRoomPhotos_${i}`}>
                <Form.Label>Room Photos</Form.Label>
                <Form.Control type="text" placeholder="Enter room photos" />
              </Form.Group>
  
              <Form.Group controlId={`meetingRoomCapacity_${i}`}>
                <Form.Label>Capacity</Form.Label>
                <Form.Control type="number" placeholder="Enter room capacity" />
              </Form.Group>
              <Form.Group controlId={`meetingRoomPrice_${i}`}>
                <Form.Label>Price per Hour</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter room price per hour"
                />
              </Form.Group>
            </div>
          );
        }
        return meetingInputs;
      };
  
      if (isMeetingRoom && numberOfMeetingRooms > 0) {
        const effMeetingInputs = renderMeetingRoomInputs();
        setMeetingRoomInputs(effMeetingInputs);
      }
    }, [isMeetingRoom, numberOfMeetingRooms]);
  
    const handleMeetingRoomsChange = (e) => {
      const countMeet = Number(e.target.value);
      setNumberOfMeetingRooms(countMeet);
    };
    const handleSilentSeatsChange = (e) => {
      const countSilent = Number(e.target.value);
      setNumberOfSilentSeats(countSilent);
    };
    const handleTrainingRoomsChange = (e) => {
      const countTrain = Number(e.target.value);
      setNumberOfTrainingRooms(countTrain);
    };
    const menuItem = [{
        function: () => {
           setIsOwnerHistoryActive(false);
           setIsShowSpacesActive(true);
         },
            name: "My Spaces",
            icon: <FaTh fontSize={"15px"} />,
          },
          {
            function: () => {
              // setIsOwnerHistoryActive((current) => !current);
              setIsShowSpacesActive(false);
              setIsOwnerHistoryActive(true);
            },
            name: "Show History",
            icon: <MdHistory />,
          },
          {
            function: "",
            name: "Reports",
            icon: <TbFileReport />,
          },

    ]
  return (
    <div>
        <div className="row">
        <div className={`col-md-2 d-flex   ${styles.leftcontainer}`}
          // style={{ width: "0%" }}
        >
          <div
            style={{ width: isOpen ? "210px" : "50px" }}
            className={`shadow ${style.sidebar}`}
          >
            <div className={`${style.topSection}`}>
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className={`${style.logo}`}
              >
                Edit SPACE
              </h1>
              <div
                style={{ marginLeft: isOpen ? "50px" : "0px" }}
                className={`${styles.bars}`}
              >
                <FaBars onClick={toggle} />
              </div>
            </div>
            <div className="profilePicture m-auto">
            </div>
            <div className="PGInfo m-auto mt-1">
              {/* {data.map(function (value, index) {
                return (
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className={`${styles.PGData}`}
                    key={index}
                  >
                    {value}
                  </div>
                );
              })} */}
            </div>

            {menuItem.map((item) => (
             
            //  <NavLink
            //   className={`${styles.leftBtns}`}
            //   activeclassName={`${styles.active}`}
            //   >
              <div className={`${styles.leftBtns}`} style={{ display: "flex" }}>
                <div style={{ margin: "auto" }} className={`${styles.icon}`}>
                  {item.icon}
                </div>
                <button
                  style={{
                    display: isOpen ? "block" : "none",
                    textDecoration: "none",
                    border: "0",
                    backgroundColor: "transparent",
                  }}
                  className={`${styles.btnss}`}
                  id="button"
                  onClick={item.function}
                >
                  {item.name}
                </button>
              </div>
              // {/* </NavLink> */}
             ))} 
          </div>
          <main>{children}</main>
        </div>
            <div className="col-lg-10">
            <div className="editSpaceForm">
        <div className={`row `}>
          <div className="col-md-7">
            
            <h2>Place Edit</h2>
           
            <Form onSubmit={handleSubmit}>
            <div className="row d-flex">
              <div className="col-lg-6">
              <Form.Label>Place Name</Form.Label>
              <Form.Group className={`${styles.inputWrapper}`} controlId="placeName">
                <input 
                  className={`${styles.searchInp}`}
                  placeholder="Enter place name"
                  value={placeName}
                  onChange={(e) => setPlaceName(e.target.value)}
                />
              </Form.Group>
              </div>
         <div className="col-lg-6"> 
         <Form.Label>Number</Form.Label>
         <Form.Group className={`${styles.inputWrapper}`}  controlId="spaceNumber">
                <input 
                  className={`${styles.searchInp}`}
                  type="number"
                  maxLength={11}
                  placeholder="Enter Space Number"
                  value={spaceNumber}
                  onChange={(e) => setSpaceNumber(e.target.value)}
                />
              </Form.Group></div>
             
            </div>
            <Form.Label>Address</Form.Label>
              <Form.Group className={`${styles.inputWrapper}`}  controlId="address">
                <input 
                  className={`${styles.searchInp}`}
                  // type="text"
                  placeholder="Enter address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

            

              <div className="row">
                <div className="col-lg-4">
                <Form.Label>Zone</Form.Label>
                <Form.Group  controlId="zone">
                <Form.Control 
                  // className={`${styles.searchInp}`}
                  style={{fontSize:"13px" , borderRadius:"25px"}}
                  as="select"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                >
                  <option value="">Select zone</option>
                  <option value="Nasr City">Nasr City</option>
                  <option value="Dokki">Dokki</option>
                  <option value="">Cairo</option>
                  <option value="">Giza</option>
                  <option value="">Sheikh Zayed</option>
                  <option value="">Heliopolis</option>
                  <option value="">New Cairo</option>
                  <option value="">Mohandeseen</option>
                  <option value="">Omranyah</option>
                  <option value="">6th October</option>
                </Form.Control>
              </Form.Group>
                </div>
          
              <div className="col-lg-4">
              <Form.Label>Booking Availability</Form.Label>
              <Form.Group controlId="availability">
                
                <Form.Control
                  className={`${styles.searchInp}`}
                  style={{fontSize:"13px" , borderRadius:"25px"}}
                  as="select"
                  value={avail}
                  onChange={(e) => setZone(e.target.value)}
                >
                  <option value="">Work Space Available</option>
                  <option value="Week">Weekly</option>
                  <option value="Month">Monthly</option>
                </Form.Control>
              </Form.Group>
              </div>

             
              <div className="col-lg-4">
              <Form.Label>Self Service</Form.Label>
              <Form.Group controlId="isSelfService">
                <Form.Control
                className={`${styles.searchInp}`}
                style={{fontSize:"13px" , borderRadius:"25px"}}
                  as="select"
                  value={isSelfService}
                  onChange={(e) => setIsSelfService(e.target.value)}
                >
                  <option value="">Choose Service Option</option>
                  <option value="true">Help Yourself</option>
                  <option value="false">We are at your service</option>
                </Form.Control>
              </Form.Group>
              </div>

           
              </div>
              <Form.Label>Google Maps Link</Form.Label>
              <Form.Group className={`${styles.inputWrapper}`}  controlId="googleMapsLink">
                 <input 
                  className={`${styles.searchInp}`}
                  type="text"
                  placeholder="Enter Google Maps link"
                  value={googleMapsLink}
                  onChange={(e) => setGoogleMapsLink(e.target.value)}
                />
              </Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Group className={`${styles.inputWrapper}`} controlId="bio">
                <input
                  type="textarea"
                  className={`${styles.searchInp}`}
                  style={{fontSize:"12px" , borderRadius:"25px"}}
                  rows={3}
                  placeholder="Enter Space Bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </Form.Group>

              {/* <Bio></Bio> */}

              {/* ******************************************************************** */}
              {/* ************************************************* */}
        
              {/* ******************************* */}
                  <div className="row">
                    <div className="col-lg-6">
                    <Form.Label>Number of Seats</Form.Label>
                    <Form.Group className={`${styles.inputWrapper}`} controlId="numberOfSeats">
                <input 
                  className={`${styles.searchInp}`}
                  type="number"
                  placeholder="Enter Number of Shared Area seats "
                  onChange={(e) => setNumberOfSeats(e.target.value)}
                />
              </Form.Group>
                    </div>
             
              <div className="col-lg-6">
              <Form.Label>Hourly Price</Form.Label>
              <Form.Group className={`${styles.inputWrapper}`} controlId="hourlyPrice">
                <input 
                  className={`${styles.searchInp}`}
                  type="number"
                  placeholder="Enter hourly price EGP"
                  onChange={(e) => setHourlyPrice(e.target.value)}
                />
              </Form.Group>
              </div>

           
                  </div>

              <Form.Group className={`w-50 ${styles.inputWrapper}`} controlId="isSilentSeats">
                <Form.Check
                  type="checkbox"
                  label="Silent Seats"
                  checked={isSilentSeats}
                  className={`${styless.switch}`}
                  onChange={(e) => {
                    setIsSilentSeats(e.target.checked);
                    if (!e.target.checked) {
                      setNumberOfSilentSeats(0);
                    }
                  }}
                />
              </Form.Group>
              <div className="row">
                <div className="col-lg-6">
                {isSilentSeats && (
                <Form.Group className={`${styles.inputWrapper}`} controlId="vipHourlyPrice">
                  {/* <Form.Label>Silent seats hourly Price</Form.Label> */}
                  <input 
                  className={`${styles.searchInp}`}
                    type="number"
                    placeholder="Enter hourly price EGP"
                    value={vipHourlyPrice}
                    onChange={(e) => setVipHourlyPrice(e.target.value)}
                  />
                </Form.Group>
              )}
                </div>
                <div className="col-lg-6">
                {isSilentSeats && (
                <Form.Group className={`${styles.inputWrapper}`} controlId="numberOfSilentSeats">
                  {/* <Form.Label>Number of Silent Seats</Form.Label> */}
                  <input 
                  className={`${styles.searchInp}`}
                    type="number"
                    minLength={1}
                    placeholder="Enter the number of the silent seats"
                    onChange={handleSilentSeatsChange}
                  /> <br></br>
                 {numberOfSilentSeats <= 0 && (
                    <div style={{
                      fontSize:"11px",
                      marginBottom:"6px"
                    
                    }}>
                      You can't choose that number of rooms if it's 0 please
                      uncheck the room type above
                    </div>
                  )}
                </Form.Group>
                
              )}
               
                </div>
              </div>
            
             
              <Form.Group className={` w-50 ${styles.inputWrapper}`} controlId="isMeetingRoom">
                <Form.Check
                  type="checkbox"
                  label="Meeting Room"
                  checked={isMeetingRoom}
                  onChange={(e) => {
                    setIsMeetingRoom(e.target.checked);
                    if (!e.target.checked) {
                      setNumberOfMeetingRooms(0);
                    }
                  }}
                />
              </Form.Group>
              {isMeetingRoom && (
                <Form.Group className={`${styles.inputWrapper}`} controlId="numberOfMeetingRooms">
                  <Form.Label style={{fontSize:"12px" , marginRight:"3px"}}>Number of Meeting Rooms: </Form.Label>
                  <input 
                    className={`w-50 ${styles.searchInp}`}
                    type="number"
                    minLength={1}
                    min={1}
                    placeholder="Enter the Meeting Rooms number"
                    onChange={handleMeetingRoomsChange}
                  ></input>
                  {/*{numberOfMeetingRooms <= 0 && (*/}
                  {/*  <div>*/}
                  {/*    You can't choose that number of rooms if it's 0 please*/}
                  {/*    uncheck the room type above*/}
                  {/*  </div>*/}
                  {/*)}*/}
                </Form.Group>
              )}
              {meetingRoomInputs}
              <Form.Group className={`w-50 ${styles.inputWrapper}`} controlId="isTrainingRoom">
                <Form.Check
                  type="checkbox"
                  label="Training Room"
                  checked={isTrainingRoom}
                  onChange={(e) => {
                    setIsTrainingRoom(e.target.checked);
                    if (!e.target.checked) {
                      setNumberOfTrainingRooms(0);
                    }
                  }}
                />
              </Form.Group>

              {isTrainingRoom && (
                
                <Form.Group controlId="numberOfTrainingRooms">
                  <Form.Label style={{flexDirection:"row"}}>Number of Training Rooms</Form.Label>
                  <Form.Control 
                  className={`w-50 ${styles.searchInp}`}        
                               type="number"
                    placeholder="Enter the Training Rooms number"
                    onChange={handleTrainingRoomsChange}
                  ></Form.Control >
                  <br></br>
                  {numberOfTrainingRooms <= 0 && (
                    <div  style={{
                        fontSize:"11px",
                        marginBottom:"6px"
                      
                      }}>
                      You can't choose that number of meeting rooms if it's 0
                      please uncheck the room type above
                    </div>
                  )}
                </Form.Group>
              )}

              {trainingRoomInputs}

              {/* <WrokSpaceForm></WrokSpaceForm> */}
            </Form>
              <Button
                variant="primary"
                className={`mt-4 shadow float-left ${styles.btnnWs}`}
                onClick={() => setIsEditMode(true)}
              >
                Edit
              </Button>
          </div>
          <div className="col-md-4">
          <div
                className={`py-4 px-4 bg-white shadow ${styless.week}`}
              >
                <div
                  className={`row my-3 py-3 m-auto shadow ${styless.Weekly}`}
                >
                  {checkboxes.map((checkbox) => (
                    <div key={checkbox.id} className="d-flex">
                      <div className="col-lg-4 my-2 ">
                        <div className="week mt-2">
                          <label className={`mx-2 ${styless.switch}`}>
                            <input
                              type="checkbox"
                              className={` ${styless.checkbox}`}
                              onChange={() => handleCheckboxChange(checkbox.id)}
                            />
                            <div className={`${styless.slider}`} />
                          </label>
                          {checkbox.Day}
                        </div>
                      </div>

                      {checkbox.checked && (
                        <div className="col-lg-2 mr-5 my-2">
                          <select
                            disabled={checkbox.checkedAll}
                            className={`w-175 ${styless.checkControl}`}
                            required
                            onChange={(e) =>
                              handleStartChange(checkbox.id, e.target.value)
                            }
                          >
                            <span className={`${styless.selectArr}`} />
                            <option value selected hidden>
                              start:
                            </option>
                            {Array.from({ length: 24 }, (_, index) => (
                              <option key={index}>{index}</option>
                            ))}
                          </select>
                        </div>
                      )}
                      {checkbox.checked && checkbox.start && (
                        <div className="col-lg-2 my-2 mx-5">
                          <select
                            disabled={checkbox.checkedAll}
                            className={`w-175 ${styless.checkControl}`}
                            required
                            onChange={(e) =>
                              handleEndChange(checkbox.id, e.target.value)
                            }
                          >
                            <span className={`${styless.selectArr}`} />
                            <option value selected hidden>
                              end:
                            </option>
                            {Array.from(
                              { length: 24 - Number(checkbox.start) },
                              (_, index) => (
                                <option key={index}>
                                  {Number(checkbox.start) + index + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
          </div>
        </div>
      </div>
</div>
        </div>
        </div>
 
  )
}
