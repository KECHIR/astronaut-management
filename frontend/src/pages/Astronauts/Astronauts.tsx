import { useContext } from "react";
import { Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AstronautList from "../../components/Astronauts/AstronautList";
import { AstronautContext, ModalContext } from "../../contexts";
import AddAstronaut from "../../components/Astronauts/AddAstronaut";
import FormDialog from "../../components/FormDialog/FormDialog";

export default function Astronauts() {
  const { astronautList } = useContext(AstronautContext);

  const { updateContent, setOpen, open: openModal } = useContext(ModalContext);
  return (
    <Box>
      <IconButton
        sx={{
          float: "right",
          padding: "10px",
          marginRight: "60px",
          marginTop: "30px",
        }}
        aria-label="edit"
        onClick={() => {
          updateContent(<AddAstronaut />);
          setOpen(true);
        }}
      >
        <AddIcon />
      </IconButton>
      {openModal ? <FormDialog /> : null}
      {astronautList && astronautList.length ? (
        <AstronautList astronautList={astronautList} />
      ) : null}
    </Box>
  );
}
