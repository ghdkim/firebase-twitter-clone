import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  Unsubscribe, // Import Unsubscribe from firestore
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import styled from "styled-components";
import Tweet from "./tweet";

export interface ITweet {
  id: string;
  photo?: string;
  tweet: string;
  userId: string;
  username: string;
  createdAt: number;
}

const Wrapper = styled.div`
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function Timeline() {
  const [tweets, setTweet] = useState<ITweet[]>([]);

  useEffect(() => {
    let unsubscribe: Unsubscribe | null = null;

    const fetchTweets = () => {
      const tweetsQuery = query(
        collection(db, "tweets"),
        orderBy("createdAt", "desc"),
        limit(25)
      );

      // Subscribe to the snapshot updates
      unsubscribe = onSnapshot(tweetsQuery, (snapshot) => {
        const tweets = snapshot.docs.map((doc) => {
          const { tweet, createdAt, userId, username, photo } = doc.data();
          return { tweet, createdAt, userId, username, photo, id: doc.id };
        });
        setTweet(tweets);
      });
    };

    fetchTweets();

    // Cleanup the subscription when the component unmounts
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  return (
    <Wrapper>
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} {...tweet} />
      ))}
    </Wrapper>
  );
}
