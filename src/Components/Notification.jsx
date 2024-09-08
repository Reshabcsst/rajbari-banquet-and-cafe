import { useEffect, useState } from 'react';

const Notification = ({ message, expiryYear = 2025 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (currentYear >= expiryYear) {
      setVisible(false);
    }
  }, [expiryYear]);

  if (!visible) {
    return null;
  }

  return (
    <div className='notification'>
      <p>{message}</p>
    </div>
  );
};

export default Notification;
