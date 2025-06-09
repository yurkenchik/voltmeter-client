import { VoltageStatusCountDto } from '../../../interfaces/voltage';
import { Badge, Box, Flex, Text } from '@chakra-ui/react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts';
import { VoltageStatus } from "../../../enums/VoltageStatusEnum";

const statusColors: Record<VoltageStatus, string> = {
    [VoltageStatus.CRITICAL_LOW]: "#553C9A",
    [VoltageStatus.LOW]: "#F56565",
    [VoltageStatus.NORMAL]: "#F6E05E",
    [VoltageStatus.HIGH]: "#48BB78",
}

export default function StatusCountChart({ statusCounts }: { statusCounts: VoltageStatusCountDto[] }) {
    return (
        <>
            <Box mt={6}>
                <Text fontSize="xl" mb={2}>Status Count</Text>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={statusCounts}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="status" />
                        <YAxis />
                        <Tooltip
                            formatter={(value, name, props) => [`${value}`, 'Count']}
                            labelFormatter={(label) => `Status: ${label}`}
                        />
                        <Bar dataKey="count">
                            {statusCounts.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={statusColors[entry.status] || '#3182ce'} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>

                <Box mt={4}>
                    <Text fontWeight="bold" mb={2}>Status Descriptions</Text>
                    {statusCounts.map((item, idx) => (
                        <Flex key={idx} align="center" mb={1}>
                            <Badge
                                color={statusColors[item.status]}
                                colorScheme="blue"
                                width={"15"}
                                mr={2}
                                bg={statusColors[item.status] || '#3182ce'}
                            >
                                status
                            </Badge>
                            <Text>{item.status}</Text>
                        </Flex>
                    ))}
                </Box>
            </Box>
        </>
    );
}
