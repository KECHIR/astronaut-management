import { AstronautListProps } from "../../types";
import AstronautItem from "./AstronautItem";

export default function AstronautList({ astronautList }: AstronautListProps) {
  return (
    <div className="astronaut-list">
      <h1> Les astronautes </h1>
      {astronautList.map((astronaut) => (
        <AstronautItem key={astronaut._id} astronaut={astronaut} />
      ))}
    </div>
  );
}
