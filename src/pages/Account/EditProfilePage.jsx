import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import { editUserProfileApi } from "../../data/api/auth";
import { useAuth } from "../../context/AuthContext";
import { toast } from 'react-toastify';
import PageHeader from "../../components/Account/AccountPageHeader";
export default function EditProfilePage() {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  // Form state
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    city: "",
    gender: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});


  useEffect(() => {
    if (user) {
      setForm({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        city: user.client_profile?.city || "",
        gender: user.gender || "",
        zip: user.client_profile?.zip || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
  const { name, value } = e.target;

  setForm(prev => ({ ...prev, [name]: value }));

  // Remove error of that field as user types
  setErrors(prev => ({ ...prev, [name]: undefined }));
};


  const handleEditProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await editUserProfileApi(form);

      if (res.data.success) {
          setUser(prev => ({ ...prev, ...res.data.data }));
           setErrors({});
           navigate("/account");
           toast.success(res.data.message, {
                position: "top-center",
                autoClose: 3000,
                pauseOnHover: false,
            });


      } else {
        setErrors(res.data.message || "Something went wrong");
        toast.error(res.data.message || "Something went wrong", {
                position: "top-right",
                autoClose: 3000,
                pauseOnHover: false,
            });
      }

    } catch (err) {
    if (err.response?.data?.errors) {
      setErrors(err.response.data.errors); 
    } else {
      setErrors({ general: "Something went wrong" });
    }
  }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md mt-6">
     <PageHeader title="Edit Profile" />

      <form className="w-full max-w-lg space-y-6 " onSubmit={handleEditProfile}>

        <div className="flex flex-wrap -mx-3">

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-xs font-bold mb-2" htmlFor="name">
              First Name
            </label>
            <input
              id="f_name"
              name="first_name"
              type="text"
              value={form.first_name}
              onChange={handleChange}
              placeholder="First Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
            />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-xs font-bold mb-2" htmlFor="name">
              Last Name
            </label>
            <input
              id="l_name"
              name="last_name"
              type="text"
              value={form.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
            />
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block text-xs font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@gmail.com"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
{/*           <div className="w-full md:w-1/3 px-3"> */}
{/*             <label className="block text-xs font-bold mb-2" htmlFor="city"> */}
{/*               City */}
{/*             </label> */}
{/*             <input */}
{/*               id="city" */}
{/*               name="city" */}
{/*               type="text" */}
{/*               value={form.city} */}
{/*               onChange={handleChange} */}
{/*               placeholder="Albuquerque" */}
{/*               className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4" */}
{/*             /> */}
{/*           </div> */}

          <div className="w-full md:w-1/3 px-3">
            <label className="block text-xs font-bold mb-2" htmlFor="gender">
              Gender
            </label>
            <select
              id="gender"
              name="gender"
              value={form.gender}
              onChange={handleChange}
              className={`block w-full border text-gray-700 py-3 px-4 rounded  ${
                errors.gender ? "border-red-500" : "border-gray-200"
                }`}
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
             {errors.gender && (
                 <p className="text-red-500 text-sm mt-1">{errors.gender[0]}</p>
                )}
          </div>

          {/* <div className="w-full md:w-1/3 px-3">
            <label className="block text-xs font-bold mb-2" htmlFor="zip">
              Zip
            </label>
            <input
              id="zip"
              name="zip"
              type="text"
              value={form.zip}
              onChange={handleChange}
              placeholder="90210"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4"
            />
          </div> */}
        </div>

{/*         {error && <p className="text-red-500 text-sm">{error}</p>} */}

        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-full"
        >
          Save
        </button>
      </form>
    </div>
  );
}
