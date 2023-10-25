import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputLabel } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useUpdateSleepMutation } from "../../../Store/SleepHistoryApi";
import { toast } from "react-toastify";

export default function UpdateSleepRecordModal({
	isOpen,
	onClose,
	selectedPetId,
	sleep_id,
}) {
	const navigate = useNavigate();
	const [date, setDate] = useState("");
	const [time, setTime] = useState("");
	const [duration, setDuration] = useState("");
	const [updateSleepMutation] = useUpdateSleepMutation();

	const handleDateChange = (event) => {
		const value = event.target.value;
		setDate(value);
	};

	const handleTimeChange = (event) => {
		const value = event.target.value;
		setTime(value);
	};

	const handleDurationChange = (event) => {
		const value = event.target.value;
		setDuration(value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const updatedSleep = {
			date,
			time,
			duration,
			pet_id: selectedPetId,
		};

		try {
			await updateSleepMutation({
				updatedSleep,
				petId: selectedPetId,
				sleep_id: sleep_id,
			}).unwrap();
			toast.success("Sleep has been updated!");
			navigate("/activities");
		} catch (err) {
			toast.error("Unable to update sleep");
		}

		onClose();
	};

	return (
		<Modal open={isOpen} onClose={onClose}>
			<Box
				sx={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
					width: 400,
					bgcolor: "background.paper",
					border: "2px solid #000",
					boxShadow: 24,
					p: 4,
				}}
			>
				<h2>Update Sleep Record</h2>
				<InputLabel>Date</InputLabel>
				<TextField
					type="date"
					value={date}
					onChange={handleDateChange}
					fullWidth
				/>
				<InputLabel>Time</InputLabel>
				<TextField
					type="time"
					value={time}
					onChange={handleTimeChange}
					fullWidth
				/>
				<InputLabel>Duration</InputLabel>
				<TextField
					type="number"
					value={duration}
					onChange={handleDurationChange}
					fullWidth
				/>
				<Button
					variant="contained"
					color="primary"
					onClick={handleSubmit}
				>
					Update
				</Button>
			</Box>
		</Modal>
	);
}
