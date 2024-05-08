import { useState, useCallback, useEffect } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import HeaderA from "../components/HeaderA";
import "./CreateEventsNew.css";

const CreateEventsNew = () => {
  const [groupDateTimePickerValue, setGroupDateTimePickerValue] =
    useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  const onSaveButtonClick = useCallback(() => {
    navigate("/create-events-banner");
  }, [navigate]);

  const onBackButtonClick = useCallback(() => {
    navigate("/admin-view1");
  }, [navigate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="create-events-new" data-animate-on-scroll>
        <Footer
          communicationCall="/communication--call@2x.png"
          details1Top="1913px"
        />
        <div className="buttons3">
          <Button
            className="save-button3"
            disableElevation={true}
            color="primary"
            variant="contained"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 270, height: 54 }}
            onClick={onSaveButtonClick}
          >
            Save and Continue
          </Button>
          <Button
            className="back-button3"
            disableElevation={true}
            color="primary"
            variant="text"
            sx={{ borderRadius: "0px 0px 0px 0px", width: 136, height: 54 }}
            onClick={onBackButtonClick}
          >
            Back
          </Button>
        </div>
        <section className="additional" id="SC0006">
          <div className="additional-information">Additional Information</div>
          <div className="label13">
            <div className="label14">Event Description</div>
            <b className="b">*</b>
          </div>
          <TextField
            className="additional-child"
            color="primary"
            size="medium"
            placeholder="Enter your event description"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "281px" }, width: "864px" }}
          />
        </section>
        <section className="location" id="SC0005">
          <div className="location-and-venue">Location and Venue</div>
          <div className="location-options">
            <div className="label15">
              <div className="label16">Select District</div>
              <b className="b1">*</b>
            </div>
          </div>
          <div className="location-options1">
            <div className="label15">
              <div className="label16">Enter Location</div>
              <b className="b1">*</b>
            </div>
          </div>
          <FormControl
            className="districts"
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "576px",
              height: "67px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "67px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "67px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "67px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "67px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty>
              <MenuItem value="Colombo">Colombo</MenuItem>
              <MenuItem value="Gampaha">Gampaha</MenuItem>
              <MenuItem value="Kandy">Kandy</MenuItem>
              <MenuItem value="Galle">Galle</MenuItem>
              <MenuItem value="Kurunegala">Kurunegala</MenuItem>
              <MenuItem value="Matara">Matara</MenuItem>
              <MenuItem value="Ratnapura">Ratnapura</MenuItem>
              <MenuItem value="Anuradhapura">Anuradhapura</MenuItem>
              <MenuItem value="Jaffna">Jaffna</MenuItem>
              <MenuItem value="Badulla">Badulla</MenuItem>
              <MenuItem value="Batticaloa">Batticaloa</MenuItem>
              <MenuItem value="Trincomalee">Trincomalee</MenuItem>
              <MenuItem value="Nuwara Eliya">Nuwara Eliya</MenuItem>
              <MenuItem value="Ampara">Ampara</MenuItem>
              <MenuItem value="Kalutara">Kalutara</MenuItem>
              <MenuItem value="Polonnaruwa">Polonnaruwa</MenuItem>
              <MenuItem value="Matale">Matale</MenuItem>
              <MenuItem value="Hambantota">Hambantota</MenuItem>
              <MenuItem value="Kegalle">Kegalle</MenuItem>
              <MenuItem value="Puttalam">Puttalam</MenuItem>
              <MenuItem value="Mannar">Mannar</MenuItem>
              <MenuItem value="Vavuniya">Vavuniya</MenuItem>
              <MenuItem value="Monaragala">Monaragala</MenuItem>
              <MenuItem value="Kilinochchi">Kilinochchi</MenuItem>
              <MenuItem value="Mullaitivu">Mullaitivu</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
          <TextField
            className="location-child"
            color="primary"
            placeholder="Enter your event location"
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "67px" }, width: "576px" }}
          />
        </section>
        <section className="date-and-time" id="SC0004">
          <div className="date-and-time1">Date and Time</div>
          <TextField
            className="date-and-time-child"
            color="primary"
            size="medium"
            required={true}
            variant="outlined"
            type="date"
            sx={{ "& .MuiInputBase-root": { height: "67px" }, width: "576px" }}
          />
          <div className="event-date">Event Date</div>
          <div className="wrapper">
            <TimePicker
              value={groupDateTimePickerValue}
              onChange={(newValue) => {
                setGroupDateTimePickerValue(newValue);
              }}
              sx={{}}
              slotProps={{
                textField: {
                  size: "medium",
                  fullWidth: false,
                  required: false,
                  autoFocus: false,
                  error: false,
                  color: "primary",
                },
                openPickerIcon: {
                  component: () => <></>,
                },
              }}
            />
          </div>
          <div className="event-time">Event Time</div>
        </section>
        <section className="event-details3" id="SE0003">
          <div className="date-and-time1">Event Details</div>
          <div className="event-name">Event Name</div>
          <div className="event-category">Event Category</div>
          <TextField
            className="event-details-child"
            color="primary"
            placeholder="Enter your event name"
            required={true}
            variant="outlined"
            sx={{ "& .MuiInputBase-root": { height: "67px" }, width: "576px" }}
          />
          <FormControl
            className="categories-list"
            variant="outlined"
            sx={{
              borderRadius: "0px 0px 0px 0px",
              width: "576px",
              height: "67px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "67px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "67px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "67px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "67px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": { textAlign: "left", p: "0 !important" },
            }}
          >
            <InputLabel color="primary" />
            <Select color="primary" disableUnderline displayEmpty>
              <MenuItem value="Music">Music</MenuItem>
              <MenuItem value="Concerts">Concerts</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
              <MenuItem value="Exhibition">Exhibition</MenuItem>
              <MenuItem value="Sports">Sports</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </section>
        <ProgressBar
          filledProgress="/filled-progress2.svg"
          filledProgress1="/filled-progress2.svg"
          filledProgress2="/filled-progress2.svg"
          propColor="rgba(30, 30, 30, 0.5)"
          propColor1="rgba(30, 30, 30, 0.5)"
          propColor2="rgba(30, 30, 30, 0.5)"
        />
        <section className="create-event4" id="SC0001">
          <div className="create-event5">Create Event</div>
          <img
            className="create-event-child"
            alt=""
            src="/rectangle-5073.svg"
          />
        </section>
        <HeaderA propTop="0px" propLeft="0px" />
      </div>
    </LocalizationProvider>
  );
};

export default CreateEventsNew;
