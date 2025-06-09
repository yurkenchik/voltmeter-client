import React from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
import { DailyVoltageStatisticsDto, DailyVoltageStatisticsResponseDto, HourlyVoltageStatisticsResponseDto } from '../../../interfaces/voltage';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

type Props = {
    dailyStats: DailyVoltageStatisticsResponseDto | null;
    selectedDate: string;
    setSelectedDate: (val: string) => void;
    hourlyStats: HourlyVoltageStatisticsResponseDto | null;
};

export default function HourlyStatistics({ dailyStats, selectedDate, setSelectedDate, hourlyStats }: Props) {
    if (!dailyStats || !hourlyStats) {
        return null;
    }

    return (
        <Box mt={6}>
            <Text fontSize="xl" mb={2}>Hourly Statistics</Text>
            <Select placeholder="Select a date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                {dailyStats.statistics.map((d) => (
                    <option key={d._id} value={d._id}>{d._id}</option>
                ))}
            </Select>

            {hourlyStats.statistics && hourlyStats.statistics.length > 0 && (
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={hourlyStats.statistics}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hour" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="min" stroke="#ff7300" />
                        <Line type="monotone" dataKey="max" stroke="#387908" />
                        <Line type="monotone" dataKey="average" stroke="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            )}
        </Box>
    );
}
