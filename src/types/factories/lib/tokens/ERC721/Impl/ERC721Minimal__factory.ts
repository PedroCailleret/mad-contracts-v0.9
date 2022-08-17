/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC721Minimal,
  ERC721MinimalInterface,
} from "../../../../../lib/tokens/ERC721/Impl/ERC721Minimal";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "__tokenURI",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "contract SplitterImpl",
        name: "_splitter",
        type: "address",
      },
      {
        internalType: "uint96",
        name: "_fraction",
        type: "uint96",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnerUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bool",
        name: "newPublicMintState",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMint",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "publicMintState",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "royaltyAmount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_publicMintState",
        type: "bool",
      },
    ],
    name: "setPublicMintState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "splitter",
    outputs: [
      {
        internalType: "contract SplitterImpl",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "_token",
        type: "address",
      },
    ],
    name: "withdrawERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001db638038062001db68339810160408190526200003491620002e2565b80878781600090805190602001906200004f92919062000177565b5080516200006590600190602084019062000177565b5050600880546001600160a01b0319166001600160a01b0384169081179091556040519091506000907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d76908290a3508451620000c990600b90602088019062000177565b50600a849055600980546001600160a01b0385166001600160a01b031991821681179092556001600160601b03841660068190556007805490921690921790556040517fc36422dcc77a5c93a5c48743078f8130c9fcc2a0ff893904ee62a3565688117c90600090a26007546040516001600160a01b03909116907f2a5a1009e36beb67c3a1ada61dd1343d7e9ec62c70965492fbaa06234f8316b190600090a2505050505050506200042c565b8280546200018590620003c0565b90600052602060002090601f016020900481019282620001a95760008555620001f4565b82601f10620001c457805160ff1916838001178555620001f4565b82800160010185558215620001f4579182015b82811115620001f4578251825591602001919060010190620001d7565b506200020292915062000206565b5090565b5b8082111562000202576000815560010162000207565b80516200022a8162000413565b919050565b600082601f83011262000240578081fd5b81516001600160401b03808211156200025d576200025d620003fd565b604051601f8301601f19908116603f01168101908282118183101715620002885762000288620003fd565b81604052838152602092508683858801011115620002a4578485fd5b8491505b83821015620002c75785820183015181830184015290820190620002a8565b83821115620002d857848385830101525b9695505050505050565b600080600080600080600060e0888a031215620002fd578283fd5b87516001600160401b038082111562000314578485fd5b620003228b838c016200022f565b985060208a015191508082111562000338578485fd5b620003468b838c016200022f565b975060408a01519150808211156200035c578485fd5b506200036b8a828b016200022f565b955050606088015193506080880151620003858162000413565b60a08901519093506001600160601b0381168114620003a2578283fd5b9150620003b260c089016200021d565b905092959891949750929550565b600181811c90821680620003d557607f821691505b60208210811415620003f757634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146200042957600080fd5b50565b61197a806200043c6000396000f3fe6080604052600436106101a15760003560e01c806342842e0e116100e157806395d89b411161008a578063b88d4fde11610064578063b88d4fde146104bb578063c87b56dd146104db578063e985e9c5146104fb578063f4f3b2001461053657600080fd5b806395d89b4114610470578063a035b1fe14610485578063a22cb4651461049b57600080fd5b806370a08231116100bb57806370a0823114610402578063879fbedf146104305780638da5cb5b1461045057600080fd5b806342842e0e146103ad57806344df8e70146103cd5780636352211e146103e257600080fd5b806322ab47a11161014e5780632a55205a116101285780632a55205a146103195780633ccfd60b146103585780633cd8045e1461036d57806340d097c31461038d57600080fd5b806322ab47a1146102d257806323b872dd146102f157806326092b831461031157600080fd5b8063095ea7b31161017f578063095ea7b31461024b57806313af40351461026d578063150b7a021461028d57600080fd5b806301ffc9a7146101a657806306fdde03146101db578063081812fc146101fd575b600080fd5b3480156101b257600080fd5b506101c66101c136600461178f565b610556565b60405190151581526020015b60405180910390f35b3480156101e757600080fd5b506101f06105c3565b6040516101d29190611869565b34801561020957600080fd5b506102336102183660046117c7565b6004602052600090815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020016101d2565b34801561025757600080fd5b5061026b61026636600461174a565b610651565b005b34801561027957600080fd5b5061026b6102883660046115ea565b610738565b34801561029957600080fd5b506102b96102a8366004611685565b630a85bd0160e11b95945050505050565b6040516001600160e01b031990911681526020016101d2565b3480156102de57600080fd5b50600c546101c690610100900460ff1681565b3480156102fd57600080fd5b5061026b61030c366004611645565b6107cd565b61026b6109b3565b34801561032557600080fd5b506103396103343660046117f7565b610ac1565b604080516001600160a01b0390931683526020830191909152016101d2565b34801561036457600080fd5b5061026b610af7565b34801561037957600080fd5b50600954610233906001600160a01b031681565b34801561039957600080fd5b5061026b6103a83660046115ea565b610b4a565b3480156103b957600080fd5b5061026b6103c8366004611645565b610bfa565b3480156103d957600080fd5b5061026b610d01565b3480156103ee57600080fd5b506102336103fd3660046117c7565b610d54565b34801561040e57600080fd5b5061042261041d3660046115ea565b610dab565b6040519081526020016101d2565b34801561043c57600080fd5b5061026b61044b366004611775565b610e1f565b34801561045c57600080fd5b50600854610233906001600160a01b031681565b34801561047c57600080fd5b506101f0610ead565b34801561049157600080fd5b50610422600a5481565b3480156104a757600080fd5b5061026b6104b636600461171f565b610eba565b3480156104c757600080fd5b5061026b6104d6366004611685565b610f26565b3480156104e757600080fd5b506101f06104f63660046117c7565b61101d565b34801561050757600080fd5b506101c661051636600461160d565b600560209081526000928352604080842090915290825290205460ff1681565b34801561054257600080fd5b5061026b6105513660046115ea565b611140565b60006301ffc9a760e01b6001600160e01b03198316148061058757506380ac58cd60e01b6001600160e01b03198316145b806105a25750635b5e139f60e01b6001600160e01b03198316145b806105bd575063152a902d60e11b6001600160e01b03198316145b92915050565b600080546105d090611907565b80601f01602080910402602001604051908101604052809291908181526020018280546105fc90611907565b80156106495780601f1061061e57610100808354040283529160200191610649565b820191906000526020600020905b81548152906001019060200180831161062c57829003601f168201915b505050505081565b6000818152600260205260409020546001600160a01b03163381148061069a57506001600160a01b038116600090815260056020908152604080832033845290915290205460ff165b6106dc5760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064015b60405180910390fd5b60008281526004602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b6008546001600160a01b031633146107815760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016106d3565b600880546001600160a01b0319166001600160a01b03831690811790915560405133907f8292fce18fa69edf4db7b94ea2e58241df0ae57f97e0a6c9b29067028bf92d7690600090a350565b6000818152600260205260409020546001600160a01b038481169116146108365760405162461bcd60e51b815260206004820152600a60248201527f57524f4e475f46524f4d0000000000000000000000000000000000000000000060448201526064016106d3565b6001600160a01b03821661088c5760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016106d3565b336001600160a01b03841614806108c657506001600160a01b038316600090815260056020908152604080832033845290915290205460ff165b806108e757506000818152600460205260409020546001600160a01b031633145b6109245760405162461bcd60e51b815260206004820152600e60248201526d1393d517d055551213d49256915160921b60448201526064016106d3565b6001600160a01b0380841660008181526003602090815260408083208054600019019055938616808352848320805460010190558583526002825284832080546001600160a01b03199081168317909155600490925284832080549092169091559251849392917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600c54610100900460ff16610a0a5760405162461bcd60e51b815260206004820152600e60248201527f5055424c49434d494e545f4f464600000000000000000000000000000000000060448201526064016106d3565b600a543414610a5b5760405162461bcd60e51b815260206004820152600b60248201527f57524f4e475f505249434500000000000000000000000000000000000000000060448201526064016106d3565b600c5460ff16151560011415610aa45760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b60448201526064016106d3565b600c805460ff19166001908117909155610abf90339061120d565b565b6007546006546001600160a01b039091169060009061271090610ae490856118dc565b610aee91906118bc565b90509250929050565b6008546001600160a01b03163314610b405760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016106d3565b610abf324761130f565b6008546001600160a01b03163314610b935760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016106d3565b600c5460ff16151560011415610bdc5760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b60448201526064016106d3565b600c805460ff19166001908117909155610bf790829061120d565b50565b610c058383836107cd565b6001600160a01b0382163b1580610cbd5750604051630a85bd0160e11b8082523360048301526001600160a01b03858116602484015260448301849052608060648401526000608484015290919084169063150b7a029060a401602060405180830381600087803b158015610c7957600080fd5b505af1158015610c8d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cb191906117ab565b6001600160e01b031916145b610cfc5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016106d3565b505050565b6008546001600160a01b03163314610d4a5760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016106d3565b610abf600161136a565b6000818152600260205260409020546001600160a01b031680610da65760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016106d3565b919050565b60006001600160a01b038216610e035760405162461bcd60e51b815260206004820152600c60248201527f5a45524f5f41444452455353000000000000000000000000000000000000000060448201526064016106d3565b506001600160a01b031660009081526003602052604090205490565b6008546001600160a01b03163314610e685760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016106d3565b600c805461ff001916610100831515908102919091179091556040517f2f3b349e2956d565a50532dcc875a49be7f558411642122cf5e50ca9b4bb14e690600090a250565b600180546105d090611907565b3360008181526005602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b610f318585856107cd565b6001600160a01b0384163b1580610fd75750604051630a85bd0160e11b808252906001600160a01b0386169063150b7a0290610f799033908a90899089908990600401611818565b602060405180830381600087803b158015610f9357600080fd5b505af1158015610fa7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fcb91906117ab565b6001600160e01b031916145b6110165760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016106d3565b5050505050565b60608160011461106f5760405162461bcd60e51b815260206004820152600a60248201527f494e56414c49445f49440000000000000000000000000000000000000000000060448201526064016106d3565b600c5460ff166110ae5760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016106d3565b600b80546110bb90611907565b80601f01602080910402602001604051908101604052809291908181526020018280546110e790611907565b80156111345780601f1061110957610100808354040283529160200191611134565b820191906000526020600020905b81548152906001019060200180831161111757829003601f168201915b50505050509050919050565b6008546001600160a01b031633146111895760405162461bcd60e51b815260206004820152600c60248201526b15539055551213d49256915160a21b60448201526064016106d3565b6040516370a0823160e01b8152306004820152610bf790829032906001600160a01b038316906370a082319060240160206040518083038186803b1580156111d057600080fd5b505afa1580156111e4573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061120891906117df565b611437565b61121782826114c3565b6001600160a01b0382163b15806112cc5750604051630a85bd0160e11b80825233600483015260006024830181905260448301849052608060648401526084830152906001600160a01b0384169063150b7a029060a401602060405180830381600087803b15801561128857600080fd5b505af115801561129c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112c091906117ab565b6001600160e01b031916145b61130b5760405162461bcd60e51b815260206004820152601060248201526f155394d0519157d49150d2541251539560821b60448201526064016106d3565b5050565b600080600080600085875af1905080610cfc5760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c45440000000000000000000000000060448201526064016106d3565b6000818152600260205260409020546001600160a01b0316806113bc5760405162461bcd60e51b815260206004820152600a6024820152691393d517d3525395115160b21b60448201526064016106d3565b6001600160a01b038116600081815260036020908152604080832080546000190190558583526002825280832080546001600160a01b031990811690915560049092528083208054909216909155518492907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806114bd5760405162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c4544000000000000000000000000000000000060448201526064016106d3565b50505050565b6001600160a01b0382166115195760405162461bcd60e51b815260206004820152601160248201527f494e56414c49445f524543495049454e5400000000000000000000000000000060448201526064016106d3565b6000818152600260205260409020546001600160a01b03161561156f5760405162461bcd60e51b815260206004820152600e60248201526d1053149150511657d3525395115160921b60448201526064016106d3565b6001600160a01b038216600081815260036020908152604080832080546001019055848352600290915280822080546001600160a01b0319168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80358015158114610da657600080fd5b6000602082840312156115fb578081fd5b813561160681611942565b9392505050565b6000806040838503121561161f578081fd5b823561162a81611942565b9150602083013561163a81611942565b809150509250929050565b600080600060608486031215611659578081fd5b833561166481611942565b9250602084013561167481611942565b929592945050506040919091013590565b60008060008060006080868803121561169c578081fd5b85356116a781611942565b945060208601356116b781611942565b935060408601359250606086013567ffffffffffffffff808211156116da578283fd5b818801915088601f8301126116ed578283fd5b8135818111156116fb578384fd5b89602082850101111561170c578384fd5b9699959850939650602001949392505050565b60008060408385031215611731578182fd5b823561173c81611942565b9150610aee602084016115da565b6000806040838503121561175c578182fd5b823561176781611942565b946020939093013593505050565b600060208284031215611786578081fd5b611606826115da565b6000602082840312156117a0578081fd5b813561160681611957565b6000602082840312156117bc578081fd5b815161160681611957565b6000602082840312156117d8578081fd5b5035919050565b6000602082840312156117f0578081fd5b5051919050565b60008060408385031215611809578182fd5b50508035926020909101359150565b60006001600160a01b03808816835280871660208401525084604083015260806060830152826080830152828460a084013781830160a090810191909152601f909201601f19160101949350505050565b6000602080835283518082850152825b8181101561189557858101830151858201604001528201611879565b818111156118a65783604083870101525b50601f01601f1916929092016040019392505050565b6000826118d757634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561190257634e487b7160e01b81526011600452602481fd5b500290565b600181811c9082168061191b57607f821691505b6020821081141561193c57634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0381168114610bf757600080fd5b6001600160e01b031981168114610bf757600080fdfea164736f6c6343000804000a";

type ERC721MinimalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721MinimalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721Minimal__factory extends ContractFactory {
  constructor(...args: ERC721MinimalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    __tokenURI: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721Minimal> {
    return super.deploy(
      _name,
      _symbol,
      __tokenURI,
      _price,
      _splitter,
      _fraction,
      _router,
      overrides || {}
    ) as Promise<ERC721Minimal>;
  }
  override getDeployTransaction(
    _name: PromiseOrValue<string>,
    _symbol: PromiseOrValue<string>,
    __tokenURI: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _splitter: PromiseOrValue<string>,
    _fraction: PromiseOrValue<BigNumberish>,
    _router: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _name,
      _symbol,
      __tokenURI,
      _price,
      _splitter,
      _fraction,
      _router,
      overrides || {}
    );
  }
  override attach(address: string): ERC721Minimal {
    return super.attach(address) as ERC721Minimal;
  }
  override connect(signer: Signer): ERC721Minimal__factory {
    return super.connect(signer) as ERC721Minimal__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721MinimalInterface {
    return new utils.Interface(_abi) as ERC721MinimalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721Minimal {
    return new Contract(address, _abi, signerOrProvider) as ERC721Minimal;
  }
}