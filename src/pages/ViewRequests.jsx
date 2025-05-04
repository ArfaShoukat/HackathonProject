import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaStickyNote,
  FaEdit,
  FaTrashAlt,
  FaArrowLeft,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { supabase } from "../config/Supabase";
import "./ViewRequests.css";
import ScrollToTop from "../components/ScrollTop";
import { useNavigate } from "react-router-dom";
import BackArrow from "../components/BackArrow";


const ViewRequests = () => {
  const [requests, setRequests] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editedRequest, setEditedRequest] = useState({});

  const navigate = useNavigate();

  const fetchRequests = async () => {
    const { data, error } = await supabase
      .from("blood_requests")
      .select("*")
      .order("id", { ascending: false });

    if (error) {
      console.error("Error fetching requests:", error.message);
    } else {
      setRequests(data);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const handleEdit = (request) => {
    setEditingId(request.id);
    setEditedRequest({ ...request });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedRequest((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const { error } = await supabase
      .from("blood_requests")
      .update(editedRequest)
      .eq("id", editedRequest.id);

    if (error) {
      console.error("Update failed:", error);
      alert("Failed to update request.");
    } else {
      setEditingId(null);
      setEditedRequest({});
      fetchRequests();
    }
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from("blood_requests")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Delete error:", error);
      alert("Failed to delete request.");
    } else {
      fetchRequests();
    }
  };

  return (
    <div className="requests-container">
      <BackArrow />
      <h2 className="requests-title">Blood Request List</h2>
      {requests.length === 0 ? (
        <p className="no-requests">No blood requests found.</p>
      ) : (
        <div className="requests-list">
          {requests.map((req) => (
            <div className="request-card" key={req.id}>
              {editingId === req.id ? (
                <>
                  <p><FaUser /> <input name="name" value={editedRequest.name} onChange={handleChange} /></p>
                  <p><FaEnvelope /> <input name="email" value={editedRequest.email} onChange={handleChange} /></p>
                  <p><FaPhone /> <input name="phone" value={editedRequest.phone} onChange={handleChange} /></p>
                  <p><FaTint /> <input name="blood_group" value={editedRequest.blood_group} onChange={handleChange} /></p>
                  <p><FaStickyNote /> <input name="additional_info" value={editedRequest.additional_info || ""} onChange={handleChange} /></p>

                  <div className="action-buttons">
                    <button className="save-btn" onClick={handleSave}><FaSave /> Save</button>
                    <button className="cancel-btn" onClick={() => { setEditingId(null); setEditedRequest({}); }}><FaTimes /> Cancel</button>
                  </div>
                </>
              ) : (
                <>
                  <p><FaUser /> <strong>{req.name}</strong></p>
                  <p><FaEnvelope /> {req.email}</p>
                  <p><FaPhone /> {req.phone}</p>
                  <p><FaTint /> {req.blood_group}</p>
                  {req.additional_info && <p><FaStickyNote /> {req.additional_info}</p>}

                  <div className="action-buttons">
                    <button className="edit-btn" onClick={() => handleEdit(req)}><FaEdit /> Edit</button>
                    <button className="delete-btn" onClick={() => handleDelete(req.id)}><FaTrashAlt /> Delete</button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
      <ScrollToTop />
    </div>
  );
};

export default ViewRequests;
