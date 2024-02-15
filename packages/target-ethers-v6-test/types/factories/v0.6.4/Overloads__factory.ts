/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, Provider, Interface } from "ethers";
import type { Overloads, OverloadsInterface } from "../../v0.6.4/Overloads";

const _abi = [
  {
    inputs: [
      {
        internalType: "int256",
        name: "input1",
        type: "int256",
      },
    ],
    name: "overload1",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input1",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "input2",
        type: "uint256",
      },
    ],
    name: "overload1",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

export class Overloads__factory {
  static readonly abi = _abi;
  static createInterface(): OverloadsInterface {
    return new Interface(_abi) as OverloadsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Overloads {
    return new Contract(address, _abi, signerOrProvider) as Overloads;
  }
}
