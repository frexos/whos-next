import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import sanitizeData from '../helpers/dataSanitizer';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  async function getResponse() {
    const response = await fetch(
      'https://react-meetups-d407b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    const sanitizedData = sanitizeData(data);
    setIsLoading(false);
    setLoadedMeetups(sanitizedData);

    return data;
  }

  useEffect(() => {
    setIsLoading(true);
    getResponse();
  }, []);

  if (isLoading)
    return (
      <section>
        <span>Loading...</span>
      </section>
    );

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
