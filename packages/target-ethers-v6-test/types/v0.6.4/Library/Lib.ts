/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Interface } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  PromiseOrValue,
} from "../../common";

export interface LibInterface extends Interface {}

export interface Lib extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: LibInterface;
}
