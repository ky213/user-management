import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

import { IRootState } from "src/data/store";
import { useGetUsersQuery } from "src/data/api";
import { IPagination, IUser } from "src/data/types";

export interface IDashboardProps {}

const Dashboard = (props: IDashboardProps) => {
  const [pagination, setPagination] = useState<IPagination>({ page: 0, pageSize: 10 });
  const gotTo = useNavigate();
  const { isLoading } = useGetUsersQuery(pagination);

  const users = useSelector((state: IRootState) => state.users.list);

  const columns: GridColDef[] = [
    {
      field: "First Name",
      valueGetter: (param: GridValueGetterParams<IUser>) => param.row?.name.first,
    },
    {
      field: "Last Name",
      valueGetter: (param: GridValueGetterParams<IUser>) => param.row?.name.last,
    },
    {
      field: "email",
      headerName: "Email",
      width: 300,
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 300,
    },
    {
      field: "gender",
      headerName: "Gender",
    },
    {
      field: "nat",
      headerName: "Nationality",
    },
  ];

  const handlePaginate = ({ page, pageSize }: IPagination) => {
    setPagination({ page: page + 1, pageSize });
  };

  return (
    <Box mt={10}>
      <DataGrid
        getRowId={(row) => row.email}
        rows={users}
        columns={columns}
        loading={isLoading}
        pageSizeOptions={[10, 20, 50]}
        // disableColumnMenu={true}
        disableRowSelectionOnClick={true}
        onPaginationModelChange={handlePaginate}
        initialState={{
          pagination: {
            paginationModel: pagination,
          },
        }}
      />
    </Box>
  );
};

export default Dashboard;
