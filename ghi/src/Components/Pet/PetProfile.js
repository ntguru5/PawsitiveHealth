import React from "react";
import { useParams } from "react-router-dom";
import { useGetDashboardDataQuery } from "../../Store/DashboardApi";
import { useGetPetProfileDataQuery } from "../../Store/PetProfileApi";

export default function ListPet() {
	const { data } = useGetPetProfileDataQuery();
    // const { data } = useGetDashboardDataQuery();
    const [ pets, setPets ] = React.useState('');
    const { pet_id } = useParams(); // get pet_id from URL parameters

    const handlePetChange = (e) => {
        setPets(e.target.value);
    };

	if (data) {
    console.log(data)
		return (
			<div>
				<h1>Pet Profile: {data.pet_name}</h1>
                <div className="form-floating mb-3">
                    <select
                    value={pets}
                    onChange={handlePetChange}
                    required
                    name="pet"
                    id="pet"
                    className="form-select"
                    >
                        <option value="">Choose a pet</option>
                        {data.pets.map((pet) => {
                            return (
                                <option key={pet.pet_id} value={pet.pet_id}>
                            {pet.pet_name}
                            </option>
                            );
                        })}
                    </select>
                </div>
			</div>
		);
	}
}
