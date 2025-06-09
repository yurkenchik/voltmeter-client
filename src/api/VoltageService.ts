import { PaginationResponse } from '../interfaces/pagination';
import { GetVoltageReadingsFilterOptionsDto, Voltage } from './../interfaces/voltage.d';
import axios, { AxiosResponse } from 'axios';
import { BaseUrl } from '../utils/base-url';

export class VoltageService {
    private readonly prefix: string = 'voltage';

    async getVoltageHistory(
        getVoltageReadingsFilterOptionsDto: GetVoltageReadingsFilterOptionsDto
    ): Promise<PaginationResponse<Voltage>> {
        const response = await axios.get<AxiosResponse<PaginationResponse<Voltage>>, any>(
            `${BaseUrl}/${this.prefix}/history`,
            { params: getVoltageReadingsFilterOptionsDto }
        );
        return response.data;
    }

    async getLatestReadings(limit: number = 10): Promise<Array<Voltage>> {
        const response = await axios.get<AxiosResponse<Array<Voltage>>, any>(
            `${BaseUrl}/${this.prefix}/latest`,
            { params: limit }
        );
        return response.data;
    }
}