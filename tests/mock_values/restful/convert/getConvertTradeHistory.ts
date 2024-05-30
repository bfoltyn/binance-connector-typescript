import { RestConvertTypes } from '../../../../src/index';

export const mockResponse: RestConvertTypes.getConvertTradeHistoryResponse = {
    'list': [
        {
            'quoteId': 'f3b91c525b2644c7bc1e1cd31b6e1aa6',
            'orderId': 940708407462087195n,  
            'orderStatus': 'SUCCESS',
            'fromAsset': 'USDT',
            'fromAmount': '20',
            'toAsset': 'BNB',
            'toAmount': '0.06154036',
            'ratio': '0.00307702',
            'inverseRatio': '324.99',
            'createTime': 1624248872184
        }
    ],
    'startTime': 1623824139000,
    'endTime': 1626416139000,
    'limit': 100,
    'moreData': false
};
