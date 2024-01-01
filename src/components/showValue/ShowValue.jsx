import React, { useState } from "react";
import "./ShowValue.css";

const predefinedColors = ["#FF5733", "#33FF57", "#5733FF", "#FF3357", "#57FF33"];

function ShowValue({ datas, onEdit, onDelete }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedData, setEditedData] = useState({ name: "", description: "" });

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedData(datas[index]);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedData({ name: "", description: "" });
  };

  const handleSaveEdit = (index) => {
    onEdit(index, editedData);
    setEditingIndex(null);
    setEditedData({ name: "", description: "" });
  };

  return (
    <div className="staticdiv">
      {datas.map((value, index) => (
        <div
          key={index}
          className="dataBox"
          style={{
            width: "300px",
            height: editingIndex === index ? "auto" : "270px",
            backgroundColor: predefinedColors[index % predefinedColors.length],
          }}
        >
          {editingIndex === index ? (
            <div>
              <textarea
                value={editedData.name}
                onChange={(e) => setEditedData({ ...editedData, name: e.target.value })}
                style={{ width: "100%" }}
              />
              <textarea
                value={editedData.description}
                onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                style={{ width: "100%" }}
              />
              <button onClick={() => handleSaveEdit(index)}>Kaydet</button>
              <button onClick={handleCancelEdit}>İptal</button>
            </div>
          ) : (
            <div>
              <p className="name">
                <strong>Başlık:</strong> {value.name}
              </p>
              <div className="description">
                <strong>Açıklama:</strong> {value.description}
              </div>
              <div className="button-container">
                <button onClick={() => onDelete(index)}>Sil</button>
                <button onClick={() => handleEdit(index)}>Düzenle</button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ShowValue;
