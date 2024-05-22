import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fulfilled } from "./features/travelPreferences/travelPreferencesSlice";
import {
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Container,
  Typography,
} from "@mui/material";
import axios from "axios";
import "./TravelPreferencesForm.css";
function TravelPreferencesForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    gender: "",
    travelPreference: "",
    countryToVisit: "",
    travelBudget: "",
    accommodationPreferences: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "http://3.34.125.188:8080/api/findMatches",
        formData
      );
      dispatch(fulfilled(res.data));
      navigate("/match-results", { state: res.data });
    } catch (error) {
      console.error("Failed to fetch matches:", error);
      alert("An error occurred while fetching the matching travelers.");
    }
  };

  return (
    <>
      <h1 style={{ marginTop: "15vh" }}>Find Your Travel Match</h1>
      <Container
        style={{
          backgroundColor: "white",
          borderRadius: "14px",
          padding: "20px",
        }}
        maxWidth="sm"
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Find Your Travel Match
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Gender"
            select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </TextField>
          <TextField
            fullWidth
            label="Travel Preference"
            select
            name="travelPreference"
            value={formData.travelPreference}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="City">City</MenuItem>
            <MenuItem value="Nature">Nature</MenuItem>
            <MenuItem value="Both">Both</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Country to Visit"
            select
            name="countryToVisit"
            value={formData.countryToVisit}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="프랑스">프랑스</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Travel Budget"
            select
            name="travelBudget"
            value={formData.travelBudget}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </TextField>

          <TextField
            fullWidth
            label="Accommodation Preferences"
            select
            name="accommodationPreferences"
            value={formData.accommodationPreferences}
            onChange={handleChange}
            margin="normal"
          >
            <MenuItem value="Hostel">Hostel</MenuItem>
            <MenuItem value="Hotel">Hotel</MenuItem>
            <MenuItem value="Airbnb">Airbnb</MenuItem>
          </TextField>

          <Button
            style={{
              borderRadius: "12px",
              marginTop: "20px",
              marginBottom: "20px",
              width: "100%",
            }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Find Matches
          </Button>
        </form>
      </Container>
    </>
  );
}

export default TravelPreferencesForm;
