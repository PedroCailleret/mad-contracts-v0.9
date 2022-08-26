/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  MarketplaceEventsAndErrors1155,
  MarketplaceEventsAndErrors1155Interface,
} from "../../EventsAndErrors.sol/MarketplaceEventsAndErrors1155";

const _abi = [
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "BidExists",
    type: "error",
  },
  {
    inputs: [],
    name: "CanceledOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "EAOnly",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedsMaxEP",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidBidder",
    type: "error",
  },
  {
    inputs: [],
    name: "NeedMoreTime",
    type: "error",
  },
  {
    inputs: [],
    name: "NotBuyable",
    type: "error",
  },
  {
    inputs: [],
    name: "SoldToken",
    type: "error",
  },
  {
    inputs: [],
    name: "Timeout",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongPrice",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newMinDuration",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newIncrement",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "newMinBidValue",
        type: "uint256",
      },
    ],
    name: "AuctionSettingsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC1155",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "bidder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bidPrice",
        type: "uint256",
      },
    ],
    name: "Bid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC1155",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "CancelOrder",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC1155",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "taker",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract FactoryVerifier",
        name: "newFactory",
        type: "address",
      },
    ],
    name: "FactoryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC1155",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "MakeOrder",
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
    name: "RecipientUpdated",
    type: "event",
  },
];

export class MarketplaceEventsAndErrors1155__factory {
  static readonly abi = _abi;
  static createInterface(): MarketplaceEventsAndErrors1155Interface {
    return new utils.Interface(_abi) as MarketplaceEventsAndErrors1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MarketplaceEventsAndErrors1155 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MarketplaceEventsAndErrors1155;
  }
}