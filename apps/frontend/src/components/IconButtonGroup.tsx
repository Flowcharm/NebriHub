"use client";

export default function ButtonGroup() {
  return (
  <div className="inline-flex rounded-lg shadow">
    <button className="bg-blue-500 text-white px-4 py-2 rounded-l-lg hover:bg-blue-600">
      <i className="fas fa-home"></i>
    </button>
    <button className="bg-blue-500 text-white px-4 py-2 border-l border-white hover:bg-blue-600">
      <i className="fas fa-star"></i>
    </button>
    <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600">
      <i className="fas fa-user"></i>
    </button>
  </div>
);
}