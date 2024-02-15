/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, Provider, Interface } from "ethers";
import type {
  Withdrawable,
  WithdrawableInterface,
} from "../../../v0.8.9/KingOfTheHill/Withdrawable";

const _abi = [
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class Withdrawable__factory {
  static readonly abi = _abi;
  static createInterface(): WithdrawableInterface {
    return new Interface(_abi) as WithdrawableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Withdrawable {
    return new Contract(address, _abi, signerOrProvider) as Withdrawable;
  }
}
