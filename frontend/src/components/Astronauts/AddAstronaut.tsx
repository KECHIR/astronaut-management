import { Box, DialogContent, DialogTitle } from "@mui/material";
import { AstronautContext, ModalContext } from "../../contexts";
import { useContext } from "react";
import AstronautForm from "../Forms/AstronautForm";
import { addNewAstronaut } from "../../services";
import { AstronautType } from "../../types";

export default function AddAstronaut() {
  const { handleClose } = useContext(ModalContext);
  const { refresh } = useContext(AstronautContext);

  const handleSubmit = (astronautFormData: AstronautType) => {
    addNewAstronaut(astronautFormData).then(() => {
      refresh();
      handleClose();
    });
  };

  return (
    <Box>
      <DialogTitle>Ajout d'un astronaute</DialogTitle>
      <DialogContent>
        <AstronautForm
          onSubmit={handleSubmit}
          submitButtonTitle="Ajouter"
          handleCancel={handleClose}
        />
      </DialogContent>
    </Box>
  );
}
