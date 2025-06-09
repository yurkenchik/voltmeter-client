import { useEffect, useState } from 'react';
import { StatisticsService } from '../../api/StatisticsService';
import {
    DailyVoltageStatisticsResponseDto,
    HourlyVoltageStatisticsResponseDto,
    VoltageStatusCountDto,
    VoltageSummaryStatisticsResponseDto
} from '../../interfaces/voltage';
import { Box, Text } from '@chakra-ui/react';
import SummaryStatistics from "../../components/ui/statistics/SummaryStatistics";
import DailyTrendsChart from "../../components/ui/statistics/DailyTrendsChart";
import StatusCountChart from "../../components/ui/statistics/StatisticsCountChart";
import HourlyStatistics from "../../components/ui/statistics/HourlyStatistics";

const statisticsService = new StatisticsService();

export default function StatisticsPage() {
    const [dailyStats, setDailyStats] = useState<DailyVoltageStatisticsResponseDto | null>(null);
    const [summary, setSummary] = useState<VoltageSummaryStatisticsResponseDto | null>(null);
    const [statusCounts, setStatusCounts] = useState<Array<VoltageStatusCountDto>>([]);
    const [selectedDate, setSelectedDate] = useState('');
    const [hourlyStats, setHourlyStats] = useState<HourlyVoltageStatisticsResponseDto | null>(null);

    useEffect(() => {
        statisticsService.getDailyStatistics().then(response => {
            setDailyStats(response);
            if (response.statistics && response.statistics.length > 0) {
                setSelectedDate(response.statistics[0]._id);
            }
        });
        statisticsService.getSummaryStatistics().then(response => setSummary(response));
        statisticsService.getStatusCount().then(response =>
            setStatusCounts(Array.isArray(response.statuses) ? response.statuses : [])
        );
    }, []);

    useEffect(() => {
        if (!selectedDate) return;
        statisticsService.getHourlyStatistics(selectedDate).then(response => setHourlyStats(response));
    }, [selectedDate]);

    return (
        <Box p={6}>
            <Text fontSize="2xl" fontWeight="bold">Voltage Statistics</Text>
            {summary && <SummaryStatistics summary={summary}/>}
            <DailyTrendsChart dailyStats={dailyStats}/>
            <StatusCountChart statusCounts={statusCounts} />
            <HourlyStatistics
                dailyStats={dailyStats}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
                hourlyStats={hourlyStats}
            />
        </Box>
    );
}
