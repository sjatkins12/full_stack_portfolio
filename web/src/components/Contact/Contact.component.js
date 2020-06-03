import React from "react";
import Modal from "@material-ui/core/Modal";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

type PropsType = {
  open: boolean,
  contactInfo: { [info: string]: string },
  handleClose: () => void,
  classes: { [name: string]: string },
};
const Contact: React$StatelessFunctionalComponent<PropsType> = ({
  open,
  contactInfo,
  handleClose,
  classes,
}) => {
  const modalBody = contactInfo ? (
    <div className={classes.paper}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Contanct Information</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.keys(contactInfo).map((info) => (
              <TableRow key={info}>
                <TableCell component="th" scope="row">
                  {info}
                </TableCell>
                <TableCell align="right">{contactInfo[info]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  ) : (
    <></>
  );
  return (
    open && (
      <Modal open={open} onClose={handleClose}>
        {modalBody}
      </Modal>
    )
  );
};

export default Contact;
