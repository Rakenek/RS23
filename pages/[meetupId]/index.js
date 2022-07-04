import { Fragment } from "react";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      descritpion={props.meetupData.descritpion}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image:
          "https://img.freepik.com/darmowe-zdjecie/piekne-wille-wody-w-tropikalnych-wyspy-malediwy-w-czasie-wschodu-slonca_1232-4484.jpg?w=2000",
        id: "m1",
        title: "A First Meetup",
        address: "Some address 5, 12345 Some City",
        descritpion: "This is a first meetup!",
      },
    },
  };
}

export default MeetupDetails;
