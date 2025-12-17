import { Plus, MoreVertical } from "lucide-react";
import { useState } from "react";
import { ArrowLeft } from 'lucide-react';
export default function ManageAddressPage() {
  const [openMenuId, setOpenMenuId] = useState(null);

  const addresses = [
    {
      id: 1,
      title: "Home",
      address: "221B Baker Street, London - NW1",
      phone: "+44 123456789",
    },
    {
      id: 2,
      title: "Office",
      address: "1600 Amphitheatre Parkway, CA - 94043",
      phone: "+1 987654321",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-1 md:p-6 mt-2">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-full p-1 hover:bg-gray-100"
            onClick={() => window.history.back()}
          >
            <ArrowLeft />
          </button>

          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 ">
            Manage Address
          </h1>
        </div>

        <button
          type="button"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-fuchsia-500 px-4 py-2 text-sm font-medium text-white shadow transition"
        >
          <Plus size={16} />
          Add New Address
        </button>
      </div>

      {/* Address Cards */}
      <div className="space-y-6">
        {addresses.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl  p-4 shadow-sm"
          >
            {/* Three dot menu */}
            <button
              onClick={() =>
                setOpenMenuId(openMenuId === item.id ? null : item.id)
              }
              className="absolute top-4 right-4 rounded-full p-1 hover:bg-gray-100"
            >
              <MoreVertical size={18} />
            </button>

            {/* Dropdown */}
            {openMenuId === item.id && (
              <div className="absolute right-4 top-12 z-10 w-32 rounded-xl py-2 bg-white shadow-md">
                <button className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100">
                  Edit
                </button>
                <button className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                  Delete
                </button>
              </div>
            )}

            <h2 className="text-lg font-medium text-gray-900">
              {item.title}
            </h2>
            <p className="mt-1 text-sm text-gray-600">{item.address}</p>
            <p className="mt-1 text-sm text-gray-600">
              Phone: {item.phone}
            </p>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {addresses.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-gray-500">
          No addresses added yet.
        </div>
      )}
    </div>
  );
}
