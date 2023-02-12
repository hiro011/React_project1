import FavoriteList from "../components/meetups/FavoriteList";

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
];

function FavoritesPage() {
  return (
    <section>
      <h1>Favorite Meetups</h1>
      <FavoriteList meetups={DUMMY_DATA} />
    </section>
  );
}

export default FavoritesPage;
