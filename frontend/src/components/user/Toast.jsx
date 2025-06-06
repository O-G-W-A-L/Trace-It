import React, { useEffect } from 'react';

const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [toast, onClose]);

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
