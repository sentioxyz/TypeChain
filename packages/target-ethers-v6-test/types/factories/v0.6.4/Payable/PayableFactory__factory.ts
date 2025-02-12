/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, Provider, Interface } from "ethers";
import type {
  PayableFactory,
  PayableFactoryInterface,
} from "../../../v0.6.4/Payable/PayableFactory";

const _abi = [
  {
    inputs: [],
    name: "newPayable",
    outputs: [
      {
        internalType: "contract Payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PayableFactory__factory {
  static readonly abi = _abi;
  static createInterface(): PayableFactoryInterface {
    return new Interface(_abi) as PayableFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PayableFactory {
    return new Contract(address, _abi, signerOrProvider) as PayableFactory;
  }
}
