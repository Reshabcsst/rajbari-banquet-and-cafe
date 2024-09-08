import { useEffect, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

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
  const close = () => {
    setVisible(false);
  }

  return (
    <div className='notification'>
      <IoMdClose className='svg' onClick={close} />
      <p>{message}</p>
    </div>
  );
};

export default Notification;
