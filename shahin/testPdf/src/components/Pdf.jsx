import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Note,
  Link
} from "@react-pdf/renderer";
import Ainstine from "../assets/ainstine.png";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  pageOrange: {
    flexDirection: "row",
    backgroundColor: "tomato",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
    height: 20,
    width: 20,
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "gray",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "gray",
  },
  link:{
  color: '#008CBA',
  }
});

const Pdf = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header} fixed></Text>
        <Image style={styles.image} src={Ainstine} />
        
        <Text style={styles.text}>
          Incidentally, you have a dime up your nose. I'm Santa Claus! Your best
          is an idiot! Tell them I hate them. We're rescuing ya. Check it out,
          y'all. Everyone who was invited is here. Why would a robot need to
          drink? You guys go on without me! I'm going to go… look for more stuff
          to steal! In your time, yes, but nowadays shut up! Besides, these are
          adult stemcells, harvested from perfectly healthy adults whom I killed
          for their stemcells. Look, everyone wants to be like Germany, but do
          we really have the pure strength of 'will'? Oh, I don't have time for
          this. I have to go and buy a single piece of fruit with a coupon and
          then return it, making people wait behind me while I complain. It's
          toe-tappingly tragic! Noooooo!  I usually try to keep my sadness pent
          up inside where it can fester quietly as a mental illness. Soon
          enough. You're going back for the Countess, aren't you? I suppose I
          could part with 'one' and still be feared… When I was first asked to
          make a film about my nephew, Hubert Farnsworth, I thought "Why should
          I?" Then later, Leela made the film. But if I did make it, you can bet
          there would have been more topless women on motorcycles. Roll film!
          Tell her you just want to talk. <Link src="https://google.com" style={styles.link} fixed>It has nothing to do with mating.</Link>  No,
          she'll probably make me do it. Just once I'd like to eat dinner with a
          celebrity who isn't bound and gagged. Bender, this is Fry's decision…
          and he made it wrong. So it's time for us to interfere in his life.
          Moving along… This is the worst part. The calm before the battle.
          Doomsday device? Ah, now the ball's in Farnsworth's court! You, a
          bobsleder!? That I'd like to see! Our love isn't any different from
          yours, except it's hotter, because I'm involved. Michelle, I don't
          regret this, but I both rue and lament it. You mean while I'm sleeping
          in it? I found what I need. And it's not friends, it's things. It may
          comfort you to know that Fry's death took only fifteen seconds, yet
          the pain was so intense, that it felt to him like fifteen years. And
          it goes without saying, it caused him to empty his bowels. In your
          time, yes, but nowadays shut up! Besides, these are adult stemcells,
          harvested from perfectly healthy adults whom I killed for their
          stemcells. Yes, I saw. You were doing well, until everyone died. Oh
          Leela! You're the only person I could turn to; you're the only person
          who ever loved me. Okay, it's 500 dollars, you have no choice of
          carrier, the battery can't hold the charge and the reception isn't
          very… When I was first asked to make a film about my nephew, Hubert
          Farnsworth, I thought "Why should I?" Then later, Leela made the film.
          But if I did make it, you can bet there would have been more topless
          women on motorcycles. Roll film! I'm a thing. Yep, I remember. They
          came in last at the Olympics, then retired to promote alcoholic
          beverages! Bender, we're trying our best. Check it out, y'all.
          Everyone who was invited is here. Eeeee! Now say "nuclear wessels"! I
          meant 'physically'. Look, perhaps you could let me work for a little
          food? I could clean the floors or paint a fence, or service you
          sexually? Oh yeah, good luck with that. And I'm his friend Jesus. Fry!
          Quit doing the right thing, you jerk! Who are you, my warranty?! You
          won't have time for sleeping, soldier, not with all the bed making
          you'll be doing. Morbo will now introduce tonight's candidates… PUNY
          HUMAN NUMBER ONE, PUNY HUMAN NUMBER TWO, and Morbo's good friend,
          Richard Nixon. Isn't it true that you have been paid for your
          testimony? Do a flip! Now that the, uh, garbage ball is in space,
          Doctor, perhaps you can help me with my sexual inhibitions? When will
          that be? I barely knew Philip, but as a clergyman I have no problem
          telling his most intimate friends all about him. What's with you kids?
          Every other day it's food, food, food. Alright, I'll get you some
          stupid food. So, how 'bout them Knicks? I've got to find a way to
          escape the horrible ravages of youth. Suddenly, I'm going to the
          bathroom like clockwork, every three hours. And those jerks at Social
          Security stopped sending me checks. Now 'I'' have to pay ''them'!
        </Text>
        <Text style={styles.pageNumber} render={({pageNumber, totalPages}) => `${pageNumber}/${totalPages}`} fixed></Text>
      </Page>
    </Document>
  );
};

export default Pdf;
