import React, { useEffect, useState } from 'react';
import { VoltageService } from '../../api/VoltageService';
import { Voltage, GetVoltageReadingsFilterOptionsDto } from '../../interfaces/voltage';
import { PaginationResponse } from '../../interfaces/pagination';
import { Box, Button, Flex, Grid, Select, Text } from '@chakra-ui/react';
    
const statusColors: Record<string, string> = {
    High: 'green.600',
    Normal: 'yellow.500',
    Low: 'red.600',
    CriticalLow: 'purple.600',
};

export default function VoltagePage() {
    const voltageService = new VoltageService();
    const [readings, setReadings] = useState<Voltage[]>([]);
    const [page, setPage] = useState<number>(1);
    const [limit, setLimit] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchHistory = async () => {
        const filters: GetVoltageReadingsFilterOptionsDto = { page, limit };
        const response: PaginationResponse<Voltage> = await voltageService.getVoltageHistory(filters);
        setReadings(Array.isArray(response.content) ? response.content : []);
        setTotalPages(Math.ceil(response.total / limit));
    };

    useEffect(() => {
        fetchHistory();
    }, [page, limit]);

    return (
        <Box p={6} display={"flex"} justifyContent={"center"}>
            <Box width="100%" maxW="800px">
                <Text fontSize="2xl" fontWeight="semibold">Voltage History</Text>

                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <Box display="flex" alignItems="center" gap={4}>
                        <Text>Items per page:</Text>
                        <Select value={limit.toString()} onChange={(e) => setLimit(Number(e.target.value))} width="100px">
                            {[10, 20, 30].map((num) => (
                                <option key={num} value={num.toString()}>{num}</option>
                            ))}
                        </Select>
                    </Box>
                    <Box display="flex" gap={2}>
                        <Button
                            isDisabled={page <= 1}
                            onClick={() => setPage(page - 1)}
                            colorScheme="blue"
                        >
                            Previous
                        </Button>
                        <Button
                            isDisabled={page >= totalPages}
                            onClick={() => setPage(page + 1)}
                            colorScheme="blue"
                        >
                            Next
                        </Button>
                    </Box>
                </Box>

                <Box height="60vh" overflowY="auto" p={2}>
                    {readings.map((reading, idx) => (
                        <Box
                            key={idx}
                            p={4}
                            borderWidth={1}
                            borderRadius="xl"
                            boxShadow="sm"
                            mb={4}
                        >
                            <Text
                                color={statusColors[reading.status]}
                                fontWeight="semibold"
                                fontSize={"25"}
                            >
                                {reading.status}
                            </Text>
                            <Text
                                color={statusColors[reading.status]}
                                fontWeight="semibold"
                                fontSize={"20"}
                            >
                                <Text as="span" color={"gray.600"}>Value: </Text>
                                <Text as="span" color={statusColors[reading.status]}>
                                    {reading.volts}
                                </Text>
                            </Text>
                            <Text>{new Date(reading.timestamp).toLocaleString()}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
