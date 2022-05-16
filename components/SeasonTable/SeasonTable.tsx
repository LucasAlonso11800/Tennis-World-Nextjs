import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TournamentData
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
                <TableRow>
                    <TableHeader>Start Date</TableHeader>
                    <TableHeader>End Date</TableHeader>
                    <TableHeader>Tournament</TableHeader>
                    <TableHeader>Surface</TableHeader>
                    <TableHeader>City</TableHeader>
                    <TableHeader>Country</TableHeader>
                </TableRow>
            </TableHead>
            <tbody>
                {tournaments.map(tournament => {
                    const { start_date, end_date, name, surface, city, country } = tournament;

                    return (
                        <TableRow key={tournament.id}>
                            <TournamentData content={0} borderTop={true}>{start_date.substring(8, 10)} / {start_date.substring(5, 7)} </TournamentData>
                            <TournamentData content={1}>{end_date.substring(8, 10)} / {end_date.substring(5, 7)} </TournamentData>
                            <TournamentData content={2}>{name}</TournamentData>
                            <TournamentData content={3}>{surface}</TournamentData>
                            <TournamentData content={4}>{city}</TournamentData>
                            <TournamentData content={5}>{country}</TournamentData>
                        </TableRow>
                    )
                })}
            </tbody>
        </Table>
    )
};