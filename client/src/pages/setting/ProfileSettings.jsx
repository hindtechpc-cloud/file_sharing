import { useRef, useState } from "react";

export default function ProfileSettings() {
  const fileRef = useRef(null);
  const [avatar, setAvatar] = useState(null);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Preview image
    setAvatar(URL.createObjectURL(file));
  };

  const handleDelete = () => {
    setAvatar(null);
    fileRef.current.value = "";
  };

  return (
    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl p-6 mb-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Profile
      </h2>

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
            <span className="text-2xl font-semibold text-blue-600">
              A
            </span>
          )}
        </div>

        <div className="flex gap-3">
          <input
            ref={fileRef}
            type="file"
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
          defaultValue="Alex Doe"
          className="border border-gray-100 shadow-2xl rounded-lg px-4 py-2 text-sm"
        />
        <input
          placeholder="Email Address"
          defaultValue="alex.doe@email.com"
          className="border border-gray-100 shadow-2xl rounded-lg px-4 py-2 text-sm"
        />
      </div>

      <button className="mt-4 text-sm font-medium text-blue-600 hover:underline">
        Save Profile
      </button>
    </div>
  );
}
