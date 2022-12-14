/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BigNumberish,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  SplitterImpl,
  SplitterImplInterface,
} from "../../../lib/splitter/SplitterImpl";

const _abi = [
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AlreadyPayee",
    type: "error",
  },
  {
    inputs: [],
    name: "DeadAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "DeniedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidShare",
    type: "error",
  },
  {
    inputs: [],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPayees",
    type: "error",
  },
  {
    inputs: [],
    name: "NoShares",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20PaymentReleased",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "PaymentReleased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_payees",
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
    ],
    name: "_shares",
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
    name: "payeesLength",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "releasable",
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
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "released",
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
    inputs: [
      {
        internalType: "contract ERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "totalReleased",
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
    name: "totalReleased",
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
    name: "totalShares",
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
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405162000d9c38038062000d9c833981016040819052620000269162000296565b815181518082146200004e576040516001621398b960e31b0319815260040160405180910390fd5b816200006d57604051637b21919d60e01b815260040160405180910390fd5b60005b82811015620000e457620000db8582815181106200009e57634e487b7160e01b600052603260045260246000fd5b6020026020010151858381518110620000c757634e487b7160e01b600052603260045260246000fd5b6020026020010151620000ef60201b60201c565b60010162000070565b505050505062000407565b6001600160a01b03821662000117576040516384ff3e1b60e01b815260040160405180910390fd5b80620001365760405163040357dd60e21b815260040160405180910390fd5b6001600160a01b038216600090815260056020526040902054156200016e5760405163215a865160e11b815260040160405180910390fd5b60068054600181019091557ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f0180546001600160a01b0319166001600160a01b038416908117909155600090815260056020526040812082905554620001d6908290620003cc565b600055604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac910160405180910390a15050565b600082601f83011262000230578081fd5b81516020620002496200024383620003a6565b62000373565b80838252828201915082860187848660051b890101111562000269578586fd5b855b8581101562000289578151845292840192908401906001016200026b565b5090979650505050505050565b60008060408385031215620002a9578182fd5b82516001600160401b0380821115620002c0578384fd5b818501915085601f830112620002d4578384fd5b81516020620002e76200024383620003a6565b8083825282820191508286018a848660051b890101111562000307578889fd5b8896505b84871015620003405780516001600160a01b03811681146200032b57898afd5b8352600196909601959183019183016200030b565b50918801519196509093505050808211156200035a578283fd5b5062000369858286016200021f565b9150509250929050565b604051601f8201601f191681016001600160401b03811182821017156200039e576200039e620003f1565b604052919050565b60006001600160401b03821115620003c257620003c2620003f1565b5060051b60200190565b60008219821115620003ec57634e487b7160e01b81526011600452602481fd5b500190565b634e487b7160e01b600052604160045260246000fd5b61098580620004176000396000f3fe6080604052600436106100d65760003560e01c80639852595c1161007f578063c45ac05011610059578063c45ac0501461029e578063d79779b2146102be578063e33b7de3146102f4578063e919ecad1461030957600080fd5b80639852595c1461021b578063a3f8eace14610251578063b34c8caf1461027157600080fd5b8063406072a9116100b0578063406072a9146101a057806348b75044146101e65780635be7fde81461020657600080fd5b80631916558714610122578063283248be146101445780633a98ef391461018157600080fd5b3661011d576100e361031e565b604080513381523460208201527f6ef95f06320e7a25a04a175ca677b7052bdd97131872c2192525a629f51be770910160405180910390a1005b600080fd5b34801561012e57600080fd5b5061014261013d366004610858565b6103c6565b005b34801561015057600080fd5b5061016461015f3660046108ac565b6104be565b6040516001600160a01b0390911681526020015b60405180910390f35b34801561018d57600080fd5b506000545b604051908152602001610178565b3480156101ac57600080fd5b506101926101bb366004610874565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b3480156101f257600080fd5b50610142610201366004610874565b6104e8565b34801561021257600080fd5b5061014261031e565b34801561022757600080fd5b50610192610236366004610858565b6001600160a01b031660009081526002602052604090205490565b34801561025d57600080fd5b5061019261026c366004610858565b61060a565b34801561027d57600080fd5b5061019261028c366004610858565b60056020526000908152604090205481565b3480156102aa57600080fd5b506101926102b9366004610874565b610652565b3480156102ca57600080fd5b506101926102d9366004610858565b6001600160a01b031660009081526003602052604090205490565b34801561030057600080fd5b50600154610192565b34801561031557600080fd5b50600654610192565b60065460005b818110156103c25760006006828154811061034f57634e487b7160e01b600052603260045260246000fd5b6000918252602082200154600680546001600160a01b0390921693506103a7918590811061038d57634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b031661060a565b905080156103b8576103b8826103c6565b5050600101610324565b5050565b6001600160a01b0381166000908152600560205260409020546103fc5760405163b317087b60e01b815260040160405180910390fd5b60006104078261060a565b90508061042757604051635c70873f60e11b815260040160405180910390fd5b6001600160a01b0382166000908152600260205260408120805483929061044f9084906108dc565b92505081905550806001600082825461046891906108dc565b909155506104789050828261072c565b604080516001600160a01b0384168152602081018390527fdf20fd1e76bc69d672e4814fafb2c449bba3a5369d8359adf9e05e6fde87b056910160405180910390a15050565b600681815481106104ce57600080fd5b6000918252602090912001546001600160a01b0316905081565b6001600160a01b03811660009081526005602052604090205461051e5760405163b317087b60e01b815260040160405180910390fd5b600061052a8383610652565b90508061054a57604051635c70873f60e11b815260040160405180910390fd5b6001600160a01b038084166000908152600460209081526040808320938616835292905290812080548392906105819084906108dc565b90915550506001600160a01b038316600090815260036020526040812080548392906105ae9084906108dc565b909155506105bf9050838383610791565b604080516001600160a01b038481168252602082018490528516917f3be5b7a71e84ed12875d241991c70855ac5817d847039e17a9d895c1ceb0f18a910160405180910390a2505050565b60008061061660015490565b61062090476108dc565b905061064b8382610646866001600160a01b031660009081526002602052604090205490565b61081d565b9392505050565b6001600160a01b03821660009081526003602052604081205481906040516370a0823160e01b81523060048201526001600160a01b038616906370a082319060240160206040518083038186803b1580156106ac57600080fd5b505afa1580156106c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106e491906108c4565b6106ee91906108dc565b6001600160a01b03808616600090815260046020908152604080832093881683529290522054909150610724908490839061081d565b949350505050565b600080600080600085875af190508061078c5760405162461bcd60e51b815260206004820152601360248201527f4554485f5452414e534645525f4641494c45440000000000000000000000000060448201526064015b60405180910390fd5b505050565b600060405163a9059cbb60e01b8152836004820152826024820152602060006044836000895af13d15601f3d11600160005114161716915050806108175760405162461bcd60e51b815260206004820152600f60248201527f5452414e534645525f4641494c454400000000000000000000000000000000006044820152606401610783565b50505050565b600080546001600160a01b0385168252600560205260408220548391906108449086610914565b61084e91906108f4565b6107249190610933565b600060208284031215610869578081fd5b813561064b81610960565b60008060408385031215610886578081fd5b823561089181610960565b915060208301356108a181610960565b809150509250929050565b6000602082840312156108bd578081fd5b5035919050565b6000602082840312156108d5578081fd5b5051919050565b600082198211156108ef576108ef61094a565b500190565b60008261090f57634e487b7160e01b81526012600452602481fd5b500490565b600081600019048311821515161561092e5761092e61094a565b500290565b6000828210156109455761094561094a565b500390565b634e487b7160e01b600052601160045260246000fd5b6001600160a01b038116811461097557600080fd5b5056fea164736f6c6343000804000a";

type SplitterImplConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitterImplConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SplitterImpl__factory extends ContractFactory {
  constructor(...args: SplitterImplConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<SplitterImpl> {
    return super.deploy(
      payees,
      shares_,
      overrides || {}
    ) as Promise<SplitterImpl>;
  }
  override getDeployTransaction(
    payees: PromiseOrValue<string>[],
    shares_: PromiseOrValue<BigNumberish>[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(payees, shares_, overrides || {});
  }
  override attach(address: string): SplitterImpl {
    return super.attach(address) as SplitterImpl;
  }
  override connect(signer: Signer): SplitterImpl__factory {
    return super.connect(signer) as SplitterImpl__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitterImplInterface {
    return new utils.Interface(_abi) as SplitterImplInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplitterImpl {
    return new Contract(address, _abi, signerOrProvider) as SplitterImpl;
  }
}
