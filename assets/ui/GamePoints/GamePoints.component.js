import { PointComponent } from "../common/Point/Point.component.js";
import { createElement } from "../../js/utils/createElement.js";
import { getPoints } from "../../js/data/state-manager.js";

export function GamePointsComponent() {
  const container = createElement("article", { class: "game-points-wrapper" });
  const gamePointsContainer = createElement("div", { class: "game-points-container" });

  const { google, players } = getPoints();

  gamePointsContainer.append(PointComponent("Player 1", players[0].value, "./assets/icons/player-1.svg", "Player 1"), PointComponent("Player 2", players[1].value, "./assets/icons/player-2.svg", "Player 2"), PointComponent("Google", google, "./assets/icons/google.svg", "Google"), PointComponent("Time:", "00:00"));

  container.append(gamePointsContainer);

  return container;
}
