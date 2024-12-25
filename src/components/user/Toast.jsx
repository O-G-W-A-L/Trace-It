import React from 'react';

const Toast = ({ toast }) => {
  if (!toast) return null;

  return (
    <div
      className={`fixed top-4 right-4 p-4 rounded-lg shadow-lg ${
        toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      {toast.message}
    </div>
  );
};

export default Toast;
