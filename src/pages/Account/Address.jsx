import { Plus, MoreVertical, X } from "lucide-react";
import { useState,useEffect } from "react";
import { toast } from 'react-toastify';
import PageHeader from "../../components/Account/AccountPageHeader";
import AddressModalForm from "./AddressModalForm";
import { fetchAddress,createAddress,updateAddress,deleteAddress } from "../../data/api/address";

export default function ManageAddressPage() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editingAddress, setEditingAddress] = useState(null);

  useEffect(() => {
    loadAddresses();
  }, []);

  const loadAddresses = async () => {
    try {
      const res = await fetchAddress();
      setAddresses(res.data);
    } catch (err) {
      console.error("Failed to load addresses", err);
    }
  };
    const handleAddressSubmit = async (data) => {
  try {
    if (editingAddress) {
      await updateAddress(editingAddress.id, data);
    } else {
      await createAddress(data);
    }
    setShowModal(false);
    setEditingAddress(null);
    loadAddresses();
  } catch (err) {
    console.error(err);
  }
};


   const formatAddress = (item) => {
  return [
    item.line1,
    item.line2,
    item.area,
    item.landmark,
    `${item.city}, ${item.state} - ${item.pincode}`,
    item.country,
  ]
    .filter(Boolean)
    .join(", ");
};

  const handleAddressDelete = async (id) => {
  try {
    const res = await deleteAddress(id); 
    setOpenMenuId(null);
    toast.success("Address Deleted!", {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnHover: false,
                });
    setAddresses(prev => prev.filter(addr => addr.id !== id));

  } catch (err) {
     toast.error("Something went wrong!", {
                    position: "top-center",
                    autoClose: 3000,
                    pauseOnHover: false,
                });
                console.error(err);
    }
};   

  return (
    <div className="w-100 mx-auto p-2 md:p-6 mt-2">
      <div className="mb-6">
        <PageHeader title="Manage Address" />

        <button
          type="button"
           onClick={() => {
            setEditingAddress(null);
            setShowModal(true);
            }}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow"
        >
          <Plus size={16} />
          Add New Address
        </button>
      </div>
  {addresses.length === 0 ? (
     <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-8 text-center">
    <p className="text-sm text-gray-500">No Address Found</p>
  </div>
  ):(<div className="space-y-6">
  {addresses.map((item) => (
    <div
      key={item.id}
      className="relative rounded-2xl border border-gray-300 bg-white p-5 shadow-sm hover:shadow-lg transition"
    >

      {/* Menu */}
      <button
        onClick={() =>
          setOpenMenuId(openMenuId === item.id ? null : item.id)
        }
        className="absolute top-4 right-4 rounded-full p-1 hover:bg-gray-100"
      >
        <MoreVertical size={18} />
      </button>

      {/* Address Type + Default */}
      <div className="flex items-center ">
        <span className="inline-flex items-center rounded-full bg-fuchsia-100 px-3 py-1 text-xs font-medium text-fuchsia-700">
          {item.address_type}
        </span>

        {item.is_default && (
          <span className="inline-flex items-center rounded-full text-xs font-medium text-green-600 px-3 py-1">
            Default
          </span>
        )}
      </div>

      {/* Address */}
      <p className="mt-3 text-sm leading-relaxed text-gray-700">
        {formatAddress(item)}
      </p>

      {/* City / State */}
      <div className="mt-2 text-xs text-gray-500">
        {item.city}, {item.state}, {item.country}
      </div>

      {/* Actions */}
      {openMenuId === item.id && (
        <div className="absolute right-4 top-12 z-10 w-32 rounded-xl bg-white py-2 shadow-md">
          <button
            onClick={() => {
              setEditingAddress(item);
              setShowModal(true);
              setOpenMenuId(null);
            }}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Edit
          </button>

          <button
            onClick={() => {
              handleAddressDelete(item.id)
            }}
            className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  ))}
</div>
)}


      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-lg bg-white  p-6 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-lg font-semibold">Add Address</h2>
              <button onClick={() => setShowModal(false)}>
                <X size={18} />
              </button>
            </div>

            <AddressModalForm
                defaultValues={editingAddress}
                onSubmit={handleAddressSubmit}
            />
          </div>
        </div>
      )}
    </div>
  );
}
