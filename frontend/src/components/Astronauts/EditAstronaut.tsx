import { Box, DialogContent, DialogTitle } from "@mui/material";
import { useContext } from "react";
import { AstronautContext, ModalContext } from "../../contexts";
import AstronautForm from "../Forms/AstronautForm";
import { updateAstronaut } from "../../services";
import { AstronautType } from "../../types";

export default function EditAstronaut({
  astronautValue,
}: {
  astronautValue: AstronautType;
}) {
  const { handleClose } = useContext(ModalContext);
  const { refresh } = useContext(AstronautContext);

  const handleSubmit = (astronautFormData: AstronautType) => {
    if (astronautValue._id) {
      updateAstronaut(astronautValue._id, astronautFormData).then(() => {
        refresh();
        handleClose();
      });
    }
  };

  return (
    <Box>
      <DialogTitle>Modifier un astronaute</DialogTitle>
      <DialogContent>
        <AstronautForm
          onSubmit={handleSubmit}
          submitButtonTitle="Modifier"
          defaultValues={astronautValue}
          handleCancel={handleClose}
        />
      </DialogContent>
    </Box>
  );
}
