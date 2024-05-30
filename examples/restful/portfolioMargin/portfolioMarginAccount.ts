import { Spot } from '../../../src/index';
import dotenv from 'dotenv';
import { portfolioMarginAccountOptions, portfolioMarginAccountResponse } from '../../../src/modules/restful/portfolioMargin/types';


dotenv.config();

const apiKey = process.env.BINANCE_API_KEY || '';
const apiSecret = process.env.BINANCE_API_SECRET || '';
const baseURL = process.env.BINANCE_BASE_URL || '';
const client = new Spot(apiKey, apiSecret, { baseURL: baseURL });

const options: portfolioMarginAccountOptions = {
    recvWindow: 5000,
};

client.portfolioMarginAccount(options).then((res: portfolioMarginAccountResponse) => {
    console.log(res);
}).catch(err => { console.log(err); });
