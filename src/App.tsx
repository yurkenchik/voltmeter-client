import React from 'react';
import './App.css';
import VoltagePage from './pages/VoltagePage/VoltagePage';
import StatisticsPage from "./pages/StatisticsPage/StatisticsPage";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Button, Flex, Box } from '@chakra-ui/react';

function App() {
    return (
        <>
            <Router>
                <Box p={4} bg="gray.100">
                    <Flex gap={4}>
                        <Link to="/voltage">
                            <Button colorScheme="blue">Voltage History</Button>
                        </Link>
                        <Link to="/statistics">
                            <Button colorScheme="green">Statistics</Button>
                        </Link>
                    </Flex>
                </Box>

                <Routes>
                    <Route path="/voltage" element={<VoltagePage />} />
                    <Route path="/statistics" element={<StatisticsPage />} />
                    <Route path="*" element={<VoltagePage />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
