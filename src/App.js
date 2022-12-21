import "./styles.css";
import React from "react";
import { useState } from "react";

let showList = {
  Drama: [
    {
      name: "Breaking Bad",
      synopsis:
        "The mishaps of two drug dealers trying to survive in the complicated and corrupted world of crime, leading them from the point of working for money to working to survive; all starting with an honest high school teacher trying to make money for his family after finding out cancer hadn't left him much time.",
      rating: "9.5/10"
    },
    {
      name: "The Sopranos",
      synopsis:
        "The Sopranos is an American crime drama television series created by David Chase. The story revolves around Tony Soprano (James Gandolfini), a New Jersey-based Italian-American mobster, portraying his difficulties as he tries to balance family life with his role as leader of a criminal organization.",
      rating: "9.2/10"
    },
    {
      name: "Mad Men",
      synopsis:
        "The lives of the men and women who work in an advertising agency in New York in the 1960s. The agency is enjoying success, but the advertising game becomes more competitive as the industry develops. The agency must adapt to ensure its survival.",
      rating: "8.7/10"
    }
  ],
  Sitcom: [
    {
      name: "Friends",
      synopsis:
        "Friends is a 90's Comedy TV show, based in Manhattan, about 6 friends who go through just about every life experience imaginable together; love, marriage, divorce, children, heartbreaks, fights, new jobs and job losses and all sorts of drama.",
      rating: "8.9/10"
    },
    {
      name: "The Big Bang Theory",
      synopsis:
        "The Big Bang Theory is a comedy about brilliant physicists, Leonard and Sheldon, who are the kind of beautiful minds that understand how the universe works. But none of that genius helps them interact with people, especially women. All this begins to change when a free-spirited beauty named Penny moves in next door.",
      rating: "8.2/10"
    },
    {
      name: "Seinfeld",
      synopsis:
        "The premise of this sitcom is Jerry and his friends going through everyday life, discussing various quirky situations, to which we can all relate (especially if we live in New York City). The eccentric personalities of the offbeat characters who make up Jerry's social circle contribute to the fun.",
      rating: "8.9/10"
    }
  ],
  SciFi: [
    {
      name: "WestWorld",
      synopsis:
        "This show is a dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the re-imagined past, it explores a world in which every human appetite, no matter how noble or depraved, can be indulged. Westworld isn't your typical amusement park.",
      rating: "8.5/10"
    },
    {
      name: "Stranger Things",
      synopsis:
        "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
      rating: "8.7/10"
    },
    {
      name: "Lost in Space",
      synopsis:
        "After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
      rating: "7.3/10"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Drama");
  function genreHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> TV Show Recommender! 🎞️ </h1>

      <p className="app-para">
        {" "}
        Some of my absolute favourite TV shows are listed below. They are sorted
        by their genre. Click to find out!
      </p>

      <div>
        {Object.keys(showList).map((genre) => (
          <button onClick={() => genreHandler(genre)} className="app-btn">
            {genre}
          </button>
        ))}
      </div>

      <hr />

      <div className="list-container">
        <ul>
          {showList[selectedGenre].map((show) => (
            <li key={show.name} className="app-list">
              {" "}
              <div className="app-name"> {show.name} </div>
              <div className="app-synopsis"> {show.synopsis} </div>
              <div className="app-rating"> {show.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
