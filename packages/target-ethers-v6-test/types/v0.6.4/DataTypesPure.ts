/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, BigNumberish, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type { TypedEventFilter, TypedEvent, PromiseOrValue } from "../common";

export declare namespace DataTypesPure {
  export type Struct1Struct = {
    uint256_0: PromiseOrValue<BigNumberish>;
    uint256_1: PromiseOrValue<BigNumberish>;
  };

  export type Struct1StructOutput = [bigint, bigint] & {
    uint256_0: bigint;
    uint256_1: bigint;
  };
}

export interface DataTypesPureInterface extends Interface {}

export interface DataTypesPure extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: DataTypesPureInterface;
}
