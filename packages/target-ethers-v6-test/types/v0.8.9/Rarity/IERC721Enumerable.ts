/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type { BaseContract, Interface, LogDescription } from "ethers";
import type { ContractRunner } from "ethers/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  PromiseOrValue,
} from "../../common.js";

export interface IERC721EnumerableInterface extends Interface {}

export interface ApprovalEventObject {
  owner: string;
  approved: string;
  tokenId: bigint;
}
export type ApprovalEvent = TypedEvent<
  [string, string, bigint],
  ApprovalEventObject
> &
  LogDescription;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface ApprovalForAllEventObject {
  owner: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
> &
  LogDescription;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferEventObject {
  from: string;
  to: string;
  tokenId: bigint;
}
export type TransferEvent = TypedEvent<
  [string, string, bigint],
  TransferEventObject
> &
  LogDescription;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface IERC721Enumerable extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: IERC721EnumerableInterface;
}
