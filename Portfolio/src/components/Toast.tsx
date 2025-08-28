import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: "success" | "error";
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type = "success", duration = 3000 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 flex items-center w-full max-w-xs p-4 mb-4 text-gray-700 bg-white rounded-lg shadow-lg animate-slide-in">
      <div
        className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-full ${
          type === "success" ? "text-green-500 bg-green-100" : "text-red-500 bg-red-100"
        }`}
      >
        {type === "success" ? "✅" : "❌"}
      </div>
      <div className="ml-3 text-sm font-medium">{message}</div>
    </div>
  );
};

export default Toast;
