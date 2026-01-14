import { useRef, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/Authcontext";
export default function ProfileSettings() {
  const { user, login } = useContext(AuthContext);
  const fileRef = useRef(null);
  const [avatar, setAvatar] = useState(null);
  const [fileData, setFileData] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const updateProfile = async () => {
    console.log(avatar, email, name);
    try {
      let formData = new FormData();
      formData.append("file", fileData);
      formData.append("name", name);
      formData.append("email", email);
      // console.log(formData);
      const res = await axios.put(
        "http://localhost:5000/api/auth/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
            "Content-Type": "application/form-data",
          },
        }
      );
      console.log(res);
      login({ user: res?.data?.user, token: user?.token });
      // localStorage.removeItem("authUser");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setFileData(file);
    // Preview image
    setAvatar(URL.createObjectURL(file));
  };

  const handleDelete = () => {
    setAvatar(null);
    fileRef.current.value = "";
  };

  const handleSubmit = () => {
    console.log("name : ", name);
    console.log("email  : ", email);
    updateProfile();
  };

  return (
    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Profile</h2>

      {/* Profile Picture */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center overflow-hidden">
          {avatar ? (
            <img
              src={avatar}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-2xl font-semibold text-blue-600">A</span>
          )}
        </div>

        <div className="flex gap-3">
          <input
            ref={fileRef}
            type="file"
            name="file"
            accept="image/*"
            onChange={handleUpload}
            className="hidden"
          />

          <button
            onClick={() => fileRef.current.click()}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            Upload Photo
          </button>

          {avatar && (
            <button
              onClick={handleDelete}
              className="text-sm font-medium text-red-500 hover:underline"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      {/* Profile Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          placeholder="Full Name"
          name="name"
          type="text"
          defaultValue="Alex Doe"
          className="border border-gray-100 shadow-2xl rounded-lg px-4 py-2 text-sm"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          defaultValue="alex.doe@email.com"
          className="border border-gray-100 shadow-2xl rounded-lg px-4 py-2 text-sm"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button
        type="button"
        className="mt-4 text-sm font-medium text-blue-600 hover:underline"
        onClick={handleSubmit}
      >
        Save Profile
      </button>
    </div>
  );
}
