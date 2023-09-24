import { useContext } from "react";
import Dialog from "@mui/material/Dialog";
import { Box } from "@mui/material";
import { ModalContext } from "../../contexts/";

export default function FormDialog() {
  const { open, content, handleClose } = useContext(ModalContext);
  return (
    <Box>
      <Dialog open={open} onClose={handleClose} fullWidth>
        {content}
      </Dialog>
    </Box>
  );
}
