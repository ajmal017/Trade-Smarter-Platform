import React from "react";

export default class MenuCards extends React.PureComponent {
  constructor(props) {
    super(props);
    this._ref = React.createRef();
  }
  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      dateRange: "12m",
      showChart: true,
      locale: "en",
      largeChartUrl: "",
      isTransparent: false,
      width: "400",
      height: "600",
      plotLineColorGrowing: "rgba(33, 150, 243, 1)",
      plotLineColorFalling: "rgba(33, 150, 243, 1)",
      gridLineColor: "rgba(240, 243, 250, 1)",
      scaleFontColor: "rgba(120, 123, 134, 1)",
      belowLineFillColorGrowing: "rgba(33, 150, 243, 0.12)",
      belowLineFillColorFalling: "rgba(33, 150, 243, 0.12)",
      symbolActiveColor: "rgba(33, 150, 243, 0.12)",
      tabs: [
        {
          title: "US Market",
          symbols: [
            {
              s: "FOREXCOM:SPXUSD",
              d: "S&P 500",
            },

            {
              s: "FOREXCOM:NSXUSD",
              d: "Nasdaq 100",
            },
            {
              s: "CME_MINI:ES1!",
              d: "S&P 500 Mini Futures",
            },
            {
              s: "FOREXCOM:DJI",
              d: "Dow 30",
            },
            {
              s: "INDEX:NKY",
              d: "Nikkei 225",
            },
            {
              s: "INDEX:DEU30",
              d: "DAX Index",
            },
            {
              s: "FOREXCOM:UKXGBP",
              d: "FTSE 100",
            },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Asia Market",
          symbols: [
            {
              s: "INDEX:NKY",
              d: "Nikkei 225 JAPAN",
            },

            {
              s: "CME_MINI:ES1!",
              d: "S&P 500 Mini Futures",
            },
            {
              s: "FOREXCOM:DJI",
              d: "Dow 30",
            },

            {
              s: "INDEX:DEU30",
              d: "DAX Index",
            },
            {
              s: "FOREXCOM:UKXGBP",
              d: "FTSE 100",
            },
          ],
          originalTitle: "Indices",
        },
        {
          title: "Commodities",
          symbols: [
            {
              s: "CME_MINI:ES1!",
              d: "E-Mini S&P",
            },
            {
              s: "CME:6E1!",
              d: "Euro",
            },
            {
              s: "COMEX:GC1!",
              d: "Gold",
            },
            {
              s: "NYMEX:CL1!",
              d: "Crude Oil",
            },
            {
              s: "NYMEX:NG1!",
              d: "Natural Gas",
            },
            {
              s: "CBOT:ZC1!",
              d: "Corn",
            },
          ],
          originalTitle: "Commodities",
        },

        {
          title: "Bonds",
          symbols: [
            {
              s: "CME:GE1!",
              d: "Eurodollar",
            },
            {
              s: "CBOT:ZB1!",
              d: "T-Bond",
            },
            {
              s: "CBOT:UB1!",
              d: "Ultra T-Bond",
            },
            {
              s: "EUREX:FGBL1!",
              d: "Euro Bund",
            },
            {
              s: "EUREX:FBTP1!",
              d: "Euro BTP",
            },
            {
              s: "EUREX:FGBM1!",
              d: "Euro BOBL",
            },
          ],
          originalTitle: "Bonds",
        },
        {
          title: "Currency",
          symbols: [
            {
              s: "FX:EURUSD",
            },
            {
              s: "FX:GBPUSD",
            },
            {
              s: "FX:USDJPY",
            },
            {
              s: "FX:USDCHF",
            },
            {
              s: "FX:AUDUSD",
            },
            {
              s: "FX:USDCAD",
            },
          ],
          originalTitle: "Forex",
        },
      ],
    });
    this._ref.current.appendChild(script);
  }
  render() {
    return (
      <div class="tradingview-widget-container" ref={this._ref}>
        <div class="tradingview-widget-container__widget"></div>
      </div>
    );
  }
}
