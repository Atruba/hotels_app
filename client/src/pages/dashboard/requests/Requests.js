import { useEffect } from 'react';

const Requests = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return <div>No Requests</div>;
};

export default Requests;