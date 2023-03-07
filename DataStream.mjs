import Alpaca from "@alpacahq/alpaca-trade-api";

export class DataStream {

  /**
   * @param {{
   * alpaca: Alpaca;
   * symbols: string[]
   * }} param0
   * */
  constructor({ alpaca, symbols }) {

    /**@type {Alpaca} */
    this.alpaca = alpaca


    const socket = this.alpaca.data_stream_v2;

    socket.onConnect(function () {
      console.log("Connected");

      // socket.subscribeForQuotes(["AAPL"]);
      socket.subscribeForTrades(["FB"]);
      socket.subscribeForBars(["SPY"]);
      socket.subscribeForStatuses(["*"]);
    });

    socket.onError((err) => {
      console.log({err});
    });

    socket.onStockTrade((trade) => {
      console.log({trade});
    });

    socket.onStockQuote((quote) => {
      console.log({quote});
    });

    socket.onStockBar((bar) => {
      console.log({bar});
    });

    socket.onStatuses((s) => {
      console.log({s});
    });

    socket.onStateChange((state) => {
      console.log({state});
    });

    socket.onDisconnect(() => {
      console.log("Disconnected");
    });

    socket.connect();

    // unsubscribe from FB after a second
    // setTimeout(() => {
    //   socket.unsubscribeFromTrades(["FB"]);
    // }, 1000);
  }
}
