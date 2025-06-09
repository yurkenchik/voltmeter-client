import React from 'react';
import { DailyVoltageStatisticsResponseDto } from '../../../interfaces/voltage';
import { Text } from '@chakra-ui/react';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function DailyTrendsChart({ dailyStats }: { dailyStats: DailyVoltageStatisticsResponseDto | null}) {
    if (!dailyStats) {
        return null;
    }
    
    return (
        <>
            <Text fontSize="xl" mt={6} mb={2}>Daily Voltage Trends</Text>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={dailyStats.statistics}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="min" stroke="#8884d8" />
                    <Line type="monotone" dataKey="max" stroke="#82ca9d" />
                    <Line type="monotone" dataKey="average" stroke="#ffc658" />
                </LineChart>
            </ResponsiveContainer>
        </>
    );
}
