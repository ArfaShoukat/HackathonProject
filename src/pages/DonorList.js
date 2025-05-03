import React, { useEffect, useState } from "react";
import "./DonorList.css";
import {
  FaTrashAlt,
  FaEdit,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaStickyNote,
  FaSave,
  FaTimes,
} from "react-icons/fa";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedDonor, setEditedDonor] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("donors")) || [];
    setDonors(data);
  }, []);

  const handleDelete = (index) => {
    const updatedDonors = [...donors];
    updatedDonors.splice(index, 1);
    setDonors(updatedDonors);
    localStorage.setItem("donors", JSON.stringify(updatedDonors));
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedDonor({ ...donors[index] });
  };

  const handleSave = () => {
    const updatedDonors = [...donors];
    updatedDonors[editIndex] = editedDonor;
    setDonors(updatedDonors);
    localStorage.setItem("donors", JSON.stringify(updatedDonors));
    setEditIndex(null);
    setEditedDonor({});
  };

  const handleCancel = () => {
    setEditIndex(null);
    setEditedDonor({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDonor((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="donor-container">
      <h2 className="title">Registered Blood Donors</h2>
      {donors.length === 0 ? (
        <p className="no-donors">No donors registered yet.</p>
      ) : (
        donors.map((donor, index) => (
          <div className="donor-card" key={index}>
            {editIndex === index ? (
              <div className="donor-info">
                <p>
                  <FaUser />{" "}
                  <input
                    type="text"
                    name="name"
                    value={editedDonor.name}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <FaEnvelope />{" "}
                  <input
                    type="email"
                    name="email"
                    value={editedDonor.email}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <FaPhone />{" "}
                  <input
                    type="tel"
                    name="phone"
                    value={editedDonor.phone}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <FaTint />{" "}
                  <input
                    type="text"
                    name="bloodGroup"
                    value={editedDonor.bloodGroup}
                    onChange={handleChange}
                  />
                </p>
                <p>
                  <FaStickyNote />{" "}
                  <input
                    type="text"
                    name="notes"
                    value={editedDonor.notes || ""}
                    onChange={handleChange}
                  />
                </p>
              </div>
            ) : (
              <div className="donor-info">
                <p>
                  <FaUser /> <strong>Name:</strong> {donor.name}
                </p>
                <p>
                  <FaEnvelope /> <strong>Email:</strong> {donor.email}
                </p>
                <p>
                  <FaPhone /> <strong>Phone:</strong> {donor.phone}
                </p>
                <p>
                  <FaTint /> <strong>Blood Group:</strong> {donor.bloodGroup}
                </p>
                {donor.notes && (
                  <p>
                    <FaStickyNote /> <strong>Notes:</strong> {donor.notes}
                  </p>
                )}
              </div>
            )}

            <div className="action-buttons">
              {editIndex === index ? (
                <>
                  <button className="save-btn" onClick={handleSave}>
                    <FaSave /> Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    <FaTimes /> Cancel
                  </button>
                </>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => handleEdit(index)}>
                    <FaEdit /> Edit
                  </button>
                  <button className="delete-btn" onClick={() => handleDelete(index)}>
                    <FaTrashAlt /> Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DonorList;
