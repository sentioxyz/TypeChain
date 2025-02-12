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

export interface RarityInterface extends Interface {}

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

export interface leveledEventObject {
  owner: string;
  level: bigint;
  summoner: bigint;
}
export type leveledEvent = TypedEvent<
  [string, bigint, bigint],
  leveledEventObject
> &
  LogDescription;

export type leveledEventFilter = TypedEventFilter<leveledEvent>;

export interface summonedEventObject {
  owner: string;
  class: bigint;
  summoner: bigint;
}
export type summonedEvent = TypedEvent<
  [string, bigint, bigint],
  summonedEventObject
> &
  LogDescription;

export type summonedEventFilter = TypedEventFilter<summonedEvent>;

export interface Rarity extends BaseContract {
  connect(runner: null | ContractRunner): this;

  interface: RarityInterface;
}
