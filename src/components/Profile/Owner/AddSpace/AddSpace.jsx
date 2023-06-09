import React, { useState } from "react";
import styles from "./AddSpace.module.css";
import { Form, Button } from "react-bootstrap";

function AddSpace() {
  const [placeName, setPlaceName] = useState("");
  const [address, setAddress] = useState("");
  const [zone, setZone] = useState("");
  const [googleMapsLink, setGoogleMapsLink] = useState("");
  const [hourlyPrice, setHourlyPrice] = useState("");
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
          <Form.Group controlId="hourlyPrice">
            <Form.Label>Hourly Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hourly price EGP"
              value={hourlyPrice}
              onChange={(e) => setHourlyPrice(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="hourlyPrice">
            <Form.Label>Hourly Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hourly price EGP"
              value={hourlyPrice}
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
              onChange={(e) => setIsSilentSeats(e.target.checked)}
            />
          </Form.Group>
          <Form.Group controlId="isMeetingRoom">
            <Form.Check
              type="checkbox"
              label="Meeting Room"
              checked={isMeetingRoom}
              onChange={(e) => setIsMeetingRoom(e.target.checked)}
            />
          </Form.Group>
          <Form.Group controlId="isTrainingRoom">
            <Form.Check
              type="checkbox"
              label="Training Room"
              checked={isTrainingRoom}
              onChange={(e) => setIsTrainingRoom(e.target.checked)}
            />
          </Form.Group>

          {isSilentSeats && (
            <Form.Group controlId="numberOfSilentSeats">
              <Form.Label>Number of Silent Seats</Form.Label>
              <Form.Control
                type="number"
                minLength={1}
                placeholder="Enter the number of the silent seats"
                onChange={(e) => {
                  const value = Math.max(
                    minRoomNum,
                    Math.min(maxRoomNum, Number(e.target.value))
                  );
                  setNumberOfSilentSeats(Number(value));
                }}
              />
            </Form.Group>
          )}

          {isMeetingRoom && (
            <Form.Group controlId="numberOfMeetingRooms">
              <Form.Label>Number of Meeting Rooms</Form.Label>
              <Form.Control
                type="number"
                minLength={1}
                placeholder="Enter the Meeting Rooms number"
                onChange={(e) => {
                  const value = Math.max(
                    minRoomNum,
                    Math.min(maxRoomNum, Number(e.target.value))
                  );
                  setNumberOfMeetingRooms(Number(value));
                }}
              ></Form.Control>
            </Form.Group>
          )}

          {isTrainingRoom && (
            <Form.Group controlId="numberOfTrainingRooms">
              <Form.Label>Number of Training Rooms</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter the Training Rooms number"
                onChange={(e) => {
                  // const value = Math.max(
                  //   minRoomNum,
                  //   Math.min(maxRoomNum, Number(e.target.value))
                  // );
                  setNumberOfTrainingRooms(Number(e.target.value));
                  console.log(e.target.value);
                }}
              ></Form.Control>
              {numberOfTrainingRooms <= 0 && (
                <div>
                  You can't choose that number of rooms if it's 0 please uncheck
                  the room type above
                </div>
              )}
            </Form.Group>
          )}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddSpace;
