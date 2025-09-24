import React, { useState } from "react";
import { PlayersData } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";

export default function ComContainer() {
  const [players, setPlayers] = useState(PlayersData);

  return (
    <>
      <PlayersPresentation dataFromContainer={players} />
    </>
  );
}

// import React, { Component } from "react";
// import { PlayersData } from "../shared/ListOfPlayers";

// import PSGPlayersPresentation from "./PSGPlayersPresentation";
// import SortedPlayersPresentation from "./SortedPlayersPresentation";
// const psgPlayers = PlayersData.filter((p) => p.club === "PSG");
// const sortedPlayers = PlayersData.filter(
//   (p) => p.nation === "France" && p.marketValue > 3000000
// );

// export default class ComContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       players: PlayersData,
//       psgData: psgPlayers,
//       sortedData: sortedPlayers,
//     };
//   }

//   render() {
//     return (
//       <>
//         <PlayersPresentation dataFromContainer={this.state.players} />
//         <PSGPlayersPresentation psgFromContainer={this.state.psgData} />
//         <SortedPlayersPresentation
//           sortedFromContainer={this.state.sortedData}
//         />
//         <FuncCount />
//       </>
//     );
//   }
// }
