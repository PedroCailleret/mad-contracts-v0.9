/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC1155BasicEvents,
  ERC1155BasicEventsInterface,
} from "../../../../../../../lib/tokens/ERC1155/Base/interfaces/ERC1155EventAndErrors.sol/ERC1155BasicEvents";

const _abi = [
  {
    inputs: [],
    name: "NotMintedYet",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "string",
        name: "newBaseURI",
        type: "string",
      },
    ],
    name: "BaseURISet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newPublicState",
        type: "bool",
      },
    ],
    name: "PublicMintStateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newRoyaltyFee",
        type: "uint256",
      },
    ],
    name: "RoyaltyFeeSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "newRecipient",
        type: "address",
      },
    ],
    name: "RoyaltyRecipientSet",
    type: "event",
  },
];

export class ERC1155BasicEvents__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1155BasicEventsInterface {
    return new utils.Interface(_abi) as ERC1155BasicEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155BasicEvents {
    return new Contract(address, _abi, signerOrProvider) as ERC1155BasicEvents;
  }
}