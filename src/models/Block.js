import { extendObservable } from "mobx";
import rpc from "../utils/rpc";

class Block {
  constructor() {
    this.timer = null;
    extendObservable(this, {
      blockCount: 0,
      currentBlock: {}
    });
  }

  loadStats() {
    this.timer = window.setInterval(() => {
      this.loadBlockCount();
      // TODO load other stats
    }, 1000);
  }

  clearStats() {
    window.clearInterval(this.timer);
  }

  loadBlockCount() {
    rpc.post("/", { action: "block_count" }).then(res => {
      this.blockCount = res.data.count;
    });
  }

  getBlock(hash) {
    rpc.post("/", { action: "block", hash: hash }).then(res => {
      this.currentBlock = JSON.parse(res.data.contents || "{}");
    });
  }
}

export default Block;
