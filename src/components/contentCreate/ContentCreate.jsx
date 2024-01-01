import React, { useState, useEffect } from "react";
import "./contentCreate.css";
import ShowValue from "../showValue/ShowValue";

const ContentCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("allDatas"));
    if (datas) {
      setAllData(datas);
    }
  }, []);

  const handleChange = (e) => {
    setFormData((previous) => ({
      ...previous,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAllData((previous) => {
      const newData = [...previous, formData];
      localStorage.setItem("allDatas", JSON.stringify(newData));
      return newData;
    });

    setFormData({ name: "", description: "" });
  };

  const handleEdit = (index, editedData) => {
    setAllData((previous) => {
      const newData = [...previous];
      newData[index] = editedData;
      localStorage.setItem("allDatas", JSON.stringify(newData));
      return newData;
    });
  };

  const handleDelete = (index) => {
    setAllData((previous) => {
      const newData = previous.filter((item, i) => i !== index);
      localStorage.setItem("allDatas", JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <div className="content-container">
      <div className="content-form">
        <form className="form-dialog" onSubmit={handleSubmit}>
          <div className="form-dsg">
            <label>
              Not başlığı giriniz :
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <br />
            <label>Açıklama giriniz :</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              cols="50"
            ></textarea>
            <br />
            <br />
            <button type="submit">Ekle</button>
          </div>
        </form>
      </div>

      <div className="showValues">
        <ShowValue datas={allData} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default ContentCreate;
