import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef, GridColumnVisibilityModel } from '@mui/x-data-grid';
import data from "../../../types_def/flight.json"
import { useEffect, useState } from 'react';
import { getFlightsApi, type FlightClient } from './service/getFlightsApi';
import { extractColumnsFromData } from './utils';
// import { extractColumnsFromData } from './utils';

export type FlightType = typeof data;

const columns: GridColDef<FlightClient>[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'airlineCompany',
        headerName: 'Airline',
        width: 150,
        editable: false,
    },
    {
        field: 'flightNumber',
        headerName: 'Flight number',
        width: 150,
        editable: false,
        // disableColumnMenu: true
    },
    {
        field: 'destinationAlphaCode',
        headerName: 'Destination Code',
        width: 150,
        editable: false,
    },
    {
        field: 'destinationCountry',
        headerName: 'Destination',
        width: 150,
        editable: false,

    },
    {
        field: 'status',
        headerName: 'Flight Status',
        width: 150,
        editable: false,
    },
    {
        field: 'country',
        headerName: 'Country',
        width: 150,
        editable: false,
    },

];
const LOCAL_STORAGE_HIDDEN_COLUMNS = "hiddenColumns"
export default function FlightsPage() {
    const [flights, setFlights] = useState<Array<FlightClient>>([])
    const [isLoadingFlights, setIsLoadingFlights] = useState(false)
    const [isErrorFlights, setIsErrorFlights] = useState(false)
    const [columnVisibilityModel, setColumnVisibilityModel] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_HIDDEN_COLUMNS) || "{}") || {})

    useEffect(() => {
        async function getFlights() {
            try {
                setIsLoadingFlights(true)
                const result = await getFlightsApi()
                // const columnsResult = extractColumnsFromData(result[0])
                // setColumns(columnsResult as any)
                setFlights(result)
            } catch (error) {
                setIsErrorFlights(true)
                setFlights([])
            } finally {
                setIsLoadingFlights(false)
            }
        }

        getFlights()


    }, [])


    return <div style={{ margin: "auto", position: "relative", width: "80%" }}>
        <h1> Flights </h1>
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={flights}
                columns={columns}
                columnVisibilityModel={columnVisibilityModel}
                onColumnVisibilityModelChange={(currentState) => {
                    localStorage.setItem(LOCAL_STORAGE_HIDDEN_COLUMNS, JSON.stringify(currentState))
                    setColumnVisibilityModel(currentState)
                }}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    </div>
}