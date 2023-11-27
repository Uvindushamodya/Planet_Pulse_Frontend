import "../assets/styles/share.css";
import React, { useState } from "react";
import axiosInstance from "../axios"; // Import your Axios instance with authentication
import jwtDecode from "jwt-decode";
import { useTranslation } from "react-i18next";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@material-ui/icons";

export default function CreatePost() {
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { t } = useTranslation();
 
  const submitHandler = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("access_token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.user_id;

    const formData = new FormData();
    formData.append("user", userId);
    formData.append("desc", desc);
    if (file) {
      formData.append("image", file);
    }

    try {
      const response = await axiosInstance.post("/posts/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
        
      });
      window.location.reload();
      console.log(response.data);
      if(response.data.points_assigned === null){
        alert("no green value");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="share">
       <div className="Gheading"><h2>{t("green_showcase")}</h2></div>
    <div className="shareWrapper">
      <div className="shareTop">
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="shareInput"
        />
      </div>
      <hr className="shareHr" />
      {file && (
        <div className="shareImgContainer">
          <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
          <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
        </div>
      )}
      <form className="shareBottom" onSubmit={submitHandler}>
        <div className="shareOptions">
          <label htmlFor="file" className="shareOption">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            <input
            style={{ display: "none" }}
            type="file"
            id="file"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => setFile(e.target.files[0])}
          />
          </label>
          <div className="shareOption">
            <Label htmlColor="blue" className="shareIcon" />
            <span className="shareOptionText">Tag</span>
          </div>
          <div className="shareOption">
            <Room htmlColor="green" className="shareIcon" />
            <span className="shareOptionText">Location</span>
          </div>
          <div className="shareOption">
            <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
            <span className="shareOptionText">Feelings</span>
          </div>
        </div>
        <button className="shareButton" type="submit">
          Share
        </button>
      </form>
    </div>
  </div>
  
  );
}
