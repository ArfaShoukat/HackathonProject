import React, { useEffect, useState } from "react";
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
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./DonorList.css";
import { supabase } from "../config/Supabase";

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedDonor, setEditedDonor] = useState({});

  const fetchDonors = async () => {
    const { data, error } = await supabase.from("donors").select("*").order("id", { ascending: false });
    if (error) {
      console.error("Error fetching donors:", error);
    } else {
      setDonors(data);
    }
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  const handleDelete = async (id) => {
    console.log("Attempting to delete donor with ID:", id);
    const { error } = await supabase.from("donors").delete().eq("id", id);
    if (error) {
      console.error("Delete error:", error);
      alert("Failed to delete donor.");
    } else {
      console.log("Deleted donor successfully.");
      fetchDonors();
    }
  };

  const handleEdit = (donor) => {
    setEditingId(donor.id);
    setEditedDonor({
      name: donor.name || "",
      email: donor.email || "",
      phone: donor.phone || "",
      blood_group: donor.blood_group || "",
      city: donor.city || "",
      notes: donor.notes || "",
      id: donor.id,
    });
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("donors")
      .update(editedDonor)
      .eq("id", editedDonor.id);

    if (error) {
      console.error("Save error:", error);
      alert("Failed to save changes.");
    } else {
      setEditingId(null);
      setEditedDonor({});
      fetchDonors();
    }
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
        donors.map((donor) => (
          <div className="donor-card" key={donor.id}>
            {editingId === donor.id ? (
              <div className="donor-info">
                <p><FaUser /> <input name="name" value={editedDonor.name} onChange={handleChange} /></p>
                <p><FaEnvelope /> <input name="email" value={editedDonor.email} onChange={handleChange} /></p>
                <p><FaPhone /> <input name="phone" value={editedDonor.phone} onChange={handleChange} /></p>
                <p><FaTint /> <input name="blood_group" value={editedDonor.blood_group} onChange={handleChange} /></p>
                <p><FaMapMarkerAlt /> <input name="city" value={editedDonor.city} onChange={handleChange} /></p>
                <p><FaStickyNote /> <input name="notes" value={editedDonor.notes} onChange={handleChange} /></p>
              </div>
            ) : (
              <div className="donor-info">
                <p><FaUser /> <strong>{donor.name}</strong></p>
                <p><FaEnvelope /> {donor.email}</p>
                <p><FaPhone /> {donor.phone}</p>
                <p><FaTint /> {donor.blood_group}</p>
                <p><FaMapMarkerAlt /> {donor.city}</p>
                {donor.notes && <p><FaStickyNote /> {donor.notes}</p>}
              </div>
            )}

            <div className="action-buttons">
              {editingId === donor.id ? (
                <>
                  <button className="save-btn" onClick={handleSave}><FaSave /> Save</button>
                  <button className="cancel-btn" onClick={() => { setEditingId(null); setEditedDonor({}); }}><FaTimes /> Cancel</button>
                </>
              ) : (
                <>
                  <button className="edit-btn" onClick={() => handleEdit(donor)}><FaEdit /> Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(donor.id)}><FaTrashAlt /> Delete</button>
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
