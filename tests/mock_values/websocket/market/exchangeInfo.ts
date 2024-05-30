import { RestMarketTypes } from '../../../../src/index';

export const mockExchangeInformation: RestMarketTypes.exchangeInformationResponse = {
    'timezone': 'UTC',
    'serverTime': 1655969291181,
    'rateLimits': [
        {
            'rateLimitType': 'REQUEST_WEIGHT',
            'interval': 'MINUTE',
            'intervalNum': 1,
            'limit': 6000
        },
        {
            'rateLimitType': 'ORDERS',
            'interval': 'SECOND',
            'intervalNum': 10,
            'limit': 50
        },
        {
            'rateLimitType': 'ORDERS',
            'interval': 'DAY',
            'intervalNum': 1,
            'limit': 160000
        }
    ],
    'exchangeFilters': [],
    'symbols': [
        {
            'symbol': 'BNBBTC',
            'status': 'TRADING',
            'baseAsset': 'BNB',
            'baseAssetPrecision': 8,
            'quoteAsset': 'BTC',
            'quoteAssetPrecision': 8,
            'baseCommissionPrecision': 8,
            'quoteCommissionPrecision': 8,
            'orderTypes': [
                'LIMIT',
                'LIMIT_MAKER',
                'MARKET',
                'STOP_LOSS_LIMIT',
                'TAKE_PROFIT_LIMIT'
            ],
            'icebergAllowed': true,
            'ocoAllowed': true,
            'otoAllowed': false,
            'quoteOrderQtyMarketAllowed': true,
            'allowTrailingStop': true,
            'cancelReplaceAllowed': true,
            'isSpotTradingAllowed': true,
            'isMarginTradingAllowed': true,
            'filters': [
                {
                    'filterType': 'PRICE_FILTER',
                    'minPrice': '0.00000100',
                    'maxPrice': '100000.00000000',
                    'tickSize': '0.00000100'
                },
                {
                    'filterType': 'LOT_SIZE',
                    'minQty': '0.00100000',
                    'maxQty': '100000.00000000',
                    'stepSize': '0.00100000'
                }
            ],
            'permissions': [],
            'permissionSets': [
                [
                    'SPOT', 'MARGIN',
                    'TRD_GRP_004', 'TRD_GRP_005',
                    'TRD_GRP_006', 'TRD_GRP_008',
                    'TRD_GRP_009', 'TRD_GRP_010',
                    'TRD_GRP_011', 'TRD_GRP_012',
                    'TRD_GRP_013', 'TRD_GRP_014',
                    'TRD_GRP_015', 'TRD_GRP_016',
                    'TRD_GRP_017', 'TRD_GRP_018',
                    'TRD_GRP_019', 'TRD_GRP_020',
                    'TRD_GRP_021', 'TRD_GRP_022',
                    'TRD_GRP_023', 'TRD_GRP_024',
                    'TRD_GRP_025'
                ]
            ],
            'defaultSelfTradePreventionMode': 'NONE',
            'allowedSelfTradePreventionModes': [
                'NONE'
            ]
        }
    ]
};