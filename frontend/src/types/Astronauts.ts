export type AstronautType = {
  _id?: string;
  firstName: string;
  lastName: string;
  age: number;
};

export type AstronautListProps = {
  astronautList: AstronautType[] | [];
};

export type AstronautItemProps = {
  astronaut: AstronautType;
};

export type AstronautContextType = {
  astronautList: AstronautType[];
  refresh: Function;
};
