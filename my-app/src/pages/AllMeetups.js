import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image: "/img/1655863474164.jpg",
    address: "Meetupstreet 1, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image: "/img/IMG_20220125_073549_100.jpg",
    address: "Meetupstreet 2, 12345 Meetup City",
    description:
      "This is a second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m3",
    title: "This is a third meetup",
    image: "/img/IMG_20220125_073543_713.jpg",
    address: "Meetupstreet 3, 12345 Meetup City",
    description:
      "This is a third, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m4",
    title: "This is a forth meetup",
    image: "/img/Stadtbild_München.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a forth, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  }, 
];

function AllMeetupsPage() {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
}

export default AllMeetupsPage;
