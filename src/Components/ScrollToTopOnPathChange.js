import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnPathChange = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null;
};

export default ScrollToTopOnPathChange;
