# ERC1155Whitelist









## Methods

### balanceOf

```solidity
function balanceOf(address owner, uint256 id) external view returns (uint256 bal)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| bal | uint256 | undefined |

### balanceOfBatch

```solidity
function balanceOfBatch(address[] owners, uint256[] ids) external view returns (uint256[] balances)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owners | address[] | undefined |
| ids | uint256[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| balances | uint256[] | undefined |

### burn

```solidity
function burn(uint256[] ids) external nonpayable
```



*Burns an arbitrary length array of ids of different owners.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| ids | uint256[] | undefined |

### burnBatch

```solidity
function burnBatch(address from, uint256[] ids) external nonpayable
```



*Burns an arbitrary length array of ids owned by a single account.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| ids | uint256[] | undefined |

### claimFree

```solidity
function claimFree(bytes32[] merkleProof) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| merkleProof | bytes32[] | undefined |

### claimListMerkleRoot

```solidity
function claimListMerkleRoot() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### claimed

```solidity
function claimed(address) external view returns (bool)
```



*Stores the amount of whitelist minted tokens of an address.For fetching purposes and max free claim control.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### freeAmount

```solidity
function freeAmount() external view returns (uint256)
```



*Default amount to be claimed as free in a collection.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### freeClaimState

```solidity
function freeClaimState() external view returns (bool)
```



*default := false*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### freeConfig

```solidity
function freeConfig(uint256 _freeAmount, uint256 _maxFree, bytes32 _claimListMerkleRoot) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _freeAmount | uint256 | undefined |
| _maxFree | uint256 | undefined |
| _claimListMerkleRoot | bytes32 | undefined |

### freeSupply

```solidity
function freeSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getURI

```solidity
function getURI() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### giftTokens

```solidity
function giftTokens(address[] addresses) external nonpayable
```



*Mints one token per address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| addresses | address[] | undefined |

### isApprovedForAll

```solidity
function isApprovedForAll(address, address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### maxFree

```solidity
function maxFree() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxSupply

```solidity
function maxSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxWhitelistSupply

```solidity
function maxWhitelistSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint

```solidity
function mint(uint256 amount) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### mintBatch

```solidity
function mintBatch(uint256[] ids) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| ids | uint256[] | undefined |

### mintBatchToCreator

```solidity
function mintBatchToCreator(uint256[] ids) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| ids | uint256[] | undefined |

### mintToCreator

```solidity
function mintToCreator(uint256 amount) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | undefined |

### onERC1155BatchReceived

```solidity
function onERC1155BatchReceived(address, address, uint256[], uint256[], bytes) external nonpayable returns (bytes4)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |
| _2 | uint256[] | undefined |
| _3 | uint256[] | undefined |
| _4 | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### onERC1155Received

```solidity
function onERC1155Received(address, address, uint256, uint256, bytes) external nonpayable returns (bytes4)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |
| _1 | address | undefined |
| _2 | uint256 | undefined |
| _3 | uint256 | undefined |
| _4 | bytes | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined |

### owner

```solidity
function owner() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### ownerOf

```solidity
function ownerOf(uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### publicMintState

```solidity
function publicMintState() external view returns (bool)
```



*default := false.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### publicPrice

```solidity
function publicPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### royaltyInfo

```solidity
function royaltyInfo(uint256 tokenId, uint256 salePrice) external view returns (address receiver, uint256 royaltyAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenId | uint256 | undefined |
| salePrice | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| receiver | address | undefined |
| royaltyAmount | uint256 | undefined |

### safeBatchTransferFrom

```solidity
function safeBatchTransferFrom(address from, address to, uint256[] ids, uint256[] amounts, bytes data) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| ids | uint256[] | undefined |
| amounts | uint256[] | undefined |
| data | bytes | undefined |

### safeTransferFrom

```solidity
function safeTransferFrom(address from, address to, uint256 id, uint256 amount, bytes data) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| id | uint256 | undefined |
| amount | uint256 | undefined |
| data | bytes | undefined |

### setApprovalForAll

```solidity
function setApprovalForAll(address operator, bool approved) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined |
| approved | bool | undefined |

### setFreeClaimState

```solidity
function setFreeClaimState(bool _freeClaimState) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _freeClaimState | bool | undefined |

### setOwner

```solidity
function setOwner(address newOwner) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined |

### setPublicMintState

```solidity
function setPublicMintState(bool _publicMintState) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _publicMintState | bool | undefined |

### setURI

```solidity
function setURI(string __uri) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| __uri | string | undefined |

### setWhitelistMintState

```solidity
function setWhitelistMintState(bool _whitelistMintState) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _whitelistMintState | bool | undefined |

### splitter

```solidity
function splitter() external view returns (contract SplitterImpl)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract SplitterImpl | undefined |

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external pure returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### uri

```solidity
function uri(uint256 id) external view returns (string)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| id | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### whitelistConfig

```solidity
function whitelistConfig(uint256 _price, uint256 _supply, bytes32 _root) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _price | uint256 | undefined |
| _supply | uint256 | undefined |
| _root | bytes32 | undefined |

### whitelistMerkleRoot

```solidity
function whitelistMerkleRoot() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### whitelistMint

```solidity
function whitelistMint(uint8 amount, bytes32[] merkleProof) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint8 | undefined |
| merkleProof | bytes32[] | undefined |

### whitelistMintBatch

```solidity
function whitelistMintBatch(uint256[] ids, bytes32[] merkleProof) external payable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| ids | uint256[] | undefined |
| merkleProof | bytes32[] | undefined |

### whitelistMintState

```solidity
function whitelistMintState() external view returns (bool)
```



*default := false.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### whitelistMinted

```solidity
function whitelistMinted() external view returns (uint256)
```



*Current whitelist supply.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### whitelistPrice

```solidity
function whitelistPrice() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw() external nonpayable
```






### withdrawERC20

```solidity
function withdrawERC20(contract ERC20 _token) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _token | contract ERC20 | undefined |



## Events

### ApprovalForAll

```solidity
event ApprovalForAll(address indexed owner, address indexed operator, bool approved)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| operator `indexed` | address | undefined |
| approved  | bool | undefined |

### BaseURISet

```solidity
event BaseURISet(string indexed newBaseURI)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newBaseURI `indexed` | string | undefined |

### FreeClaimStateSet

```solidity
event FreeClaimStateSet(bool indexed freeClaimState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| freeClaimState `indexed` | bool | undefined |

### FreeConfigSet

```solidity
event FreeConfigSet(uint256 newFreeAmount, uint256 indexed newMaxFree, bytes32 indexed newMerkleRoot)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newFreeAmount  | uint256 | undefined |
| newMaxFree `indexed` | uint256 | undefined |
| newMerkleRoot `indexed` | bytes32 | undefined |

### OwnerUpdated

```solidity
event OwnerUpdated(address indexed user, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| user `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### PublicMintStateSet

```solidity
event PublicMintStateSet(bool indexed newPublicState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newPublicState `indexed` | bool | undefined |

### RoyaltyFeeSet

```solidity
event RoyaltyFeeSet(uint256 indexed newRoyaltyFee)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newRoyaltyFee `indexed` | uint256 | undefined |

### RoyaltyRecipientSet

```solidity
event RoyaltyRecipientSet(address indexed newRecipient)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newRecipient `indexed` | address | undefined |

### TransferBatch

```solidity
event TransferBatch(address indexed operator, address indexed from, address indexed to, uint256[] ids, uint256[] amounts)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| ids  | uint256[] | undefined |
| amounts  | uint256[] | undefined |

### TransferSingle

```solidity
event TransferSingle(address indexed operator, address indexed from, address indexed to, uint256 id, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator `indexed` | address | undefined |
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| id  | uint256 | undefined |
| amount  | uint256 | undefined |

### URI

```solidity
event URI(string value, uint256 indexed id)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| value  | string | undefined |
| id `indexed` | uint256 | undefined |

### WhitelistConfigSet

```solidity
event WhitelistConfigSet(uint256 indexed newWhitelistPrice, uint256 indexed newMaxWhitelistSupply, bytes32 indexed newMerkleRoot)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newWhitelistPrice `indexed` | uint256 | undefined |
| newMaxWhitelistSupply `indexed` | uint256 | undefined |
| newMerkleRoot `indexed` | bytes32 | undefined |

### WhitelistMintStateSet

```solidity
event WhitelistMintStateSet(bool indexed newWhitelistState)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newWhitelistState `indexed` | bool | undefined |



## Errors

### AddressDenied

```solidity
error AddressDenied()
```



*0x3b8474be*


### AlreadyClaimed

```solidity
error AlreadyClaimed()
```



*0x646cf558*


### FreeClaimClosed

```solidity
error FreeClaimClosed()
```



*0xf44170cb*


### MaxFreeReached

```solidity
error MaxFreeReached()
```



*0xf90c1bdb*


### MaxMintReached

```solidity
error MaxMintReached()
```



*0xfc3fc71f*


### MaxWhitelistReached

```solidity
error MaxWhitelistReached()
```



*0xa554e6e1*


### NotMintedYet

```solidity
error NotMintedYet()
```



*0xbad086ea*


### PublicMintClosed

```solidity
error PublicMintClosed()
```



*0x2d0a3f8e*


### WhitelistMintClosed

```solidity
error WhitelistMintClosed()
```



*0x700a6c1f*


### WrongPrice

```solidity
error WrongPrice()
```



*0xf7760f25*


