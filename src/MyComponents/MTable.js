// import faker from "faker";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
// import PaginationComponent from "./Pagination";
// import Search from "./Search";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 15,
    margin: "10px 220px",
    maxWidth: 950,
    marginBottom: "100px",
  },
  tableHeaderCell: {
    fontWeight: "bold",
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.getContrastText(theme.palette.primary.dark),
  },
  //   avatar: {
  //     backgroundColor: theme.palette.primary.light,
  //     color: theme.palette.getContrastText(theme.palette.primary.light),
  //   },
  //   name: {
  //     fontWeight: "bold",
  //     color: theme.palette.secondary.dark,
  //   },
  //   status: {
  //     fontWeight: "bold",
  //     fontSize: "0.75rem",
  //     color: "white",
  //     backgroundColor: "grey",
  //     borderRadius: 8,
  //     padding: "3px 10px",
  //     display: "inline-block",
  //   },
}));

// let USERS = [],
//   STATUSES = ["Active", "Pending", "Blocked"];
// for (let i = 0; i < 14; i++) {
//   USERS[i] = {
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     phone: faker.phone.phoneNumber(),
//     jobTitle: faker.name.jobTitle(),
//     company: faker.company.companyName(),
//     joinDate: faker.date.past().toLocaleDateString("en-US"),
//     status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
//   };
// }

export const MTable = (props) => {
  //   let data= {props.data};

  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const ITEMS_PER_PAGE = 50;

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {/* <div className="row w-100">
        <div className="col mb-3 col-12 text-center">
          <div className="row">
            <div className="col-md-6">
              <PaginationComponent
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </div>
            <div className="col-md-6 d-flex flex-row-reverse">
              <Search
                onSearch={(value) => {
                  setSearch(value);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
        </div>
      </div> */}
      <TableContainer component={Paper} className={classes.tableContainer}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableHeaderCell}>
                MODELNAME
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>TYPE</TableCell>
              <TableCell className={classes.tableHeaderCell}>
                NOTEBOOK
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>
                DATANAME
              </TableCell>

              <TableCell className={classes.tableHeaderCell}>
                DOWNLOAD
              </TableCell>
              <TableCell className={classes.tableHeaderCell}>SPECIES</TableCell>
              <TableCell className={classes.tableHeaderCell}>ORGAN</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.modelName}>
                  {/* <TableCell>
                  <Grid container>
                    <Grid item lg={2}>
                      <Avatar
                        alt={row.modelName}
                        src="."
                        className={classes.avatar}
                      />
                    </Grid> */}
                  {/* <Grid item lg={10}>
                      <Typography className={classes.modelName}>
                        {row.modelName}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.email}
                      </Typography>
                      <Typography color="textSecondary" variant="body2">
                        {row.phone}
                      </Typography>
                    </Grid>
                  </Grid> */}
                  {/* </TableCell> */}
                  {/* <TableCell>
                  <Typography color="primary" variant="subtitle2">
                    {row.jobTitle}
                  </Typography>
                  <Typography color="textSecondary" variant="body2">
                    {row.company}
                  </Typography>
                </TableCell> */}
                  <TableCell>{row.modelName}</TableCell>

                  <TableCell>{row.Type}</TableCell>
                  <TableCell>{row.notebook}</TableCell>
                  <TableCell>{row.dataName}</TableCell>

                  <TableCell>{row.download}</TableCell>
                  <TableCell>{row.Species}</TableCell>
                  <TableCell>{row.Organ}</TableCell>

                  {/* <TableCell>
                  <Typography
                    className={classes.status}
                    style={{
                      backgroundColor:
                        (row.status === "Active" && "green") ||
                        (row.status === "Pending" && "blue") ||
                        (row.status === "Blocked" && "orange"),
                    }}
                  >
                    {row.status}
                  </Typography>
                </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
          <TableFooter style={{ marginLeft: "6rem" }}>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              component="div"
              count={props.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};
