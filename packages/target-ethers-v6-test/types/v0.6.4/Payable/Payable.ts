/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  PromiseOrValue,
} from "../../common.js";

export interface PayableInterface extends Interface {}

export interface Payable extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: PayableInterface;
}
