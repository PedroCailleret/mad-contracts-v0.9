/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC1155WhitelistEvents,
  ERC1155WhitelistEventsInterface,
} from "../../../../../../../lib/tokens/ERC1155/Base/interfaces/ERC1155EventAndErrors.sol/ERC1155WhitelistEvents";

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
        name: "freeClaimState",
        type: "bool",
      },
    ],
    name: "FreeClaimStateSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newFreeAmount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newMaxFree",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newMerkleRoot",
        type: "bytes32",
      },
    ],
    name: "FreeConfigSet",
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
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newWhitelistPrice",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newMaxWhitelistSupply",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newMerkleRoot",
        type: "bytes32",
      },
    ],
    name: "WhitelistConfigSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newWhitelistState",
        type: "bool",
      },
    ],
    name: "WhitelistMintStateSet",
    type: "event",
  },
];

export class ERC1155WhitelistEvents__factory {
  static readonly abi = _abi;
  static createInterface(): ERC1155WhitelistEventsInterface {
    return new utils.Interface(_abi) as ERC1155WhitelistEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155WhitelistEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155WhitelistEvents;
  }
}