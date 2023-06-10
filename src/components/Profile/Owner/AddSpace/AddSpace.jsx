import React, { useState } from "react";
import styles from "./AddSpace.module.css";
import { Form, Button } from "react-bootstrap";
import Week from "./Week";
import Bio from "./Bio";

function AddSpace() {
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [zone, setZone] = useState("");
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
  const [amenities, setAmenities] = useState([]);
  const [rules, setRules] = useState([]);
  const [meetingRoomAbout, setMeetingRoomAbout] = useState("");

  const minRoomNum = 1;
  const maxRoomNum = 50;

  const handleSubmit = (e) => {
    e.preventDefault();
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
    console.log();
    console.log();
    console.log();
    console.log();
  };

  const handleMeetingRoomsChange = (e) => {
    const countMeet = Number(e.target.value);
    setNumberOfMeetingRooms(countMeet);
  };
  const handleSilentSeatsChange = (e) => {
    const countSilent = Number(e.target.value);
    setNumberOfMeetingRooms(countSilent);
  };
  const handleTrainingRoomsChange = (e) => {
    const countTrain = Number(e.target.value);
    setNumberOfMeetingRooms(countTrain);
  };

  const renderMeetingRoomInputs = () => {
    const meetingInputs = [];
    for (let index = 0; index < numberOfMeetingRooms; index++) {
      console.log(`This is the meeting room ${index}`);
    }
    for (let i = 1; i <= numberOfMeetingRooms; i++) {
      meetingInputs.push(
        <div key={i}>
          <h3>Meeting Room {i}</h3>
          <Form.Group controlId={`meetingRoomPhotos_${i}`}>
            <Form.Label>Room Photos</Form.Label>
            <Form.Control type="text" placeholder="Enter room photos" />
          </Form.Group>

          <Form.Group controlId={`meetingRoomCapacity_${i}`}>
            <Form.Label>Capacity</Form.Label>
            <Form.Control type="number" placeholder="Enter room capacity" />
          </Form.Group>

          <Form.Group controlId={`meetingRoomAmenities_${i}`}>
            <Form.Label>Amenities</Form.Label>
            <Form.Control type="text" placeholder="Enter room amenities" />
          </Form.Group>

          <Form.Group controlId={`meetingRoomDescription_${i}`}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter room description" />
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

  const renderSilentRoomInputs = () => {
    for (let index = 0; index < numberOfMeetingRooms; index++) {
      console.log(`This is the silent room ${index}`);
    }
    const silentInputs = [];
    for (let i = 1; i <= numberOfSilentSeats; i++) {
      silentInputs.push(
        <div key={i}>
          <h3>Silent Room {i}</h3>
          <Form.Group controlId={`silentRoomPhotos_${i}`}>
            <Form.Label>Room Photos</Form.Label>
            <Form.Control type="text" placeholder="Enter room photos" />
          </Form.Group>

          <Form.Group controlId={`silentRoomCapacity_${i}`}>
            <Form.Label>Capacity</Form.Label>
            <Form.Control type="number" placeholder="Enter room capacity" />
          </Form.Group>

          <Form.Group controlId={`silentRoomAmenities_${i}`}>
            <Form.Label>Amenities</Form.Label>
            <Form.Control type="text" placeholder="Enter room amenities" />
          </Form.Group>

          <Form.Group controlId={`silentRoomDescription_${i}`}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" placeholder="Enter room description" />
          </Form.Group>

          <Form.Group controlId={`silentRoomPrice_${i}`}>
            <Form.Label>Price per Hour</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter room price per hour"
            />
          </Form.Group>
        </div>
      );
    }
    return silentInputs;
  };

  const renderTrainingRoomInputs = () => {
    for (let index = 0; index < numberOfMeetingRooms; index++) {
      console.log(`This is the training room ${index}`);
    }
    const TrainingInputs = [];
    for (let i = 1; i <= numberOfTrainingRooms; i++) {
      TrainingInputs.push(
        <div key={i}>
          <h3>Training Room {i}</h3>
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
            <Form.Control as="textarea" placeholder="Enter room description" />
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

  return (
    <>
      <div className="form-container">
        <h2>Place Details</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="placeName">
            <Form.Label>Place Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter place name"
              value={placeName}
              onChange={(e) => setPlaceName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="zone">
            <Form.Label>Zone</Form.Label>
            <Form.Control
              as="select"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
            >
              <option value="">Select zone</option>
              <option value="Zone A">Zone A</option>
              <option value="Zone B">Zone B</option>
              <option value="Zone C">Zone C</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="isSelfService">
            <Form.Label>Self Service</Form.Label>
            <Form.Control
              as="select"
              value={isSelfService}
              onChange={(e) => setIsSelfService(e.target.value)}
            >
              <option value="">Choose Service Option</option>
              <option value="true">Help Yourself</option>
              <option value="false">We are at your service</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="googleMapsLink">
            <Form.Label>Google Maps Link</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Google Maps link"
              value={googleMapsLink}
              onChange={(e) => setGoogleMapsLink(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Space Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </Form.Group>
          {/* <Bio></Bio> */}
          <Week></Week>
          <Form.Group controlId="hourlyPrice">
            <Form.Label>Hourly Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hourly price EGP"
              onChange={(e) => setHourlyPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="vipHourlyPrice">
            <Form.Label>Silent seats hourly Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hourly price EGP"
              value={vipHourlyPrice}
              onChange={(e) => setVipHourlyPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="isSilentSeats">
            <Form.Check
              type="checkbox"
              label="Silent Seats"
              checked={isSilentSeats}
              onChange={(e) => {
                setIsSilentSeats(e.target.checked);
                if (!e.target.checked) {
                  setNumberOfSilentSeats(0);
                }
              }}
            />
          </Form.Group>
          <Form.Group controlId="isMeetingRoom">
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
          <Form.Group controlId="isTrainingRoom">
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

          {isSilentSeats && (
            <Form.Group controlId="numberOfSilentSeats">
              <Form.Label>Number of Silent Seats</Form.Label>
              <Form.Control
                type="number"
                minLength={1}
                placeholder="Enter the number of the silent seats"
                onChange={handleSilentSeatsChange}
              />
              {numberOfSilentSeats <= 0 && (
                <div>
                  You can't choose that number of rooms if it's 0 please uncheck
                  the room type above
                </div>
              )}
            </Form.Group>
          )}

          {renderSilentRoomInputs()}

          {isMeetingRoom && (
            <Form.Group controlId="numberOfMeetingRooms">
              <Form.Label>Number of Meeting Rooms</Form.Label>
              <Form.Control
                type="number"
                minLength={1}
                placeholder="Enter the Meeting Rooms number"
                onChange={handleMeetingRoomsChange}
              ></Form.Control>
              {numberOfMeetingRooms <= 0 && (
                <div>
                  You can't choose that number of rooms if it's 0 please uncheck
                  the room type above
                </div>
              )}
            </Form.Group>
          )}

          {/* {renderMeetingRoomInputs()} */}

          {isTrainingRoom && (
            <Form.Group controlId="numberOfTrainingRooms">
              <Form.Label>Number of Training Rooms</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Training Rooms number"
                onChange={handleTrainingRoomsChange}
              ></Form.Control>
              {numberOfTrainingRooms <= 0 && (
                <div>
                  You can't choose that number of meeting rooms if it's 0 please
                  uncheck the room type above
                </div>
              )}
            </Form.Group>
          )}

          {renderTrainingRoomInputs()}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddSpace;
