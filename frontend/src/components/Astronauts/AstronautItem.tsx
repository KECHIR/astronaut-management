import { useCallback, useContext } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AstronautItemProps } from "../../types/Astronauts.js";

import { deleteAstronaut } from "../../services";
import { AstronautContext, ModalContext } from "../../contexts";
import EditAstronaut from "./EditAstronaut";

export default function AstronautItem({ astronaut }: AstronautItemProps) {
  const { _id: astronautId, firstName, lastName, age } = astronaut || {};
  const { refresh } = useContext(AstronautContext);
  const { updateContent, setOpen } = useContext(ModalContext);

  const deleteAstr = useCallback(() => {
    if (astronautId) {
      deleteAstronaut(astronautId).then(() => {
        refresh();
      });
    }
  }, [astronautId, refresh]);

  return (
    <Box className="astronaut-item">
      <IconButton
        sx={{ float: "right" }}
        aria-label="delete"
        onClick={() => deleteAstr()}
      >
        <DeleteIcon />
      </IconButton>
      <IconButton
        sx={{ float: "right" }}
        aria-label="edit"
        onClick={() => {
          updateContent(<EditAstronaut astronautValue={astronaut} />);
          setOpen(true);
        }}
      >
        <EditIcon />
      </IconButton>

      <Typography className="astronaut-item-padding ">{firstName}</Typography>
      <Typography className="astronaut-item-padding ">{lastName}</Typography>
      <Typography className="astronaut-item-padding ">{age} ans</Typography>
    </Box>
  );
}
