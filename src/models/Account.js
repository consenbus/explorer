import { extendObservable } from "mobx";
import rpc from "../utils/rpc";

class Account {
  constructor() {
    this.timer = null;
    extendObservable(this, {
      blocks: [],
      pendingBlocks: []
    });
  }

  static async getAccountBlocks(account) {
    const blocks = await rpc.post("/", {
      action: "account_history",
      account,
      count: 1000
    });

    this.blocks = blocks.data;
    return this.blocks;
  }

  static async getAccountBlocks(account) {
    const blocks = await rpc.post("/", {
      action: "account_pending",
      account,
      count: 1000
    });

    this.pendingBlocks = blocks.data;
    return this.pendingBlocks;
  }
}

export default Account;
