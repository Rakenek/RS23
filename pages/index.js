import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://img.freepik.com/darmowe-zdjecie/piekne-wille-wody-w-tropikalnych-wyspy-malediwy-w-czasie-wschodu-slonca_1232-4484.jpg?w=2000",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A Secibd Meetup",
    image:
      "https://img.freepik.com/darmowe-zdjecie/piekne-wille-wody-w-tropikalnych-wyspy-malediwy-w-czasie-wschodu-slonca_1232-4484.jpg?w=2000",
    address: "Some address 5, 12345 Some City",
    description: "This is a second meetup!",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
}

export default HomePage;
