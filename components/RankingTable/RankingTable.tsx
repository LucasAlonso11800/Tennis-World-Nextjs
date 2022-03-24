import React from 'react';
import {
    Table,
    TableHead,
    TableRow,
    TableHeader,
    TableBody,
    Player,
    PlayerData
} from './RankingTable.elements';

import { FaArrowCircleUp, FaArrowCircleDown, FaEquals } from 'react-icons/fa';
import { PlayerType } from '../../types/types';

type Props = {
    rankings: PlayerType[];
    endpoint: string;
};

export default function RankingTable(props: Props) {
    const { rankings, endpoint } = props;

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader>Ranking</TableHeader>
                    <TableHeader>Player</TableHeader>
                    <TableHeader>Country</TableHeader>
                    <TableHeader>Points</TableHeader>
                    <TableHeader>Mov</TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                {rankings.map(ranking => {
                    const { full_name, country, movement } = ranking
                    const rankingProperty = endpoint === 'ranking' ? 'ranking' : 'race_ranking';
                    const pointsProperty = endpoint === 'ranking' ? 'ranking_points' : 'race_points';

                    return (
                        <Player key={ranking.id}>
                            <PlayerData content={0} borderTop={true}>{ranking[rankingProperty]}</PlayerData>
                            <PlayerData content={1}>{full_name}</PlayerData>
                            <PlayerData content={2}>{country}</PlayerData>
                            <PlayerData content={3}>{ranking[pointsProperty]}</PlayerData>
                            <PlayerData content={4} borderBottom={true}>
                                {parseInt(movement) > 0 ? <FaArrowCircleUp /> :
                                    movement === '' ? <FaEquals /> :
                                        <FaArrowCircleDown />
                                }
                            </PlayerData>
                        </Player>
                    )
                })}
            </TableBody>
        </Table>
    )
};