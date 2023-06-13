import React, { useEffect, useState } from "react";
import styles from "./AddSpace.module.css";
import styless from "./Week.module.css";
import { Form, Button } from "react-bootstrap";
import Week from "./Week";
import Bio from "./Bio";
import WorkspaceForm from "../WorkspaceForm/WorkspaceForm";
import Amenities from "../Amenities/Amenities";
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
  const [meetingRoomInputs, setMeetingRoomInputs] = useState([]);
  const [trainingRoomInputs, setTrainingRoomInputs] = useState([]);
  const [isSundayChecked, setIsSundayChecked] = useState(false);

  const [checkboxes, setCheckboxes] = useState([
    { id: "checkbox1", Day: "Sunday", checked: false, start: "", end: "" },
    { id: "checkbox2", Day: "Monday", checked: false, start: "", end: "" },
    { id: "checkbox3", Day: "Tuseday", checked: false, start: "", end: "" },
    { id: "checkbox4", Day: "Wednesday", checked: false, start: "", end: "" },
    { id: "checkbox5", Day: "Thursday", checked: false, start: "", end: "" },
    { id: "checkbox6", Day: "Friday", checked: false, start: "", end: "" },
    { id: "checkbox7", Day: "Saturday", checked: false, start: "", end: "" },
  ]);

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
    console.log();
    handleGenerateSchedule();
    console.log();
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
      for (let index = 0; index < numberOfMeetingRooms; index++) {
        console.log(`This is the meeting room ${index}`);
      }
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

            <Form.Group controlId={`meetingRoomAmenities_${i}`}>
              <Form.Label>Amenities</Form.Label>
              <Form.Control type="text" placeholder="Enter room amenities" />
            </Form.Group>

            <Form.Group controlId={`meetingRoomDescription_${i}`}>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Enter room description"
              />
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
    } else {
      setMeetingRoomInputs([]);
    }
  }, [isMeetingRoom, numberOfMeetingRooms]);

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
    setNumberOfTrainingRooms(countTrain);
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
          <Form.Group controlId="workingDays">
            <Form.Label>Working Days</Form.Label>
            <Form.Check
              type="checkbox"
              label="Sunday"
              checked={isSundayChecked}
              onChange={(e) => {
                setIsSundayChecked(e.target.checked);
              }}
            ></Form.Check>
          </Form.Group>
          {/* ******************************************************************** */}
          {/* ************************************************* */}
          <div
            className={`container py-4 px-4 bg-white shadow w-50 ${styless.week}`}
          >
            <div className={`row my-3 py-3 m-auto shadow ${styless.Weekly}`}>
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
                    <div className="col-lg-2 my-2">
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
                    <div className="col-lg-2 my-2">
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
          {/* ******************************* */}
          <Form.Group controlId="hourlyPrice">
            <Form.Label>Hourly Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter hourly price EGP"
              onChange={(e) => setHourlyPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="isSilentSeats">
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
          {isSilentSeats && (
            <Form.Group controlId="vipHourlyPrice">
              <Form.Label>Silent seats hourly Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter hourly price EGP"
                value={vipHourlyPrice}
                onChange={(e) => setVipHourlyPrice(e.target.value)}
              />
            </Form.Group>
          )}
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
          {meetingRoomInputs}
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

          {trainingRoomInputs}

          {/* <WrokSpaceForm></WrokSpaceForm> */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddSpace;