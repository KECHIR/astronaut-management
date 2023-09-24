import axios, { AxiosRequestConfig } from "axios";

import { AstronautType } from "../types";

export async function getAllAstronauts(): Promise<AstronautType[] | []> {
  const requestOptions: AxiosRequestConfig<any> = {
    headers: {
      "x-api-key": "jjejejkjfjfniKamQjwo5yCE833yS9ra3D2ZVPr05dEptE", //process.env.AUTH_API_KEY,
    },
  };
  const backendUrl = "http://localhost:3004/api"; // process.env.BACK_END_URL;
  console.log("backendUrl =", backendUrl);
  const astronauts = await axios.get(
    backendUrl + "/astronaut/list",
    requestOptions
  );
  return astronauts.data;
}

export async function deleteAstronaut(
  astronautId: string
): Promise<AstronautType | null> {
  const requestOptions: AxiosRequestConfig<any> = {
    headers: {
      "x-api-key": "jjejejkjfjfniKamQjwo5yCE833yS9ra3D2ZVPr05dEptE", //process.env.AUTH_API_KEY,
    },
  };
  const backendUrl = "http://localhost:3004/api"; // process.env.BACK_END_URL;

  const astronautDeleted = await axios.delete(
    backendUrl + `/astronaut/${astronautId}/delete`,
    requestOptions
  );
  return astronautDeleted.data;
}

export async function addNewAstronaut(
  astronaut: AstronautType
): Promise<AstronautType | null> {
  const requestOptions: AxiosRequestConfig<any> = {
    headers: {
      "x-api-key": "jjejejkjfjfniKamQjwo5yCE833yS9ra3D2ZVPr05dEptE", //process.env.AUTH_API_KEY,
    },
  };
  const backendUrl = "http://localhost:3004/api"; // process.env.BACK_END_URL;

  const astronautDeleted = await axios.post(
    backendUrl + `/astronaut/add`,
    astronaut,
    requestOptions
  );
  return astronautDeleted.data;
}

export async function updateAstronaut(
  astronautId: string,
  astronautDataToUpdate: AstronautType
): Promise<AstronautType | null> {
  const requestOptions: AxiosRequestConfig<any> = {
    headers: {
      "x-api-key": "jjejejkjfjfniKamQjwo5yCE833yS9ra3D2ZVPr05dEptE", //process.env.AUTH_API_KEY,
    },
  };
  const backendUrl = "http://localhost:3004/api"; // process.env.BACK_END_URL;

  const astronautDeleted = await axios.patch(
    backendUrl + `/astronaut/${astronautId}/update`,
    astronautDataToUpdate,
    requestOptions
  );
  return astronautDeleted.data;
}
