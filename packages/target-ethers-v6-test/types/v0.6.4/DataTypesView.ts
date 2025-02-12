/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumberish, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  PromiseOrValue,
} from "../common.js";

export declare namespace DataTypesView {
  export type Struct1Struct = {
    uint256_0: BigNumberish;
    uint256_1: BigNumberish;
  };

  export type Struct1StructOutput = [bigint, bigint] & {
    uint256_0: bigint;
    uint256_1: bigint;
  };
}

export interface DataTypesViewInterface extends Interface {}

export interface DataTypesView extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: DataTypesViewInterface;
}
