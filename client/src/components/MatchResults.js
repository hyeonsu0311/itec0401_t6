import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./MatchResults.css";
import axios from "axios";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function MatchResults() {
  const location = useLocation();
  const data = location.state; // Ensure state data is passed correctly
  const [open, setOpen] = useState(false);
  const [selectedTraveler, setSelectedTraveler] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleClickOpen = (traveler) => {
    setSelectedTraveler(traveler);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMessageSend = async () => {
    const message = document.getElementById("message").value;
    if (!message.trim()) {
      setSnackbarMessage("빈 메시지는 전송할 수 없습니다.");
      setSnackbarOpen(true);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/service1/api/sendMessage",
        {
          sender: "보낸사람 아이디나 정보",
          receiver: selectedTraveler.username,
          message: message,
        }
      );
      console.log("메시지가 성공적으로 전송되었습니다:", response.data);
      setSnackbarMessage("메시지가 성공적으로 전송되었습니다!");
      setSnackbarOpen(true);
      handleClose();
    } catch (error) {
      let errorMessage = "메시지 전송에 실패했습니다.";
      if (error.response) {
        errorMessage += ` 서버가 ${error.response.status} 상태 코드로 응답했습니다.`;
      } else if (error.request) {
        errorMessage += " 서버로부터 응답이 없습니다.";
      } else {
        errorMessage += ` 요청 설정 중 오류 발생: ${error.message}.`;
      }
      console.error(errorMessage, error);
      setSnackbarMessage(errorMessage);
      setSnackbarOpen(true);
    }
  };

  const handleApply = async (traveler) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/service1/api/apply",
        {
          applicantID: "보낸사람 아이디나 정보", // 실제 구현에서는 적절한 사용자 ID를 사용해야 합니다.
          receiverID: traveler.username, // 신청을 받는 사용자의 ID or username
        }
      );
      console.log("신청이 성공적으로 처리되었습니다:", response.data);
      setSnackbarMessage("신청이 성공적으로 제출되었습니다!");
      setSnackbarOpen(true);
    } catch (error) {
      let errorMessage = "신청 제출에 실패했습니다.";
      if (error.response) {
        errorMessage += ` 서버가 ${error.response.status} 상태 코드로 응답했습니다.`;
      } else if (error.request) {
        errorMessage += " 서버로부터 응답이 없습니다.";
      } else {
        errorMessage += ` 요청 설정 중 오류 발생: ${error.message}.`;
      }
      console.error(errorMessage, error);
      setSnackbarMessage(errorMessage);
      setSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div className="results-container">
      {data && data.length > 0 ? (
        data.map((traveler, index) => (
          <Card
            style={{ borderRadius: "20px" }}
            key={index}
            className="traveler-card"
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {traveler.username || "Unknown Traveler"}
              </Typography>
              <hr />
              <Typography variant="body2" color="text.secondary">
                <strong>Gender:</strong> {traveler.gender}
                <br />
                <strong>Country of Residence:</strong>{" "}
                {traveler.country_of_residence}
                <br />
                <strong>Country to Visit:</strong> {traveler.country_to_visit}
                <br />
                <strong>Travel Budget:</strong> {traveler.travel_budget}
                <br />
                <strong>Accommodation Preferences:</strong>{" "}
                {traveler.accommodation_preferences}
              </Typography>
              <hr />
            </CardContent>
            <CardActions>
              <Button
                style={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  backgroundColor: "#4b76a5",
                }}
                size="small"
                color="primary"
                variant="contained"
                className="action-button"
                onClick={() => handleApply(traveler)}
              >
                Apply
              </Button>
              <Button
                style={{
                  borderRadius: "10px",
                  fontWeight: "bold",
                  backgroundColor: "#5d4ac5",
                }}
                size="small"
                color="secondary"
                variant="contained"
                className="action-button"
                onClick={() => handleClickOpen(traveler)}
              >
                Message
              </Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <Typography
          variant="h6"
          color="text.primary"
          style={{ textAlign: "center", marginTop: "20px" }}
        >
          No matching travelers found.
        </Typography>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send a Message</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Send a message to {selectedTraveler.username || "the traveler"}.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Your Message"
            type="text"
            fullWidth
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleMessageSend} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MatchResults;
