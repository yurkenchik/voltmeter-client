import React from 'react';
import { Box, SimpleGrid, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { VoltageSummaryStatisticsResponseDto } from './../../../interfaces/voltage';

export default function SummaryStatistics({ summary }: { summary: VoltageSummaryStatisticsResponseDto }) {
    return (
        <Box my={6} p={6} borderWidth="1px" borderRadius="2xl" boxShadow="lg" bg="white">
            <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
                <Stat>
                    <StatLabel fontSize={"1.5xl"} color="gray.600">Min Voltage</StatLabel>
                    <StatNumber color={"purple.400"}>{summary.minVoltage}V</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel fontSize={"1.5xl"} color="gray.600">Max Voltage</StatLabel>
                    <StatNumber color={"green.400"}>{summary.maxVoltage}V</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel fontSize={"1.5xl"} color="gray.600">Average Voltage</StatLabel>
                    <StatNumber color={"yellow.400"}>{summary.averageVoltage}V</StatNumber>
                </Stat>
                <Stat>
                    <StatLabel fontSize={"1.5xl"} color="gray.600">Total Records</StatLabel>
                    <StatNumber>{summary.totalRecords}</StatNumber>
                </Stat>
            </SimpleGrid>
        </Box>
    );
}
