import React from 'react';
import {
    Table,
    TableHead,
    TableRow
} from './SeasonTable.elements';
import { TournamentType } from '../../types/types';

type Props = {
    tournaments: TournamentType[]
};

export default function SeasonTable(props: Props) {
    const { tournaments } = props;
    return (
        <Table>
            <TableHead>
                <tr>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Tournament</th>
                    <th>Surface</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
            </TableHead>
            <tbody>
                {tournaments.map(tournament => {
                    const { start_date, end_date, name, surface, city, country } = tournament;

                    return (
                        <TableRow key={tournament.id}>
                            <td>{start_date.substring(8, 10)} / {start_date.substring(5, 7)} </td>
                            <td>{end_date.substring(8, 10)} / {end_date.substring(5, 7)} </td>
                            <td>{name}</td>
                            <td>{surface}</td>
                            <td>{city}</td>
                            <td>{country}</td>
                        </TableRow>
                    )
                })}
            </tbody>
        </Table>
    )
};